<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../includes/config.php';
require_once '../includes/db.php';
require_once '../includes/functions.php';
require_once '../includes/settings_helper.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$affiliate_id_str = cleanInput($data['affiliate_id'] ?? '');
$referral_code = cleanInput($data['referral_code'] ?? '');
$service_name = cleanInput($data['service_name'] ?? 'Online Service');
$amount = (float)($data['amount'] ?? 0);
$payment_id = cleanInput($data['payment_id'] ?? '');

$identifier = !empty($affiliate_id_str) ? $affiliate_id_str : $referral_code;

if (empty($identifier) || $amount <= 0 || empty($payment_id)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing required data']);
    exit();
}

$db = getDB();
if (!$db) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit();
}

// 1. Find the user (Affiliate or Referrer)
if (!empty($affiliate_id_str)) {
    $stmt = $db->prepare("SELECT id, 'affiliate' as type FROM affiliate_users WHERE affiliate_id = ? AND status = 'active' LIMIT 1");
    $stmt->execute([$affiliate_id_str]);
} else {
    $stmt = $db->prepare("SELECT id, 'referral' as type FROM referral_users WHERE referral_code = ? AND status = 'active' LIMIT 1");
    $stmt->execute([$referral_code]);
}

$user = $stmt->fetch();

if (!$user) {
    echo json_encode(['status' => 'error', 'message' => 'Partner not found or inactive']);
    exit();
}

$partner_user_id = $user['id'];
$partner_type = $user['type'];

// 2. Check for duplicate processing
// Looking into service_referrals for duplicates based on Payment ID (stored in new_user_identifier or similar?)
// Or stick to legacy tables for now to minimize migration friction, but updated with correct user tables.
$check_stmt = $db->prepare("SELECT id FROM conversions WHERE service_name LIKE ?");
$check_stmt->execute(["%ID: $payment_id%"]);
if ($check_stmt->fetch()) {
    echo json_encode(['status' => 'success', 'message' => 'Sale already recorded']);
    exit();
}

if ($partner_type === 'referral') {
    $check_ref = $db->prepare("SELECT id FROM referrals WHERE notes LIKE ?"); // notes column assumed in legacy referrals table
    $check_ref->execute(["%ID: $payment_id%"]);
    if ($check_ref->fetch()) {
        echo json_encode(['status' => 'success', 'message' => 'Referral sale already recorded']);
        exit();
    }
}

// 3. Calculate commission
if ($partner_type === 'affiliate') {
    $commission_percent = (float)getSetting('affiliate_commission', 15);
    $commission_earned = ($amount * $commission_percent) / 100;
    
    // Record the sale in conversions (Legacy table, assuming it exists)
    // Note: 'affiliate_id' in conversions table is typically the user ID. 
    // Since we now have 'affiliate_users' table, the ID is from there.
    $stmt = $db->prepare("INSERT INTO conversions (affiliate_id, service_name, sale_amount, commission_earned, status) VALUES (?, ?, ?, ?, 'approved')");
    $full_service_name = "$service_name (Auto-Recorded | Payment ID: $payment_id)";
    $success = $stmt->execute([$partner_user_id, $full_service_name, $amount, $commission_earned]);
} else {
    // Referrals
    $commission_percent = (float)getSetting('referral_commission', 25);
    $commission_earned = ($amount * $commission_percent) / 100;
    
    // Record in referrals table
    $stmt = $db->prepare("INSERT INTO referrals (referrer_id, referred_user_id, status, reward_amount, notes) VALUES (?, 0, 'completed', ?, ?)");
    $notes = "Sale: $service_name | Amount: ₹$amount | Payment ID: $payment_id";
    $success = $stmt->execute([$partner_user_id, $commission_earned, $notes]);
    
    // Update Referrer wallet in referral_users table
    if ($success) {
        $update_wallet = $db->prepare("UPDATE referral_users SET wallet_balance = wallet_balance + ? WHERE id = ?");
        $update_wallet->execute([$commission_earned, $partner_user_id]);
    }
}

if ($success) {
    echo json_encode(['status' => 'success', 'commission' => $commission_earned]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to record conversion']);
}
?>

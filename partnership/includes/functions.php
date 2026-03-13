<?php
require_once 'config.php';

/**
 * Generate a unique Affiliate ID
 */
/**
 * Generate a unique Affiliate ID
 */
function generateAffiliateID($db) {
    while (true) {
        $id = 'AS-AFF-' . strtoupper(bin2hex(random_bytes(3))); // e.g. AS-AFF-1A2B3C
        $stmt = $db->prepare("SELECT id FROM affiliate_users WHERE affiliate_id = ?");
        $stmt->execute([$id]);
        if (!$stmt->fetch()) {
            return $id;
        }
    }
}

/**
 * Generate a unique Referral Code
 */
function generateReferralCode($db) {
    while (true) {
        $code = 'AS-REF-' . strtoupper(bin2hex(random_bytes(3))); // e.g. AS-REF-1A2B3C
        $stmt = $db->prepare("SELECT id FROM referral_users WHERE referral_code = ?");
        $stmt->execute([$code]);
        if (!$stmt->fetch()) {
            return $code;
        }
    }
}

/**
 * Sanitize user input
 */
function cleanInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

/**
 * Redirect if not logged in
 */
function protectPage() {
    if (!isset($_SESSION['user_id'])) {
        header("Location: login.php");
        exit();
    }
}

/**
 * Redirect if not admin
 */
function protectAdmin() {
    if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
        header("Location: ../login.php");
        exit();
    }
}

/**
 * Check if email is already registered
 */
function isEmailRegistered($db, $email) {
    if (!$db) return false;
    
    // Check Referral Users
    $stmt = $db->prepare("SELECT id FROM referral_users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) return true;

    // Check Affiliate Users
    $stmt = $db->prepare("SELECT id FROM affiliate_users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) return true;
    
    // Check Admins
    $stmt = $db->prepare("SELECT id FROM admin_users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) return true;
    
    return false;
}

/**
 * Basic email sending wrapper
 */
function sendEmail($to, $subject, $message) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: Earning Sharthi <affiliate@earningsharthi.in>' . "\r\n";
    
    return mail($to, $subject, $message, $headers);
}
?>

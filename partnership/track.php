<?php
require_once 'includes/config.php';
require_once 'includes/db.php';

// disable browser caching
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$db = getDB();
$dest_url = SITE_URL . '/../'; // Default to homepage if something fails

// 1. Identify Service
if (isset($_GET['service'])) {
    $slug = $_GET['service'];
    $stmt = $db->prepare("SELECT id, name FROM services WHERE slug = ?");
    $stmt->execute([$slug]);
    $service = $stmt->fetch();
    if ($service) {
        $dest_url = SITE_URL . "/pricing-refer?category=" . urlencode($slug);
        $service_id = $service['id'];
    }
}

// 2. Identify Referrer
$referrer_id = 0;
$referrer_type = ''; // 'referral' or 'affiliate'
$identifier_val = '';

if (isset($_GET['aff'])) {
    $identifier_val = $_GET['aff'];
    $referrer_type = 'affiliate';
    // Validate
    $stmt = $db->prepare("SELECT id FROM affiliate_users WHERE affiliate_id = ? AND status = 'active'");
    $stmt->execute([$identifier_val]);
    $user = $stmt->fetch();
    if ($user) $referrer_id = $user['id'];
} elseif (isset($_GET['ref'])) {
    $identifier_val = $_GET['ref'];
    $referrer_type = 'referral';
    // Validate
    $stmt = $db->prepare("SELECT id FROM referral_users WHERE referral_code = ? AND status = 'active'");
    $stmt->execute([$identifier_val]);
    $user = $stmt->fetch();
    if ($user) $referrer_id = $user['id'];
}

// 3. Track Click (if valid referrer found)
if ($referrer_id > 0 && isset($service_id)) {
    // Log to service_clicks table (if exists, or extend)
    // We'll optimistically try to insert into `service_clicks` created by migration
    try {
        $stmt = $db->prepare("INSERT INTO service_clicks (service_id, referrer_id, referrer_type, ip_address, user_agent) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([
            $service_id,
            $referrer_id,
            $referrer_type,
            $_SERVER['REMOTE_ADDR'],
            $_SERVER['HTTP_USER_AGENT'] ?? ''
        ]);
        
        // Also update totals in service_referrals if we were using that for counters? 
        // For now, raw click log is best.
    } catch (Exception $e) {
        // Silent fail on tracking to not block user flow
        // error_log($e->getMessage());
    }

    // 4. Set Cookie for Conversion Tracking
    // Cookie Name: es_ref_data
    // Content: JSON with type, id, code
    $cookie_data = json_encode([
        'type' => $referrer_type,
        'id' => $referrer_id,
        'code' => $identifier_val, // useful for passing to external systems
        'service_id' => $service_id
    ]);
    
    // Set for 30 days
    setcookie('es_ref_data', $cookie_data, time() + (86400 * 30), "/");
}

// 5. Appending parameters to destination URL (Optional but requested "Generate service-based unique links")
// Sometimes the destination site (main site) needs the ref code in the URL to show "Welcome friend of X" or similar.
// We'll append ?ref=CODE regardless of type for simplicity if the main site expects it.
if ($identifier_val) {
    $prefix = ($referrer_type == 'affiliate') ? 'aff' : 'ref';
    $query = parse_url($dest_url, PHP_URL_QUERY);
    if ($query) {
        $dest_url .= '&' . $prefix . '=' . urlencode($identifier_val);
    } else {
        $dest_url .= '?' . $prefix . '=' . urlencode($identifier_val);
    }
}

// 6. Redirect
header("Location: $dest_url");
exit();
?>

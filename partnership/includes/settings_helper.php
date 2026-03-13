<?php
require_once 'db.php';

/**
 * Get a setting value from the database
 */
function getSetting($key, $default = '') {
    $db = getDB();
    if (!$db) return $default;
    
    $stmt = $db->prepare("SELECT setting_value FROM settings WHERE setting_key = ?");
    $stmt->execute([$key]);
    $result = $stmt->fetch();
    
    return $result ? $result['setting_value'] : $default;
}

/**
 * Update a setting value
 */
function updateSetting($key, $value) {
    $db = getDB();
    if (!$db) return false;
    
    $stmt = $db->prepare("INSERT INTO settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?");
    return $stmt->execute([$key, $value, $value]);
}

// Map dynamic settings to constants or variables used in the app
$affiliate_commission = (float)getSetting('affiliate_commission', 15);
$referral_reward = (float)getSetting('referral_reward', 100);
$min_withdrawal = (float)getSetting('min_withdrawal', 500);

// You can use these globally by including this file
?>

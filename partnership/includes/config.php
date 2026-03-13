<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'earnings_sharthi');
define('DB_PASS', '4MhcAqRnvTuC2MDBtf2N');
define('DB_NAME', 'earnings_sharthi');

// Application Settings
define('SITE_URL', 'https://www.earningsharthi.in/partnership');
define('CURRENCY', '₹');
define('AFFILIATE_COOKIE_DAYS', 30);
define('DEFAULT_AFFILIATE_COMMISSION_PERCENT', 15);
define('DEFAULT_REFERRAL_REWARD_AMOUNT', 100); // Fixed reward for referral signup

// Session Start
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>

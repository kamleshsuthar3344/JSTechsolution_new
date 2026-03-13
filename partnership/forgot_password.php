<?php
require_once 'includes/config.php';
require_once 'includes/db.php';
require_once 'includes/functions.php';

$type = isset($_GET['type']) ? cleanInput($_GET['type']) : 'affiliate';
$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = getDB();
    $email = cleanInput($_POST['email']);
    $type = cleanInput($_POST['type']); // Get type from form submission

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email format.";
    } else {
        // Check if email exists in users table
        $stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user) {
            // Generate OTP
            $otp = sprintf("%06d", mt_rand(1, 999999));
            $expiry = date('Y-m-d H:i:s', strtotime('+15 minutes'));

            // Store OTP in user_otps table
            // First check if user_otps table exists, if not create it (Lazy Migration for safety)
            $db->exec("CREATE TABLE IF NOT EXISTS `user_otps` (
                `id` INT(11) NOT NULL AUTO_INCREMENT,
                `email` VARCHAR(100) NOT NULL,
                `otp` VARCHAR(6) NOT NULL,
                `purpose` VARCHAR(20) NOT NULL DEFAULT 'reset_password',
                `expires_at` TIMESTAMP NOT NULL,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

            $stmt = $db->prepare("INSERT INTO user_otps (email, otp, purpose, expires_at) VALUES (?, ?, 'reset_password', ?)");
            if ($stmt->execute([$email, $otp, $expiry])) {
                // Send Email
                $subject = "Password Reset OTP - Earning Sharthi";
                $message = "
                <html>
                <head>
                    <title>Password Reset OTP</title>
                </head>
                <body>
                    <h2>Password Reset Request</h2>
                    <p>You requested to reset your password. Use the code below to proceed:</p>
                    <h1 style='color: #2563eb; letter-spacing: 5px;'>{$otp}</h1>
                    <p>This code is valid for 15 minutes.</p>
                    <p>If you did not request this, please ignore this email.</p>
                </body>
                </html>
                ";

                if (sendEmail($email, $subject, $message)) {
                    // Redirect to Verify Page with Email and Type
                    header("Location: reset_password.php?email=" . urlencode($email) . "&type=" . urlencode($type));
                    exit();
                } else {
                    $error = "Failed to send OTP. Please try again later (Email sending failed).";
                }
            } else {
                $error = "System error. Please try again.";
            }
        } else {
            // Security: Don't reveal if user doesn't exist, but for now generic message for UX
             $error = "Email not found in our records.";
        }
    }
}

// Determing back link based on type
$backLink = 'login.php'; // Fallback
if ($type == 'affiliate') {
    $backLink = 'affiliate/login.php';
} elseif ($type == 'referral') {
    $backLink = 'referral/login.php';
} elseif ($type == 'admin') {
    $backLink = 'admin/login.php';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password | Earning Sharthi</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="auth-container">
        <div class="logo-container">
            <h2 style="color: var(--primary);">Earning Sharthi</h2>
            <p>Password Recovery</p>
        </div>

        <h1 class="auth-title">Forgot Password?</h1>
        <p style="text-align: center; color: #666; margin-bottom: 20px;">Enter your email to receive a One-Time Password (OTP) to reset your password.</p>

        <?php if ($error): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>

        <form action="" method="POST">
            <input type="hidden" name="type" value="<?php echo htmlspecialchars($type); ?>">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email" class="form-control" required placeholder="john@example.com">
            </div>

            <button type="submit" class="btn btn-primary">Send OTP</button>
        </form>

        <div class="auth-footer">
            Remember your password? <a href="<?php echo $backLink; ?>">Back to Login</a>
        </div>
    </div>
</body>
</html>

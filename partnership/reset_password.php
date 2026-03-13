<?php
require_once 'includes/config.php';
require_once 'includes/db.php';
require_once 'includes/functions.php';

$email = isset($_GET['email']) ? cleanInput($_GET['email']) : '';
$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = getDB();
    $email = cleanInput($_POST['email']);
    $entered_otp = cleanInput($_POST['otp']);
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

    if ($new_password !== $confirm_password) {
        $error = "Passwords do not match.";
    } elseif (strlen($new_password) < 6) {
        $error = "Password must be at least 6 characters long.";
    } else {
        // Verify OTP
        $stmt = $db->prepare("SELECT id, expires_at FROM user_otps WHERE email = ? AND otp = ? AND purpose = 'reset_password' ORDER BY created_at DESC LIMIT 1");
        $stmt->execute([$email, $entered_otp]);
        $otp_record = $stmt->fetch();

        if ($otp_record) {
            if (strtotime($otp_record['expires_at']) < time()) {
                $error = "OTP has expired. Please request a new one.";
            } else {
                // OTP Valid - Reset Password
                $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
                
                // Update Password
                $stmt = $db->prepare("UPDATE users SET password = ? WHERE email = ?");
                if ($stmt->execute([$hashed_password, $email])) {
                    // Success! Delete used OTP
                    $db->prepare("DELETE FROM user_otps WHERE email = ? AND purpose = 'reset_password'")->execute([$email]);
                    
                    $success = "Password reset successfully! You can now <a href='login.php'>login</a> with your new password.";
                } else {
                    $error = "Failed to update password. Please try again.";
                }
            }
        } else {
            $error = "Invalid OTP. Please check your email and try again.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password | Earning Sharthi</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .resend-link { text-align: right; margin-top: 5px; font-size: 0.9em; }
        .resend-link a { color: var(--primary); text-decoration: none; }
    </style>
</head>
<body>
    <div class="auth-container">
        <div class="logo-container">
            <h2 style="color: var(--primary);">Earning Sharthi</h2>
            <p>Set New Password</p>
        </div>

        <h1 class="auth-title">Reset Password</h1>

        <?php if ($error): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>

        <?php if ($success): ?>
            <div class="alert alert-success" style="background-color: #ecfdf5; color: #047857; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <?php echo $success; ?>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <a href="login.php" class="btn btn-primary" style="display: inline-block; width: auto; padding: 10px 30px;">Go to Login</a>
            </div>
        <?php else: ?>
            <form action="" method="POST">
                <input type="hidden" name="email" value="<?php echo htmlspecialchars($email); ?>">
                
                <div class="form-group">
                    <label for="otp">Enter OTP</label>
                    <input type="text" name="otp" id="otp" class="form-control" required placeholder="Enter 6-digit OTP" maxlength="6" pattern="[0-9]*">
                    <div class="resend-link">
                        <a href="forgot_password.php">Resend OTP?</a>
                    </div>
                </div>

                <div class="form-group">
                    <label for="new_password">New Password</label>
                    <input type="password" name="new_password" id="new_password" class="form-control" required placeholder="New Password">
                </div>

                <div class="form-group">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" class="form-control" required placeholder="Confirm New Password">
                </div>

                <button type="submit" class="btn btn-primary">Reset Password</button>
            </form>
        <?php endif; ?>
    </div>
</body>
</html>

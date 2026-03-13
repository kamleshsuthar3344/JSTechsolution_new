<?php
require_once 'includes/config.php';
require_once 'includes/db.php';
require_once 'includes/functions.php';

$type = isset($_GET['type']) && $_GET['type'] == 'affiliate' ? 'affiliate' : 'referral';
$ref_code = cleanInput($_GET['ref'] ?? '');
$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = getDB();
    if ($db) {
        $full_name = cleanInput($_POST['full_name']);
        $email = cleanInput($_POST['email']);
        $otp = cleanInput($_POST['otp'] ?? '');
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];
        $role = cleanInput($_POST['role']);

        // Basic validation
        if (empty($full_name) || empty($email) || empty($password) || empty($otp)) {
            $error = "All fields, including OTP, are required.";
        } elseif ($password !== $confirm_password) {
            $error = "Passwords do not match.";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = "Invalid email format.";
        } else {
            // 1. Verify OTP
            $stmt = $db->prepare("SELECT id FROM user_otps WHERE email = ? AND otp = ? AND expires_at > NOW() ORDER BY created_at DESC LIMIT 1");
            $stmt->execute([$email, $otp]);
            $otp_valid = $stmt->fetch();

            if (!$otp_valid) {
                $error = "Invalid or expired OTP. Please try again.";
            } else {
                // 2. Check if email exists in any service (Affiliate or Referral)
                if (isEmailRegistered($db, $email)) {
                    $error = "This email is already registered with a service. Each email can only be used for one service.";
                } else {
                    // Prepare IDs
                    $affiliate_id = ($role == 'affiliate') ? generateAffiliateID($db) : null;
                    $referral_code = ($role == 'referral') ? generateReferralCode($db) : null;
                    $password_hash = password_hash($password, PASSWORD_DEFAULT);

                    if ($role == 'affiliate') {
                        $stmt = $db->prepare("INSERT INTO affiliate_users (full_name, email, password, affiliate_id, status) VALUES (?, ?, ?, ?, 'active')");
                        $result = $stmt->execute([$full_name, $email, $password_hash, $affiliate_id]);
                    } else {
                        $stmt = $db->prepare("INSERT INTO referral_users (full_name, email, password, referral_code, status) VALUES (?, ?, ?, ?, 'active')");
                        $result = $stmt->execute([$full_name, $email, $password_hash, $referral_code]);
                    }

                    if ($result) {
                        // Clear used OTP
                        $db->prepare("DELETE FROM user_otps WHERE email = ?")->execute([$email]);

                        $new_user_id = $db->lastInsertId();
                        $login_url = ($role == 'affiliate') ? 'affiliate/login.php' : 'referral/login.php';
                        $success = "Registration successful! You can now <a href='$login_url'>Login</a>.";

                        // Handle Referral Reward Logic
                        if ($role == 'referral' && !empty($ref_code)) {
                            $stmt = $db->prepare("SELECT id, wallet_balance FROM referral_users WHERE referral_code = ? LIMIT 1");
                            $stmt->execute([$ref_code]);
                            $referrer = $stmt->fetch();

                            if ($referrer) {
                                $reward = DEFAULT_REFERRAL_REWARD_AMOUNT;
                                // Add reward to referrer wallet
                                $stmt = $db->prepare("UPDATE referral_users SET wallet_balance = wallet_balance + ? WHERE id = ?");
                                $stmt->execute([$reward, $referrer['id']]);

                                // Log internal referral
                                $stmt = $db->prepare("INSERT INTO referrals (referrer_id, referee_name, referee_email, reward_amount, status) VALUES (?, ?, ?, ?, 'completed')");
                                $stmt->execute([$referrer['id'], $full_name, $email, $reward]);
                            }
                        }
                    } else {
                        $error = "Something went wrong. Please try again.";
                    }
                }
            }
        }
    } else {
        $error = "Database connection failed.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Join Partnership Program | Earning Sharthi</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="auth-container">
        <div class="logo-container">
            <h2 style="color: var(--primary);">Earning Sharthi</h2>
            <p>Partnership Portal</p>
        </div>

        <h1 class="auth-title">Create <?php echo ucfirst($type); ?> Account</h1>

        <?php if ($error): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>

        <?php if ($success): ?>
            <div class="alert alert-success"><?php echo $success; ?></div>
        <?php endif; ?>

        <form action="" method="POST" id="registrationForm">
            <input type="hidden" name="role" id="role" value="<?php echo $type; ?>">
            
            <div class="form-group">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="form-control" required placeholder="John Doe">
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <div style="display: flex; gap: 8px;">
                    <input type="email" name="email" id="email" class="form-control" required placeholder="john@example.com">
                    <button type="button" id="sendOtpBtn" class="btn btn-secondary" style="white-space: nowrap; width: auto; padding: 0 15px;">Send OTP</button>
                </div>
                <p id="otpStatus" style="font-size: 12px; margin-top: 5px; display: none;"></p>
            </div>

            <div class="form-group" id="otpGroup" style="display: none;">
                <label for="otp">Enter OTP (Sent to Email)</label>
                <input type="text" name="otp" id="otp" class="form-control" placeholder="6-digit code" maxlength="6">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" required placeholder="Minimum 6 characters">
            </div>

            <div class="form-group">
                <label for="confirm_password">Confirm Password</label>
                <input type="password" name="confirm_password" id="confirm_password" class="form-control" required placeholder="Re-enter password">
            </div>

            <div class="form-group" style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" id="show-password" onchange="togglePassword()">
                <label for="show-password" style="margin: 0; cursor: pointer; user-select: none;">Show Password</label>
            </div>

            <button type="submit" class="btn btn-primary" id="submitBtn">Create Account</button>
        </form>

        <div class="auth-footer">
            Already have an account? <a href="<?php echo ($type == 'affiliate') ? 'affiliate/login.php' : 'referral/login.php'; ?>">Login here</a>
        </div>
    </div>

    <script>
        document.getElementById('sendOtpBtn').addEventListener('click', function() {
            const email = document.getElementById('email').value;
            const role = document.getElementById('role').value;
            const btn = this;
            const status = document.getElementById('otpStatus');
            const otpGroup = document.getElementById('otpGroup');

            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }

            btn.disabled = true;
            btn.innerText = 'Sending...';
            status.style.display = 'block';
            status.style.color = 'var(--primary)';
            status.innerText = 'Checking availability and sending OTP...';

            const formData = new FormData();
            formData.append('email', email);
            formData.append('role', role);

            fetch('api/send_otp.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    status.style.color = 'green';
                    status.innerText = data.message;
                    otpGroup.style.display = 'block';
                    
                    // Start countdown
                    let timeLeft = 60;
                    const timer = setInterval(() => {
                        if (timeLeft <= 0) {
                            clearInterval(timer);
                            btn.disabled = false;
                            btn.innerText = 'Resend OTP';
                        } else {
                            btn.innerText = `Resend in ${timeLeft}s`;
                            timeLeft--;
                        }
                    }, 1000);
                } else {
                    status.style.color = 'red';
                    status.innerText = data.message;
                    btn.disabled = false;
                    btn.innerText = 'Send OTP';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                status.style.color = 'red';
                status.innerText = 'Something went wrong. Please try again.';
                btn.disabled = false;
                btn.innerText = 'Send OTP';
            });
        });

        function togglePassword() {
            var passwordField = document.getElementById("password");
            var confirmPasswordField = document.getElementById("confirm_password");
            if (passwordField.type === "password") {
                passwordField.type = "text";
                confirmPasswordField.type = "text";
            } else {
                passwordField.type = "password";
                confirmPasswordField.type = "password";
            }
        }
    </script>

    </div>
</body>
</html>

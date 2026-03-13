<?php
require_once '../includes/config.php';
require_once '../includes/auth_helper.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars(trim($_POST['email']));
    $password = $_POST['password'];
    $error = loginUser($email, $password, 'admin');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login | Earning Sharthi</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <div class="auth-container">
        <div class="logo-container">
            <h2 style="color: var(--primary);">Earning Sharthi</h2>
            <p>Admin Portal</p>
        </div>

        <h1 class="auth-title">Admin Login</h1>

        <?php if ($error): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>

        <form action="" method="POST">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email" class="form-control" required placeholder="admin@earningsharthi.in">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" required placeholder="Enter password">
            </div>

            <div class="form-group" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <input type="checkbox" id="show-password" onchange="togglePassword()">
                    <label for="show-password" style="margin: 0; cursor: pointer; user-select: none; font-size: 14px;">Show Password</label>
                </div>
                <a href="../forgot_password.php?type=admin" style="font-size: 14px; color: var(--primary);">Forgot Password?</a>
            </div>

            <script>
                function togglePassword() {
                    var x = document.getElementById("password");
                    if (x.type === "password") {
                        x.type = "text";
                    } else {
                        x.type = "password";
                    }
                }
            </script>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</body>
</html>

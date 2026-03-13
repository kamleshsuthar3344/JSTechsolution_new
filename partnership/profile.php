<?php
require_once 'includes/dashboard_header.php';

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = cleanInput($_POST['full_name']);
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

    $errors = [];

    if (empty($full_name)) {
        $errors[] = "Full Name is required.";
    }

    if (!empty($new_password)) {
        if (strlen($new_password) < 6) {
            $errors[] = "Password must be at least 6 characters long.";
        }
        if ($new_password !== $confirm_password) {
            $errors[] = "New password and Confirm password do not match.";
        }
    }

    if (empty($errors)) {
        // Update User
        $table = '';
        if ($user['role'] === 'referral') {
            $table = 'referral_users';
        } elseif ($user['role'] === 'affiliate') {
            $table = 'affiliate_users';
        } elseif ($user['role'] === 'admin') {
            $table = 'admin_users';
        }

        if ($table) {
            if (!empty($new_password)) {
                $password_hash = password_hash($new_password, PASSWORD_DEFAULT);
                $stmt = $db->prepare("UPDATE $table SET full_name = ?, password = ? WHERE id = ?");
                $result = $stmt->execute([$full_name, $password_hash, $user['id']]);
            } else {
                $stmt = $db->prepare("UPDATE $table SET full_name = ? WHERE id = ?");
                $result = $stmt->execute([$full_name, $user['id']]);
            }

            if ($result) {
                // Refresh User Data
                $stmt = $db->prepare("SELECT * FROM $table WHERE id = ?");
                $stmt->execute([$user['id']]);
                $user = $stmt->fetch();
                $success_msg = "Profile updated successfully!";
            } else {
                $error_msg = "Failed to update profile.";
            }
        }
    } else {
        $error_msg = implode("<br>", $errors);
    }
}
?>

<div class="card">
    <h2 style="margin-bottom: 20px; color: var(--primary);">My Profile</h2>

    <?php if (isset($success_msg)): ?>
        <div class="alert alert-success"><?php echo $success_msg; ?></div>
    <?php endif; ?>

    <?php if (isset($error_msg)): ?>
        <div class="alert alert-danger"><?php echo $error_msg; ?></div>
    <?php endif; ?>

    <form action="" method="POST">
        <div class="form-group">
            <label for="email">Email Address (Read-Only)</label>
            <input type="email" id="email" class="form-control" value="<?php echo htmlspecialchars($user['email']); ?>" disabled style="background-color: #f3f4f6; cursor: not-allowed;">
        </div>

        <div class="form-group">
            <label for="full_name">Full Name</label>
            <input type="text" name="full_name" id="full_name" class="form-control" value="<?php echo htmlspecialchars($user['full_name']); ?>" required>
        </div>

        <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e5e7eb;">
        <h3 style="margin-bottom: 15px; font-size: 18px;">Change Password <span style="font-size: 14px; color: #6b7280; font-weight: normal;">(Leave blank to keep current)</span></h3>

        <div class="form-group">
            <label for="new_password">New Password</label>
            <input type="password" name="new_password" id="new_password" class="form-control" placeholder="Enter new password">
        </div>

        <div class="form-group">
            <label for="confirm_password">Confirm New Password</label>
            <input type="password" name="confirm_password" id="confirm_password" class="form-control" placeholder="Confirm new password">
        </div>

        <div class="form-group" style="display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="show-password" onchange="togglePassword()">
            <label for="show-password" style="margin: 0; cursor: pointer; user-select: none;">Show Password</label>
        </div>

        <button type="submit" class="btn btn-primary">Update Profile</button>
    </form>
</div>

<script>
    function togglePassword() {
        var newPass = document.getElementById("new_password");
        var confirmPass = document.getElementById("confirm_password");
        if (newPass.type === "password") {
            newPass.type = "text";
            confirmPass.type = "text";
        } else {
            newPass.type = "password";
            confirmPass.type = "password";
        }
    }
</script>

<?php require_once 'includes/dashboard_footer.php'; ?>

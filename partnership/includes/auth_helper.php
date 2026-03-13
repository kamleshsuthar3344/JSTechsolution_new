<?php
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/config.php';

function loginUser($email, $password, $role) {
    $table = '';
    $redirect = '';
    
    if ($role === 'referral') {
        $table = 'referral_users';
        $redirect = '../dashboard.php';
    } elseif ($role === 'affiliate') {
        $table = 'affiliate_users';
        $redirect = '../dashboard.php';
    } elseif ($role === 'admin') {
        $table = 'admin_users';
        $redirect = 'index.php';
    } else {
        return "Invalid role specified.";
    }

    $db = getDB();
    if (!$db) return "Database connection error.";

    $stmt = $db->prepare("SELECT * FROM $table WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        if (isset($user['status']) && $user['status'] === 'blocked') {
            return "Your account is blocked. Contact support.";
        }

        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['full_name'];
        $_SESSION['role'] = $role;
        
        // specific data
        if ($role === 'referral') {
            $_SESSION['referral_code'] = $user['referral_code'];
        } elseif ($role === 'affiliate') {
            $_SESSION['affiliate_id'] = $user['affiliate_id'];
        }

        header("Location: " . $redirect);
        exit();
    } else {
        return "Invalid email or password.";
    }
}
?>

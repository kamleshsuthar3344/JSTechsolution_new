<?php
header('Content-Type: application/json');
require_once '../includes/config.php';
require_once '../includes/db.php';
require_once '../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit();
}

$email = cleanInput($_POST['email'] ?? '');
$role = cleanInput($_POST['role'] ?? '');

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Valid email is required.']);
    exit();
}

$db = getDB();
if (!$db) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit();
}

// Check if email is already registered in any service
if (isEmailRegistered($db, $email)) {
    echo json_encode(['success' => false, 'message' => 'This email is already registered with a service. Each email can only be used for one service.']);
    exit();
}

// Generate 6-digit OTP
$otp = sprintf("%06d", mt_rand(1, 999999));
$expires_at = date('Y-m-d H:i:s', strtotime('+10 minutes'));

try {
    // Store OTP in database
    $stmt = $db->prepare("INSERT INTO user_otps (email, otp, purpose, expires_at) VALUES (?, ?, 'registration', ?)");
    $stmt->execute([$email, $otp, $expires_at]);

    // Send Email
    $subject = "Your Verification Code - Earning Sharthi";
    $message = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;'>
        <h2 style='color: #2563eb; text-align: center;'>Earning Sharthi</h2>
        <p>Hello,</p>
        <p>Your verification code for partnership registration is:</p>
        <div style='background: #f3f4f6; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #1f2937; border-radius: 8px; margin: 20px 0;'>
            $otp
        </div>
        <p>This code will expire in 10 minutes. Please do not share this code with anyone.</p>
        <p>If you did not request this code, please ignore this email.</p>
        <hr style='border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;' />
        <p style='font-size: 12px; color: #6b7280; text-align: center;'>&copy; " . date('Y') . " Earning Sharthi. All rights reserved.</p>
    </div>
    ";

    if (sendEmail($email, $subject, $message)) {
        echo json_encode(['success' => true, 'message' => 'OTP sent successfully to your email.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send OTP. Please try again later.']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Failed to process request.']);
}
?>

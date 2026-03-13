<?php
require_once 'includes/dashboard_header.php';

$error = '';
$success = '';

// Calculate available balance
if ($user['role'] == 'affiliate') {
    $stmt = $db->prepare("SELECT SUM(commission_earned) as total FROM conversions WHERE affiliate_id = ? AND status = 'approved'");
    $stmt->execute([$user['id']]);
    $earnings = $stmt->fetch();
    
    $stmt = $db->prepare("SELECT SUM(amount) as total FROM payouts WHERE user_id = ? AND status != 'rejected'");
    $stmt->execute([$user['id']]);
    $paid = $stmt->fetch();
    
    $available_balance = ($earnings['total'] ?? 0) - ($paid['total'] ?? 0);
} else {
    $available_balance = $user['wallet_balance'];
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $amount = (float)$_POST['amount'];
    $payment_details = cleanInput($_POST['payment_details']);
    
    if ($amount <= 0 || $amount > $available_balance) {
        $error = "Invalid amount. You can withdraw up to " . CURRENCY . number_format($available_balance, 2);
    } elseif (empty($payment_details)) {
        $error = "Please provide payment details (UPI ID or Bank Details).";
    } else {
        // Insert into payouts with user_type
        $user_type = ($user['role'] == 'affiliate') ? 'affiliate' : 'referral';
        $stmt = $db->prepare("INSERT INTO payouts (user_id, user_type, amount, payment_details, status) VALUES (?, ?, ?, ?, 'requested')");
        if ($stmt->execute([$user['id'], $user_type, $amount, $payment_details])) {
            $success = "Payout request submitted successfully! Admin will review it soon.";
            
            // Deduct from wallet if referral
            if ($user['role'] == 'referral') {
                $stmt = $db->prepare("UPDATE referral_users SET wallet_balance = wallet_balance - ? WHERE id = ?");
                $stmt->execute([$amount, $user['id']]);
                $available_balance -= $amount;
            }
        } else {
            $error = "Failed to submit request.";
        }
    }
}
?>

<h1 style="margin-bottom: 20px;">Request Payout</h1>
<p style="margin-bottom: 30px; color: #6b7280;">Available Balance: <strong><?php echo CURRENCY . number_format($available_balance, 2); ?></strong></p>

<div class="auth-container" style="max-width: 600px; margin: 0;">
    <?php if ($error): ?>
        <div class="alert alert-danger"><?php echo $error; ?></div>
    <?php endif; ?>

    <?php if ($success): ?>
        <div class="alert alert-success"><?php echo $success; ?></div>
    <?php endif; ?>

    <form action="" method="POST">
        <div class="form-group">
            <label for="amount">Withdrawal Amount (<?php echo CURRENCY; ?>)</label>
            <input type="number" step="1" name="amount" id="amount" class="form-control" required 
                   max="<?php echo $available_balance; ?>" placeholder="Min withdrawal ₹500">
        </div>

        <div class="form-group">
            <label for="payment_details">Payment Details (UPI ID / Bank Account)</label>
            <textarea name="payment_details" id="payment_details" class="form-control" required rows="4" 
                      placeholder="Enter your UPI ID or Bank Name, A/C Number, and IFSC Code"></textarea>
        </div>

        <button type="submit" class="btn btn-primary" <?php echo ($available_balance < 500) ? 'disabled' : ''; ?>>
            <?php echo ($available_balance < 500) ? 'Minimum ₹500 required' : 'Submit Request'; ?>
        </button>
    </form>
</div>

<div class="card" style="margin-top: 40px;">
    <h3>Recent Payout Requests</h3>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $user_type = ($user['role'] == 'affiliate') ? 'affiliate' : 'referral';
            $stmt = $db->prepare("SELECT * FROM payouts WHERE user_id = ? AND user_type = ? ORDER BY requested_at DESC LIMIT 5");
            $stmt->execute([$user['id'], $user_type]);
            $rows = $stmt->fetchAll();
            foreach ($rows as $row): ?>
                <tr>
                    <td><?php echo date('d M, Y', strtotime($row['requested_at'])); ?></td>
                    <td><?php echo CURRENCY . number_format($row['amount'], 2); ?></td>
                    <td>
                        <span style="color: <?php 
                            echo $row['status'] == 'paid' ? '#16a34a' : ($row['status'] == 'requested' ? '#ea580c' : '#ef4444'); 
                        ?>">
                            <?php echo strtoupper($row['status']); ?>
                        </span>
                    </td>
                </tr>
            <?php endforeach; if (!$rows) echo "<tr><td colspan='3' style='text-align:center;'>No requests found.</td></tr>"; ?>
        </tbody>
    </table>
</div>

</main>
</div>
</body>
</html>

<?php
require_once 'admin_header.php';

// Handle Actions
if (isset($_GET['action']) && isset($_GET['id'])) {
    $id = (int)$_GET['id'];
    $action = $_GET['action'];
    $status = ($action == 'approve') ? 'paid' : 'rejected';
    
    // Handle Referral Refund if Rejected
    if ($status == 'rejected') {
        $stmt = $db->prepare("SELECT amount, user_id, user_type FROM payouts WHERE id = ?");
        $stmt->execute([$id]);
        $payout_info = $stmt->fetch();
        
        if ($payout_info && $payout_info['user_type'] == 'referral') {
            $stmt = $db->prepare("UPDATE referral_users SET wallet_balance = wallet_balance + ? WHERE id = ?");
            $stmt->execute([$payout_info['amount'], $payout_info['user_id']]);
        }
    }

    $stmt = $db->prepare("UPDATE payouts SET status = ?, processed_at = CURRENT_TIMESTAMP WHERE id = ?");
    $stmt->execute([$status, $id]);
    header("Location: payouts.php?msg=Payout $status");
    exit();
}
?>

<h1 style="margin-bottom: 30px;">Payout Requests</h1>

<div class="table-card">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Partner</th>
                <th>Amount</th>
                <th>Payment Details</th>
                <th>Requested At</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $stmt = $db->query("
                SELECT p.*, 
                       COALESCE(au.full_name, ru.full_name) as full_name, 
                       COALESCE(au.email, ru.email) as email 
                FROM payouts p 
                LEFT JOIN affiliate_users au ON p.user_id = au.id AND p.user_type = 'affiliate'
                LEFT JOIN referral_users ru ON p.user_id = ru.id AND p.user_type = 'referral'
                ORDER BY p.requested_at DESC
            ");
            $rows = $stmt->fetchAll();
            foreach ($rows as $row): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td>
                        <strong><?php echo htmlspecialchars($row['full_name']); ?></strong><br>
                        <small><?php echo htmlspecialchars($row['email']); ?></small>
                    </td>
                    <td><strong><?php echo CURRENCY . number_format($row['amount'], 2); ?></strong></td>
                    <td><small><?php echo nl2br(htmlspecialchars($row['payment_details'])); ?></small></td>
                    <td><?php echo date('d M, Y H:i', strtotime($row['requested_at'])); ?></td>
                    <td>
                        <span class="badge <?php 
                            echo $row['status'] == 'requested' ? 'badge-pending' : ($row['status'] == 'paid' ? 'badge-active' : 'badge-blocked'); 
                        ?>">
                            <?php echo strtoupper($row['status']); ?>
                        </span>
                    </td>
                    <td>
                        <?php if ($row['status'] == 'requested'): ?>
                            <a href="payouts.php?action=approve&id=<?php echo $row['id']; ?>" class="btn-sm btn-approve" onclick="return confirm('Mark as PAID?')">Approve</a>
                            <a href="payouts.php?action=reject&id=<?php echo $row['id']; ?>" class="btn-sm btn-block" onclick="return confirm('Reject this request?')">Reject</a>
                        <?php else: ?>
                            --
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; if (!$rows) echo "<tr><td colspan='7' style='text-align:center;'>No payout requests found.</td></tr>"; ?>
        </tbody>
    </table>
</div>

</main>
</div>
</body>
</html>

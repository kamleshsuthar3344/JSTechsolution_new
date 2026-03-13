<?php
require_once 'includes/dashboard_header.php';

// Fetch Role-Specific Stats
if ($user['role'] == 'affiliate') {
    // Affiliate Stats
    // Using service_clicks or fallback to clicks if wanting history? For now let's use service_clicks or Union?
    // Let's just switch to service_clicks since this is a "Restructuring" - new start.
    // Note: old 'clicks' table had affiliate_id column. 'service_clicks' has referrer_id and referrer_type.
    $stmt = $db->prepare("SELECT COUNT(*) as total_clicks FROM service_clicks WHERE referrer_id = ? AND referrer_type = 'affiliate'");
    $stmt->execute([$user['id']]);
    $clicks = $stmt->fetch();

    $stmt = $db->prepare("SELECT COUNT(*) as total_sales, SUM(commission_earned) as total_comm FROM conversions WHERE affiliate_id = ? AND status != 'pending'");
    $stmt->execute([$user['id']]);
    $sales = $stmt->fetch();


    $total_clicks = $clicks['total_clicks'];
    $total_sales = $sales['total_sales'] ?? 0;
    $total_earnings = $sales['total_comm'] ?? 0.00;
} else {
    // Referral Stats
    $stmt = $db->prepare("SELECT COUNT(*) as total_refs FROM referrals WHERE referrer_id = ?");
    $stmt->execute([$user['id']]);
    $refs = $stmt->fetch();

    $total_referrals = $refs['total_refs'];
    $wallet_balance = $user['wallet_balance'];
}
?>

<div class="stats-grid">
    <?php if ($user['role'] == 'affiliate'): ?>
        <div class="stat-card">
            <div class="stat-label">TOTAL CLICKS</div>
            <div class="stat-value"><?php echo $total_clicks; ?></div>
        </div>
        <div class="stat-card">
            <div class="stat-label">TOTAL SALES</div>
            <div class="stat-value"><?php echo $total_sales; ?></div>
        </div>
        <div class="stat-card">
            <div class="stat-label">TOTAL EARNINGS</div>
            <div class="stat-value"><?php echo CURRENCY . number_format($total_earnings, 2); ?></div>
        </div>
    <?php else: ?>
        <div class="stat-card">
            <div class="stat-label">TOTAL REFERRALS</div>
            <div class="stat-value"><?php echo $total_referrals; ?></div>
        </div>
        <div class="stat-card">
            <div class="stat-label">WALLET BALANCE</div>
            <div class="stat-value"><?php echo CURRENCY . number_format($wallet_balance, 2); ?></div>
        </div>
        <div class="stat-card">
            <div class="stat-label">REWARD PER SIGNUP</div>
            <div class="stat-value"><?php echo CURRENCY . DEFAULT_REFERRAL_REWARD_AMOUNT; ?></div>
        </div>
    <?php endif; ?>
</div>

<div class="card">
    <h3>Your Unique Sharing Link</h3>
    <p style="color: #6b7280; font-size: 14px; margin-bottom: 15px;">
        Share this link with your audience to earn rewards.
    </p>
    <div class="link-box">
        <?php if ($user['role'] == 'affiliate'): ?>
            <code><?php echo SITE_URL; ?>/track.php?aff=<?php echo $user['affiliate_id']; ?></code>
        <?php else: ?>
            <code><?php echo SITE_URL; ?>/track.php?ref=<?php echo $user['referral_code']; ?></code>
        <?php endif; ?>
        <button class="copy-btn" onclick="copyLink()">Copy Link</button>
    </div>
</div>

<?php if ($user['role'] == 'affiliate'): ?>
<div class="card">
    <h3>Recent Sales</h3>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Sale Amount</th>
                <th>Commission</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $stmt = $db->prepare("SELECT * FROM conversions WHERE affiliate_id = ? ORDER BY created_at DESC LIMIT 5");
            $stmt->execute([$user['id']]);
            $rows = $stmt->fetchAll();
            foreach ($rows as $row): ?>
                <tr>
                    <td><?php echo date('d M, Y', strtotime($row['created_at'])); ?></td>
                    <td><?php echo htmlspecialchars($row['service_name']); ?></td>
                    <td><?php echo CURRENCY . number_format($row['sale_amount'], 2); ?></td>
                    <td><?php echo CURRENCY . number_format($row['commission_earned'], 2); ?></td>
                    <td>
                        <span style="color: <?php echo $row['status'] == 'paid' ? '#16a34a' : '#ea580c'; ?>">
                            <?php echo ucfirst($row['status']); ?>
                        </span>
                    </td>
                </tr>
            <?php endforeach; if (!$rows) echo "<tr><td colspan='5' style='text-align:center;'>No sales found yet.</td></tr>"; ?>
        </tbody>
    </table>
</div>
<?php else: ?>
<div class="card">
    <h3>Referral History</h3>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Referee</th>
                <th>Reward</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $stmt = $db->prepare("SELECT * FROM referrals WHERE referrer_id = ? ORDER BY created_at DESC LIMIT 5");
            $stmt->execute([$user['id']]);
            $rows = $stmt->fetchAll();
            foreach ($rows as $row): ?>
                <tr>
                    <td><?php echo date('d M, Y', strtotime($row['created_at'])); ?></td>
                    <td><?php echo htmlspecialchars($row['referee_name'] ?: 'New User'); ?></td>
                    <td><?php echo CURRENCY . number_format($row['reward_amount'], 2); ?></td>
                    <td><span style="color: #16a34a;">Completed</span></td>
                </tr>
            <?php endforeach; if (!$rows) echo "<tr><td colspan='4' style='text-align:center;'>No referrals found yet.</td></tr>"; ?>
        </tbody>
    </table>
</div>
<?php endif; ?>

<script>
function copyLink() {
    const linkText = document.querySelector('code').innerText;
    navigator.clipboard.writeText(linkText).then(() => {
        alert('Link copied to clipboard!');
    });
}
</script>

</main>
</div>
</body>
</html>

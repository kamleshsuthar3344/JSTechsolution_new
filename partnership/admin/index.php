<?php
require_once 'admin_header.php';

// Fetch Global Stats
$stmt = $db->query("SELECT (SELECT COUNT(*) FROM affiliate_users) + (SELECT COUNT(*) FROM referral_users) as total");
$total_partners = $stmt->fetch()['total'] ?? 0;

$stmt = $db->query("SELECT COUNT(*) as total FROM clicks");
$total_clicks = $stmt->fetch()['total'];

$stmt = $db->query("SELECT SUM(commission_earned) as total FROM conversions WHERE status = 'paid'");
$total_paid = $stmt->fetch()['total'] ?? 0;

$stmt = $db->query("SELECT COUNT(*) as total FROM payouts WHERE status = 'requested'");
$pending_payouts = $stmt->fetch()['total'];
?>

<h1 style="margin-bottom: 30px;">Platform Overview</h1>

<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-label">Total Partners</div>
        <div class="stat-value"><?php echo $total_partners; ?></div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Total Clicks</div>
        <div class="stat-value"><?php echo $total_clicks; ?></div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Paid Commissions</div>
        <div class="stat-value"><?php echo CURRENCY . number_format($total_paid, 2); ?></div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Pending Payouts</div>
        <div class="stat-value"><?php echo $pending_payouts; ?></div>
    </div>
</div>

<div class="table-card">
    <div style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
        <h3 style="font-size: 16px;">Recently Joined Partners</h3>
    </div>
    <table>
        <thead>
            <tr>
                <th>Partner Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $stmt = $db->query("
                SELECT full_name, email, 'affiliate' as role, created_at, status FROM affiliate_users
                UNION
                SELECT full_name, email, 'referral' as role, created_at, status FROM referral_users
                ORDER BY created_at DESC LIMIT 10
            ");
            $rows = $stmt->fetchAll();
            foreach ($rows as $row): ?>
                <tr>
                    <td><?php echo htmlspecialchars($row['full_name']); ?></td>
                    <td><?php echo htmlspecialchars($row['email']); ?></td>
                    <td><span style="color: #6366f1; font-weight: 600;"><?php echo strtoupper($row['role']); ?></span></td>
                    <td><?php echo date('d M, Y', strtotime($row['created_at'])); ?></td>
                    <td>
                        <span class="badge badge-<?php echo $row['status']; ?>">
                            <?php echo strtoupper($row['status']); ?>
                        </span>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>

</main>
</div>
</body>
</html>

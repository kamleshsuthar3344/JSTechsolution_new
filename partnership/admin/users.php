<?php
require_once 'admin_header.php';

// Handle Actions
if (isset($_GET['action']) && isset($_GET['id']) && isset($_GET['type'])) {
    $id = (int)$_GET['id'];
    $action = $_GET['action'];
    $type = $_GET['type'];
    $status = ($action == 'block') ? 'blocked' : 'active';
    
    $table = ($type == 'affiliate') ? 'affiliate_users' : 'referral_users';
    
    $stmt = $db->prepare("UPDATE $table SET status = ? WHERE id = ?");
    $stmt->execute([$status, $id]);
    header("Location: users.php?msg=Status updated");
    exit();
}
?>

<h1 style="margin-bottom: 30px;">Manage Partners</h1>

<!-- Referral Users Section -->
<h2 style="font-size: 1.2rem; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Referral Users</h2>
<div class="table-card" style="margin-bottom: 40px;">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Referral Code</th>
                <th>Wallet Balance</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $referrals = $db->query("SELECT * FROM referral_users ORDER BY id DESC")->fetchAll();
            foreach ($referrals as $row): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo htmlspecialchars($row['full_name']); ?></td>
                    <td><?php echo htmlspecialchars($row['email']); ?></td>
                    <td><code><?php echo $row['referral_code']; ?></code></td>
                    <td><?php echo CURRENCY . number_format($row['wallet_balance'], 2); ?></td>
                    <td>
                        <span class="badge badge-<?php echo $row['status']; ?>">
                            <?php echo strtoupper($row['status']); ?>
                        </span>
                    </td>
                    <td>
                        <?php if ($row['status'] == 'active'): ?>
                            <a href="users.php?action=block&id=<?php echo $row['id']; ?>&type=referral" class="btn-sm btn-block" onclick="return confirm('Block this user?')">Block</a>
                        <?php else: ?>
                            <a href="users.php?action=active&id=<?php echo $row['id']; ?>&type=referral" class="btn-sm btn-approve">Unblock</a>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>

<!-- Affiliate Users Section -->
<h2 style="font-size: 1.2rem; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Affiliate Users</h2>
<div class="table-card">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Affiliate ID</th>
                <th>Commission Rate</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $affiliates = $db->query("SELECT * FROM affiliate_users ORDER BY id DESC")->fetchAll();
            foreach ($affiliates as $row): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo htmlspecialchars($row['full_name']); ?></td>
                    <td><?php echo htmlspecialchars($row['email']); ?></td>
                    <td><code><?php echo $row['affiliate_id']; ?></code></td>
                    <td><?php echo $row['commission_rate']; ?>%</td>
                    <td>
                        <span class="badge badge-<?php echo $row['status']; ?>">
                            <?php echo strtoupper($row['status']); ?>
                        </span>
                    </td>
                    <td>
                        <?php if ($row['status'] == 'active'): ?>
                            <a href="users.php?action=block&id=<?php echo $row['id']; ?>&type=affiliate" class="btn-sm btn-block" onclick="return confirm('Block this user?')">Block</a>
                        <?php else: ?>
                            <a href="users.php?action=active&id=<?php echo $row['id']; ?>&type=affiliate" class="btn-sm btn-approve">Unblock</a>
                        <?php endif; ?>
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

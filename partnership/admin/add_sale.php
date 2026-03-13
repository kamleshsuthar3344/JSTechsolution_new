<?php
require_once 'admin_header.php';

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $partner_user_id = (int)$_POST['partner_id'];
    $service_name = cleanInput($_POST['service_name']);
    $sale_amount = (float)$_POST['sale_amount'];
    $commission_percent = (float)$_POST['commission_percent'];
    
    if ($sale_amount <= 0 || $partner_user_id <= 0) {
        $error = "Please fill all fields correctly.";
    } else {
        $commission_earned = ($sale_amount * $commission_percent) / 100;
        
        // Check if affiliate
        $stmt = $db->prepare("SELECT id FROM affiliate_users WHERE id = ? AND status = 'active'");
        $stmt->execute([$partner_user_id]);
        $is_affiliate = $stmt->fetch();
        
        if ($is_affiliate) {
                $stmt = $db->prepare("INSERT INTO conversions (affiliate_id, service_name, sale_amount, commission_earned, status) VALUES (?, ?, ?, ?, 'approved')");
                $success_flag = $stmt->execute([$partner_user_id, $service_name, $sale_amount, $commission_earned]);
        } else {
            // Check if referral
            $stmt = $db->prepare("SELECT id FROM referral_users WHERE id = ? AND status = 'active'");
            $stmt->execute([$partner_user_id]);
            $is_referral = $stmt->fetch();
            
            if ($is_referral) {
                // Referral logic
                $stmt = $db->prepare("INSERT INTO referrals (referrer_id, referee_name, referee_email, reward_amount, status, notes) VALUES (?, 'Manual Sale', 'N/A', ?, 'completed', ?)");
                $notes = "Manual Sale: $service_name | Amount: " . CURRENCY . number_format($sale_amount, 2);
                $success_flag = $stmt->execute([$partner_user_id, $commission_earned, $notes]);
                
                if ($success_flag) {
                    // Update referral wallet balance
                    $stmt = $db->prepare("UPDATE referral_users SET wallet_balance = wallet_balance + ? WHERE id = ?");
                    $stmt->execute([$commission_earned, $partner_user_id]);
                }
            } else {
                $error = "Partner not found or inactive.";
            }
        }
        
        if (isset($success_flag) && $success_flag) {
            $success = "Sale recorded successfully! Commission of " . CURRENCY . number_format($commission_earned, 2) . " added.";
        } elseif (!isset($error) || empty($error)) {
            $error = "Failed to record sale.";
        }
    }
}

// Fetch all partners from separate tables
$stmt = $db->query("
    SELECT id, full_name, email, 'affiliate' as role FROM affiliate_users WHERE status = 'active'
    UNION
    SELECT id, full_name, email, 'referral' as role FROM referral_users WHERE status = 'active'
    ORDER BY role ASC, full_name ASC
");
$partners = $stmt->fetchAll();
?>

<h1 style="margin-bottom: 20px;">Record Manual Sale</h1>
<p style="margin-bottom: 30px; color: #6b7280;">Use this form to add a sale to an affiliate or referral partner after receiving payment from a client.</p>

<div class="auth-container" style="max-width: 600px; margin: 0;">
    <?php if ($error): ?>
        <div class="alert alert-danger"><?php echo $error; ?></div>
    <?php endif; ?>

    <?php if ($success): ?>
        <div class="alert alert-success"><?php echo $success; ?></div>
    <?php endif; ?>

    <form action="" method="POST">
        <div class="form-group">
            <label for="partner_id">Select Partner</label>
            <select name="partner_id" id="partner_id" class="form-control" required>
                <option value="">-- Choose Partner --</option>
                <?php foreach ($partners as $p): ?>
                    <option value="<?php echo $p['id']; ?>">
                        [<?php echo ucfirst($p['role']); ?>] <?php echo htmlspecialchars($p['full_name']); ?> (<?php echo $p['email']; ?>)
                    </option>
                <?php endforeach; ?>
            </select>
        </div>

        <div class="form-group">
            <label for="service_name">Service Sold</label>
            <input type="text" name="service_name" id="service_name" class="form-control" required placeholder="e.g. Website Design, SEO Pack">
        </div>

        <div class="grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="form-group">
                <label for="sale_amount">Sale Amount (<?php echo CURRENCY; ?>)</label>
                <input type="number" step="0.01" name="sale_amount" id="sale_amount" class="form-control" required placeholder="10000">
            </div>
            <div class="form-group">
                <label for="commission_percent">Commission %</label>
                <input type="number" step="0.1" name="commission_percent" id="commission_percent" class="form-control" required value="15">
            </div>
        </div>

        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Add Sale & Credit Commission</button>
    </form>
</div>

</main>
</div>
</body>
</html>

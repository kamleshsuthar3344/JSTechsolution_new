<?php
require_once 'admin_header.php';
require_once '../includes/settings_helper.php';

$success = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $aff_comm = $_POST['affiliate_commission'];
    $ref_rew = $_POST['referral_reward'];
    $min_with = $_POST['min_withdrawal'];
    
    if (updateSetting('affiliate_commission', $aff_comm) && 
        updateSetting('referral_reward', $ref_rew) && 
        updateSetting('min_withdrawal', $min_with)) {
        $success = "Settings updated successfully!";
        // Refresh values
        $affiliate_commission = $aff_comm;
        $referral_reward = $ref_rew;
        $min_withdrawal = $min_with;
    } else {
        $error = "Failed to update settings.";
    }
}
?>

<h1 style="margin-bottom: 30px;">Platform Settings</h1>

<div class="auth-container" style="max-width: 600px; margin: 0;">
    <?php if ($success): ?>
        <div class="alert alert-success"><?php echo $success; ?></div>
    <?php endif; ?>
    
    <?php if ($error): ?>
        <div class="alert alert-danger"><?php echo $error; ?></div>
    <?php endif; ?>

    <form action="" method="POST">
        <div class="form-group">
            <label for="affiliate_commission">Default Affiliate Commission (%)</label>
            <input type="number" step="0.1" name="affiliate_commission" id="affiliate_commission" class="form-control" required value="<?php echo getSetting('affiliate_commission', 15); ?>">
            <p style="font-size: 12px; color: #6b7280; margin-top: 5px;">This % is used when recording new affiliate sales.</p>
        </div>

        <div class="form-group">
            <label for="referral_reward">Referral Reward Amount (<?php echo CURRENCY; ?>)</label>
            <input type="number" step="1" name="referral_reward" id="referral_reward" class="form-control" required value="<?php echo getSetting('referral_reward', 100); ?>">
            <p style="font-size: 12px; color: #6b7280; margin-top: 5px;">Amount given to referrer when a new user signs up.</p>
        </div>

        <div class="form-group">
            <label for="min_withdrawal">Minimum Withdrawal Amount (<?php echo CURRENCY; ?>)</label>
            <input type="number" step="1" name="min_withdrawal" id="min_withdrawal" class="form-control" required value="<?php echo getSetting('min_withdrawal', 500); ?>">
        </div>

        <button type="submit" class="btn btn-primary">Save Settings</button>
    </form>
</div>

</main>
</div>
</body>
</html>

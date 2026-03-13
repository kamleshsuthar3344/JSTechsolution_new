<?php
require_once 'includes/config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms & Conditions | Earning Sharthi Partnership</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .terms-container { max-width: 800px; margin: 60px auto; padding: 40px; background: white; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        h1 { margin-bottom: 30px; color: var(--text); }
        h2 { margin-top: 30px; margin-bottom: 15px; font-size: 20px; color: var(--primary-dark); }
        p { margin-bottom: 20px; line-height: 1.6; color: #4b5563; }
        ul { margin-bottom: 20px; padding-left: 20px; }
        li { margin-bottom: 10px; color: #4b5563; }
    </style>
</head>
<body style="background: #f3f4f6;">

<div class="terms-container">
    <a href="login.php" style="color: var(--primary); text-decoration: none; font-weight: 600;">← Back to Portal</a>
    <h1 style="margin-top: 20px;">Partnership Terms & Conditions</h1>
    
    <p>Last Updated: <?php echo date('d M, Y'); ?></p>

    <h2>1. Enrollment in the Program</h2>
    <p>By registering for the Earning Sharthi Partnership Program, you agree to abide by these terms. We reserve the right to approve or reject any application at our sole discretion.</p>

    <h2>2. Affiliate Commissions</h2>
    <ul>
        <li>Commissions are earned on successful sales made through your unique affiliate link.</li>
        <li>The standard commission rate is 15% unless otherwise specified in your dashboard.</li>
        <li>Commissions are only credited after the client has made the full payment to Earning Sharthi.</li>
    </ul>

    <h2>3. Referral Rewards</h2>
    <ul>
        <li>Referral rewards are credited for new user signups via your referral link.</li>
        <li>Self-referral (creating multiple accounts to earn rewards) is strictly prohibited and will lead to an immediate ban.</li>
    </ul>

    <h2>4. Payouts</h2>
    <ul>
        <li>The minimum threshold for a withdrawal request is ₹500.</li>
        <li>Payouts are processed within 3-7 working days of the request.</li>
        <li>You must provide valid UPI or Bank details to receive payments.</li>
    </ul>

    <h2>5. Prohibited Activities</h2>
    <p>Partners are strictly prohibited from:</p>
    <ul>
        <li>Using spamming techniques (email or social media).</li>
        <li>Creating "look-alike" websites or social media handles to mislead users.</li>
        <li>Engaging in any illegal or unethical marketing practices.</li>
    </ul>

    <h2>6. Termination</h2>
    <p>We reserve the right to terminate any partner account if these terms are violated. In case of termination, any pending balance will be forfeited.</p>

    <div style="margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
        <p>© <?php echo date('Y'); ?> Earning Sharthi. All Rights Reserved.</p>
    </div>
</div>

</body>
</html>

<?php
require_once 'includes/config.php';
// No database connection needed for this static selection page
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partner Portal Selection | Earning Sharthi</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .portal-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .portal-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
        }
        .portal-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            border-color: var(--primary);
        }
        .portal-icon {
            width: 60px;
            height: 60px;
            background: #e0e7ff;
            color: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 24px;
        }
        .portal-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #1f2937;
        }
        .portal-desc {
            font-size: 0.9rem;
            color: #6b7280;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="auth-container" style="max-width: 900px;">
        <div class="logo-container">
            <h2 style="color: var(--primary);">Earning Sharthi</h2>
            <p>Select Partnership Portal</p>
        </div>

        <div style="text-align: center; margin-bottom: 40px;">
            <h1 class="auth-title">Welcome Partner!</h1>
            <p style="color: #666;">Please select your partnership type to login.</p>
        </div>

        <div class="portal-grid">
            <!-- Affiliate Login -->
            <a href="affiliate/login.php" class="portal-card">
                <div class="portal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 class="portal-title">Affiliate User</h3>
                <p class="portal-desc">Login to your Affiliate dashboard to manage links and view commissions.</p>
            </a>

            <!-- Referral Login -->
            <a href="referral/login.php" class="portal-card">
                <div class="portal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3 class="portal-title">Referral User</h3>
                <p class="portal-desc">Login to your Referral dashboard to track your network and rewards.</p>
            </a>

            <!-- Admin Login (Optional but good for completeness) -->
            <a href="admin/login.php" class="portal-card">
                <div class="portal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5.73C6.4 5.39 6 4.74 6 4a2 2 0 0 1 2-2h4zm0 2a2 2 0 0 1-2 2v6h2V6a2 2 0 0 1 2-2h-2z"/><rect x="4" y="14" width="16" height="8" rx="2"/></svg>
                </div>
                <h3 class="portal-title">Administrator</h3>
                <p class="portal-desc">Login to the Admin panel to manage users and settings.</p>
            </a>
        </div>

        <div class="auth-footer" style="margin-top: 50px;">
            Not a partner yet? <a href="register.php">Join Partnership Program</a>
        </div>
    </div>
</body>
</html>

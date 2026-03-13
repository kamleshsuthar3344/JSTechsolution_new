<?php
// This file is included at the top of dashboard pages
require_once 'includes/config.php';
require_once 'includes/db.php';
require_once 'includes/functions.php';

protectPage();

$db = getDB();
$role = $_SESSION['role'] ?? null;
$table = '';

if ($role === 'referral') {
    $table = 'referral_users';
} elseif ($role === 'affiliate') {
    $table = 'affiliate_users';
} else {
    // Invalid or Admin trying to access user dashboard
    header("Location: logout.php");
    exit();
}

$stmt = $db->prepare("SELECT * FROM $table WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();

if (!$user) {
    header("Location: logout.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Earning Sharthi</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .dashboard-container {
            display: flex;
            min-h-screen;
        }
        .sidebar {
            width: 260px;
            background: #1f2937;
            color: white;
            padding: 30px 20px;
            min-height: 100vh;
        }
        .sidebar h2 {
            font-size: 20px;
            color: var(--primary);
            margin-bottom: 40px;
        }
        .nav-list {
            list-style: none;
        }
        .nav-item {
            margin-bottom: 10px;
        }
        .nav-link {
            display: block;
            padding: 12px 15px;
            color: #d1d5db;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.2s;
        }
        .nav-link:hover, .nav-link.active {
            background: #374151;
            color: white;
        }
        .main-content {
            flex: 1;
            padding: 40px;
            background: #f9fafb;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 24px;
            margin-bottom: 40px;
        }
        .stat-card {
            background: white;
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }
        .stat-label {
            color: #6b7280;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .stat-value {
            font-size: 28px;
            font-weight: 700;
            color: var(--text);
        }
        .card {
            background: white;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        .link-box {
            background: #f3f4f6;
            padding: 15px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #e5e7eb;
        }
        code {
            font-family: monospace;
            color: var(--primary-dark);
        }
        .copy-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th {
            text-align: left;
            padding: 12px;
            border-bottom: 2px solid #f3f4f6;
            color: #6b7280;
            font-size: 14px;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #f3f4f6;
            font-size: 15px;
        }
    </style>
    <!-- Facebook SDK for JavaScript -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '{your-app-id}',
          cookie     : true,
          xfbml      : true,
          version    : '{api-version}'
        });
          
        FB.AppEvents.logPageView();   
          
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- End Facebook SDK -->
</head>
<body>
    <div class="dashboard-container">
        <aside class="sidebar">
            <h2>Earning Sharthi</h2>
            <ul class="nav-list">
                <li class="nav-item"><a href="dashboard.php" class="nav-link active">Dashboard</a></li>
                <li class="nav-item"><a href="services.php" class="nav-link">Services</a></li>
                <li class="nav-item"><a href="profile.php" class="nav-link">My Profile</a></li>
                <li class="nav-item"><a href="resources.php" class="nav-link">Resources</a></li>
                <li class="nav-item"><a href="payout_request.php" class="nav-link">Payouts</a></li>
                <li class="nav-item"><a href="logout.php" class="nav-link" style="color: #f87171;">Logout</a></li>
            </ul>
        </aside>
        
        <main class="main-content">
            <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                <h1>Welcome, <?php echo htmlspecialchars($user['full_name']); ?>!</h1>
                <span style="background: #dcfce7; color: #166534; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">
                    <?php echo strtoupper($user['role']); ?> PARTNER
                </span>
            </header>

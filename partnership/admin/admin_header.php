<?php
require_once '../includes/config.php';
require_once '../includes/db.php';
require_once '../includes/functions.php';

protectAdmin();

$db = getDB();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel | Earning Sharthi</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <style>
        .dashboard-container { display: flex; min-height: 100vh; }
        .sidebar { width: 260px; background: #111827; color: white; padding: 30px 20px; }
        .sidebar h2 { font-size: 18px; color: var(--secondary); margin-bottom: 40px; }
        .nav-list { list-style: none; }
        .nav-link { display: block; padding: 12px 15px; color: #9ca3af; text-decoration: none; border-radius: 8px; margin-bottom: 5px; }
        .nav-link:hover, .nav-link.active { background: #374151; color: white; }
        .main-content { flex: 1; padding: 40px; background: #f9fafb; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .stat-label { color: #6b7280; font-size: 12px; font-weight: 700; margin-bottom: 5px; text-transform: uppercase; }
        .stat-value { font-size: 24px; font-weight: 700; }
        .table-card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
        table { width: 100%; border-collapse: collapse; }
        th { background: #f9fafb; padding: 12px 15px; text-align: left; font-size: 12px; font-weight: 700; color: #4b5563; border-bottom: 1px solid #e5e7eb; }
        td { padding: 12px 15px; font-size: 14px; border-bottom: 1px solid #f3f4f6; }
        .badge { padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; }
        .badge-pending { background: #ffedd5; color: #9a3412; }
        .badge-active { background: #dcfce7; color: #166534; }
        .badge-blocked { background: #fee2e2; color: #991b1b; }
        .btn-sm { padding: 6px 12px; font-size: 12px; border-radius: 6px; text-decoration: none; display: inline-block; }
        .btn-block { background: #ef4444; color: white; }
        .btn-approve { background: #10b981; color: white; }
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
            <h2>ES Admin Portal</h2>
            <ul class="nav-list">
                <li><a href="index.php" class="nav-link">Overview</a></li>
                <li><a href="users.php" class="nav-link">Partners</a></li>
                <li><a href="add_sale.php" class="nav-link">Add Sale</a></li>
                <li><a href="payouts.php" class="nav-link">Payout Requests</a></li>
                <li><a href="settings.php" class="nav-link">Settings</a></li>
                <li><a href="../logout.php" class="nav-link" style="color: #f87171; margin-top: 50px;">Logout</a></li>
            </ul>
        </aside>
        <main class="main-content">

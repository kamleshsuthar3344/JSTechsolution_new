# Step-by-Step Guide: Deploying Backend on cPanel

This guide explains how to deploy your new PHP/MySQL backend on your existing cPanel server.

## Step 1: Prepare Your Files
1.  Organize your HTML, CSS, and PHP files into a single folder (e.g., `partners`).
2.  Ensure your `db_config.php` (or similar) is ready with placeholders for database credentials.

## Step 2: Create a MySQL Database in cPanel
1.  Log in to your cPanel ([https://host9.cloudindianserver.com:2222/](https://host9.cloudindianserver.com:2222/)).
2.  Find the **Databases** section and click on **MySQL® Databases**.
3.  **Create New Database:** Enter a name (e.g., `earnings_partners`) and click Create.
4.  **Create MySQL User:** Scroll down, enter a username and a strong password. Note these down.
5.  **Add User To Database:** Select the user and database you just created, click Add, and grant **All Privileges**.

## Step 3: Import Your Schema
1.  Go back to the cPanel home and click on **phpMyAdmin**.
2.  Select your new database from the left sidebar.
3.  Click the **Import** tab.
4.  Choose your `.sql` file and click **Go**.

## Step 4: Upload Your Files
1.  Go to the **Files** section in cPanel and click on **File Manager**.
2.  Navigate to `public_html`.
3.  Click **Upload** and upload your partner folder (or its contents into a subfolder).
4.  *Note:* You can also use FTP clients like FileZilla for this.

## Step 5: Configure Database Connection
1.  In the cPanel File Manager, find your database configuration file (e.g., `config.php`).
2.  Right-click and select **Edit**.
3.  Update the database name, username, and password with the ones you created in Step 2.
4.  Save changes.

## Step 6: Test and Link
1.  Visit `https://earningsharthi.in/partners/` to see your new pages.
2.  Ensure existing React links point to the correct subfolder paths.

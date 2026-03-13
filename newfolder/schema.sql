-- Refined Database Schema for Affiliate and Referral Programs

-- 1. Users table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('affiliate', 'referral', 'admin') DEFAULT 'referral',
  `affiliate_id` VARCHAR(50) UNIQUE, -- Unique code for affiliate sharing
  `referral_code` VARCHAR(50) UNIQUE, -- Unique code for referral sharing
  `wallet_balance` DECIMAL(10, 2) DEFAULT 0.00,
  `status` ENUM('active', 'blocked', 'pending') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Click Tracking (For Affiliates)
CREATE TABLE IF NOT EXISTS `clicks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `affiliate_id` INT NOT NULL,
  `ip_address` VARCHAR(45),
  `user_agent` TEXT,
  `clicked_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`affiliate_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

-- 3. Sales / Conversions (For Affiliates)
CREATE TABLE IF NOT EXISTS `conversions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `affiliate_id` INT NOT NULL,
  `service_name` VARCHAR(255),
  `sale_amount` DECIMAL(10, 2) NOT NULL,
  `commission_earned` DECIMAL(10, 2) NOT NULL,
  `status` ENUM('pending', 'approved', 'paid') DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`affiliate_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

-- 4. Referrals (For Referral Program)
CREATE TABLE IF NOT EXISTS `referrals` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `referrer_id` INT NOT NULL,
  `referee_name` VARCHAR(255),
  `referee_email` VARCHAR(255),
  `reward_amount` DECIMAL(10, 2) DEFAULT 0.00,
  `status` ENUM('completed', 'pending') DEFAULT 'completed',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`referrer_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

-- 5. Payout Requests
CREATE TABLE IF NOT EXISTS `payouts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `amount` DECIMAL(10, 2) NOT NULL,
  `payment_details` TEXT, -- UPI ID, Bank Details, etc.
  `status` ENUM('requested', 'processing', 'paid', 'rejected') DEFAULT 'requested',
  `requested_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `processed_at` TIMESTAMP NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

-- 6. Settings Table
CREATE TABLE IF NOT EXISTS `settings` (
  `setting_key` VARCHAR(50) PRIMARY KEY,
  `setting_value` TEXT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Default Settings
INSERT INTO `settings` (`setting_key`, `setting_value`) VALUES 
('affiliate_commission', '15'),
('referral_reward', '100'),
('min_withdrawal', '500')
ON DUPLICATE KEY UPDATE setting_value=setting_value;

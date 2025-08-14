<?php
// Environment variables - NEVER commit to repository
// This file should be stored outside the web root

// Database configuration
define('DB_HOST', '!DB_HOST_HERE!');
define('DB_NAME', '!DB_NAME_HERE!');
define('DB_USER', '!DB_USER_HERE!');
define('DB_PASS', '!DB_PASSWORD_HERE!');

// API keys
define('STRIPE_API_KEY', '!STRIPE_API_KEY_HERE!');
define('PAYPAL_API_KEY', '!PAYPAL_API_KEY_HERE!');
define('AI_API_KEY', '!AI_API_KEY_HERE!');

// Encryption keys
define('ENCRYPTION_KEY', '!RANDOM_32_CHAR_STRING_HERE!');
define('JWT_SECRET', '!ANOTHER_RANDOM_STRING_HERE!');

// Bank account details
define('FNB_ACCOUNT', '!FNB_ACCOUNT_NUMBER_HERE!');
define('RESERVE_ACCOUNT', '!RESERVE_ACCOUNT_NUMBER_HERE!');
define('OWNER_PAYOUT_ACCOUNT', '!OWNER_PAYOUT_ACCOUNT_HERE!');

// Security settings
define('REQUIRE_2FA', true);
define('ALLOWED_IP_RANGES', '192.168.1.0/24, 127.0.0.1');

// Payment distribution
define('AI_FUND_PERCENT', 20);
define('RESERVE_PERCENT', 20);
define('PAYOUT_PERCENT', 60);
?>

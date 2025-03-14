<?php
session_start();

// Simulate a login (Replace with actual login logic)
if (!isset($_SESSION["user_id"])) {
    $_SESSION["user_id"] = 1; // Assume user ID 1 is logged in
}
?>

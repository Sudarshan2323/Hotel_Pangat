<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit();
}

echo "Welcome, " . $_SESSION['name'] . "!<br>";
echo "<a href='logout.php'>Logout</a>";
?>

<?php
$host = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$database = "restaurant_db";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

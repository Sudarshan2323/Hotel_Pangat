


<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant_db";

header("Content-Type: application/json");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}


$data = json_decode(file_get_contents("php://input"), true);
$cart_id = $data['cart_id'];
$quantity = $data['quantity'];

$sql = "UPDATE cart SET quantity = ? WHERE cart_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $quantity, $cart_id);
$stmt->execute();
$stmt->close();

$conn->close();
?>


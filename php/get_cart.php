<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

if (!isset($_SESSION["user_id"])) {
    echo json_encode(["status" => "error", "message" => "Please log in to view your cart"]);
    exit;
}

$user_id = $_SESSION["user_id"];

$sql = "SELECT cart.cart_id, cart.quantity, products.product_id, products.name, products.description, products.price, products.image 
        FROM cart 
        INNER JOIN products ON cart.product_id = products.product_id 
        WHERE cart.user_id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$cartItems = [];

while ($row = $result->fetch_assoc()) {
    $cartItems[] = $row;
}

echo json_encode(["status" => "success", "cart" => $cartItems]);

$conn->close();
?>

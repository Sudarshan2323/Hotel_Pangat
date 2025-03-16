<?php
session_start();
include '../php/db.php';

if (!isset($_SESSION["user_id"])) {
    echo json_encode(["count" => 0]);
    exit;
}

$user_id = $_SESSION["user_id"];

// Count distinct products in the cart
$sql = "SELECT COUNT(DISTINCT product_id) AS total_products FROM cart WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

$total_products = $row["total_products"] ?? 0;

echo json_encode(["count" => $total_products]);

$stmt->close();
$conn->close();

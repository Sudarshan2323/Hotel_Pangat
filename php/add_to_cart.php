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

// Check if the user is logged in
if (!isset($_SESSION["user_id"])) {
    echo json_encode(["status" => "error", "message" => "Please log in to add items to the cart"]);
    exit;
}

$user_id = $_SESSION["user_id"];
$product_id = isset($_POST["product_id"]) ? intval($_POST["product_id"]) : 0;

if ($product_id > 0) {
    // Check if product already exists in cart
    $sql_check = "SELECT * FROM cart WHERE user_id = ? AND product_id = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("ii", $user_id, $product_id);
    $stmt_check->execute();
    $result = $stmt_check->get_result();

    if ($result->num_rows > 0) {
        // If product exists, increase the quantity
        $sql_update = "UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND product_id = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("ii", $user_id, $product_id);

        if ($stmt_update->execute()) {
            echo json_encode(["status" => "success", "message" => "Quantity updated in cart"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to update quantity"]);
        }
        $stmt_update->close();
    } else {
        // If product does not exist, insert a new row
        $sql_insert = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, 1)";
        $stmt_insert = $conn->prepare($sql_insert);
        $stmt_insert->bind_param("ii", $user_id, $product_id);

        if ($stmt_insert->execute()) {
            echo json_encode(["status" => "success", "message" => "Product added to cart"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to add product to cart"]);
        }
        $stmt_insert->close();
    }

    $stmt_check->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid product ID"]);
}

$conn->close();
?>

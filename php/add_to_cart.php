

<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit;
}

// Check if user is logged in
if (!isset($_SESSION["user_id"])) {
    echo json_encode(["status" => "not_logged_in", "message" => "Please log in to add items to the cart"]);
    exit;
}

$user_id = $_SESSION["user_id"];
$product_id = isset($_POST["product_id"]) ? intval($_POST["product_id"]) : 0;

if ($product_id <= 0) {
    echo json_encode(["status" => "error", "message" => "Invalid product ID"]);
    exit;
}

// Start transaction for better data integrity
$conn->begin_transaction();

try {
    // Check if product already exists in cart
    $sql_check = "SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("ii", $user_id, $product_id);
    $stmt_check->execute();
    $result = $stmt_check->get_result();

    if ($result->num_rows > 0) {
        // If product exists, increase quantity
        $sql_update = "UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND product_id = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("ii", $user_id, $product_id);

        if ($stmt_update->execute()) {
            echo json_encode(["status" => "success", "message" => "Quantity updated in cart"]);
        } else {
            throw new Exception("Failed to update product quantity.");
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
            throw new Exception("Failed to add product to cart.");
        }
        $stmt_insert->close();
    }

    $stmt_check->close();
    $conn->commit();
} catch (Exception $e) {
    $conn->rollback();
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}

$conn->close();

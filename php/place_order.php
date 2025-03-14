<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];

$subtotal = $_POST['subtotal'];
$shipping = $_POST['shipping'];
$tax = $_POST['tax'];
$total_price = $_POST['total_price'];

// Insert into orders table
$conn->query("INSERT INTO orders (user_id, total_price) VALUES ('$user_id', '$total_price')");
$order_id = $conn->insert_id;

// Insert order details
$cartQuery = $conn->query("SELECT c.cart_id, p.product_id, p.name, p.price, c.quantity 
                           FROM cart c 
                           JOIN products p ON c.product_id = p.product_id 
                           WHERE c.user_id = $user_id");

$orderSummary = "";
while ($row = $cartQuery->fetch_assoc()) {
    $product_id = $row['product_id'];
    $price = $row['price'];
    $quantity = $row['quantity'];

    $conn->query("INSERT INTO order_details (order_id, product_id, quantity, price) 
                  VALUES ('$order_id', '$product_id', '$quantity', '$price')");

    $orderSummary .= "{$row['name']} (x{$quantity}) - Rs {$price} \n";
}

// Clear cart after placing order
$conn->query("DELETE FROM cart WHERE user_id = '$user_id'");

// ✅ Send WhatsApp message using UltraMSG
sendWhatsAppMessage($phone, $orderSummary, $subtotal, $shipping, $tax, $total_price,$address);

function sendWhatsAppMessage($phone, $orderSummary, $subtotal, $shipping, $tax, $total,$address) {
    $instance_id = 'instance110099'; // UltraMSG instance ID
    $token = 'a5vynlfylsocllcv'; // UltraMSG token
    
    $message = "🛒 *Order Confirmation* \n";
    $message .= "======================\n";
    $message .= $orderSummary . "\n";
    $message .= "======================\n";
    $message .= "Subtotal: Rs " . number_format($subtotal, 2) . "\n";
    $message .= "Shipping: Rs " . number_format($shipping, 2) . "\n";
    $message .= "Tax (18%): Rs " . number_format($tax, 2) . "\n";
    $message .= "Total: Rs " . number_format($total, 2) . "\n";
    $message .= "======================\n";
    $message .= "📍 *Delivery Address:* $address \n";
    $message .= "📱 *Contact:* $phone \n";

    $url = "https://api.ultramsg.com/$instance_id/messages/chat";

    $data = [
        'token' => $token,
        'to' => $phone,
        'body' => $message,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response === FALSE) {
        die('Error sending message');
    }
}

echo "Order placed successfully!";
header("Location: ../Components/menu.html");
exit();

?>

<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];

// Fetch user details
$userQuery = $conn->query("SELECT name, email, phone, address FROM users WHERE user_id = $user_id");
$user = $userQuery->fetch_assoc();

// Fetch cart items
$cartQuery = $conn->query("SELECT c.cart_id, p.product_id, p.name, p.price, c.quantity 
                           FROM cart c 
                           JOIN products p ON c.product_id = p.product_id 
                           WHERE c.user_id = $user_id");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Checkout</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form action="place_order.php" method="POST">
        <label>Name:</label>
        <input type="text" name="name" value="<?= htmlspecialchars($user['name']) ?>" required>

        <label>Email:</label>
        <input type="email" name="email" value="<?= htmlspecialchars($user['email']) ?>" readonly>

        <label>Phone:</label>
        <input type="text" name="phone" value="+91<?= htmlspecialchars($user['phone']) ?>" required>

        <label>Address:</label>
        <textarea name="address" required><?= htmlspecialchars($user['address']) ?></textarea>

        <h3>Order Summary</h3>
        <ul>
            <?php 
            $subtotal = 0;
            while ($row = $cartQuery->fetch_assoc()) {
                $item_total = $row['price'] * $row['quantity'];
                $subtotal += $item_total;
                echo "<li>{$row['name']} (x{$row['quantity']}) - Rs {$item_total}</li>";
            }
            $shipping = 50; // Fixed shipping charges
            $tax = $subtotal * 0.18; // 18% tax
            $total = $subtotal + $shipping + $tax;
            ?>
        </ul>

        <p>Subtotal: Rs <?= number_format($subtotal, 2) ?></p>
        <p>Shipping: Rs <?= number_format($shipping, 2) ?></p>
        <p>Tax (18%): Rs <?= number_format($tax, 2) ?></p>
        <h3>Total: Rs <?= number_format($total, 2) ?></h3>
        
        <input type="hidden" name="total_price" value="<?= $total ?>">
        <input type="hidden" name="shipping" value="<?= $shipping ?>">
        <input type="hidden" name="tax" value="<?= $tax ?>">
        <input type="hidden" name="subtotal" value="<?= $subtotal ?>">

        <button type="submit">Place Order</button>
    </form>
</body>
</html>

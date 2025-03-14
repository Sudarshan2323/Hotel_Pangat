

<?php
session_start(); // Start session to track user login status

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $imagePath = "../Images/" . htmlspecialchars($row["image"]);
        
        echo '<div class="product-card">
                <img src="' . $imagePath . '" alt="' . htmlspecialchars($row["name"]) . '" onerror="this.onerror=null; this.src=\'default.jpg\';">
                <div class="product-details">
                    <div class="product-name">' . htmlspecialchars($row["name"]) . '</div>
                    <div class="product-description">' . htmlspecialchars($row["description"]) . '</div>
                    <div class="product-price">Rs.' . htmlspecialchars($row["price"]) . '</div>
                    <button onclick="addToCart(' . $row["product_id"] . ')">Add to Cart</button>
                </div>
              </div>';
    }
} else {
    echo "<p>No products found.</p>";
}

$conn->close();
?>


<!-- <?php
include '../php/db.php';

$sql = "SELECT * FROM products ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['product_id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['description']}</td>
                <td>Rs. {$row['price']}</td>
                <td>{$row['category']}</td>
                <td>
                    <button onclick=\"editProduct({$row['product_id']}, '{$row['name']}', '{$row['description']}', '{$row['price']}', '{$row['category']}')\">Edit</button>
                    <button onclick=\"deleteProduct({$row['product_id']})\">Delete</button>
                </td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No products found.";
}
?> -->




<?php
include '../php/db.php';

$sql = "SELECT * FROM products ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<button onclick=\"openProductForm()\" class='add-product-btn'>Add Product</button>";
    echo "<table>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['product_id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['description']}</td>
                <td>Rs. {$row['price']}</td>
                <td>{$row['category']}</td>
                <td>
                    <button onclick=\"openProductForm({$row['product_id']}, '{$row['name']}', '{$row['description']}', '{$row['price']}', '{$row['category']}')\">Edit</button>
                    <button onclick=\"deleteProduct({$row['product_id']})\">Delete</button>
                </td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No products found.";
}

$conn->close();
?>

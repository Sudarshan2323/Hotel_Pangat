<!-- <?php
include '../php/db.php';

$sql = "SELECT orders.*, users.name 
        FROM orders 
        JOIN users ON orders.user_id = users.user_id
        ORDER BY order_date DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>
            <tr>
                <th>Order ID</th>
                <th>User</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Date</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['order_id']}</td>
                <td>{$row['name']}</td>
                <td>Rs. {$row['total_price']}</td>
                <td>
                    <select onchange=\"updateOrderStatus({$row['order_id']}, this.value)\">
                        <option value='Pending' ".($row['status'] == 'Pending' ? 'selected' : '').">Pending</option>
                        <option value='Processing' ".($row['status'] == 'Processing' ? 'selected' : '').">Processing</option>
                        <option value='Completed' ".($row['status'] == 'Completed' ? 'selected' : '').">Completed</option>
                        <option value='Cancelled' ".($row['status'] == 'Cancelled' ? 'selected' : '').">Cancelled</option>
                    </select>
                </td>
                <td>{$row['order_date']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No orders found.";
}
$conn->close();
?> -->



<?php
include '../php/db.php';

$sql = "SELECT orders.*, users.name, users.phone 
        FROM orders 
        JOIN users ON orders.user_id = users.user_id
        ORDER BY order_date DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>Order ID</th>
                <th>User</th>
                <th>Contact Number</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Date</th>
            </tr>";
    
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['order_id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['phone']}</td>
                <td>Rs. {$row['total_price']}</td>
                <td>
                    <select onchange=\"updateOrderStatus({$row['order_id']}, this.value)\">
                        <option value='Pending' ".($row['status'] == 'Pending' ? 'selected' : '').">Pending</option>
                        <option value='Processing' ".($row['status'] == 'Processing' ? 'selected' : '').">Processing</option>
                        <option value='Completed' ".($row['status'] == 'Completed' ? 'selected' : '').">Completed</option>
                        <option value='Cancelled' ".($row['status'] == 'Cancelled' ? 'selected' : '').">Cancelled</option>
                    </select>
                </td>
                <td>{$row['order_date']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No orders found.";
}

$conn->close();
?>

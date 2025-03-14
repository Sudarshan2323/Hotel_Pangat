<!-- <?php
include '../php/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $order_id = $_POST['order_id'];
    $status = $_POST['status'];

    $sql = "UPDATE orders SET status = ? WHERE order_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $status, $order_id);

    if ($stmt->execute()) {
        echo "Order status updated.";
    } else {
        echo "Error updating order status: " . $conn->error;
    }

    $stmt->close();
}

$conn->close();

?> -->


<?php
include '../php/db.php';

$data = json_decode(file_get_contents("php://input"));

if ($data && isset($data->order_id) && isset($data->status)) {
    $order_id = $data->order_id;
    $status = $data->status;

    $sql = "UPDATE orders SET status = ? WHERE order_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $status, $order_id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }

    $stmt->close();
}

$conn->close();
?>

<?php
include '../php/db.php';

if (isset($_POST['booking_id']) && isset($_POST['status'])) {
    $bookingId = intval($_POST['booking_id']);
    $status = $_POST['status'];

    $sql = "UPDATE table_bookings SET status = '$status' WHERE booking_id = $bookingId";
    if ($conn->query($sql) === TRUE) {
        echo "Booking status updated successfully.";
    } else {
        echo "Error updating booking: " . $conn->error;
    }
} else {
    echo "Invalid request.";
}

$conn->close();
?>

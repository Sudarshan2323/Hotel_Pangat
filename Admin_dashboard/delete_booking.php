<?php
include '../php/db.php';

if (isset($_POST['booking_id'])) {
    $bookingId = intval($_POST['booking_id']);

    $sql = "DELETE FROM table_bookings WHERE booking_id = $bookingId";
    if ($conn->query($sql) === TRUE) {
        echo "Booking deleted successfully.";
    } else {
        echo "Error deleting booking: " . $conn->error;
    }
} else {
    echo "Invalid request.";
}

$conn->close();
?>

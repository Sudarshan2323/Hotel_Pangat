<?php
session_start();
include 'db.php'; // Include database connection

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo "<script>alert('You must be logged in to make a reservation.'); window.location.href='login.php';</script>";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id']; // Get logged-in user's ID
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $guests = $_POST['guests'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $notes = $_POST['notes'];

    $booking_time = $date . " " . $time; // Combine date and time

    // Insert reservation into the database
    $sql = "INSERT INTO table_bookings (user_id, name, email, phone, guests, booking_time, status) 
            VALUES ('$user_id', '$name', '$email', '$phone', '$guests', '$booking_time', 'Pending')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Reservation Successful!'); window.location.href='../index/index.html';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>

<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Change to your DB username
$password = ""; // Change to your DB password
$dbname = "restaurant_db";

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $category = $_POST['category'];

    // Image Upload Handling
    $image = $_FILES["image"]["name"];
    $target_dir = "../Images/";
    $target_file = $target_dir . basename($image);
    move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);

    // Insert Query
    $sql = "INSERT INTO products (name, description, price, category, image) 
            VALUES ('$name', '$description', '$price', '$category', '$image')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Product added successfully!'); window.location.href='../Components/product.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

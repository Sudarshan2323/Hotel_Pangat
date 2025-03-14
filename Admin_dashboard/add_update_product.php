<?php
include '../php/db.php';

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description'];
$price = $_POST['price'];
$category = $_POST['category'];
$image = $_FILES['image']['name'];

if ($image) {
    $target = "../Images/" . basename($image);
    move_uploaded_file($_FILES['image']['tmp_name'], $target);
}

if ($id) {
    $sql = "UPDATE products SET name='$name', description='$description', price='$price', category='$category', image='$image' WHERE product_id='$id'";
} else {
    $sql = "INSERT INTO products (name, description, price, category, image) VALUES ('$name', '$description', '$price', '$category', '$image')";
}

$conn->query($sql);
$conn->close();
?>

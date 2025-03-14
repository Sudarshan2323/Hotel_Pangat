<?php
include '../php/db.php';

$id = $_GET['id'];
$sql = "DELETE FROM products WHERE product_id='$id'";
$conn->query($sql);
$conn->close();
?>

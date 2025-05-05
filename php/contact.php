<?php
include 'db.php'; // Make sure this connects to your MySQL database

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = trim($data['name']);
    $email = trim($data['email']);
    $contactNo = trim($data['contactNo']);
    $subject = trim($data['subject']);
    $message = trim($data['message']);

    if ($name && $email && $contactNo && $message) {
        $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, contact_no, subject, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $email, $contactNo, $subject, $message);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Message submitted successfully."]);
        } else {
            echo json_encode(["success" => false, "message" => "Database error."]);
        }

        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "All fields except subject are required."]);
    }

    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>

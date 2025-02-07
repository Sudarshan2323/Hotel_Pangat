<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="/Css/contact.css">
</head>
<body>
    <div class="container">
        <div class="left-box">
            <h2>Get in Touch</h2>
            <div class="info-box">
                <p>Ready to transform your textile business's digital presence? We're here to help!</p>
           </div>
            <div class="info-box">
                <h3>Email</h3>
                <p><a href="mailto:pangathotel@gmail.com">pangathotel@gmail.com</a></p>
            </div>
            
            <div class="info-box">
                <h3>Phone</h3>
                <p>+91 8605509455</p>
            </div>
            
            <div class="info-box">
                <h3>Address</h3>
                <p>Panchaganga Factory To Hatkangle Road,<br> Near Amol Beakers, Korochi</p>
            </div>
            
            <div class="info-box">
                <h3>Opening Hours</h3>
                <p>Monday - Saturday: </p>
                <p>11:00 AM - 03:00 PM</p>
                <p>07:00 PM - 11:00 PM</p>
            </div>
        </div>
 <div class="right-box">
            <h2>Send us a Message</h2>
            <form method="post" action="contact.php">
                <input type="text" name="name" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <input type="text" name="subject" placeholder="Subject" required>
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $subject = htmlspecialchars($_POST['subject']);
        $message = htmlspecialchars($_POST['message']);

        $to = "pangathotel@gmail.com";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo "<p style='text-align:center; color:green;'>Message sent successfully!</p>";
        } else {
            echo "<p style='text-align:center; color:red;'>Failed to send message. Please try again later.</p>";
        }
    }
    ?>
</body>
</html>

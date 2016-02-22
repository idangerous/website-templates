<?php 
if (isset($_GET['email'])) $email = $_GET['email'];

$mail_to = "demo@idangero.us"; //change this email to yours one
$subject = "Rotatr Subscription";
$message = "
New Rotatr visitor want to know when the site will be opened.
Visitor's email: $email
";
$headers = "From: ".$email."\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>
<p class="intouch-status">Thanks! We'll keep you informed!</p>
<?php
	} 
else {
?>
<p class="intouch-status">Error Occured. Try again later.</p>
<?php
	}
?>

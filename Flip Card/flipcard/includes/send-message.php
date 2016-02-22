<?php 
if (isset($_GET['email'])) $email = $_GET['email'];
else {
	header('Location: ../');
	exit();
}
if (isset($_GET['message'])) $message = $_GET['message'];

$subject = "Message From FlipCard Template"; //change message subject to youts
$mail_to = "demo@idangero.us"; //change this email to yours

$message = stripslashes($message);
$headers = "From: <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>
Thanks! Your message has been successfully sent!
<?php
	} 
else {
?>
Error Occurred! Try again later.
<?php
	}
?>
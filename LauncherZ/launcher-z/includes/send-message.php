<?php 
if (isset($_GET['email'])) $email = $_GET['email'];
else {
	header('Location: ../');
	exit();
}

if (isset($_GET['name'])) $name = $_GET['name'];
if (isset($_GET['subject'])) $subject = $_GET['subject'];	
if (isset($_GET['message'])) $message = $_GET['message'];

$mail_to = "demo@idangero.us"; //change this email to yours
$message = stripslashes($message);
$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>

<div class="mail-sent">
  Thanks! Your message has been successfully sent!
</div>
<?php
	} 
else {
?>
<div class="mail-error">
  Error Occurred! Try again later.
</div>
<?php
	}
?>
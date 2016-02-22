<?php
$email = trim($_POST['email']);
if ($email=="demo@idangero.us") {
	$headers  = "Date: ".date("j M Y H:i:s")."\r\n";
	$headers .= "From: MySite CMS\r\n";
	$headers .= "Reply-To: demo@idangero.us\r\n";
	$headers .= "Return-Path: demo@idangero.us\r\n";
	$headers .= "X-Mailer: PHPMailer"."\r\n";
	$headers .= "Content-Transfer-Encoding: 8bit\r\n";
	$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
	$mailTo = $email;
	$subject = "Forgot Password";
	$message = "Hello, your new Password is - demo";
	if(mail($mailTo, $subject, $message, $headers)) {
		echo '<span style="color:green">Email with your new Password was successfully sent</span>';
	}
	else echo '<span style="color:red">Error occured! Try again later please</span>';
}
else echo '<span style="color:red">There is no registered user with such email</span>';
?>
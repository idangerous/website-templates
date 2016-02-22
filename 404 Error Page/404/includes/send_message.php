<?php 
if (isset($_POST['name'])) $name = $_POST['name'];
if (isset($_POST['email'])) $email = $_POST['email'];
if (isset($_POST['subject'])) $subject = $_POST['subject'];	
if (isset($_POST['message'])) $message = $_POST['message'];

$mail_to = "demo@idangero.us"; //change this email to yours

$message = stripslashes($message);
$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>
<div class="mail-sent">
<h3>Thanks!</h3><h3>Your message has been successfully sent.</h4>
</div>
<?php
	} 
else {
?>
<div class="mail-error">
<h3>Sorry!</h3><h3> Error occured. Try again later please.</h4>
</div>
<?php
	}
?>
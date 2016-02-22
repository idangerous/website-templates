<?php 
if (isset($_POST['name'])) $name = $_POST['name'];
if (isset($_POST['email'])) $email = $_POST['email'];
if (isset($_POST['subject'])) $subject = $_POST['subject'];	
if (isset($_POST['message'])) $message = $_POST['message'];

$mail_to = "demo@idangero.us";//Change this email to yours

$message = stripslashes($message);
$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>
<div class="mail-sent">
<p align="center"><img hspace="10" src="images/mail-sent.png" alt="Ok" /></p>
<h3 class="small-heading">Thanks!<br/>Your message has been successfully sent!</h3>
</div>
<?php
	} 
else {
?>
<div class="mail-error">
<p align="center"><img hspace="10" align="absmiddle" src="images/mail-error.png" alt="Error" /></p>
<h3 class="small-heading">Error Occured.<br/>Try again later.</h3>
</div>
<?php
	}
?>
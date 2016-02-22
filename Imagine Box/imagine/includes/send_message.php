<?php 
if (isset($_POST['name'])) $name = $_POST['name'];
if (isset($_POST['email'])) $email = $_POST['email'];
if (isset($_POST['subject'])) $subject = $_POST['subject'];	
if (isset($_POST['message'])) $message = strip_tags($_POST['message']);
$mail_to = "info@idangero.us"; //change this email to yours
$message = stripslashes($message);
$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>
<div class="mail-sent">
<h4><img hspace="10" align="absmiddle" src="images/layouts/mail-sent.png" alt="Ok" />Thanks! Your message has been successfully sent.</h4>
</div>
<?php
	} 
else {
?>
<div class="mail-error">
<h4><img hspace="10" align="absmiddle" src="images/layouts/mail-error.png" alt="Error" />Sorry! Error occured. Try again later please.</h4>
</div>
<?php
	}
?>
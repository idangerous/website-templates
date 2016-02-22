<?php 
if (isset($_POST['name'])) $name = $_POST['name'];
if (isset($_POST['email'])) $email = $_POST['email'];
if (isset($_POST['subject'])) $subject = $_POST['subject'];	
if (isset($_POST['message'])) $message = $_POST['message'];
$mail_to = "demo@idangero.us"; // change this email to yours
$message = stripslashes($message);
$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>

<div class="mail-sent">
  <p><img style="margin-right:10px" src="images/message-sent.png" width="80" height="39" alt="Ok" /></p>
  <p>Thanks! Your message has been successfully sent!</p>
</div>
<?php
	} 
else {
?>
<div class="mail-error">
  <p><img style="margin-right:10px" src="images/message-error.png" width="80" height="39" alt="Error" /></p>
  <p>Error Occured. Try again later.</p>
</div>
<?php
	}
?>

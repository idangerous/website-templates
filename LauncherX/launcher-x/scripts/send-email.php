<?php 
if (isset($_GET['email'])) $email = $_GET['email'];

$mail_to = "demo@idangero.us"; //change this email to yours
$subject = "LauncherX subscription";
$message = "
New Launcher' visitor want to know when the site will be opened.
His email: $email
";
$headers = "From: ".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>

<div class="mail-sent">
  <p><img style="margin-right:10px" align="left" src="images/message-sent.png" width="80" height="39" alt="Ok" />Thanks! Your email has been successfully sent!</p>
</div>
<?php
	} 
else {
?>
<div class="mail-error">
  <p><img style="margin-right:10px" align="left" src="images/message-error.png" width="80" height="39" alt="Error" />Error Occured. Try again later.</p>
</div>
<?php
	}
?>

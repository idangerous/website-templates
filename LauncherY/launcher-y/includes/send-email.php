<?php 
if (isset($_GET['email'])) $email = $_GET['email'];
else {
	header('Location: ../');
	exit();
}

$mail_to = "demo@idangero.us"; //change this email to yours
$subject = "LauncherY Subscription";
$message = "
New Launcher's visitor want to know when the site will be opened.
His email: $email
";
$headers = "From: ".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHPMailer"."\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
if (mail($mail_to, $subject, $message, $headers)) {
?>

<div class="mail-sent">
  Thanks! Your email has been successfully sent!
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
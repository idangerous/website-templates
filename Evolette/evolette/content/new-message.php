<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
function sendMail($mailTo,$mailFrom,$subject,$message) {
	$headers  = "Date: ".date("j M Y H:i:s")."\r\n";
	$headers .= "From: $mailFrom\r\n";
	$headers .= "Reply-To: $mailFrom\r\n";
	$headers .= "Return-Path: $mailFrom\r\n";
	$headers .= "X-Mailer: PHPMailer"."\r\n";
	$headers .= "Content-Transfer-Encoding: 8bit\r\n";
	$headers .= "Content-Type: text/plain; charset=\"utf-8\"";
	if(mail($mailTo, $subject, $message, $headers)) {
		return true;
	}
	else return false;
}
if(!empty($_POST['sendMessage'])) {
	if(sendMail($_POST['mailto'],$_POST['mailfrom'],$_POST['subject'],$_POST['message'])) {
		$status = '<div class="approve"><p>Message successfully sent!</p></div>';
	}
	else {
		$status = '<div class="alert"><p>Error Occured!</p></div>';
	}
}

?>
<script type="text/javascript">
$(function(){
	$('#messageStatus').slideDown(600).delay(3000).slideUp(600)	
	$('#usersEmails').change(function(){
		$('input[name=mailto]').val($(this).val())	
	})
})
</script>

<h2 class="content-heading h-mail">New Message:</h2>
<div id="messageStatus" style="display:none;"><? echo $status ?></div>
<form onsubmit="popUp({url:'content/new-message.php'},getFormVars($(this)));return false" method="post" action="content/new-message.php">
  <p>
    <label><strong>From:</strong><br />
      <input style="color:#777" class="text" type="text" name="mailfrom" readonly="readonly" value="Evolette Administrator <demo@idangero.us>" size="40"  />
    </label>
  </p>
  <p>
    <label><strong>To:</strong><br />
      <input class="text" type="text" name="mailto" size="40" value="<? echo $_POST['mailto'] ?>"  />
    </label>
    or choose from Users:
    <select size="1" class="select" id="usersEmails">
      <option></option>
      <option value="demo@idangero.us">Michael Howard &lt;demo@idangero.us&gt;</option>
      <option value="info@idangero.us">John Abramson &lt;info@idangero.us&gt;</option>
      <option value="support@idangero.us">Ryan Attwood &lt;support@idangero.us&gt;</option>
    </select>
  </p>
  <p>
    <label><strong>Subject:</strong><br />
      <input class="text" value="<? echo $_POST['subject'] ?>" type="text" name="subject" size="40"  />
    </label>
  </p>
  <p>
    <label><strong>Message:</strong><br />
      <textarea name="message" class="textarea" style="width:690px" rows="12"><? echo $_POST['message'] ?></textarea>
    </label>
  </p>
  <p><span class="bb-button-l"><span class="bb-button-m">
    <input class="bb-button" type="submit" name="sendMessage" value="Send Message" />
    </span></span></p>
</form>

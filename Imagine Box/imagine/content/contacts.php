<h2 class="content-heading">Contacts</h2>
<div id="message_status"></div>
<img hspace="20" src="images/layouts/mail-big.png" width="100" height="55" align="right" />
<p>You can contact us using the following contact form:</p>
<form action="javascript:sendMessage()" method="post" id="contact_form">
  <p>
    <label>Your Name:<br />
      <input type="text" size="40" name="name" id="contact_name" />
    </label>
  </p>
  <p>
    <label>Email*:<br />
      <input type="text" size="40" name="email" id="contact_email" onblur="validateEmail()"/>
    </label>
  </p>
  <p>
    <label>Subject:<br />
      <input style="color:#777" type="text" size="40" id="contact_subject" name="subject" value="Message From Imagine Box" readonly="readonly" />
    </label>
  </p>
  <p>
    <label>Message*:<br />
      <textarea cols="60" rows="10" name="message" id="contact_message" onblur="validateMessage()"></textarea>
    </label>
  </p>
  <p>Fields marked with an asterisk(*) are required!</p>
  <input type="submit" name="submit" value="Send Message" /> 
</form>

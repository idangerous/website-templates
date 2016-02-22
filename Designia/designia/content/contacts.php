<h2 class="content-heading">Contacts</h2>
<div class="message_status"> </div>
<form id="contact-form" action="javascript:sendMessage()" method="post">
  <p><strong>You can contact us using the following contact form:</strong></p>
  <p>
    <label>Your Name: *<br />
      <input type="text" size="50" name="name" id="name" onkeyup="validateText('name',6)" />
    </label>
  </p>
  <p>
    <label>Subject: *<br />
      <input type="text" size="50" name="subject" onkeyup="validateText('subject',6)" id="subject" />
    </label>
  </p>
  <p>
    <label>E-mail: *<br />
      <input type="text" size="50" name="email" onkeyup="validateEmail()" id="email" />
    </label>
  </p>
  <p>
    <label>Message: *<br />
      <textarea id="message" onkeyup="validateMessage()" cols="30" rows="10"></textarea>
    </label>
  </p>
  <p><em>Fields marked with an asterisk(*) are required</em></p>
  <p>
    <input type="submit" value="Send Message" />
  </p>
</form>

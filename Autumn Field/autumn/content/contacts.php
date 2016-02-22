<h2 class="content-heading">Contacts</h2>
<p>You can contact us using the following contact form:</p>
<form action="#" method="post" id="contact_form">
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
      <input style="color:#777" type="text" size="40" id="contact_subject" name="subject" value="Message From Autumn Field" readonly="readonly" />
    </label>
  </p>
  <p>
    <label>Message*:<br />
      <textarea cols="40" rows="10" name="message" id="contact_message" onblur="validateMessage()"></textarea>
    </label>
  </p>
  <p>Fields marked with an asterisk(*) are required</p>
  <input type="submit" name="submit" value="Send Message" />
</form>

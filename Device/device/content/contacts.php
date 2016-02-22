<h2 class="content-heading cufoned">Contacts</h2>
<p>You can contact us using the following contact form:</p>
<form name="contact" class="contact-form" action="javascript:sendMessage()" method="post">
  <p>
    <label> Your Name:*<br>
      <input id="contact_name" onkeyup="validateText('contact_name',6)" type="text" class="text" name="name" size="30" />
    </label>
  </p>
  <p>
    <label> Your Email:*<br>
      <input id="contact_email" onkeyup="validateEmail()" type="text" class="text" name="email" size="30" />
    </label>
  </p>
  <p>
    <label> Subject:*<br>
      <input id="contact_subject" onkeyup="validateText('contact_subject',6)" type="text" class="text" name="subject" size="30" value="Message From Device Template" />
    </label>
  </p>
  <p>
    <label> Message:*<br>
      <textarea id="contact_message" onkeyup="validateMessage()" name="message" class="textarea" cols="30" rows="10"></textarea>
    </label>
  </p>
  <p><em>Fields marked with an asterisk(*) are required</em></p>
  <input type="submit" name="Submit" value="Send Message" />
</form>

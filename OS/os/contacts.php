<h2 class="content-heading">Contacts</h2>
<p>You can contact us using the following contact form:</p>
<form name="contact" class="contact-form" action="javascript:sendMessage()" method="post">
  <p>
    <label> Your Name:*<br>
      <input id="contact_name" onblur="validateText($(this).attr('id'))" type="text" class="text" name="name" size="30" />
    </label>
  </p>
  <p>
    <label> Your Email:*<br>
      <input id="contact_email" onblur="validateEmail()" type="text" class="text" name="email" size="30" />
    </label>
  </p>
  <p>
    <label> Subject:*<br>
      <input id="contact_subject" onblur="validateText($(this).attr('id'))" style="color:#777" type="text" class="text" name="subject" size="30" value="Message From O.S Template" readonly="readonly" />
    </label>
  </p>
  <p>
    <label> Message:*<br>
      <textarea id="contact_message" onblur="validateMessage()" name="message" class="textarea" cols="30" rows="10"></textarea>
    </label>
  </p>
  <span class="button-l"><span class="button-m">
  <input type="submit" name="Submit" value="Send Message" />
  </span></span>
</form>

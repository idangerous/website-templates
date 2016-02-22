<div class="content-bg">
  <div class="one-half">
    <h2 class="heading">Contacts</h2>
    <div class="contact-status"></div>
    <form name="contact" class="contact-form" action="javascript:sendMessage()" method="post">
      <p>You can contact us using the following contact form:</p>
      <p>
        <label> Your Name:<br>
          <input id="contact_name" type="text" class="text" name="name" size="30" />
        </label>
      </p>
      <p>
        <label> Your Email:*<br>
          <input id="contact_email" onkeyup="validateEmail('#contact_email')" type="text" class="text" name="email" size="30" />
        </label>
      </p>
      <p>
        <label> Subject:<br>
          <input id="contact_subject" style="color:#777" type="text" class="text" name="subject" size="30" />
        </label>
      </p>
      <p>
        <label> Message:*<br>
          <textarea id="contact_message" onkeyup="validateMessage()" name="message" class="textarea" cols="30" rows="5"></textarea>
        </label>
      </p>
      <p><em>Fields marked with an asterisk(*) are required</em></p>
      <input type="submit" class="button" value="Send Message" />
    </form>
  </div>
  <div class="one-half last">
    <h2 class="heading" style="color:#555">How To Find Us</h2>
    <p style="font-weight:bold">sPhotos Inc</p>
    <p>114 Second Lane Street, Rostov-na-Donu, 344013, Russian Federation </p>
    <p>Work: +7-863-246-3608<br />
      Fax: +7-863-246-3608<br />
      Email: demo@idangero.us</p>
  </div>
  <div class="clear"></div>
</div>

<h2 class="content-heading">Contacts</h2>
<div>
  <div class="vcard"> <a class="fn org url" href="http://www.idangero.us/">Simply Ltd.</a>
    <div class="adr">
      <div class="street-address">114 Second Lane Street</div>
      <span class="locality">Rostov-na-Donu</span>, <span class="postal-code">344013</span>
      <div class="country-name">Russian Federation</div>
    </div>
    <div class="tel"> <span class="type">Work</span> +7-863-246-3608 </div>
    <div class="tel"> <span class="type">Fax</span> +7-863-246-3608 </div>
    <div>Email: <span class="email">info@idangero.us</span> </div>
  </div>
</div>
<div class="message_status"> </div>
<form id="contact-form" action="javascript:sendMessage()" method="post">
  <p><strong>You can contact us using the following contact form:</strong></p>
  <p>
    <label>Your Name: *<br />
      <input type="text" size="50" name="name" id="name" onblur="validateText('name',6)" />
    </label>
  </p>
  <p>
    <label>Subject: *<br />
      <input type="text" size="50" name="subject" onblur="validateText('subject',6)" id="subject" />
    </label>
  </p>
  <p>
    <label>E-mail: *<br />
      <input type="text" size="50" name="email" onblur="validateEmail()" id="email" />
    </label>
  </p>
  <p>
    <label>Message: *<br />
      <textarea id="message" onblur="validateMessage()" cols="30" rows="10"></textarea>
    </label>
  </p>
  <p><em>Fields marked with an asterisk(*) are required</em></p>
  <p>
    <input type="submit" value="Send Message" />
  </p>
</form>

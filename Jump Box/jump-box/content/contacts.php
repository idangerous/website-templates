<h2 class="content-heading">Contacts</h2>
<div class="status_message"> </div>
<form style="float:left;margin-right:40px;" action="#" method="post" id="contact_form">
  <p>
    <label>Your Name:<br />
      <input type="text" size="40" name="name" id="contact_name" />
    </label>
  </p>
  <p>
    <label>E-mail*:<br />
      <input type="text" size="40" name="email" id="contact_email" onkeyup="validateEmail()"/>
    </label>
  </p>
  <p>
    <label>Subject:<br />
      <input style="color:#777" type="text" size="40" id="contact_subject" readonly="readonly" value="Message from Jump Box" name="subject" />
    </label>
  </p>
  <p>
    <label>Message*:<br />
      <textarea cols="40" rows="10" name="message" id="contact_message" onkeyup="validateMessage()"></textarea>
    </label>
  </p>
  <p>Fields marked with an asterisk(*) are required!</p>
  <input class="button" type="submit" name="submit" value="Send Message" />
</form>
<div>
  <div class="vcard">
    <h3 class="fn org small-heading">John Smith</h3>
    <div class="adr">
      <div class="street-address">114 Second Lane Street</div>
      <span class="locality">Rostov-na-Donu</span>, <span class="postal-code">344013</span>
      <div class="country-name">Russian Federation</div>
    </div>
    <div class="tel"> <span class="type">Work</span> +7-863-246-3608 </div>
    <div class="tel"> <span class="type">Fax</span> +7-863-246-3608 </div>
    <div>Email: <span class="email">demo@idangero.us</span> </div>
    <div>Website: <a class="url" href="http://www.idangero.us">www.idangero.us</a> </div>
  </div>
</div>

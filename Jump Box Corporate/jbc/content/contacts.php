<h2 class="content-heading">Contacts</h2>
<div class="status_message"> </div>
<form action="#" method="post" id="contact_form">
  <h3 class="fn org small-heading">jBox.Corporate Ltd</h3>
  <div class="adr"> <span class="street-address">114 Second Lane Street</span>,<br/>
    <span class="locality">Rostov-na-Donu</span>, <span class="postal-code">344013</span>,<br/>
    <span class="country-name">Russian Federation</span> </div>
  <div class="adr-contacts"> <span class="tel"> <span class="type">Work</span> +7-863-246-3608 </span><br/>
    <span class="tel"> <span class="type">Fax</span> +7-863-246-3608 </span><br/>
    <span>Email: <span class="email">demo@idangero.us</span> </span><br/>
    <span>Website: <a class="url" href="http://www.idangero.us">www.idangero.us</a> </span> </div>
  <p>
    <label>Your Name:<br />
      <input type="text" size="40" name="name" id="contact_name" />
    </label>
  </p>
  <p>
    <label>E-mail*:<br />
      <input type="email" size="40" name="email" id="contact_email" onkeyup="validateEmail()"/>
    </label>
  </p>
  <p>
    <label>Subject:<br />
      <input type="text" size="40" id="contact_subject" name="subject" />
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
<div id="map_canvas"> <span class="map_load">Loading map... </span></div>
<div class="clear"></div>

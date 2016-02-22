<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/404.css" />
<script type="text/javascript" src="scripts/jquery-1.4.3.min.js"></script>
<script type="text/javascript" src="scripts/404.js"></script>
<title>404 Error Page Template by iDangerous</title>
</head>
<body>
<div class="wrapper"> 
  <a id="home" href="http://www.idangero.us">
    <img src="images/404/home.png" alt="Home" title="Home" width="140" height="130" />
  </a> 
  <a id="contacts" href="#contacts">
    <img src="images/404/contacts.png" alt="Contacts" title="Contacts" width="140" height="130" />
  </a>
  <div class="logo"><img src="images/404/logo.jpg" width="460" height="110" alt="" /></div>
  <div id="content">
    <div class="content-top">
      <div class="content-mid">
        <div class="error-message"> <img src="images/404/oops.png" width="154" height="56" alt=""  />
          <h2>Some error has occured</h2>
          <h3>Here are the reasons that could cause this error:</h3>
        </div>
        <form id="contact-form" action="javascript:sendMessage()" method="post">
          <p>You can contact us using the following contact form:</p>
          <label><strong>Your Name:</strong><br />
            <input type="text" id="contact-name" />
          </label>
          <label><strong>Email:*</strong><br />
            <input type="text" id="contact-email" onblur="validateEmail()"/>
          </label>
          <label><strong>Subject:</strong><br />
            <input type="text" id="contact-subject" />
          </label>
          <label><strong>Message:*</strong><br />
            <textarea id="contact-message" rows="10" cols="30" onblur="validateMessage()"></textarea>
          </label>
          <input type="submit" name="button" value="Send Message"  />
        </form>
      </div>
    </div>
  </div>
  <div class="errors">
    <div class="error">
      <div class="error-r">
        <div class="error-m">
          <h2>Error 404</h2>
          <h3>Document not found</h3>
          <p>Seems to be a page or document you requested does not exist.</p>
        </div>
      </div>
    </div>
    <div class="error">
      <div class="error-r">
        <div class="error-m">
          <h2>Error 403</h2>
          <h3>Forbidden</h3>
          <p>You haven't access for viewing the requested page or document.</p>
        </div>
      </div>
    </div>
    <div class="error">
      <div class="error-r">
        <div class="error-m">
          <h2>Error 500</h2>
          <h3>Internal Server Error</h3>
          <p>Some internal server error. Try to request this page or document later.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>

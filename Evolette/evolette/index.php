<?php 
define('evolette',true) ;
session_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/evolette.css" />
<script type="text/javascript" src="scripts/jquery-1.4.4.min.js"></script>
<script type="text/javascript" src="tiny_mce/jquery.tinymce.js"></script>
<script type="text/javascript" src="scripts/evolette.js"></script>
<title>Evolette</title>
</head>
<body>
<div id="ajax-loader">
<img src="images/ajax-loader.gif" width="49" height="48" alt="ajax" />
</div>
<? if ($_SESSION['authorized']!==true) {
?>
<div id="logo"> <img src="images/layouts/logo.png" width="308" height="83" alt="Logo" /> </div>
<div class="lock">
  <div class="lock2"></div>
  <div id="logout"></div>
</div>
<div id="login">
  <div class="lock-bg"></div>
  <div class="form-heading">
    <h3>Administration Login</h3>
  </div>
  <div class="login-form">
    <div class="lf-left">
      <div class="lf-mid">
        <div class="wrong-status">Username and password do not match</div>
        <form name="loginForm" id="loginForm" action="index.php" method="post">
          <label>Username:&emsp;&emsp;<span class="text-l"><span class="text-r">
            <input type="text" id="username" size="30" value="admin" />
            </span></span></label>
          <label>Password:&emsp;&emsp;<span class="text-l"><span class="text-r">
            <input type="password" id="password" size="30" value="demo" />
            </span></span></label>
          <p>
            <input type="submit" value="Login" />
            <span class="forgot"> Forgot your <a href="#" class="openUname">Username</a> or <a href="#" class="openPass">Password</a> ?</span></p>
        </form>
      </div>
    </div>
  </div>
  <div class="forgotUname">
    <p>Enter your registered e-mail and we'll send you your username</p>
    <form method="post" action="javaScript:retrieveUsername()" >
      <span class="text-l"><span class="text-r">
      <input tip="Only &quot;demo@idangero.us&quot; - will be the right e-mail" type="text" id="retrieveUnameEmail" size="20" />
      </span></span>
      <input style="margin-left:20px" type="submit" value="Send Username" />
    </form>
    <div class="forgotStatus"></div>
  </div>
  <div class="forgotPass">
    <p>Enter your registered e-mail and we'll send you a NEW password</p>
    <form method="post" action="javaScript:retrievePassword()" >
      <span class="text-l"><span class="text-r">
      <input tip="Only &quot;demo@idangero.us&quot; - will be the right e-mail" type="text" id="retrievePassEmail" size="20" />
      </span></span>
      <input style="margin-left:20px" type="submit" value="Send Password" />
    </form>
    <div class="forgotStatus">Message with your Username was successfully sent</div>
  </div>
  <div class="clear"></div>
</div>
<div id="maincontent">
	<div id="menu">
    	<div class="menu"></div>
    </div>
    <div class="content">
    	<div class="content-inner"></div>
    </div>
    <div class="clear"></div>
</div>
<?php
}
if ($_SESSION['authorized']===true) {
?>
<div id="logo" style="left: 240px; margin-left: 0px;"> <img src="images/layouts/logo.png" width="308" height="83" alt="Logo" /> </div>
<div class="lock" style="left: 0px; top: -5px; height: 299px; margin-left: 0px;">
  <div class="lock2" style="display: none;"></div>
  <div id="logout" style="display: block;"></div>
</div>
<div id="login" style="display:none">
  <div class="lock-bg"></div>
  <div class="form-heading">
    <h3>Administration Login</h3>
  </div>
  <div class="login-form">
    <div class="lf-left">
      <div class="lf-mid">
        <div class="wrong-status">Username and password do not match</div>
        <form name="loginForm" id="loginForm" action="index.php" method="post">
          <label>Username:&emsp;&emsp;<span class="text-l"><span class="text-r">
            <input type="text" id="username" size="30" value="admin" />
            </span></span></label>
          <label>Password:&emsp;&emsp;<span class="text-l"><span class="text-r">
            <input type="password" id="password" size="30" value="demo" />
            </span></span></label>
          <p>
            <input type="submit" value="Login" />
            <span class="forgot"> Forgot your <a href="#" class="openUname">Username</a> or <a href="#" class="openPass">Password</a> ?</span></p>
        </form>
      </div>
    </div>
  </div>
  <div class="forgotUname">
    <p>Enter your registered e-mail and we'll send you your username</p>
    <form method="post" action="javaScript:retrieveUsername()" >
      <span class="text-l"><span class="text-r">
      <input tip="Only &quot;demo@idangero.us&quot; - will be the right e-mail" type="text" id="retrieveUnameEmail" size="20" />
      </span></span>
      <input style="margin-left:20px" type="submit" value="Send Username" />
    </form>
    <div class="forgotStatus"></div>
  </div>
  <div class="forgotPass">
    <p>Enter your registered e-mail and we'll send you a NEW password</p>
    <form method="post" action="javaScript:retrievePassword()" >
      <span class="text-l"><span class="text-r">
      <input tip="Only &quot;demo@idangero.us&quot; - will be the right e-mail" type="text" id="retrievePassEmail" size="20" />
      </span></span>
      <input style="margin-left:20px" type="submit" value="Send Password" />
    </form>
    <div class="forgotStatus">Message with your Username was successfully sent</div>
  </div>
  <div class="clear"></div>
</div>
<div id="maincontent" style="display:block;height:100%;">
	<div id="menu" style="height:100%">
    	<div class="menu" style="display:block"><?php include("includes/menu.php") ?></div>
    </div>
    <div class="content" style="display:block">
    	<div class="content-inner"><?php include("content/cp.php") ?></div>
    </div>
    <div class="clear"></div>
</div>
<script type="text/javascript">contentResize();menuFunctionality()</script>
<?php
}
?>
<div class="dark-layer"></div>
<div id="popup">
	<img class="close-popup" src="images/layouts/close.png" width="32" height="32" alt="X" />
    <div class="popup-content"></div>
</div>
<div id="tip">
	<div class="tip-content"></div>
    <div class="tip-arrow"></div>
</div>

</body>
</html>
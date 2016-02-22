<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css"  />
<script type="text/javascript" src="scripts/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="scripts/imagine.js"></script>
<title>Imagine Box - Premium Site Template by iDangero.us</title>
</head>
<body>
<!------ Intro Section ------>
<div id="intro">
  <div class="intro-box"> 
     <img src="images/layouts/intro-box.png" width="1000" height="598" alt="Imagine Box" /> 
     <img class="blink" id="enter" src="images/layouts/learn-more.png" width="60" 
     height="71" alt="learn more" title="Learn More" /> 
  </div>
</div>
<!------ Main Content Section ------>
<div id="main-content">
	<!------ Social Bar ------>
	<div id="social-bar">
		<?php include("includes/social.bar.php")?>
	</div>
    <!------ Menu ------>
    <div id="menu">
      <ul class="menu">
      	<li class="home-contacts">
           <a class="menu-home" href="content/home.php">
              <img src="images/layouts/home.png" alt="Home" title="Home" />
           </a>
           <a class="menu-contacts" href="content/contacts.php">
              <img src="images/layouts/contacts.png" alt="Contacts" title="Contacts" />
           </a>
        </li>
        <li><a href="content/features.php">Features</a></li>
        <li><a href="content/products.php">Products</a></li>
        <li>Services
        	<ul class="submenu">
            	<li><a href="content/lorem-ipsum.php">Lorem Ipsum</a></li>
                <li><a href="content/pellentesque.php">Pellentesque</a></li>
            </ul>
        </li>
      </ul>
    </div>
    <!------ Content Pages Section ------>
    <div id="content">
    	<div class="content-inner">
           <?php include('includes/page-script.php')?>
    	   <?php include('content/home.php')?>
        </div>
    </div>
    <div class="clear"></div>
    <!------ Footer ------>
    <div id="footer"> &copy; 2010 "Imagine Box" Premium Template by <a title="Premium Templates Scripts Graphics" target="_blank" href="http://idangero.us">iDangerous</a>. All Rights Reserved</div>
</div>
<!------ Additional Background ------>
<div id="background" ></div>
<!------ Popup Layouts ------>
<?php include("includes/popup.php")?>
</body>
</html>
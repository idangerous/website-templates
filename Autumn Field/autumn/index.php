<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css"  />
<script type="text/javascript" src="scripts/jquery-1.4.3.min.js"></script>
<script type="text/javascript" src="scripts/autumn.js"></script>
<title>Autumn Field- Premium Site Template by iDangerous</title>
</head>
<body>
<!-- Header Section -->
<div id="header">
  <div id="logo">
    <a href="index.php">
    	<img src="images/logo.png" width="356" height="43" alt="Autumn Field" title="Autumn Field" />
    </a>
  </div>
  <div id="social-bar">
  	<?php include("includes/social.bar.php")?>
  </div>
  <div id="menu">
    <div class="menu"> 
        <a href="#" class="active"><span>Home</span></a> 
        <a href="#" ><span>Features</span></a> 
        <a href="#" ><span>Contacts</span></a> 
        <a href="#" ><span>Lorem</span></a> 
        <a href="#" ><span>Ipsum</span></a> 
        <a href="#" ><span>Dolor</span></a> 
    </div>
  </div>
  <div id="toolbar">
	<a href="#" id="slide-left">
    	<img src="images/layouts/slide-left.png" width="28" height="20" alt="Previos Page" title="Previos Page" />
    </a> 
    <a href="#" id="social" >
    	<img src="images/layouts/social.png" width="22" height="23" alt="Social Bar" title="Social Bar" />
    </a> 
    <a href="#" id="slide-right" >
    	<img src="images/layouts/slide-right.png" width="28" height="20" alt="Next Page" title="Next Page" />
    </a>
  </div>
</div>
<!-- Main Content Section -->
<div class="pages">
  <div class="background"></div>
  <div class="page">
    <div class="content">
      <?php include("content/home.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <div class="page">
    <div class="content">
      <?php include("content/features.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <div class="page">
    <div class="content">
      <?php include("content/contacts.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <div class="page">
    <div class="content">
      <?php include("content/lorem.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <div class="page">
    <div class="content">
      <?php include("content/ipsum.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <div class="page">
    <div class="content">
      <?php include("content/dolor.php")?>
    </div>
    <div class="clear"></div>
  </div>
</div>
<!-- Footer -->
<div class="footer"> &copy; 2010 &quot;Autumn Field&quot; Premium Template by <a href="http://idangero.us" title="Premium Templates Scripts Graphics">iDangerous</a>. All Rights Reserved </div>
<!-- Popup Window -->
<div class="wrapper">
  <div id="p-layer"></div>
  <div id="popup"> 
  	<a href="javascript:closePopup()" class="close"> 
  		<img height="28" width="28" alt="close" src="images/layouts/close.png" class="p-close" />
  	</a>
    <div class="p-tl">
      <div class="p-tr">
        <div class="p-tm"></div>
      </div>
    </div>
    <div class="p-ml">
      <div class="p-mr">
        <div class="p-mm">
          <div class="p-content"></div>
        </div>
      </div>
    </div>
    <div class="p-bl">
      <div class="p-br">
        <div class="p-bm"></div>
      </div>
    </div>
  </div>
</div>
</body>
</html>
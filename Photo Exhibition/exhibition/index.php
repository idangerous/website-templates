<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css"  />
<script type="text/javascript" src="scripts/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="scripts/exhibition.js"></script>
<title>Photo Exhibition - Premium Site Template by iDangerous</title>
</head>
<body>
<!-- Header Section -->
<div id="header">
  <!-- Social Bar -->
  <div id="social-bar">
    <?php include("includes/social.bar.php")?>
  </div>
  <!-- Logo -->
  <div id="logo"> 
     <a href="index.php" title="Home">
        <img src="images/logo.png" alt="Photo Exhibition" title="Photo Exhibition" width="409" height="43"/>
     </a>
  </div>
  <!-- Menu -->
  <div id="menu">
    <ul class="menu">
      <li class="active blink"><a href="#home">Home</a></li>
      <li id="gallery" class="blink"><a href="#gallery">Gallery</a></li>
      <li class="blink"><a href="#about">About</a></li>
      <li class="blink"><a href="#contacts">Contacts</a></li>
      <li class="blink" id="social">PhEx.Social</li>
    </ul>
  </div>
  <!-- Navigation Section -->
  <div id="gal-nav"> 
     <a href="#" class="blink" id="slide-left">Previous Photo</a> 
     <a href="#" class="blink" id="slide-right" >Next Photo</a> 
  </div>
</div>
<!-- Main Content Section -->
<div id="wrapper">
  <div class="page">
    <div class="content">
      <?php include("content/home.php")?>
    </div>
  </div>
  <div class="photos">
    <?php include("content/gallery.php")?>
  </div>
  <div class="page">
    <div class="content withBg">
      <?php include("content/about.php")?>
    </div>
  </div>
  <div class="page">
    <div class="content withBg">
      <?php include("content/contacts.php")?>
    </div>
  </div>
  <!-- Footer Section -->
  <div class="footer">
    <p>&copy; 2010 &quot;Photo Exhibition&quot; Premium Template by <a href="http://idangero.us" title="Premium Templates Scripts Graphics">iDangerous</a>. All Rights Reserved</p>
  </div>
</div>
</body>
</html>
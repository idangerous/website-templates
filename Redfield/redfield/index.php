<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css"  />
<script type="text/javascript" src="scripts/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="scripts/redfield.js"></script>
<title>Redfield - Premium Site Template by iDangero.us</title>
</head>
<body>
<!--Additional Background-->
<div id="background" ></div>
<!--End of additional Background-->

<!--Logo-->
<div id="logo" > 
   <a href="index.php"> 
      <img src="images/logo.png" width="376" height="118" title="Redfield" alt="Redfield" /> 
   </a> 
</div>
<!--End of Logo-->
<!--Main content section-->
<div class="wrapper">
  <div id="enter"></div>
  <div id="menu">
    <?php include("includes/menu.php")?>
  </div>
  <div id="content">
    <div class="content-inner">
      <?php include("content/home.php")?>
    </div>
  </div>
  <div id="photo-gallery">
    <?php include("content/gallery.php")?>
    <?php include("includes/controller.php")?>
  </div>
</div>
<!--End of main content section-->

<!--Social.Bar-->
<div id="social-bar">
  <?php include("includes/social.bar.php")?>
</div>
<!--End of Social.Bar-->

<div id="swirls"></div>
<div id="white-layer"></div>

<!--Footer-->
<div id="footer"> &copy; 2010 "Redfield" Premium Template by <a title="Premium Templates Scripts Graphics" target="_blank" href="http://idangero.us">iDangerous</a>. All Rights Reserved</div>
<!--End of Footer-->

</body>
</html>
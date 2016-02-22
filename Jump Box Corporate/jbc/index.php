<?php
define ("jBox",true);
$page = $_GET['page'];
if(empty($page)) $page = "home";
include("scripts/seo.php");
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="keywords" content="<?php echo $mKeys?>">
  <meta name="description" content="<?php echo $mDescr?>">
  <?php
  //The script bellow is used for redirection
  //to make the browser's "refresh" button works after the
  //new page is loaded in the old browsers!
  ?>
  <!--[if (gte IE 7)|!(IE)]><!--> 
  <script type="text/javascript">
  (function() {
      var _jbc_dh = document.location.hash,
      _jbc_dhp = _jbc_dh.indexOf("page=")>=0;
      if(_jbc_dhp) document.location = _jbc_dh.split("#")[1];	
  })();
  </script>
  <!--<![endif]-->
  <!--[if IE 6]>
  <script type="text/javascript">
  (function() {
      var _jbc_dh = document.location.href,
      _jbc_dhp = _jbc_dh.indexOf("#?page=")>=0||_jbc_dh.indexOf("#index.php?page=")>=0;
      if(_jbc_dhp) document.location = "?page="+_jbc_dh.split("#?page=")[1];	
  })();
  </script>
  <![endif]-->
  <link rel="stylesheet" type="text/css" href="css/jbc.css"  />
  <!--[if IE 7]><link rel="stylesheet" href="css/ie7.css" /><![endif]-->
  <!--[if IE 6]><link rel="stylesheet" href="css/ie6.css" /><![endif]-->
  <noscript><link rel="stylesheet" href="css/jbc-noscript.css"  /></noscript>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
  <script>window.jQuery || document.write("<script src='scripts/jquery-1.6.1.min.js'>\x3C/script>")</script>
  <script src="scripts/jquery.id.chopslider-1.1.0.min.js"></script>
  <script src="scripts/jbc.js"></script>
  <title><?php echo $mTitle ?></title>
</head>
<body>
<div class="ajax-loader"></div>
<!-- Container with Slider, please look at the usage documentation -->
<div class="slider">
  <div class="sl-shadow"></div>
  <a id="slide-next" href="#"></a> <a id="slide-prev" href="#"></a>
  <div id="slider">
    <div class="sl-slide activeSlide"> <img src="images/slider/1.jpg" width="900" height="300" alt="slide1" /> </div>
    <div class="sl-slide"> <img src="images/slider/3.jpg" width="900" height="300" alt="slide2" /> </div>
    <div class="sl-slide"> <img src="images/slider/2.jpg" width="900" height="300" alt="slide3" /> </div>
  </div>
</div>
<!-- Main Slider's container, must be the BODY's child -->
<div id="slide-loader"></div>
<ul id="menu">
	<?php include("includes/menu.php")?>
</ul>
<div class="pages">
  <?php
  //Here is a page layout. If you want to change it
  //don't forget to change it in the scripts/constructor.php file!
  ?>
  <!--  Home Page --> 
  <div class="page">
   <div class="page-logo"></div>
    <div class="content" >
      <div class="content-top">
      <div class="content-bg">
        <?php
		if(!is_file("content/$page".".php")) {
			echo "Sorry, but the requested page is not found!";	
		}
		else include("content/$page".".php");
		?>
        <div class="clear"></div>
      </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="footer-line"></div>
      <?php include("includes/social-bar.php")?>
      <?php include("includes/bottom-mods.php")?>
      <?php include("includes/copyright.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <!--  Other pages will be loaded here. Do not add here anything! -->
</div>
<div class="dark-layer"></div>
<div class="white-layer"></div>
<div id="popupBox"> </div>
<div id="popup"> 
	<a href="index.php" class="close-popup"> 
  		<img height="32" width="32" alt="close" src="images/close.png" class="p-close" />
  	</a>
	<div class="pop-window"></div>
    <div class="popup-image"></div>
</div>
<div id="jBox"></div>
<img id="jRing" src="images/layouts/ring.png" alt="ring">
<!--[if IE 6]><script src="scripts/dd_belatedpng.js"></script><![endif]-->
</body>
</html>
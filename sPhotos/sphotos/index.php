<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>sPhotos</title>
<link rel="stylesheet" type="text/css" href="css/sphotos.css" />
<script type="text/javascript" src="scripts/jquery-1.6.1.min.js"></script>
<script type="text/javascript" src="scripts/cufon-yui.js"></script>
<script type="text/javascript" src="scripts/Myriad_Pro_400-Myriad_Pro_600.font.js"></script>
<script type="text/javascript" src="scripts/jquery.id.chopslider-1.0.js"></script>
<script type="text/javascript" src="scripts/jquery.id.twitterfeed-1.0.js"></script>
<script type="text/javascript" src="scripts/sphotos.js"></script>
<!--[if lt IE 8]>
<link rel="stylesheet" type="text/css" href="css/ie7.css" />
<![endif]-->
</head>
<body>
<div id="background">
  <img src="images/layouts/bg.jpg" alt=" "/>
</div>
<div id="logo"></div>
<div id="menu">
  <?php include ("includes/menu.php") ?>
</div>
<div class="tweets">
  <div class="close-tweets"></div>
  <p class="tweet-uname"><a href="http://twitter.com/idangerous">@idangerous</a></p>
  <ul id="tweets">
    
  </ul>
</div>
<?php include ("includes/slider.php") ?>
<div id="content"></div>
<div id="dark-layer"></div>
<div id="portfolio"></div>
<div id="footer">
  <div class="copyright">2011 &copy; sPhotos by <a href="http://www.idangero.us">iDangero.us</a>. All Rights Reserved</div>
  <div class="social-links"> 
    <a href="#"><img src="images/social/twitter.png" width="30" height="30" alt="tw"></a>
    <a href="#"><img src="images/social/fb.png" width="30" height="30" alt="fb"></a>
    <a href="#"><img src="images/social/flickr.png" width="30" height="30" alt="flickr"></a>
    <a href="#"><img src="images/social/blogger.png" width="30" height="30" alt="blogger"></a>
    <a href="#"><img src="images/social/ytube.png" width="30" height="30" alt="ytube"></a>
    <a href="#"><img src="images/social/in.png" width="30" height="30" alt="in"></a>
    <a href="#"><img src="images/social/myspace.png" width="30" height="30" alt="myspace"></a>
  </div>
</div>

<div id="flickr">
  <h2 class="fl-title">sPhotos Flickr Gallery
  <span class="fl-nav">
    <a class="fl-link" href="#"><img src="images/layouts/fl-link.png" width="20" height="20" alt="flickr"/> My Flickr Account</a>
    <a class="fl-link closeFlickr" href="#"><img src="images/layouts/close-flickr.png" width="20" height="20" alt="flickr"/> Close Gallery</a>
  </span>
  </h2>
  <div class="fl-photos"></div>
  <div class="fl-pFull"></div>
  <div class="fl-pTitle"></div>
  <div class="fl-pDescr"></div>
</div>
<div class="loader-content"></div>
<div class="ajax-loader"></div>
<div id="popup">
 <div class="close-popup"></div>
 <div class="popup-content">
   <div class="p-image"></div>
   <div class="p-title"></div>
 </div>
</div>
<div class="ajax-loader-2"></div>
</body>
</html>
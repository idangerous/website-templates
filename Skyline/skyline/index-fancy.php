<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/skyline-fancy.css"  />
<link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui-1.8.11.custom.css" />
<script type="text/javascript" src="scripts/jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="scripts/jquery-ui-1.8.11.custom.min.js"></script>
<script type="text/javascript" src="scripts/idangerous.zoomslider.js"></script>
<script type="text/javascript" src="scripts/cufon-yui.js"></script>
<script type="text/javascript" src="scripts/Myriad_Pro_400-Myriad_Pro_600.font.js"></script>
<script type="text/javascript" src="scripts/skyline-fancy.js"></script>
<script type="text/javascript" src="scripts/skyline-fancy.settings.js"></script>
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="css/ie7.css"  />
<![endif]-->
<title>Sky Line - Premium WebSite Template by iDangerous</title>
</head>
<body class="white">
<div id="background"></div>
<div class="ajax-loader"> <img style="float:left; margin-right:10px;" src="images/ajax-loader.gif" width="20" height="20" alt="Loading" /> Loading... </div>
<div id="wrapper">
  <div class="content-section">
    <div id="toolbar">
      <div class="toolbar2">
        <?php include("includes/toolbar-fancy.php"); ?>
        <div class="clear"></div>
      </div>
    </div>
    <div id="portfolio" style="display:none">
    <div class="folio-left">
    	<div class="folio-home toHome"></div>
    	<div class="folio-prev"></div>
    </div>
    <div class="folio-right">
    	<div class="folio-next"></div>
    </div>
    <div class="folio-wrap">
        <div class="folio-wrapper">
		<?php include("includes/portfolio.php"); ?>
        </div>
        <div class="clear"></div>
    </div>
    </div>
    <div id="slider" style="display:none">
      <div class="slider-control">
        <div class="slide-prev"></div>
        <div class="toHome"></div>
        <div class="slide-next"></div>
      </div>
      <div class="slider">
        <?php include("includes/slider.php"); ?>
      </div>
    </div>
  </div>
  <div id="bottom-content">
    <div class="bottom-pane"></div>
    <div class="modules">
      <?php include("includes/modules.php"); ?>
      <div class="clear"></div>
    </div>
    <div id="footer"> &copy; 2011 &quot;Sky Line&quot; Premium Template by iDangero.us. All Rights Reserved </div>
    <div id="social">
    	<a class="hasTip" title="Twitter" href="#"><img src="images/social/twitter.png" width="30"></a>
        <a class="hasTip" title="Facebook" href="#"><img src="images/social/facebook.png" width="30"></a>
        <a class="hasTip" title="Blogger" href="#"><img src="images/social/blogger.png" width="30"></a>
        <a class="hasTip" title="Flickr" href="#"><img src="images/social/flickr.png" width="30"></a>
        <a class="hasTip" title="Myspace" href="#"><img src="images/social/myspace.png" width="30"></a>
        <a class="hasTip" title="LinkedIn" href="#"><img src="images/social/linked.png" width="30"></a>
        <a class="hasTip" title="YouTube" href="#"><img src="images/social/ytube.png" width="30"></a>
        <a class="hasTip" title="DIGG" href="#"><img src="images/social/digg.png" width="30"></a>
        <a class="hasTip" title="Delicio.us" href="#"><img src="images/social/delicious.png" width="30"></a>
    </div>
  </div>
</div>
<div id="windows"></div>
<div id="intro">
  <div class="intro-layer"></div>
  <div class="intro-slides">
    <div class="intro-control">
  	  <div>
      	<p class="cufoned"><a class="button" id="intro-start" href="#">Watch Intro</a></p>
        <p class="cufoned">... and learn more about SkyLine features!</p>
        <p class="cufoned">or</p>
        <p class="cufoned"><a class="button" id="intro-skip" href="#">Skip Intro</a></p>
      </div>
    </div>
    <?php include("includes/intro.php"); ?>
  </div>
</div>
<div id="tooltip"></div>
<div id="slide-loader">
  <div class="dummy-blocks">
    <div class="dummy-first"></div>
    <div class="dummy-last"></div>
  </div>
</div>
</body>
</html>
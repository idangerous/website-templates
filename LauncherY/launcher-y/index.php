<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>LauncherY</title>

  <!-- Mobile viewport optimized: h5bp.com/viewport -->
  <meta name="viewport" content="width = device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
  <link rel="stylesheet" href="moover/jquery.id.moover-1.5.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body class="">
  <header>
  	<a class="logo" href="#">
  	  <img src="img/black/logo.png"> 
  	  <h1>LauncherY</h1> <span class="slogan">Premium Countdown Website HTML5 Template</span>
  	</a>
  	<div class="header-right">
  		<div class="phone">
  			<p>+7-900-190-0000</p>
  			<p>+7-900-190-0000</p>
  		</div>
  		<div class="social-icons">
  			<a class="icon-tw" target="_blank" href="http://twitter.com/idangerous"></a>
  			<a class="icon-fb" target="_blank" href="http://facebook.com/idangero.us"></a>
  			<a class="icon-mail loadPopup" data-page="content/contacts.html" href="#"></a>
  		</div>
  	</div>
  	<div class="clearfix"></div>
  </header>
  
  <!-- Slider -->
  <div class="slider">
  	<div class="slider-top"></div>
  	<div class="slider-inner">
  		<?php include ('blocks/slider.php') ?>
  	</div>
  	<div class="slider-bot"></div>
  </div>
  
  <!-- Menu And Clock-->
  <div class="content" role="main">
    
    <!-- Menu -->
    <div class="col_2 col_first col_menu">
  	   <?php include('blocks/menu.php') ?>
    </div>
    <!--/Menu -->
    
    <!-- Clock -->
    <div class="col_2 col_last col_clock">
      <?php include('blocks/clock.php') ?>
    </div>
    <!--/Clock -->
    
    <div class="clearfix"></div>
  </div>
  
  <!-- Content Loader -->
  <div class="content-loader">
  	<div class="content-close">Close</div>
  	<div class="content-loader-inner">
  	
  	</div>	
  </div>
  <div class="content-loader-bot"></div>
  <!--/Content Loader -->
  
  
  <!-- Twitter Feed and Subsription -->
  <div class="content">  
    <div class="col_2 col_first">
    	<?php include('blocks/twitter_feed.php') ?>
    </div>
    
    <div class="col_2 col_last">
    	<?php include('blocks/subscribe.php') ?>
    </div>
    
    <div class="clearfix"></div>
  </div>
  <!--/Twitter Feed and Subscription -->
  
  <!-- Footer -->
  <footer>
  	&copy; 2012 LauncherY Premium Template by <a href="http://www.idangero.us/" target="_blank">iDangero.us.</a> All Rights Reserved
  </footer>
  <!--/Footer-->
  
  <!-- Popup -->
  <div class="popup-layer"></div>
  <div class="popup">
  	<div class="popup-close">Close</div>
  	<div class="popup-content"></div>
  </div>
  <!--/Popup -->
  
  <!-- Ajax Loader-->
  <div class="ajax-loader"></div>
  
  <!-- JavaScript at the bottom for fast page loading: http://developer.yahoo.com/performance/rules.html#js_bottom -->
  <script src="js/libs/jquery-1.7.2.min.js"></script>
  <script src="moover/jquery.id.moover-1.5.min.js"></script>
  <script src="js/launcher.js"></script>
  <!-- end scripts -->


</body>
</html>

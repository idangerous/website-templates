<?php
switch($_GET['page']) {
	case "resume": {
		$aboutStyle = "display:none;";
		$resumeStyle = "display:block;";
		$folioStyle = "display:none;";
		$contactStyle = "display:none;";
	};
	break;
	case "portfolio": {
		$aboutStyle = "display:none;";
		$resumeStyle = "display:none;";
		$folioStyle = "display:block;";
		$contactStyle = "display:none;";
	};
	break;
	case "contacts": {
		$aboutStyle = "display:none;";
		$resumeStyle = "display:none;";
		$folioStyle = "display:none;";
		$contactStyle = "display:block;";
	};
	break;
	default: {
		$aboutStyle = "display:block;";
		$resumeStyle = "display:none;";
		$folioStyle = "display:none;";
		$contactStyle = "display:none;";
	};
	break;
}
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/jb-grey.css"  />
<script type="text/javascript" src="scripts/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="scripts/jbox.js"></script>
<script type="text/javascript" src="scripts/cufon-yui.js"></script>
<script type="text/javascript">
jumpBox = {
	collapseTime : 1200,	//Time in ms to collapse page
	expandTime : 1200,	//Time in ms to expand page
	slideTime : 2200,	//Time in ms of slide animation between two pages
	firstPage : 0,	//Index number of first page
	twitterUsername : "idangerous",
	numberOfTweets : 1,	//Number of Recent Tweets
	showTwUname : true,	//Show link with username before every tweet
	cufonFont : "CF",	// "CF" - ChunkFive, "MR" - Myriad Pro
	cufonReplace : "h2.page-heading, h3.inner-heading, h2.content-heading, .small-heading, .menu-link a, .module-title, .footer-link,.item-descr,.item-title,.cufoned,"	// CSS selectors of elements which will be replaced with canvased font
}
</script>
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="css/ie7.css" />
<![endif]-->
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="css/ie6.css" />
<script type="text/javascript">
	isIE6 = true;
</script>
<![endif]-->
<title>Jump Box - Ultimate CV/Portfolio Template</title>
</head>
<body>
<div class="ajax-loader"></div>
<ul id="menu">
	<li class="menu-link">
        <a href="index.php?page=about"><img src="images/menu/about.png" width="72" height="72" alt="About" />About Me</a>
    </li>
    <li class="menu-link">
        <a href="index.php?page=resume"><img src="images/menu/resume.png" width="80" height="81" alt="Resume" />Resume</a>
    </li>
    <li class="menu-link">
       <a href="index.php?page=portfolio"><img src="images/menu/portfolio.png" width="84" height="84" alt="Portfolio" />Portfolio</a>
    </li>
    <li class="menu-link" style="margin:0px">
        <a href="index.php?page=contacts"><img src="images/menu/contacts.png" width="73" height="74" alt="Contacts" />Contacts</a>
    </li>
</ul>
<div class="pages">
  <!--  Home Page -->
  <div class="page" id="about" style="<?php echo $aboutStyle ?>">
    <div class="about-logo"></div>
    <div class="content" >
      <div class="content-bg">
        <?php include("content/about.php")?>
      </div>
    </div>
    <div class="bottom-content">
      <?php include("includes/bottom-mods.php")?>
      <?php include("includes/footer.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <!--  Resume Page -->
  <div class="page" id="resume" style="<?php echo $resumeStyle ?>">
    <div class="resume-logo"></div>
    <div class="content" >
      <div class="content-bg">
        <?php include("content/resume.php")?>
      </div>
    </div>
    <div class="bottom-content">
      <?php include("includes/bottom-mods.php")?>
      <?php include("includes/footer.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <!--  Folio Page -->
  <div class="page" id="portfolio" style="<?php echo $folioStyle ?>">
    <div class="folio-logo"></div>
    <div class="content" >
      <?php include("content/portfolio.php")?>
    </div>
    <div class="bottom-content">
      <?php include("includes/footer.php")?>
    </div>
    <div class="clear"></div>
  </div>
  <!--  Contacts Page -->
  <div class="page" id="contacts" style="<?php echo $contactStyle ?>">
    <div class="contacts-logo"></div>
    <div class="content" >
      <div class="content-bg">
        <?php include("content/contacts.php")?>
      </div>
    </div>
    <div class="bottom-content">
      <?php include("includes/bottom-mods.php")?>
      <?php include("includes/footer.php")?>
    </div>
    <div class="clear"></div>
  </div>
</div>
<div class="folioDescr">
  <div class="folioDescrContent"></div>
  <div class="descr-arrow"></div>
</div>
<div class="dark-layer"></div>
<div id="popupBox"> </div>
<div id="popup"> 
	<a href="index.php" onclick="closePopup()" class="close"> 
  		<img height="32" width="32" alt="close" src="images/close.png" class="p-close" />
  	</a>
	<div class="pop-window">
    </div>
</div>
<div id="jBox"></div>
</body>
</html>
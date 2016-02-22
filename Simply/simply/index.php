<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/simply.css"  />
<script type="text/javascript" src="scripts/jquery-1.4.3.min.js"></script>
<?php if(!empty($_GET['content'])) echo '<script type="text/javascript">var getContent="notEmpty"</script>' ?>
<script type="text/javascript" src="scripts/simply.js"></script>
<script type="text/javascript" src="scripts/themes.js"></script>
<title>Simply</title>
</head>
<body>
<div class="white-layer"></div>
<div class="menu-decor"></div>
<div id="header"> <a href="index.php" title="Simply"><img id="logo" src="images/logo.png" vspace="20" alt="Simply" /></a> 
    <div class="theme-switcher">
        <img src="images/theme-def.png" title="Default Theme" onclick="setTheme('def')" width="40" height="40" alt="default" />
        <img src="images/theme-grey.png" title="Grey Theme" onclick="setTheme('grey')" width="40" height="40" alt="dark" />
        <img src="images/theme-blue.png" title="Blue Theme" onclick="setTheme('blue')" width="40" height="40" alt="blue" />
        <img src="images/theme-dark.png" title="Dark Theme" onclick="setTheme('dark')" width="40" height="40" alt="dark" />
    </div>
</div>
<div class="wrapper">
  <div class="ajax-loader"></div>
  <div id="menu">
    <?php include("includes/menu.php")?>
  </div>
  <div id="features" <?php if(!empty($_GET['content'])) echo 'style="display:none;"' ?>>
    <div class="features-r">
      <div class="features-l">
        <div class="features-mid">
          <?php include("includes/features.php")?>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content">
    <div class="content-wrap" <?php if(!empty($_GET['content'])) echo 'style="display:block;"' ?> >
      <div class="content">
        <?php 
		  if (!empty($_GET['content'])) {
		  	include ("content/".$_GET['content'].".php");
		  }
		?>
      </div>
      <div class="footer"><p align="center">&copy; 2011 Simply Premium Template by iDangero.us. All Rights Reserved.</p></div>
    </div>
  </div>
</div>
<?php
  if (!empty($_GET['popup'])) {
	  $closeStyle = 'style="display:block"';
	  $windowStyle = 'style="display:block;width:600px;"';	
	  $pLayerStyle = 'style="display:block;opacity:0.6;filter:alpha(opacity=60)"';  
  }
  ?>
<div class="window" <?php echo $windowStyle ?>>
  <div class="close" <?php echo $closeStyle ?>><img src="images/layouts/close.png" width="30" height="30" alt="x" onclick="closePopup()" /></div>
  <div class="pop-content">
  <?php
  if (!empty($_GET['popup'])) include("content/".$_GET['popup'].".php");
  ?>
  </div>	
</div>
<div id="p-layer" <?php echo $pLayerStyle ?>></div>
</body>
</html>
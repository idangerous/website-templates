<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/designia.css"  />
<script type="text/javascript" src="scripts/jquery-1.5.min.js"></script>
<script type="text/javascript" src="scripts/typewriter-1.0.min.js"></script>
<script type="text/javascript" src="scripts/designia.js"></script>
<title>Designia - Colorful Design</title>
</head>
<body>
<div class="wrapper">
  <div class="ajax-loader">
    Loading...
  </div>
  <div id="menu">
    <?php include("includes/menu.php")?>
  </div>
  <div class="portfolio-bg"></div>
  <div id="portfolio">
    <div class="folio-left"></div>
    <div class="folio-right"></div>
    <div class="folio-top">
      <div class="folio-bot">
        <div class="folio-mid">
          <?php include("includes/portfolio.php")?>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content">
    <div class="content-wrap">
      <div class="dummy-content"></div>
      <div class="content">
          <div class="content-inner">
		  <?php 
		  if(empty($_GET['content']))  include ("content/home.php"); 
		  else include ("content/".$_GET['content'].".php"); 
		  
		  ?>
          </div>
      </div>
    </div>
  </div>
  <div id="bottomMods">
    <?php include("includes/bottom-mods.php")?>
  </div>
  <div class="footer">
    <p align="center">&copy; 2011 Designia Premium Template by iDangero.us. All Rights Reserved.</p>
  </div>
</div>
<div class="window">
  <div class="close"><img src="images/close.png" width="34" height="34" alt="x" onclick="closePopup()" /></div>
  <div class="pop-content"></div>
</div>
<div id="p-layer"></div>
</body>
</html>
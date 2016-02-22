<?php
$jBox_isAjaxed = $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
if(!($jBox_isAjaxed)) {
	header("Location: ../index.php");
}
$page = $_GET['page'];

?>
<div class="page" style="left:3000px">
  <div class="page-logo"></div>
  <div class="content" >
    <div class="content-top">
      <div class="content-bg">
        <?php 
		if(!is_file("../content/$page".".php")) {
			echo "Sorry, but the requested page is not found!";	
		}
		else include("../content/$page".".php");
		?>
        <div class="clear"></div>
      </div>
    </div>
  </div>
  <div class="bottom-content">
    <div class="footer-line"></div>
    <?php include("../includes/social-bar.php")?>
    <?php include("../includes/bottom-mods.php")?>
    <?php include("../includes/copyright.php")?>
  </div>
  <div class="clear"></div>
</div>

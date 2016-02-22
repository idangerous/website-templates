<?php 
$id = $_GET['id'];
$url = $_GET['url'];
if (!empty($_GET['width'])) $width = $_GET['width'];
else $width = 60;
$contentType = $_GET['contentType'];
if ($contentType=="iframe") $iframe=1;
else $iframe = 0;
?>
<div class="window" style="z-index:4000;width:<?php echo $width ?>px" id="window_<?php echo $id ?>">
  <div class="w-tbl">
    <div class="w-tbr">
      <div class="w-tbm">
        <div class="toolbar"> 
          <img class="minimize" onclick="minimize(<?php echo $id ?>)" src="images/black/minimize.png" width="20" height="20" alt="-" title="Minimize Window" /> 
          <img class="close" onclick="closeWindow(<?php echo $id ?>)" src="images/black/close.png" width="20" height="20" alt="X" title="Close Window" /> 
        </div>
      </div>
    </div>
  </div>
  <div class="w-ml">
    <div class="w-mr">
      <div class="w-mm">
        <div class="w-content">
          <?php 
		if ($iframe == 0 )	include($url) ;
		if ($iframe == 1) { ?>
          <iframe frameborder="0" src="<?php echo $url ?>" width="100%" height="400"></iframe>
          <?php }?>
        </div>
      </div>
    </div>
  </div>
  <div class="w-bot">
    <div class="w-bl">
      <div class="w-br">
        <div class="w-bm"></div>
      </div>
    </div>
  </div>
</div>

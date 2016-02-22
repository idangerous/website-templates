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
          <div class="drag-icon" title="Drag Window" ></div> 
          <div class="minimize-icon" onclick="minimize(<?php echo $id ?>)" title="Minimize Window" ></div> 
          <div class="close-icon" onclick="closeWindow(<?php echo $id ?>)" title="Close Window" ></div> 
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

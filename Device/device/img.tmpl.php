<?php 
$id = $_GET['id'];
$url = $_GET['url'];
if (!empty($_GET['title'])) $title = $_GET['title'];
$imageSize = getimagesize($url)
?>

<div class="window withImage" style="z-index:4000;width:<?php echo ($imageSize[0]+20) ?>px" id="window_<?php echo $id ?>">
  <div class="w-content">
    <div class="toolbar"> 
      <img class="rotate-ccw" src="images/black/r-ccw.png" width="20" height="20" onclick="rotate(-5,<?php echo $id ?>)" alt="rotate ccw" />
      <img class="rotate-cw" src="images/black/r-cw.png" width="20" height="20" onclick="rotate(5,<?php echo $id ?>)" alt="rotate cw" />
      <img class="zoom-out" src="images/black/zoom-out.png" width="20" height="20" alt="-" />
      <img class="zoom-in" src="images/black/zoom-in.png" width="20" height="20" alt="+" />
      <img class="close" onclick="closeWindow(<?php echo $id ?>)" src="images/black/close.png" width="20" height="20" alt="X" title="Close Window" /> 
    </div>
    <img class="window-image" src="<?php echo $url ?>" alt="<?php echo $title ?>" width="<?php echo $imageSize[0] ?>" /> 
    <?php if(!empty($title)) { ?>
    <div class="image-title cufoned"><?php echo $title ?></div>
    <?php } ?>
  </div>
</div>

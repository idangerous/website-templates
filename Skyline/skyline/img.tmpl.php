<?php 
$id = $_GET['id'];
$url = $_GET['url'];
if (!empty($_GET['title'])) $title = $_GET['title'];
$imageSize = getimagesize($url)
?>

<div class="window withImage" style="z-index:4000;width:<?php echo ($imageSize[0]+20) ?>px" id="window_<?php echo $id ?>">
  <div class="w-content">
    <div class="toolbar"> 
      <div class="drag-icon" title="Drag Window" ></div> 
      <div class="rotate-ccw-icon" onclick="rotate(-5,<?php echo $id ?>)" title="Rotate CCW" ></div>
      <div class="rotate-cw-icon" onclick="rotate(5,<?php echo $id ?>)" title="Rotate CW" ></div>
      <div class="zoom-out-icon" title="Zoom Out" ></div>
      <div class="zoom-in-icon" title="Zoom In" ></div>
      <div class="close-icon" onclick="closeWindow(<?php echo $id ?>)" title="Close Window" ></div>
    </div>
    <img class="window-image" src="<?php echo $url ?>" alt="<?php echo $title ?>" width="<?php echo $imageSize[0] ?>" /> 
    <?php if(!empty($title)) { ?>
    <div class="image-title cufoned"><?php echo $title ?></div>
    <?php } ?>
  </div>
</div>

<?php 
$id = $_GET['id'];
$uri = $_GET['uri'];
if (!empty($_GET['title'])) $title = '<h3 class="window-title">'.$_GET['title'].'</h3>';
else $title="";
if (!empty($_GET['width'])) $width = "width:".$_GET['width']."px";
else $width="";
$iframe = $_GET['iframe'];
?>
<script type="text/javascript">
$(function(){
	var $id=<?php echo $id ?>;
	$("a.in-window").removeClass("in-window").addClass("in-window-"+$id);
	$("a.in-window-"+$id).click(function(e){
		e.preventDefault();
		newWindow($(this).attr('href'),$(this).attr('title'),$(this).attr("rel"),0)
	})
	$("a.in-iframe").removeClass("in-iframe").addClass("in-iframe-"+$id);
	$("a.in-iframe-"+$id).click(function(e){
		e.preventDefault();
		newWindow($(this).attr('href'),$(this).attr('title'),$(this).attr("rel"),1)
	})
	$("#window_"+$id).resizable({ alsoResize: '#window_'+$id+' .w-ml, #window_'+$id+' iframe',minHeight: 50 });
	$(".window").draggable({ handle: 'div.w-tbl' });
	$(".window").mousedown(function(){
		$(this).css({"z-index":3000}).fadeTo(300,1)
		$(this).nextAll(".window").css({"z-index":2000}).fadeTo(300,0.3)
		$(this).prevAll(".window").css({"z-index":2000}).fadeTo(300,0.3)
	})
	$("img.close").click(function(){
		$(this).closest(".window").fadeOut(300,function(){
			$(this).remove()
		})
	})
	$("img.minimize").click(function(){
		var $window = $(this).closest(".window");
		$window.animate({width:"200px",height:"50px",left:"10px",},300,function(){
			$(this).children(".w-ml").css({height:"10px",width:"198px"})
			$(this).find("iframe").css({height:"120px",width:"100%"})
			$(this).addClass("minimized")
			$(this).fadeTo(300,0.3)
			$(this).resizable("disable")
		})
		$(this).after('<img src="images/black/expand.png" title="Expand Window" alt="oO" class="expand" onclick="expand('+$id+')"/>');
		$(this).remove();
	})
})
</script>
<div class="window" style="display:none;z-index:4000;<?php echo $width ?>" id="window_<?php echo $id ?>">
  <div class="w-tbl">
    <div class="w-tbr">
      <div class="w-tbm">
      <?php echo $title?>
      <img class="minimize" src="images/black/minimize.png" width="22" height="20" alt="-" title="Minimize Window" /> 
      <img class="close" src="images/black/close.png" width="22" height="20" alt="X" title="Close Window" /> </div>
    </div>
  </div>
  <div class="w-ml">
    <div class="w-mr">
      <div class="w-mm">
        <div class="w-content">
        <?php 
		if ($iframe == 0 )	include($uri) ;
		if ($iframe == 1) { ?>
        <iframe frameborder="0" src="<?php echo $uri ?>" width="100%" height="350"></iframe>
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

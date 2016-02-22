<script type="text/javascript">
jQuery(document).ready(function(){
	$(".image_s").hover(
	function(){
		if(!$(this).hasClass("img_active") && !$(this).hasClass("faded")) {
			$(this).fadeTo(200,0.5)	
		}
	},
	function(){
		if(!$(this).hasClass("img_active") && !$(this).hasClass("faded")) {
			$(this).fadeTo(200,1)
		}
	})
	$(".slide-right").mousedown(function(){
		if($(".g-slide:last").position().left !=0) {
			$(".g-slide").animate({left:"-=700px"},1500)
		}
	})
	$(".slide-left").mousedown(function(){
		if($(".g-slide:eq(0)").position().left !=0) {
			$(".g-slide").animate({left:"+=700px"},1500)
		}
	})
	$(".image_s").click(function(){
		if(!$(this).hasClass("img_active") && !$(this).hasClass("faded")) {
			$(this).addClass("img_active")
			$(".image_s:not(.img_active)").addClass("faded").fadeTo(600,0.01)
			$(".slide-left,.slide-right,.to-home-page,.page-title").fadeOut(600)
			var $desc = $(this).next(".img_desc").html()
			if($desc != null){
				var $description = $desc
			}
			else var $description = ""
			if($(this).attr('title') != '' ) {
				var $img_title = '<h3 class="img_title">'+$(this).attr('title')+'</h3>'
				$(".img_description").html($img_title+$description)
			}
			else {
				$(".img_description").html($description)
			}
			$(".big_image").html('<img hspace="0" vspace="0" src="'+$(this).attr("src")+'" onload="loadImage()" />')
		}
	})
	$("#close_box, #dark-layer").click (function(){
		closeLightbox()	
	})
})
function loadImage(){
	var $left = (700 - $("#lightbox").width())/2;
	$(".img_active").fadeTo(600,0.5,function(){
		$("#lightbox").css({left:$left+"px"}).delay(300).fadeIn(600,function(){
			$("#dark-layer").fadeTo(600,0.9)
		})
	})
}
function closeLightbox() {
	$("#dark-layer, #lightbox").fadeOut(600)
	$(".image_s").removeClass("img_active").removeClass("faded").delay(600).fadeTo(600,1)
	$(".slide-left,.slide-right,.to-home-page,.page-title").delay(900).fadeTo(600,1)
}
</script>
<div id="gallery">
	<img src="images/layouts/left.png" class="slide-left" width="30" height="30" alt="left"/>
    <img src="images/layouts/right.png" class="slide-right" width="30" height="30" alt="right"/>
    <div class="gallery-slides">
        <div class="g-slide">
            <img class="image_s" title="GEARS.CMS" hspace="0" vspace="0" src="images/photos/gears.jpg" />
            <div class="img_desc"><p>GEARS.CMS will be avaliable soon in the iDangerous Store.</p></div>
            <img class="image_s" title="iDangero.us" hspace="0" vspace="0" src="images/photos/idangerous.jpg" />
            <div class="img_desc"><p>iDangerous Store - Premium Templates, Graphics and Scripts. Visit <a href="http://idangero.us" target="_blank">iDangerous</a>.</p></div>
            <img class="image_s" title="KVK Design" hspace="0" vspace="0" src="images/photos/kvk.jpg" />
            <div class="img_desc"><p>Webdesign, graphics, programming</p></div>
            <img class="image_s" title="Some  Guy" hspace="0" vspace="0" src="images/photos/man.jpg" />
            <img class="image_s" title="Clouds" hspace="0" vspace="0" src="images/photos/clouds.jpg" />
            <img class="image_s" title="Redfield" hspace="0" vspace="0" src="images/photos/redfield.jpg" />
            
        </div>
        <div class="g-slide">
            <img class="image_s" title="Krasnaya Polyana" hspace="0" vspace="0" src="images/photos/redfield2.jpg" />
            <div class="img_desc"><p>Krasnaya Polyana - a resort in southern Russia.</p></div>
            <img class="image_s" title="Don River" hspace="0" vspace="0" src="images/photos/don-1.jpg" />
            <img class="image_s" title="Don River" hspace="0" vspace="0" src="images/photos/don-2.jpg" />
            <img class="image_s" title="Don River" hspace="0" vspace="0" src="images/photos/don-5.jpg" />
            <img class="image_s" title="Don River" hspace="0" vspace="0" src="images/photos/don-6.jpg" />
            <img class="image_s" title="Don River" hspace="0" vspace="0" src="images/photos/don-7.jpg" />
        </div>
    </div>
</div>
<div id="lightbox" style="display:none">
	<img src="images/layouts/close-w.png" width="40" height="40" alt="X" title="close" id="close_box" />
    <div class="big_image"></div>
    <div class="img_description"></div>
</div>
<div id="dark-layer"></div>
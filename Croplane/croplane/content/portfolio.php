<script type="text/javascript">
jQuery(document).ready(function(){
	$("#folio-top").mousedown(function(){
		if($(".folio-slide:eq(0)").position().top !=0) {
			$(".folio-slide").animate({top:"+=260px"},1500)
		}
	})
	$("#folio-down").mousedown(function(){
		if($(".folio-slide:last").position().top !=0) {
			$(".folio-slide").animate({top:"-=260px"},1500)
		}
	})
	$(".folio_img").click(function(){
		$clicked=$(this)
		$folio_left = $clicked.offset().left
		$folio_left2 = $folio_left + $clicked.width()+10
		$folio_top = $clicked.offset().top
		if($clicked.index()==0) {
			$(this).nextAll(".folio_img").fadeOut(600,function(){
				$clicked.addClass("folio-active").css({position:"fixed",left:$folio_left,top:$folio_top}).delay(400).animate({top:"50px",borderWidth:"5px"},600)
				$clicked.next(".folio_desc").addClass("folio-active").css({position:"fixed",left:$folio_left2,top:"50px"}).delay(1000).fadeIn(600)
				$('#close_box').css({position:"fixed",left:$folio_left-50,top:"50px"}).delay(1300).fadeIn(300)
			})
		}
		if($clicked.index()==2) {
			var $prevleft = $(".folio_img:eq(0)").offset().left
			var $prevleft2 = $prevleft + $clicked.width()+10
			$(this).prevAll(".folio_img").fadeOut(600,function(){
				$clicked.addClass("folio-active").css({position:"fixed",left:$folio_left,top:$folio_top}).delay(400).animate({top:"50px",left:$prevleft,borderWidth:"5px"},600)
				$clicked.next(".folio_desc").addClass("folio-active").css({position:"fixed",left:$prevleft2,top:"50px"}).delay(1000).fadeIn(600)
				$('#close_box').css({position:"fixed",left:$prevleft-50,top:"50px"}).delay(1300).fadeIn(300)
			})
		}
		$("#dark-layer").delay(600).fadeTo(300,0.8)
	})
	$('#close_box,#dark-layer').click(function(){
		$("div.folio-active").fadeOut(400,function(){
			$(this).removeClass('folio-active')	
		})
		$('#close_box').fadeOut(300)
		$("img.folio-active").delay(400).animate({left:$folio_left,top:$folio_top,borderWidth:"0px"},600,function(){
			$(".folio_img").not($clicked).fadeIn(600,function(){
				$clicked.css({position:"relative",left:0,top:0})
			})
		})
		$("#dark-layer").delay(1000).fadeOut(300,function(){$clicked.removeClass('folio-active')})
		$(".folio_img").not($clicked).delay(1300).fadeIn(600)
	})
})
</script>
<div class="portfolio">
  <div class="folio-slides">
    <div class="folio-slide"> 
      <img class="folio_img" title="GEARS.CMS" hspace="0" vspace="0" src="images/folio-gears.jpg" />
      <div class="folio_desc">
        <h2>GEARS.CMS</h2>
        <p align="justify">GEARS.CMS will be avaliable soon in the iDangerous Store.</p>
        <h3>Title</h3>
        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend viverra pulvinar. Integer ante leo, viverra eu pretium sit amet, vulputate in risus.</p>
        <h3>Another Title</h3>
        <p align="justify">Vestibulum eu dignissim urna. Pellentesque vel nulla a eros iaculis tristique. Pellentesque interdum nisi a nisl feugiat ac fermentum justo tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet arcu at lorem porttitor porttitor in vel purus. Sed eu libero id purus placerat hendrerit non accumsan velit. In arcu eros, accumsan sit amet hendrerit nec, hendrerit vitae felis. Morbi tristique ante ut magna tincidunt tincidunt. Nam malesuada dapibus felis, sed molestie orci dictum vel. Curabitur faucibus vulputate tempus. Proin ac metus justo, a porta lacus. Curabitur pulvinar venenatis aliquam. Integer nunc sapien, feugiat sed dignissim et, feugiat nec magna.</p>
      </div>
      <img class="folio_img" title="KVK Design" hspace="0" vspace="0" src="images/folio-kvk.jpg" />
      <div class="folio_desc">
        <h2>KVK Design</h2>
        <p>Web Design Studio - WebSites, Graphics and Programming. Visit <a href="http://kvk-design.com" target="_blank">KVK Design</a>.</p>
        <h3>Title</h3>
        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend viverra pulvinar. Integer ante leo, viverra eu pretium sit amet, vulputate in risus. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </div>
    <div class="folio-slide"> <img class="folio_img" title="Some Guy" hspace="0" vspace="0" src="images/folio-guy.jpg" />
      <div class="folio_desc">
      	<h2>Some Guy Again:)</h2>
        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend viverra pulvinar. Integer ante leo, viverra eu pretium sit amet, vulputate in risus. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <img class="folio_img" title="Clouds" hspace="0" vspace="0" src="images/folio-clouds.jpg" />
      <div class="folio_desc">
        <h2>Clouds</h2>
        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend viverra pulvinar. Integer ante leo, viverra eu pretium sit amet, vulputate in risus. Nullam semper enim eget mauris viverra in adipiscing nibh fringilla. Sed sed magna nisl. Suspendisse id posuere est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    </div>
  </div>
  <img src="images/layouts/close-w.png" width="40" height="40" alt="X" title="Close" id="close_box" style="display:none" /> 
</div>
<img src="images/layouts/to-top.png" width="40" height="40" alt="Slide Up" title="Slide Up" id="folio-top" /> 
<img src="images/layouts/to-down.png" width="40" height="40" alt="Slide Down" title="Slide Down" id="folio-down" /> 
<div id="dark-layer"></div>
<img src="images/layouts/shadow.png" class="shadow" alt="&nbsp;" /> 
<script type="text/javascript">
jQuery(document).ready(function(){
	$(".slide-right").mousedown(function(){
		if($(".show-slide:last").position().left !=0) {
			$(".show-slide").animate({left:"-=700px"},1500)
		}
	})
	$(".slide-left").mousedown(function(){
		if($(".show-slide:eq(0)").position().left !=0) {
			$(".show-slide").animate({left:"+=700px"},1500)
		}
	})
})
</script>
<div class="slideshow">
	<img src="images/layouts/left.png" class="slide-left" width="30" height="30" alt="left"/>
    <img src="images/layouts/right.png" class="slide-right" width="30" height="30" alt="right"/>
    <div class="show-slides">
        <div class="show-slide">
          <div style="padding:10px">
            <h2>CROPLANE</h2> 
            <img src="images/folio-guy.jpg" alt="" align="left" style="margin-right:20px" width="340" height="255" />
            <p align="justify">Aliquam eu malesuada turpis. Praesent porta quam ac lacus pharetra et placerat magna imperdiet. Aenean convallis volutpat tempor. Mauris dictum commodo nibh vitae interdum. Duis sit amet posuere libero. Praesent luctus leo nec neque dapibus lacinia ut vel urna. Quisque lacinia interdum tellus nec ornare. Etiam ut elit magna. Pellentesque bibendum dolor fringilla enim consectetur ac blandit odio semper. Fusce velit metus, hendrerit id iaculis non, auctor sed lectus. Nullam non lorem enim, id ullamcorper massa. Phasellus vulputate interdum libero, nec mollis lectus malesuada ac. Suspendisse mattis felis non mi semper ac luctus magna bibendum.</p><p> Etiam ac pellentesque velit. Nam sit amet pellentesque libero. Etiam a ligula id mauris fermentum bibendum ut sit amet eros. Curabitur faucibus imperdiet mi, eu ultrices odio aliquet at. Duis eu nisi quis lectus consequat tincidunt.</p> 
          </div>
        </div>
        <div class="show-slide">
           <img src="images/offer.png" alt="" width="700" height="400" />
        </div>
        <div class="show-slide">
        <p style="text-align:center; vertical-align:middle"><img align="middle" src="images/folio-kvk.jpg" width="340" height="255" alt=" " /></p>
        </div>
    </div>
</div>
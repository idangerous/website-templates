<script type="text/javascript">
jQuery(document).ready(function(){
	$(".product:even").css({"float":"left"}).children("img").css({"float":"left"})
	$(".product:odd").css({"float":"right"}).children("img").css({"float":"right"})
	$("#products img").click(function(){
		activeProduct = $(this).parent(".product")
		if (!activeProduct.hasClass('exposed')) {
			$left = activeProduct.offset().left
			$width = activeProduct.width()
			activeProduct.addClass("exposed").css({left:$left}).delay(600).animate({width:"760",padding:"20px",left:300},500)
			$(this).delay(600).animate({width:500},500)
			$("#dark-layer").fadeTo(500,0.8)
			$(this).next(".description").delay(1200).fadeIn(300)
		}
		else closeProduct(activeProduct)
	})
	$('#dark-layer').click(function(){
		closeProduct(activeProduct)
	})
})
</script>
<div id="products">
  <h2 class="content-heading">Imagine Cubes</h2>
  <div class="product"> <img src="images/boxes/cube-p.jpg" width="280" title="Imagine Cube" alt="" />
    <div class="description">
      <h3 class="p-title">Imagine Cube - Original</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="product"> <img src="images/boxes/cube-b.jpg" width="280" title="Imagine Cube" alt=""/>
    <div class="description">
      <h3 class="p-title">Imagine Cube - Black Edition</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="clear"></div>
  <h2 class="content-heading">Imagine Boxes</h2>
  <div class="product"> <img src="images/boxes/im-box-p.jpg" width="280" title="Imagine Box" alt="" />
    <div class="description">
      <h3 class="p-title">Imagine Box - Original</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="product"> <img src="images/boxes/im-box-b.jpg" width="280" title="Imagine Box" alt=""/>
    <div class="description">
      <h3 class="p-title">Imagine Box - Black Edition</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="clear"></div>
  <h2 class="content-heading">Fashion Boxes</h2>
  <div class="product"> <img src="images/boxes/f-box-w.jpg" width="280" title="Fashion Box" alt="" />
    <div class="description">
      <h3 class="p-title">Fashion Box - Original</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="product"> <img src="images/boxes/f-box-b.jpg" width="280" title="Fashion Box" alt=""/>
    <div class="description">
      <h3 class="p-title">Fashion Box - Black Edition</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="clear"></div>
  <h2 class="content-heading">Weather Boxes</h2>
  <div class="product"> <img src="images/boxes/w-box-c.jpg" width="280" title="Weather Box" alt="" />
    <div class="description">
      <h3 class="p-title">Weather Box - Clouds</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="product"> <img src="images/boxes/w-box-rain.jpg" width="280" title="Weather Box" alt=""/>
    <div class="description">
      <h3 class="p-title">Weather Box - Rain</h3>
      <p>Aenean velit dolor, tristique sed mollis sit amet, adipiscing et felis. Duis a justo eget urna tempus tristique eget id velit. Duis sed erat vel erat tempor porta. Etiam ullamcorper enim et nisi adipiscing mollis. In ac libero felis. Cras adipiscing risus sit amet velit porttitor sit amet euismod augue fermentum.</p>
      <p>Donec vestibulum pharetra odio, sit amet rutrum risus rutrum a. Integer vitae mauris tortor, ac consequat mi. Fusce tristique erat sodales eros dictum mattis. Maecenas bibendum mauris vitae tellus faucibus blandit. Nam nibh massa, eleifend sit amet accumsan non, tincidunt sit amet eros.</p>
    </div>
  </div>
  <div class="clear"></div>
</div>
<div id="dark-layer"></div>

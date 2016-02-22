(function($) { $.fn.zoomSlider = function(params) {
	var slider = {};
	var testDiv = $("<div>");
	addCSS3Transitions(testDiv,20,1,0)
 	var isIE = navigator.appVersion.indexOf("MSIE") > 0 ;
	slider.loader = $(params.loader);
	slider.nextTrigger = $(params.nextTrigger);
	slider.prevTrigger = $(params.prevTrigger);
	var slide = params.slide || ".slide";
	var offsetX1 = params.offsetX1 || 0;
	var offsetX2 = params.offsetX2 || 0;
	var offsetY = params.offsetY || 50;
	params.rotateAngle1 = params.rotateAngle1 || 0;
	params.rotateAngle2 = params.rotateAngle2 || 0;
	params.scale = params.scale || 1.2;
	var anTime = params.animationTime || 1800;
	slider.loader.css({
		left:this.offset().left,
		top:this.offset().top,
		position:"absolute",
		"z-index":20000,
		width:this.width(),
		height:this.height(),
		display:"none"
	})
	slider.nextTrigger.undelegate().unbind().die()
	slider.prevTrigger.undelegate().unbind().die()
	slider.nextTrigger.click(function(e){
		e.preventDefault();
		slideNext()	
	})
	slider.prevTrigger.click(function(e){
		e.preventDefault();
		slidePrev()	
	})
	function slideNext() {
		var activeSlide = $(slide+".activeSlide")
		var nextSlide = activeSlide.next(slide);
		if (nextSlide.length>0) {
			var nextSlideStyle = {
				"padding-left":nextSlide.css("padding-left"),
				"padding-top":nextSlide.css("padding-top"),
				"padding-bottom":nextSlide.css("padding-bottom"),
				"padding-right":nextSlide.css("padding-right"),
				"width":nextSlide.width(),
				"height":nextSlide.height()
			}
			var activeSlideStyle ={
				"padding-left":activeSlide.css("padding-left"),
				"padding-top":activeSlide.css("padding-top"),
				"padding-bottom":activeSlide.css("padding-bottom"),
				"padding-right":activeSlide.css("padding-right"),
				"width":activeSlide.width(),
				"height":activeSlide.height()
			}
			addCSS3Transitions(slider.loader,0,1,anTime/3)
			slider.loader.show()
			if (!isIE && !skyline.disableCSS3Transforms) {
				slider.loader.find(".dummy-first").html(activeSlide.html()).css(activeSlideStyle).show().delay(anTime/3).fadeOut(anTime/3)
				slider.loader.find(".dummy-last").html(nextSlide.html()).css(nextSlideStyle).delay(anTime/3).fadeIn(anTime/3)
				if (window.Cufon) Cufon.refresh();
				addCSS3Transitions(slider.loader,params.rotateAngle1,params.scale,anTime/3)
				slider.loader.animate({top:"-="+offsetY+"px",left:"+="+offsetX1+"px"},anTime/3,function(){
					addCSS3Transitions(slider.loader,params.rotateAngle2,params.scale,anTime/3)
					slider.loader.animate({left:"+="+(offsetX2-offsetX1)+"px"},anTime/3,function(){
						addCSS3Transitions(slider.loader,0,1,anTime/3)
						slider.loader.animate({top:"+="+offsetY+"px",left:"-="+offsetX2+"px"},anTime/3,function(){
							addCSS3Transitions(slider.loader,0,1,anTime/3)
							slider.loader.find(".dummy-first").html("").hide()
							.end().find(".dummy-last").html("").hide()
							nextSlide.addClass("activeSlide").show();
							$(slide+".activeSlide").eq(0).removeClass("activeSlide").hide().css("visibility","visible")
							slider.loader.css({display:"none"})
						})	
					})
				})
				$(".activeSlide").css("visibility","hidden")
			}
			else {
				slider.loader.find(".dummy-first").html(activeSlide.html()).css(activeSlideStyle).show().fadeOut(anTime/2)
				slider.loader.find(".dummy-last").html(nextSlide.html()).css(nextSlideStyle).delay(anTime/2).fadeIn(anTime/2)
				if (window.Cufon) Cufon.refresh();
				$(".activeSlide").css("visibility","hidden");
				setTimeout(function(){
					slider.loader.find(".dummy-first").html("").hide()
					.end().find(".dummy-last").html("").hide()
					nextSlide.addClass("activeSlide").show();
					$(slide+".activeSlide").eq(0).removeClass("activeSlide").hide().css("visibility","visible")
					slider.loader.css({display:"none"})
				},anTime)	
			}
		}
	}
	function slidePrev() {
		var activeSlide = $(slide+".activeSlide")
		var prevSlide = activeSlide.prev(slide);
		if (prevSlide.length>0) {
			var prevSlideStyle = {
				"padding-left":prevSlide.css("padding-left"),
				"padding-top":prevSlide.css("padding-top"),
				"padding-bottom":prevSlide.css("padding-bottom"),
				"padding-right":prevSlide.css("padding-right"),
				"width":prevSlide.width(),
				"height":prevSlide.height()
			}
			var activeSlideStyle ={
				"padding-left":activeSlide.css("padding-left"),
				"padding-top":activeSlide.css("padding-top"),
				"padding-bottom":activeSlide.css("padding-bottom"),
				"padding-right":activeSlide.css("padding-right"),
				"width":activeSlide.width(),
				"height":activeSlide.height()
			}
			addCSS3Transitions(slider.loader,0,1,anTime/3)
			slider.loader.show()
			if (!isIE && !skyline.disableCSS3Transforms) {
				slider.loader.find(".dummy-first").html(activeSlide.html()).css(activeSlideStyle).show().delay(anTime/3).fadeOut(anTime/3)
				slider.loader.find(".dummy-last").html(prevSlide.html()).css(prevSlideStyle).delay(anTime/3).fadeIn(anTime/3)
				if (window.Cufon) Cufon.refresh();
				addCSS3Transitions(slider.loader,-params.rotateAngle1,params.scale,anTime/3)
				slider.loader.animate({top:"-="+offsetY+"px",left:"-="+offsetX1+"px"},anTime/3,function(){
					addCSS3Transitions(slider.loader,-params.rotateAngle2,params.scale,anTime/3)
					slider.loader.animate({left:"+="+(offsetX1-offsetX2)+"px"},anTime/3,function(){
						addCSS3Transitions(slider.loader,0,1,anTime/3)
						slider.loader.animate({top:"+="+offsetY+"px",left:"+="+offsetX2+"px"},anTime/3,function(){
							addCSS3Transitions(slider.loader,0,1,anTime/3)
							slider.loader.find(".dummy-first").html("").hide()
							.end().find(".dummy-last").html("").hide()
							prevSlide.addClass("activeSlide").show();
							$(slide+".activeSlide").eq(1).removeClass("activeSlide").hide().css("visibility","visible")
							slider.loader.css({display:"none"})
						})	
					})
				})
				$(".activeSlide").css("visibility","hidden")
			}
			else {
				slider.loader.find(".dummy-first").html(activeSlide.html()).css(activeSlideStyle).show().fadeOut(anTime/2)
				slider.loader.find(".dummy-last").html(prevSlide.html()).css(prevSlideStyle).delay(anTime/2).fadeIn(anTime/2)
				if (window.Cufon) Cufon.refresh();
				$(".activeSlide").css("visibility","hidden");
				setTimeout(function(){
					slider.loader.find(".dummy-first").html("").hide()
					.end().find(".dummy-last").html("").hide()
					prevSlide.addClass("activeSlide").show();
					$(slide+".activeSlide").eq(1).removeClass("activeSlide").hide().css("visibility","visible")
					slider.loader.css({display:"none"})
				},anTime)	
			}
		}
	}
	function addCSS3Transitions(object,rotate,scale,time) {
		if (skyline.disableCSS3Transforms) return;
		object.css({
			"-webkit-transform":"rotate("+rotate+"deg) scale("+scale+")",
			"-webkit-transition-property":"-webkit-transform",
			"-webkit-transition-duration":""+time/1000+"s",
			"-o-transform":"rotate("+rotate+"deg) scale("+scale+")",
			"-o-transition-property":"-o-transform",
			"-o-transition-duration":""+time/1000+"s",
			"-moz-transform":"rotate("+rotate+"deg) scale("+scale+")",
			"-moz-transition-property":"-moz-transform",
			"-moz-transition-duration":""+time/1000+"s"
		})	
	}
}
})(jQuery)
/* Template Configuration */
fc = {
	//Enable/Disable rotating background lights
	rotateLights : true,
	
	//Duration per circle in ms
	lightsDuration : 15000,
	
	//Arrow labels
	arrowDetails : 'Details',
	arrowPortfolio : 'Portfolio',
	arrowResume : 'Resume/CV'
}

$(function(){
	$.extend(fc,{
		use3d : Modernizr.csstransforms3d,
		css3 : Modernizr.csstransitions,
		card : $('.card-bg'),
		arLeft : $('.arrow-bl'),
		arTop : $('.arrow-tr'),
		content : 'details'
	});
	
	//Mobile Scroll
	$(window).scrollTop(0)
	
	//Arrows Texts
	$('.arrow-tr a').html(fc.arrowPortfolio)
	$('.arrow-bl a').html(fc.arrowResume)
	
	
	
	$('.card-bg').data({
		x : 0,
		y : 0	
	})
	fc.newContent = '';
	var isAnimating = false;
	
	//Init Skills
	$('.skill').each(function(index, element) {
        $(this).wrapInner('<span></span>').prepend('<div></div>')
    });
	
	//Init Folio Items
	$('.folio-item').each(function(index, element) {
        var clas=$(this).hasClass('video-item') ? 'image-play' : 'image-zoom'
		$(this).children('a').append('<div class="overlay"></div><div class="image-layer '+clas+'"></div>')
    });
	$('.folio-item').hover(
		function(){
			$(this).find('.overlay').fadeIn(200)
			.next().animate({top:0, opacity:1},200)	
		},
		function(){
			$(this).find('.overlay').fadeOut(200)
			.next().animate({top:'100%', opacity:0},200)
		}
	)
	$('.folio-item a').prettyPhoto({social_tools:''});
	//Arrows
	fc.arTop.click(function(e){
		e.preventDefault();
		if (isAnimating) return;
		if (fc.content=='details' || fc.content=='cv') fc.content='portfolio'
		else fc.content='details'
		loadContent('x')
	})
	fc.arLeft.click(function(e){
		e.preventDefault();
		if (isAnimating) return;
		if (fc.content=='details' || fc.content=='portfolio') fc.content='cv'
		else fc.content='details'
		loadContent('y')
	})
	
	function loadContent(a) {
		isAnimating = true
		hideArrows()
		if ($(window).width()<=700) {
			$('.card-wrap').css({
				height : $('.card-inner:visible').outerHeight()	
			})
		}
		$('.card-inner:visible').fadeOut(300, function(){
			if (!fc.use3d) {
				setTimeout(function(){showContent()},300)
				return	
			}
		
			if (a=='x') rotateX()
			else rotateY()	
			
				
		})
		
	}
	function hideArrows() {
		$('.arrow-tr').animate({marginTop:-20, opacity:0},300, function(){$(this).hide()})	
		if ($(window).width()>480)
			$('.arrow-bl').animate({marginLeft:-20, opacity:0},300, function(){$(this).hide()})	
		else 
			$('.arrow-bl').animate({marginTop:-20, opacity:0},300, function(){$(this).hide()})	
	}
	
	function showContent() {
		
		if (fc.content=='cv') {
			$('.skill div').css({width:'0%'})
		}
		
		
		if ($(window).width()<700) {
			var newContent = $('.page-'+fc.content).show()
			$('.card-wrap').animate({
				height : newContent.outerHeight()		
			},600,function(){
				$(this).css({height:''})
				responsiveFix()
			})	
			newContent.hide();
		}
		
		$('.page-'+fc.content).fadeIn(600, function(){
			isAnimating = false;
			
			//updateScrolls();
			if (fc.content=='cv') {
				
				$('.skill').each(function(){
					$(this).find('div').animate({
						width : $(this).data('skill')*1+'%'
					},300)	
				})	
			}
		})
		updateScrolls()
		if (fc.content=='details') {
			$('.arrow-tr a').html(fc.arrowPortfolio)
			$('.arrow-bl a').html(fc.arrowResume)
		}
		if (fc.content=='cv') {
			$('.arrow-tr a').html(fc.arrowPortfolio)
			$('.arrow-bl a').html(fc.arrowDetails)
		}
		if (fc.content=='portfolio') {
			$('.arrow-tr a').html(fc.arrowDetails)
			$('.arrow-bl a').html(fc.arrowResume)
		}
		$('.arrow-tr').show().animate({marginTop:0, opacity:1},300)	
		$('.arrow-bl').show().animate({marginLeft:0, marginTop:0, opacity:1},300)		
	}
	
	//Tabs Links
	
	$('.tabs-links a').transform({time:100})
	$('.tabs-links a').click(function(e) {
        e.preventDefault();
		if ($(this).hasClass('active')) return
		var c = $(this)
		$('.tabs-links a.active').removeClass('active')
		c.addClass('active')
		$('.tab:visible').fadeOut(150, function(){
			$(this).removeClass('active')	
			updateScrolls()
		})
		$('.tab').eq(c.index()).delay(150).fadeIn(150, function(){updateScrolls()})
		updateScrolls()
    });
	
	//RotateX
	function rotateX() {		
		var x = fc.card.data('x')*1;
		var y = fc.card.data('y')*1
		var x180 = x-Math.floor(x/360)*360;
		var y180 = y-Math.floor(y/360)*360;
		var xNew = x-180;
		var tz = 0;
		x180 = Math.abs(x180);
		y180 = Math.abs(y180);

		if (x180==0 && y180==0) tz = 1
		if (x180==180 && y180==0) tz = -1
		if (x180==0 && y180==180) tz = -1
		if (x180==180 && y180==180) tz = 1
		fc.card.transform({
			transform: 'rotateX('+xNew+'deg) rotateY('+y+'deg) translate3d(0,0,'+tz+'px)',
			time:900	
		}).transitionEnd(function(){
			showContent()	
		})
		//Reflection
		var reflY = $('.card-reflection').data('y')*1
		$('.card-reflection').transform({
			transform: 'translate3d(0,0,-200px) rotateY('+reflY+'deg)',
			time:450	
		}).css({opacity:0}).transitionEnd(function(){
			$(this)
			.transform({
				transform: 'translate3d(0,0,200px) rotateY('+reflY+'deg)',
				time:0	
			})
			setTimeout(function(){
				$('.card-reflection').transform({
					transform: 'translate3d(0,0,0px) rotateY('+reflY+'deg)',
					time:450	
				}).css({opacity:1})	
			},50)	
		})
		//Shadow
		$('.card-shadow').transform({
			transform: 'translate3d(0,0,-200px)',
			time:450	
		}).css({opacity:0}).transitionEnd(function(){
			$(this)	.transform({
				transform: 'translate3d(0,0,-2px)',
				time:450	
			}).css({opacity:1})
		})
		
		//Update Data
		$('.card-bg').data({
			x : xNew,
			y : y	
		})
	}
	
	//RotateY
	$('.card-reflection').data('y',0)
	function rotateY() {
		
		var x = fc.card.data('x')*1;
		var y = fc.card.data('y')*1;
		var x180 = x-Math.floor(x/360)*360;
		var y180 = y-Math.floor(y/360)*360;
		if (x180==180) yNew = y-180;
		else yNew = y+180;
		var tz = 0;
		x180 = Math.abs(x180);
		y180 = Math.abs(y180);
		if (x180==0 && y180==0) tz = 1
		if (x180==180 && y180==0) tz = -1
		if (x180==0 && y180==180) tz = -1
		if (x180==180 && y180==180) tz = 1
		
		
		fc.card.transform({
			transform: 'rotateX('+x+'deg) rotateY('+yNew+'deg) translate3d(0,0,'+tz+'px)',
			time:900	
		}).transitionEnd(function(){
			showContent()	
		})
		
		//Reflection
		var reflY = $('.card-reflection').data('y')*1
		reflY = reflY+180
		$('.card-reflection').transform({
			transform: 'rotateY('+(reflY)+'deg)',
			time:900	
		})
		$('.card-reflection').data('y',reflY);
		
		//Shadow
		$('.card-shadow').transform({
			transform: 'translate3d(0,0,-200px) scaleX(0)',
			time:450	
		}).css({opacity:0}).transitionEnd(function(){
			$(this)	.transform({
				transform: 'translate3d(0,0,-2px) scaleX(1)',
				time:450	
			}).css({opacity:1})
		})
		
		//Update Data
		$('.card-bg').data({
			x : x,
			y : yNew	
		})
	}
	
	//Rotate BG Lights
	if (fc.rotateLights && fc.css3) {
		$('.lights').data('rotate',0);
		function rotateBGLights() {
			var rotate = $('.lights').data('rotate')*1+360;
			$('.lights').transform({
				transform:'rotate('+rotate+'deg)',
				time:fc.lightsDuration,
				ease:'linear'	
			})	
			$('.lights').data('rotate',rotate);
		}
		rotateBGLights();
		setInterval(function(){ rotateBGLights() }, fc.lightsDuration)
	}
	
	function updateScrolls() {
		if ($(window).width()>700) {
			if (!$('.card-content').data('jsp'))
				$('.card-content').jScrollPane()
			else {
				$('.card-content').data('jsp').reinitialise()
			}
			if (!$('.scrollPane:visible').data('jsp'))
				$('.scrollPane:visible').jScrollPane()
			else {
				$('.scrollPane:visible').data('jsp').reinitialise()
			}
		}
		else {
			if ($('.card-content').data('jsp'))
				$('.card-content').data('jsp').destroy()	
				
			if ($('.scrollPane:visible').data('jsp'))
				$('.scrollPane:visible').data('jsp').destroy()
		}
	}
	updateScrolls();
	
	function responsiveFix() {
		var height = $(document).height();
		var card = $('.card-wrap')
		$('.lights-wrap').css({
			height:'100%',
			width:'100%'
		})
		$('.lights-wrap').css({
			width: $(window).width(),
			height: $(document).height()
		})
		$('.lights-wrap').css({
			width: $(window).width(),
			height: $(document).height()
		})
		if ($(window).width()>700) {
			var top = $(window).height()/2 - card.height()/2
			if (top<30) top = 30
			card.css({
				marginTop:0,
				top:top
			})
		}
		else {
			card.css({marginTop:'', top:''})	
		}
		updateScrolls()
	}
	responsiveFix();
	$(window).resize(function(){
		responsiveFix();	
	})
	
	//Contact Form
	$('.contact-form #email, .contact-form textarea').each(function(index, element) {
        var defaultVal = $(this).val()
		$(this).focus(function(){
			if ($(this).val()==defaultVal) $(this).removeClass('default').val('')	
		})
		$(this).blur(function(){
			if ($(this).val()=='') $(this).addClass('default').val(defaultVal)	
		})
    });
	$('.contact-form').submit(function(e) {
        e.preventDefault()
		var form = $(this)
		var email = $('.contact-form #email').val()
		var message = $('.contact-form textarea').val()
		if (!validateEmail(email)) $('.contact-form #email').addClass('required')
		else $('.contact-form #email').removeClass('required')
		
		if (message.length==0) $('.contact-form textarea').addClass('required')
		else $('.contact-form textarea').removeClass('required')
		if (form.find('.required').length>0) return false;
		else {
			$.get('includes/send-message.php', {email : email, message : message}, function(data){
				form.slideUp(300, function(){
					form.html(data).slideDown(300)	
				})	
			})	
		}
		
    });
	
	function validateEmail(email) {
		var re = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|mobi|travel))$/i;
		if(re.test(email)) return true
		else return false;
	}
});


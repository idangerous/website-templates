var lz = {
	//Count time to date
	date: '01.01.2014-00:00',
	onTimerStop : function(){}, 
	rotateLights : true,
	lightsDuration : 15000,
	
	//Orbits enable/disable
	orbits:true,
	
	//Animated Blinking Colon
	blinkingColon : false,
	
	//Google Map
	gm : {
		latitude : 55.7518,
		longitude : 37.6179,
		zoom : 11,
		mapElementID : "map_canvas",
		markerTitle : "LauncherZ Inc",
		bubbleHTML : "<strong>LauncherZ Inc</strong> <br/>"
					 +"114 Second Lane Street, <br/>"
					 +"344013 Rostov-na-Donu"
	}
}
$(function(){
	$.extend(lz,{
		p : $('.popup'),
		pl : $('.popup-layer'),
		use3d : Modernizr.csstransforms3d,
		css3 : Modernizr.csstransitions,
		animating : false,
		second2 : $('.seconds span:last'),
		second1 : $('.seconds span:first'),
		minutes : $('.minutes span'),
		hours : $('.hours span'),
		days : $('.days span')
	})
	/*----------Current and target dates----------- */
	var currentDate = new Date();
	var timeZoneOffset = currentDate.getTimezoneOffset()/60;
	var target = lz.date.split('-')[0].split('.')
	var time = lz.date.split('-')[1].split(':')
	var targetDate = new Date(target[2], target[1]*1-1, target[0]*1, time[0]*1-timeZoneOffset, time[1]*1, 0, 0);
	/*----------Difference between target and current date----------- */
	var diff = {};
		diff.ms = targetDate.getTime() - currentDate.getTime()
		diff.days = Math.floor((diff.ms)/(1000 * 60 * 60 * 24));
		diff.hours = (diff.ms - diff.days*(1000 * 60 * 60 * 24))/(1000 * 60 * 60);
		diff.fullHours = Math.floor(diff.hours);
		diff.mins = (diff.hours - diff.fullHours)*60;
		diff.fullMins = Math.floor(diff.mins);
		diff.seconds = (diff.mins - diff.fullMins)*60;
		diff.fullSec = Math.floor(diff.seconds);
	if (diff.fullHours<10) diff.fullHours = "0"+diff.fullHours;
	if (diff.fullMins<10) diff.fullMins = "0"+diff.fullMins;
	if (diff.fullSec<10) diff.fullSec = "0"+diff.fullSec;
	
	var stopTimer = false
	if (diff.days<0) {
		diff.fullSec = 0
		diff.fullMins = '00'
		diff.fullHours = '00'
		diff.days = 0
		stopTimer = true
	}
	$(".days span").html(diff.days);
	$(".hours span").html(diff.fullHours);
	$(".minutes span").html(diff.fullMins);
	if ((diff.fullSec+"").length==2) {
			var second1 = (diff.fullSec+"").substr(0,1);
			var second2 = (diff.fullSec+"").substr(1,1);
	}
	else {
			var second1 = 0;
			var second2 = diff.fullSec;
	}
	$(".seconds span:first").html(second1);
	$(".seconds span:last").html(second2);
	
	function changeDay(){
			var currentDay = lz.days.html()*1;
			var newDay = currentDay-1;
			if (newDay < 100 && newDay >= 10) newDay = "0"+newDay;
			if (newDay < 10) newDay = "00"+newDay;
			changeDigit(lz.days, newDay)
	}
	function changeHour(){
			var currentHour = lz.hours.html()*1;
			var newHour = currentHour-1;
			if (newHour < 0) {
				newHour = 23;
				changeDay();
			}
			if (newHour < 10 && newHour >= 0) newHour = "0"+newHour;
			changeDigit(lz.hours, newHour)
	}
	function changeMinute(){
			var currentMin = lz.minutes.html()*1;
			var newMin = currentMin-1;
			if (newMin < 0) {
				newMin = 59;
				changeHour();
			}
			if (newMin < 10 && newMin >= 0) newMin = "0"+newMin;
			changeDigit(lz.minutes, newMin)
	}
	function changeFirstSecond(){
			var currentSecond = lz.second1.html()*1;
			var newSecond = currentSecond-1;
			if (newSecond <0 ) {
				newSecond = 5;
				changeMinute();
			}
			changeDigit(lz.second1, newSecond)
	}
	if ( !stopTimer) {
		setInterval(function(){
				var currentSecond = $(".seconds span:last").html()*1;
				var newSecond = currentSecond-1;
				if (newSecond <0 ) {
					newSecond = 9;
					changeFirstSecond();
				}
				changeDigit(lz.second2, newSecond)
		},1000);


	}
	else {
		if(lz.onTimerStop) lz.onTimerStop();	
	}
	
	function changeDigit(el, val) {
		if (lz.css3) 
			el
				.css({opacity:0})
				.transform({
					transform: 'translate3d(0,0,-500px)',
					time:300	
				})
				.transitionEnd(function(){
					$(this).html(val)
					.css({opacity:1})
					.transform({
						transform: 'translate3d(0,0,0px)',
						time:300	
					})	
				})
		else		
			el.fadeTo(300,0, function(){
				$(this).html(val).fadeTo(300,1)
			})	
	}
	/* 
	   ========================
	   Mobile Scroll
	   ======================== 
	*/
	$(window).scrollTop(0);
	/* 
	   ========================
	   Init Gmap
	   ======================== 
	*/
	if (lz.gm) {
		$("body").append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
	}
		
	/* 
	   ========================
	   Rotate BG Lights
	   ======================== 
	*/
	
	if (lz.rotateLights) {
		$('.lights').data('rotate',0);
		function rotateBGLights() {
			var rotate = $('.lights').data('rotate')*1+360;
			$('.lights').transform({
				transform:'rotate('+rotate+'deg)',
				time:lz.lightsDuration,
				ease:'linear'	
			})	
			$('.lights').data('rotate',rotate);
		}
		rotateBGLights();
		setInterval(function(){ rotateBGLights() }, lz.lightsDuration)
	}
	if (lz.orbits&&lz.use3d) {
		$('.clock').prepend('<div class="orbit orbit1"></div><div class="orbit orbit2"></div>');
		
		$('.orbit2').data('rotate',0).transform({
			transform:'rotateX(65deg) rotateY(-20deg) rotateZ('+0+'deg) translate3d(0,0,-20px)',
			time:0	
		});
		$('.orbit1').data('rotate',0).transform({
			transform:'rotateX(65deg) rotateY(20deg) rotateZ('+0+'deg) translate3d(0,0,-20px)',
			time:0	
		});
		function rotateOrbits() {
			var rotate2 = $('.orbit2').data('rotate')*1+360;
			$('.orbit2').transform({
				transform:'rotateX(65deg) rotateY(-20deg) rotateZ('+rotate2+'deg) translate3d(0,0,-20px)',
				time:6000,
				ease:'linear'	
			})	
			$('.orbit2').data('rotate',rotate2);
			
			var rotate1 = $('.orbit1').data('rotate')*1-360;
			$('.orbit1').transform({
				transform:'rotateX(65deg) rotateY(20deg) rotateZ('+rotate1+'deg) translate3d(0,0,-20px)',
				time:6000,
				ease:'linear'	
			})	
			$('.orbit1').data('rotate',rotate1);
		}
		setTimeout(function(){rotateOrbits()},0);
		setInterval(function(){ rotateOrbits() }, 6000)
	}
	if (lz.blinkingColon) {
		$('.minutes').append('<i>:</i>');
		lz.colon = $('.minutes i');
		setInterval(function(){
			lz.colon.hide()
			setTimeout(function(){lz.colon.show()},500)	
		},1000)	
	}
	
	/* 
	   ========================
	   Popup
	   ======================== 
	*/
	$('.loadContent').live('click', function(e){
		e.preventDefault();
		$.get($(this).data('content'), {}, function(data){
			lz.p.css({opacity:0, display:'block'})
			lz.p.find('.popup-content').html(data)
			var pTop = $(window).height()/2 - lz.p.outerHeight()/2;
			if (pTop<30) pTop = 30;
			lz.p.css({top:pTop}).transform({transform:'scale(0.5)', time:0})
			if (!lz.css3) lz.p.hide()
			setTimeout(function(){
				if (lz.css3)
					lz.p.css({opacity:1}).transform({transform:'scale(1)', time:300})	
				else 
					lz.p.fadeTo(300,1)
			},0)
			
			lz.pl.fadeIn(300)
			
			//Init Content
			initContent();
		});	
	})
	$('.popup-layer,.popup-close').click(function(e) {
        e.preventDefault();
		closePopup();
    });
	function closePopup() {
		lz.pl.hide();
		lz.p.hide();	
	}
	/* 
	   ========================
	   Inti Content
	   ======================== 
	*/
	function initContent() {
		//Google Maps
		if( $("#"+lz.gm.mapElementID).length>0) {
			initGMap();
		}
		
		//Form
		$('form.contacts input[type="text"], form.contacts textarea').each(function(index, element) {
            var defaultText = $(this).val();
			var t = $(this);
			t.focus(function(){
				if (t.val()==defaultText) t.val('').removeClass('default')	
			})
			t.blur(function(){
				if (t.val()=='') t.val(defaultText).addClass('default')	
			})
        });
		
		$('.contacts .button').click(function(e){
			e.preventDefault()
			var field = $('.contacts #email')
			validateEmail( field )
			validateMessage ($('.contacts textarea'))
			if ($('.contacts .required').length>0) return
			else {
				$.get('includes/send-message.php', {
						message : $('.contacts #message').val(),
						name : $('.contacts #name').val(),
						email : $('.contacts #email').val(),
						subject : $('.contacts #subject').val()
					},
					function(data) {
						$('.contacts').slideUp(300, function(){
							$(this).html(data).delay(300).slideDown(300)
						})
					}
				)
			}
		})
		
		$('.subscribe .button').click(function(e){
			e.preventDefault()
			var field = $('.subscribe input.text')
			validateEmail( field )
			if (field.hasClass('required')) return
			else {
				$.get('includes/send-email.php', {email: field.val()}, function(data){
					$('.subscribe').slideUp(300, function(){
						$(this).html(data).delay(300).slideDown(300)
					})
				})
			}
		})	
		
		
	}
	/* 
	   ========================
	   Responsive Fixes
	   ======================== 
	*/
	function responsiveResize() {
		if ( $(window).height()<500 || $(window).width()<=600) {
			$('body').addClass('low-height')	
		}
		else {
			$('body').removeClass('low-height')	
		}
        
		
		$('.lights-wrap').css({
			height: $(document).height(),
			width: $(window).width()	
		})
		
		$('.lights-wrap').css({
			height: $(document).height(),
			width: $(window).width()	
		})
		
		if ($('.popup:visible').length>0) {
			var pTop = $(window).height()/2 - lz.p.outerHeight()/2;
			if (pTop<30) pTop = 30;
			lz.p.transform({time:0}).css({top:pTop})	
		}
		
	}
	responsiveResize()
	
	$(window).resize(function(e) {
		responsiveResize()
    });
	
	
});
//Helpers
function validateMessage(field) {
	if (field.val()=='' || field.val()=='Message...') field.addClass('required')
	else field.removeClass('required')
}
function validateEmail(field) {
	var emailInput = field
	var email = emailInput.attr("value");
	var re = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|mobi|travel))$/i;
	if(re.test(email)) emailInput.removeClass("required");
	else emailInput.addClass("required");
}
function initGMap() {
	if( $("#"+lz.gm.mapElementID).length==0 ) return
    var latlng = new google.maps.LatLng(lz.gm.latitude, lz.gm.longitude);
    var myOptions = {
      zoom: lz.gm.zoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(lz.gm.mapElementID),
        myOptions);
	var contentString = lz.gm.bubbleHTML;

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	var marker = new google.maps.Marker({
		  position: latlng, 
		  map: map, 
		  title:lz.gm.markerTitle
	  }); 
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
};
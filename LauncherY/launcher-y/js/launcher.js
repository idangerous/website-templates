/*===========================
  LauncherY Template Configuration
  ===========================*/
window.ly = {
	
	//Count time to date
	date: '01.01.2013-00:00', 
	
	//Twitter
	twitter : {
		username : 'idangerous',
		numberOfTweets : 2,
		loadingText : '<li class="tweets_load">Loading tweets...</li>',
		tweetFormat : '<li class="single-tweet">'
					+ '<p class="tweet-text">'
					+ '%tweetText'
					+ '</p>'
					+ '<p class="tweet-date">on %tweetDate</p>'
					+ '</li>'
	},
	
	//Google Map
	gm : {
		latitude : 55.7518,
		longitude : 37.6179,
		zoom : 11,
		mapElementID : "map_canvas",
		markerTitle : "LauncherY Inc",
		bubbleHTML : "<strong>LauncherY Inc</strong> <br/>"
					 +"114 Second Lane Street, <br/>"
					 +"344013 Rostov-na-Donu"
	},
	
	//Google Analytics
	ga : 'UA-XXXXX-X',
		
	//FaceBook App
	fbApp : true,
	
	//Moover Slider Config
	moover : {
		navigation : '.moover-pagination',
		navigationActive : true,
		transformPreset : 'default',
		slideTime : 500,
		effects : {
			'1' : {
				effect : 'fader',
				afterFadeHoldTime: 3000
			},
			'2' : {
				effect : 'fader',
				fadeType : 'vertical',
				afterFadeHoldTime: 3000
			},
			'3' : {
				effect : 'slide',
				moveTime : 4000
			},
			'4' : {
				effect : 'typewriter',
				textHoldTime : 3000,
				transformPreset : 'rain-elastic',
				timingPreset : 'slow-short'
			}
		}
	}
};
/*===========================
  End Of Configuration
  ===========================*/

$(function(){
	/*----------Current and target dates----------- */
	var currentDate = new Date();
	var timeZoneOffset = currentDate.getTimezoneOffset()/60;
	var target = ly.date.split('-')[0].split('.')
	var time = ly.date.split('-')[1].split(':')
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
	
	$(".day").html(diff.days);
	$(".hour").html(diff.fullHours);
	$(".minute").html(diff.fullMins);
	if ((diff.fullSec+"").length==2) {
			var second1 = (diff.fullSec+"").substr(0,1);
			var second2 = (diff.fullSec+"").substr(1,1);
	}
	else {
			var second1 = 0;
			var second2 = diff.fullSec;
	}
	$(".second1").html(second1);
	$(".second2").html(second2);
	function changeDay(){
			var currentDay = $(".day:first").html()*1;
			var newDay = currentDay-1;
			if (newDay < 100 && newDay >= 10) newDay = "0"+newDay;
			if (newDay < 10) newDay = "00"+newDay;
			$(".d-wrap").prepend('<div class="day">'+newDay+'</div>');
			$(".day:eq(0),.day:eq(1)").animate({top:"+=80px"},2500,function(){$('.day:eq(1)').remove()});
	}
	function changeHour(){
			var currentHour = $(".hour:first").html()*1;
			var newHour = currentHour-1;
			if (newHour < 0) {
				newHour = 23;
				changeDay();
			}
			if (newHour < 10 && newHour >= 0) newHour = "0"+newHour;
			$(".h-wrap").prepend('<div class="hour">'+newHour+'</div>');
			$(".hour:eq(0),.hour:eq(1)").animate({top:"+=80px"},2000,function(){$('.hour:eq(1)').remove()});
	}
	function changeMinute(){
			var currentMin = $(".minute:first").html()*1;
			var newMin = currentMin-1;
			if (newMin < 0) {
				newMin = 59;
				changeHour();
			}
			if (newMin < 10 && newMin >= 0) newMin = "0"+newMin;
			$(".m-wrap").prepend('<div class="minute">'+newMin+'</div>');
			$(".minute:eq(0),.minute:eq(1)").animate({top:"+=80px"},1500,function(){$('.minute:eq(1)').remove()});
	}
	function changeFirstSecond(){
			var currentSecond = $(".second1:first").html()*1;
			var newSecond = currentSecond-1;
			if (newSecond <0 ) {
				newSecond = 5;
				changeMinute();
			}
			$(".s-wrap").prepend('<div class="second1">'+newSecond+'</div>');
			$(".second1:eq(0),.second1:eq(1)").animate({top:"+=80px"},500,function(){$('.second1:eq(1)').remove()});
	}
	
	if ( $('.clock').length>0 && !stopTimer) {
		setInterval(function(){
				var currentSecond = $(".second2:first").html()*1;
				var newSecond = currentSecond-1;
				if (newSecond <0 ) {
					newSecond = 9;
					changeFirstSecond();
				}
				$(".s-wrap").prepend('<div class="second2">'+newSecond+'</div>');
				$(".second2:eq(0),.second2:eq(1)").animate({top:"+=80px"},500,function(){$('.second2:eq(1)').remove()});
		},1000);
		setTimeout(function(){$(".divider").hide()},500)
		setInterval(function(){
				$(".divider").show()
				setTimeout(function(){$(".divider").hide()},500)	
		},1000)
	}
	
	
	/*======== Initialization =========*/

	$.extend(ly,{
		hasT : Modernizr.csstransitions,
		has3d : Modernizr.csstransforms3d,
		content : $('.content-loader'),
		isAnimating : false,
		activePage : false,
		activePopup : false,
		mooverIsVisible : $('.moover:visible').length>0,
		mooverContent : $('.moover')[0].outerHTML,
		ga : ly.ga.indexOf('XXXX')>=0 ? false : ly.ga
	})
	
	// Determine FaceBook App
	ly.isFB = ly.fbApp === true ? (window.parent.length > 0 && document.referrer.indexOf('facebook.com')>=0) : false;
	
	//Add Dummy DIV
	$('body').append('<div class="ly-dummy"></div>');
	$('.ly-dummy').css({display:'none', opacity:0, visibility:'hidden'})
	
	//Init FaceBook App Canvas
	if (ly.isFB) {
		$('html, body').css({overflow:'hidden'});
		$('body').append('<div id="fb-root"></div>');
		window.fbAsyncInit = function() {
			FB.init({appId: '', status: true, cookie: true, xfbml: true});
			window.setTimeout(function() {
				FB.Canvas.setAutoGrow();
				FB.Canvas.scrollTo(0,0);
			}, 1000);
		};	
		(function() {
			var e = document.createElement('script'); e.async = true;
			e.src = document.location.protocol + '//connect.facebook.net/ru_RU/all.js';
			document.getElementById('fb-root').appendChild(e);
		}());
	}
	
	//Google Analytics Tracking Code
	if (ly.ga) {
		window._gaq=[['_setAccount', ly.ga],['_trackPageview']];
		(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
		g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g,s)}(document,'script'));
	}
	//Scroll Fix for Mobiles
	$(window).scrollTop(0)
	
	//Init Transitions
	if (ly.hasT) {
		$('.social-icons a, .menu a').lTransform({time:200})
	}	
	
	//Twitter Feed
	if ( $('.twitterfeed').length>0 && ly.twitter.username!='' ) {
		$('.twitterfeed').idTwitter(ly.twitter)
	
	}
	
	//Init Gmap
	if (ly.gm) {
		$("body").append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
	}
	
	/*============ Resize Fixes =============*/
	function fixClockPane() {
		if ($(window).width()>800) {
			if ( $('.clock-pane').length==0 ) return
			var panelWidth = Math.floor($(window).width()/2+158)
			if (panelWidth>736) panelWidth = 736
			$('.clock-pane').css({width:panelWidth})
		}
	}
	function fixContent() {
		if ('onorientationchange' in window) {
			return
		}
		else {
			if ( $('.content-loader:visible').length>0 ) {
				if (!ly.has3d) {
					$('.content-loader').css({height:'auto'})
				}
				else {
					$('.content-loader')
					.css({height: $('.page').outerHeight() })
				}
			}
		}
	}
	function fixMobileMoover(){
		if ( $('.moover').length == 0 ) return;
		if (!ly.mooverIsVisible) {
			if ($('.moover:visible').length>0) {
				$('.moover').replaceWith(ly.mooverContent);
				$('.moover').moover(ly.moover);
				ly.mooverIsVisible = true;
			}
		}
		else {
			ly.mooverIsVisible = $('.moover:visible').length>0
		}
	}
	function fixMooverOnFocus(){
		if ( $('.moover').length == 0 ) return;
		if ($('.moover:visible').length>0) {
			$('.moover').replaceWith(ly.mooverContent);
			$('.moover').moover(ly.moover);
		}
	}
	$(window).bind('orientationchange', function(e){
		setTimeout(function(){fixMobileMoover()},200);
		if ( $('.content-loader:visible').length>0 ) {
			if (!ly.has3d) {
				$('.content-loader').css({height:'auto'})
			}
			else {
				$('.content-loader')
				.css({height: $('.page').outerHeight() })
			}
		}
	})
	
	$(window).resize(function(){
		fixClockPane();
		fixContent();
	})
	
	window.onfocus = fixMooverOnFocus;
	
	fixClockPane()
	
	
	
	
	//Content Offset-Top
	ly.content.show()
	ly.contentOffset = ly.content.offset().top
	ly.content.hide()
	
	
	
	/*======== Slider =========*/
	if ($('.moover').length!=0) {
		$('.moover').moover(ly.moover);
	}
	
	/*=========== Themes Switcher =========*/
	$('a.switch-theme').live('click', function(e){
		e.preventDefault()
		var newClass = $(this).attr('data-theme');
		$('body').removeAttr('class').addClass(newClass);
		var logoFolder = 'black';
		if (newClass == 'inverse') logoFolder = 'inverse';
		if (newClass.indexOf('blue')>=0) logoFolder = 'blue';
		if (newClass.indexOf('orange')>=0) logoFolder = 'orange';
		$('a.logo > img').attr({src : 'img/'+logoFolder+'/logo.png'});
	})
	
	
	/*=========== Functions =========*/
	
	//Load Content
	$('.menu a').click(function(e){
		e.preventDefault();
		var href = $(this).attr('data-page');
		if ( $(this).hasClass('loadPopup') || $(this).hasClass('external')) {
			return;
		}
		else {
			loadContent(href, $(this) );
		}
	})
	$('a.loadContent').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr('data-page');
		loadContent(href, $(this) );
		
	})
	
	//Load Popups
	$('a.loadPopup').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr('data-page');
		loadPopup(href, $(this));
	})
	
	//Load Popup Function
	function loadPopup(href, link) {
		if ( ly.isAnimating ) return
		if ( ly.activePopup == href ) return
		
		if ( $('.popup:visible').length==0 ) {
			showLoader();
			var popup = $('.popup');
			if (ly.isFB) FB.Canvas.scrollTo(0,0);
			
			if (!ly.has3d) $('.popup-layer').fadeIn(300);
			else {
				$('.popup-layer').css({opacity:0, display:'block'}).lTransform({time:500})
				setTimeout(function(){
					$('.popup-layer').css({opacity:0.7, display:'block'})
				},50)
				popup.lTransform({transform:'translate3d(0, 0,0)', time:0, delay:0}).show()
			}
			
			function showPopup(data) {
				hideLoader();
				$('.popup-content').html(data)
			
				if (ly.has3d) {
					popup.css({top: -popup.height() - 50});
					setTimeout(function(){
						popup
						.lTransform({transform:'translate3d(0, 0,0)', time:500, delay:300})
						.css({top: ($(window).scrollTop()+100)})
						.lTransitionEnd(function(){
							ly.isAnimating = false;
							initContentPage( $('.popup') );
						})
					},50)
				}
				else {
					popup.show()
					popup.css({top: -popup.height() - 50}).delay(300).animate({top:($(window).scrollTop()+100) }, 500, function(){
						popup.css({height:popup.height()})
						ly.isAnimating = false;
						initContentPage( $('.popup') );
					})
				}
			}
			$.get(href, showPopup);
		
		}
	}
	$('.popup-close').click(function(e){
		e.preventDefault()
		closePopup()
	})
	//Close Popup
	function closePopup() {
		var popup = $('.popup')
		if (ly.has3d) {
			popup
			.lTransform({delay:0, time:300, transform:'translate3d(0,0px,0)'}).css({top: -popup.height() - 50})
			.lTransitionEnd(function(){
				$('.popup-content').html('')
				popup.css({height:'auto', display:'none'})
				ly.activePopup=''
				$('.popup-layer').hide()
			})
			$('.popup-layer').css({opacity:0}).lTransform({time:300})
		}
		else {
			$('.popup-layer').fadeOut(300)
			popup.animate( { top: -popup.height() - 50, height:0 } , 300, function(){
				$('.popup-content').html('')
				popup.css({height:'auto', display:'none'})
				ly.activePopup=''
				popup.hide()
			} )
		}
	}
	//Load Content Function
	function loadContent(href, link) {
		if (ly.isAnimating) return;
		if ( ly.activePage == href ) return;
		
		showLoader();
		$.get( href ,function(data){
			$('.menu .active').removeClass('active');
			$('.menu a[data-page="'+href+'"]').addClass('active');
			
			ly.activePage=link.attr('data-page');
			ly.isAnimating = true;
			
			
			if ( ($(window).scrollTop()+$(window).height()) < ly.contentOffset ) {
				if($('html').css('scrollTop')===null) {
					$('body').animate({scrollTop: ly.contentOffset-50},600, function(){ preloadImages() })
				}
				else {
					$('html').animate({scrollTop: ly.contentOffset-50},600, function(){ preloadImages() })
				}
			
			}
			else {
				preloadImages()
			}
			function preloadImages() {
				$('.ly-dummy').html(data);
				var imagesLength = $('.ly-dummy img').length
				if (imagesLength==0) animateContent();
				else {
					var counter = 0;
					for(var i=0; i<imagesLength; i++) {
						var image = new Image();
						image.onload = function(){
							counter++;
							if (counter == imagesLength) animateContent();
						}
						image.src = $('.ly-dummy img')[i].src;
					}
				}
			}
			function animateContent() {
				hideLoader();
				var content= ly.content
				if (content.find('.page').length==0) {
					content.append('<div class="page new-page">'+data+'</div>')
					initContentPage()
					var page = content.find('.page:last')
					var translate = $(window).width()-$('.content').offset().left
					
					if (ly.has3d) {
						page.lTransform({transform:'translate3d('+(translate)+'px,0px,0px)', time:0})
						content.slideDown(400,function(){
							setTimeout(function(){
								page.lTransform({transform:'translate3d(0px,0px,0px)', time:900, ease:'cubic-bezier(1, 0, 0.8, 1.2)'})
								.lTransitionEnd(function(){
									content.lTransform({time:900})
									ly.isAnimating = false
								})
								content.css({height: page.outerHeight()-2})
							},50)
							
						})
					}
					else {
						page.css({left:translate})
						content.slideDown(400,function(){
							page.animate({left:0},900, function(){
								ly.isAnimating = false
								content.css({height: page.outerHeight()-2})
							})
						})
					}
				}
				else {
					content.append('<div class="page" style="position:absolute; top:0px; left:50%; margin-left:-'+content.find('.page').outerWidth()/2+'px">'+data+'</div>')
					initContentPage()
					var page = content.find('.page:last')
					var pageOld = content.find('.page:first')
					
					var contentHeight = Math.floor(page.outerHeight())-2
					var maxPageHeight = pageOld.height()
					if (page.outerHeight()>pageOld.outerHeight()) var maxPageHeight = page.height()
					
					var translate = $(window).width()-$('.content').offset().left
					if (ly.has3d) {
						page.lTransform({transform:'translate3d('+translate+'px,0px,0px)', time:0})
						setTimeout(function(){
							content.css({height:contentHeight})
							pageOld.lTransform({transform:'translate3d(-'+translate+'px,0px,0px)', time:900, ease:'cubic-bezier(1, 0, 0.8, 1.2)'})
							page.lTransform({transform:'translate3d(0px,0px,0px)', time:900, ease:'cubic-bezier(1, 0, 0.8, 1.2)'})
							.lTransitionEnd(function(){
								page.lTransform({time:0})
								pageOld.remove()
								page.css({
									position:'static',
									marginLeft:'auto',
									marginRight:'auto'
								})
								ly.isAnimating = false
							})
						},50)
					}
					else {
						page.css({ marginLeft: translate -  content.find('.page').outerWidth()/2})
						content.animate({height:contentHeight},900)
						pageOld.animate({left:-translate},900)
						page.animate({marginLeft: -content.find('.page').outerWidth()/2},900,function(){
							pageOld.remove()
							page.css({
								position:'relative',
								left:0,
								top:0,
								marginLeft:'auto',
								marginRight:'auto'
							})
							ly.isAnimating = false
						})
					}
				}
			}
		})
		.error(function() { 
			hideLoader();
			ly.isAnimating = false;
			ly.activePage = false;
		})
	}
	
	//Close Content
	$('.content-close').click(function(e){
		if(ly.isAnimating) return
		ly.isAnimating = true
		
		$('.menu .active').removeClass('active')
		if (ly.has3d) {
			$('.content-loader').css({height:0})
			.lTransitionEnd(function(){
				$('.content-loader .page').remove()
				ly.isAnimating = false;
				ly.activePage = false;
			})
		}
		else {
			$('.content-loader').slideUp(900, function(){
				$('.content-loader .page').remove()
				ly.isAnimating = false;
				$('.content-loader').css({height:'auto'});
				ly.activePage = false;
			})
		}
	})
	
	
	function initContentPage() {
		
		//Google Maps
		if( $("#"+ly.gm.mapElementID).length>0) {
			initGMap()
		}
		
		//Contacts Form
		if ( $('.contacts').length>0 ) {
			$('.contacts .text').each(function(){
				var val = $(this).val()
				$(this).focus(function(){
					if ($(this).val()==val) $(this).val('').css('color','#333')
				})
				$(this).blur(function(){
					if ($(this).val()=='') $(this).val(val).css('color','#888')
				})
			})
			$('.contacts #message').keyup(function(){ validateMessage( $(this) ) })
			$('.contacts #email').keyup(function(){ validateEmail( $(this) ) })
			$('.contacts .button').click(function(e){
				e.preventDefault()
				var field = $('.contacts #email')
				validateEmail( field )
				validateMessage ($('.contacts textarea'))
				if ($('.contacts .required').length>0) return
				else {
					showLoader();
					$.get('includes/send-message.php', {
							message : $('.contacts #message').val(),
							name : $('.contacts #name').val(),
							email : $('.contacts #email').val(),
							subject : $('.contacts #subject').val()
						},
						function(data) {
							hideLoader();
							$('.contacts').slideUp(300, function(){
								$(this).html(data).delay(300).slideDown(300)
							})
						}
					)
				}
			})
		} //<- Contact Form
		
	}
	
	//Send E-Mail
	$('.subscribe .button').click(function(e){
		e.preventDefault()
		var field = $('.subscribe input.text')
		validateEmail( field )
		if (field.hasClass('required')) return
		else {
			showLoader();
			$.get('includes/send-email.php', {email: field.val()}, function(data){
				hideLoader();
				$('.subscribe').slideUp(300, function(){
					$(this).html(data).delay(300).slideDown(300)
				})
			})
		}
	})
	
	
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
});
function showLoader() {
	$('.ajax-loader').show();
}
function hideLoader() {
	$('.ajax-loader').hide();
}
function initGMap() {
	if( $("#"+ly.gm.mapElementID).length==0 ) return
    var latlng = new google.maps.LatLng(ly.gm.latitude, ly.gm.longitude);
    var myOptions = {
      zoom: ly.gm.zoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(ly.gm.mapElementID),
        myOptions);
	var contentString = ly.gm.bubbleHTML;

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	var marker = new google.maps.Marker({
		  position: latlng, 
		  map: map, 
		  title:ly.gm.markerTitle
	  }); 
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
};

$.fn.lTransitionEnd = function(callback) {
	return this.each(function(){
		var _this = this;
		var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
		if (callback) {
			
			function fireCallBack() {
				callback.call(this);
				for (var i=0; i<events.length; i++) {
					_this.removeEventListener(events[i], fireCallBack, false)
				}
			}
			for (var i=0; i<events.length; i++) {
				_this.addEventListener(events[i], fireCallBack, false)
			}
		}
	})
};
$.fn.lTransform = function(params) {
	return this.each(function(){
		var es = $(this)[0].style
		if (params.transform) {
			if (!Modernizr.csstransforms3d && params.transform.indexOf('translate3d')>=0) {
				var tr = params.transform.split('translate3d(')[1].split(')')[0].split(',')
				var before = params.transform.split('translate3d(')[0]
				var after = params.transform.split('translate3d(')[1].split(')')[1]
				params.transform = before+' translateX('+tr[0]+') translateY('+tr[1]+') '+after
			}
			if (Modernizr.csstransforms3d && params.transform.indexOf('translate')<0) {
				params.transform+=' translate3d(0px,0px,0px)'
			}
			es.webkitTransform = es.MsTransform = es.MozTransform = es.OTransform = es.transform = params.transform
		}
		if (params.time||params.time===0) {
			es.webkitTransitionDuration = es.MsTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = params.time/1000+'s'
		}
		if (params.delay||params.delay===0) {
			es.webkitTransitionDelay = es.MsTransitionDelay = es.MozTransitionDelay = es.OTransitionDelay = es.transitionDelay = params.delay/1000+'s'
		}
		if (params.origin) {
			es.webkitTransformOrigin = es.MsTransformOrigin = es.MozTransformOrigin = es.OTransformOrigin = es.transformOrigin = params.origin
		}
		if (params.ease) {
			es.webkitTransitionTimingFunction = es.MsTransitionTimingFunction = es.MozTransitionTimingFunction = es.OTransitionTimingFunction = es.transitionTimingFunction = params.ease
		}
		es.webkitTransitionProperty = es.MsTransitionTransitionProperty = es.MozTransitionTransitionProperty = es.OTransitionProperty = es.transitionProperty = 'all'
		
	})
};
/*
iDangero.us jQuery Twitter Feed
------------------------
Version - 1.1
*/
(function($) {
	$.fn.idTwitter = function(a,callback) {
		var tweetContainer = this;
		this.html(a.loadingText)
		$.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+a.username+"&count="+a.numberOfTweets+"&include_entities=true&include_rts=true&callback=?",
		function(tweetData){
			tweetContainer.html("")
			$.each(tweetData, function(i,tweet) {
				var tweetDate = tweet.created_at.substr(0,20);
				var tweetText = tweet.text;
				for (var i =0; i<tweet.entities.user_mentions.length; i++) {
					var mentioned = tweet.entities.user_mentions[i].screen_name;
					tweetText = tweetText.replace('@'+mentioned,'<a href="http://twitter.com/'+mentioned+'">@'+mentioned+'</a>')	
				}
				for (var i =0; i<tweet.entities.urls.length; i++) {
					var uRL = tweet.entities.urls[i].url;
					tweetText = tweetText.replace(uRL,'<a href="'+uRL+'">'+uRL+'</a>')	
				}
				var readyTweet = a.tweetFormat.replace(/%username/g,a.username)
					readyTweet = readyTweet.replace(/%tweetDate/g,tweetDate)
					readyTweet = readyTweet.replace(/%tweetText/g,tweetText)
				tweetContainer.append(readyTweet);
			})
			if(callback) callback()
		})
	}
})(jQuery);




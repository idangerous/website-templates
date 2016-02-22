jbc = {
	
	/* Page Transitions Duration */
	
	collapseTime : 1200,	
	expandTime : 1200,	
	slideTime : 3200,
	animateSlider : true,
	
	zoomFrameDur : 2000,
	brokenScreenDur : 2000,
	
	/* Popup Duration */
	
	puRotate : 600,
	puMagicContent : 2000,
	puMagicImage : 2000,
	puContentWidth : 600,
	
	/* Portfolio Content Opener (poc) */
	
	pocWithMagic : true,
	
	/* Common Setting */
	
	disableAjax : false,
	scrollTopWithJump : true,
	subMenuOnTop : true,
	airySubMenu : true,	
	ie6pngFix : "img, .png_bg, div, .submenu, .menu-ie-wrapper, h3, h2,.folio-layer, span, li, a",
	
	/* Google Analytics */
	
	gaSiteID : "UA-XXXXX-X", /* Change UA-XXXXX-X to be your site's ID */
	
	/* Google Web Fonts*/
	
	useGoogleFonts : true,
	googleFont : "Lobster Two", /* You can try these fonts: "Lobster", "Rochester", "Kreon", "Lobster Two", "PT Sans Narrow", "PT Serif", "Dancing Script", "Metrophobic", "Yanone Kaffeesatz", "Maiden Orange" */
	replaceFontsFor : "h3.inner-heading, h2.content-heading, .small-heading, .menu-link a, .module-title, .footer-link,.folio-title, .post-title, .cufoned, .bd-day, .bd-my",
		
	/* Google Maps */
	
	googleMaps : true,
	gm : {
		latitude : 55.7518,
		longitude : 37.6179,
		zoom : 11,
		mapElementID : "map_canvas",
		markerTitle : "jBox.Corporate Ltd",
		bubbleHTML : "<strong>jBox.Corporate Ltd</strong> <br/>"
					+"114 Second Lane Street, <br/>"
					+"344013 Rostov-na-Donu"
	},
	
	/* TwitterFeed */
	
	twitterFeed : {
		container : ".tweets",
		username : "idangerous",
		numberOfTweets : 3,
		loadingText : '<li class="tweets_load">Loading tweets...</li>',
		tweetFormat : '<li class="single-tweet">'
					+ '<p class="tweet-text">'
					+ '%tweetText'
					+ '</p>'
					+ '<p class="tweet-date">on %tweetDate</p>'
					+ '</li>'
	},
	
	/* Chop Slider Parameters */
	
	chopSlider : {
		loader : "#slide-loader",
		loaderIndex : 4000,
		slide : ".sl-slide",
		nextTrigger : "a#slide-next",
		prevTrigger : "a#slide-prev",
		useCaptions : false,
		type: "vertical",
		xOffset: 0,
		yOffset: 0,
		hPieces : 60,
		vPieces: 50,
		rotate : -360 ,
		rotateSymmetric: false,
		scaleX:0,
		scaleY:0,
		translateX:500,
		translateY:500,
		ease1:!isWebKit() ? "cubic-bezier(1.0, -0.5, 0.0, 1.0)" : "ease",
		ease2:!isWebKit() ? "cubic-bezier(1.0, 1.5, 0.0, 1.0)" : "ease",
		origin:"center center",
		dur1: !isWebKit() ? 3500 : 2000,
		dur2 :1,
		dur3: !isWebKit() ? 2500 : 2000,
		pieceDelay : 10,
		xFadeDelay :0,
		autoplay:false,
		autoplayDelay:6000,
		hideControls:true,
		onStart: function(){
			if($.chopSlider.hasCSS3()&&!isMobile()) {
				$(".sl-shadow").fadeOut(!isWebKit() ? 3000 : 1500,function(){$(this).delay(1000).fadeIn(!isWebKit() ? 2000 : 1000)})
			}
		},
		prevTransition: {
			rotate:!isMobile()?360:0,
			translateY:!isMobile()?-500:0
		},
		mobile: {
			dur1:1200,
			dur2:1,
			dur3:1200,
			vPieces:5,
			pieceDelay:120,
			xOffset:0,
			rotate:0,
			yOffset:0,
			scaleX:0,
			scaleY:1,
			translateX:0,
			translateY:0
		},
		noCSS3:{
			type:"vertical",
			dur1:600,
			dur2:1,
			dur3:600,
			vPieces:20,
			scaleY:0,
			yOffset:200,
			xOffset:0,
			pieceDelay:120,
			xFadeDelay :0
		}
	}
}
jQuery(document).ready(function(){
	jbc.jBox = $("#jBox");
	jbc.jRing = $("#jRing");
	
	/*----   Google Analytics    ----*/
	if(jbc.gaSiteID) {
		$("body").append('<script>'
    						+'var _gaq=[["_setAccount","'+jbc.gaSiteID+'"],["_trackPageview"]];'
   							+'(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;'
   							+'g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";'
    						+'s.parentNode.insertBefore(g,s)}(document,"script"));'
  					    +'</script>')	
	}
	/*----   Google Maps    ----*/
	if(jbc.googleMaps && $("#"+jbc.gm.mapElementID).length>0) {
		$(".page:eq(0)").append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
	}

	/*----   Slider Initialization    ----*/
	$("#slider").chopSlider(jbc.chopSlider);

	/*----   Font Replacement    ----*/
	if(jbc.replaceFontsFor&&jbc.useGoogleFonts&&jbc.googleFont) {
		WebFontConfig = {
        	google: { families: [ jbc.googleFont ] }
        };
       (function() {
		  var wf = document.createElement('script');
		  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		  wf.type = 'text/javascript';
		  wf.async = 'true';
		  var s = document.getElementsByTagName('script')[0];
		  s.parentNode.insertBefore(wf, s);
       })();
	   $(jbc.replaceFontsFor).css({fontFamily : jbc.googleFont});
	}
	
	/*----   IE6 Png Fix    ----*/
	if(isIE(6)&&jbc.ie6pngFix&&window.DD_belatedPNG) {
		DD_belatedPNG.fix(jbc.ie6pngFix);
	}
	
	/*----   Twitter Feed    ----*/
	if(jbc.twitterFeed.username) $(jbc.twitterFeed.container).idTwitter(jbc.twitterFeed,function(){
		jbc.twitterFeed.cached = $(jbc.twitterFeed.container).html()
		fixPageHeight(".page:eq(0)")	
	})
	
	/*----   Startup Positioning of Content Pages    ----*/
	jbc.animating = false;
	$(".page").addClass("active")
	$(".page").each(function(){
		$(this).css({display:"block",height:"auto"});
		$(this).css({height:$(this).height()});
	})
	$(".pages").css({height:$(".page").outerHeight(true)})
	
	/*----   Resize Fix    ----*/
	$(window).resize(function(){
		if(jbc.animating) return;
		jbc.jBox.css({
			left:$(".page.active .content").offset().left-20,
			top:$(".page.active .content").offset().top
		})
	})	
	
	/*----------Close Popup----------*/
	$("a.close-popup").click(function(e){e.preventDefault();closePopup()})
	
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		showLoader();
	})
	$("body").ajaxComplete(function(){
		hideLoader();
	})
	
	/*----------  Menu  ----------*/
	if(isIE(6)||isIE(7)) {
		$("#menu").wrap('<div class="menu-ie-wrapper"></div>')
		new function(){
			var menuWidth = 0;
			for (var i = 0; i <= $(".menu-link").length-1;i++) {
				var ml = $(".menu-link").eq(i)
				if(isIE(6)) ml.css({width : ml.width()});
				menuWidth += ml.width()
			}
			$("#menu").css({width : menuWidth+100, marginLeft : -menuWidth/2});
		}();
	}
	
	if(!jbc.subMenuOnTop) {
		$(".submenu").addClass("submenu-on-bottom")
		$(".menu-link > .submenu").each(function(){
			$(this).css({
				bottom:-$(this).height(),
				top:40,
				height : $(this).height()
			})
		})
		$(".submenu .submenu").each(function(){
			$(".menu-link > .submenu").show()
			$(this).show().css({
				bottom:-$(this).height()+30,
				top:10,
				height : $(this).height()
			})
			$(".menu-link > .submenu").hide()
		})
		$(".submenu").each(function(){
			$(this).hide()
		})
	}
	if($.chopSlider.hasCSS3()&&jbc.airySubMenu) {
		var rotatedAngle = jbc.subMenuOnTop?-90:90
		$(".submenu").csTransform({transform:"scale(0) rotate("+rotatedAngle+"deg) translate(200px,-200px)",origin:"left bottom"}).show()
		$(".submenu").css({transform:"scale(0) rotate("+rotatedAngle+"deg) translate(200px,-200px)"}).show();
		$(".submenu").css({'-ms-transform':"scale(0) rotate("+rotatedAngle+"deg) translate(200px,-200px)"});
	}
	$("#menu li").hover(
	function(){
		if(!$(this).hasClass("active")&&$(this).hasClass("menu-link"))	{
			$(this).children("a").fadeTo(300,0.6)
		}
		if($(this).children(".submenu").length>0) {
			var submenu = 	$(this).children(".submenu");
			if($.chopSlider.hasCSS3()&&jbc.airySubMenu) {
				submenu.csTransform({transform:"scale(1) rotate(0deg) translate(0px,0px) ",origin:"left bottom",time:600})
				submenu.css({transform:"scale(1) rotate(0deg) translate(0px,0px) "})
				submenu.css({'-ms-transform':"scale(1) rotate(0deg) translate(0px,0px) "})
			}
			else {
				submenu.slideDown(300);
			}
		}
	},
	function(){
		if(!$(this).hasClass("active"))	{
			$(this).children("a").fadeTo(300,1)
		}
		if($(this).find(".submenu").length>0) {
			var submenu = 	$(this).find(".submenu");
			if($.chopSlider.hasCSS3()&&jbc.airySubMenu) {
				submenu.csTransform({transform:"scale(0) rotate("+rotatedAngle+"deg) translate(200px,-200px)",origin:"left bottom",time:600})
				submenu.css({transform:"scale(0) rotate("+rotatedAngle+"deg) translate(200px,-200px)"})
				submenu.css({'-ms-transform':"scale(0) rotate("+rotatedAngle+"deg) translate(200px,-200px)"})
			}
			else {
				submenu.slideUp(300);
			}
		}
	})
	$(".menu-link a").click(function(e){
		if(jbc.disableAjax&&!$(this).parent("li").hasClass("active")) return;
		e.preventDefault();
		var aLink = $(this);
		if(!aLink.parent("li").hasClass("active")&&$(this).attr("href")!="#"&&!jbc.animating) {
			$("#menu .active").removeClass("active")
			aLink.stop().css({opacity:1,filter:"alpha(opacity=100)"}).parent("li").addClass("active")
			refreshFonts()
			loadContent({
				page : aLink.attr("href").split("page=")[1].split("&")[0],
				slideBack : aLink.hasClass("slideBack")	
			})
		}
	})
	
	/*---------- Jump Box ----------*/
	jbc.jBox.css({
		left:$(".page.active .content").offset().left-20,
		top:$(".page.active .content").offset().top
	})
	
	/* ---------- Links Initialization ---------- */
	initLinksIn(".page:eq(0)")
	fixPageHeight(".page:eq(0)")
	
	/* ----------- Control Browser's Navigation Buttons ---------- */
	/* ----------- For new HTML5 Browsers ---------- */
	if(history.pushState) {
		window.onpopstate = function() {
			var newPage = document.location.href.split("?page=")[1].split("#")[0].split("&")[0];
			if(!newPage) newPage="home";
			if(jbc.animating || newPage==jbc.currentPage) return false;	
			loadContent({
				page:newPage, 
				slideBack:true
			});
			return;
		}
	}
	/* ----------- For old browsers ---------- */
	else {
		$("body").append('<iframe id="nav-frame" src="scripts/iframe.php?page='+jbc.currentPage+'"></iframe>')
		var navFrame = $("#nav-frame")[0], navFrameLocation;
		navFrame.onload=function(){
			if(jbc.animating) return;
			navFrameLocation = (isIE(6)||isIE(7)) ? navFrame.contentWindow.location.href : navFrame.contentDocument.location.href;
			if(navFrameLocation.split("?page=")[1].split("&")[0]!=jbc.currentPage) {
				loadContent({
					page:navFrameLocation.split("?page=")[1].split("&")[0], 
					slideBack:true
				});
			}
		}
	}
	
})
function refreshFonts() {
	if(jbc.replaceFontsFor&&jbc.useGoogleFonts&&jbc.googleFont) {
	   $(jbc.replaceFontsFor).css({fontFamily : jbc.googleFont});
	}
}

function initLinksIn(wrapper) {
	
	if(wrapper.indexOf("page")>=0) {
		var activeLinkPage;
		if(wrapper==".page:eq(0)") {
			activeLinkPage = document.location.href.indexOf("page=")>=0?document.location.href.split("?page=")[1].split("#")[0].split("&")[0]:"home";
			if(history.pushState&&activeLinkPage=="home") {
				history.pushState({},"","?page=home")
			}
			jbc.currentPage = activeLinkPage;
		}
		else {
			if(!isIE(6)) {
				if(history.pushState) {
					activeLinkPage = document.location.href.split("?page=")[1].split("#")[0].split("&")[0]
				}
				else activeLinkPage = document.location.hash.split("?page=")[1]
				
			}
			else {
					if (document.location.href.indexOf("#?page=")>=0) activeLinkPage = document.location.href.split("#?page=")[1]
					if (document.location.href.indexOf("#index.php?page=")>=0) activeLinkPage = document.location.href.split("#index.php?page=")[1]
				
			}
		}		
		if(activeLinkPage) {
			$(wrapper+" a[href='?page="+activeLinkPage+"'], "+wrapper+"  a[href='index.php?page="+activeLinkPage+"']").addClass("currentPageLink");
			$("#menu .active").removeClass("active")
			$("#menu a[href='?page="+activeLinkPage+"'], #menu a[href='index.php?page="+activeLinkPage+"']").parent("li").addClass("active")
			refreshFonts();
		}
	}
	/*----------Contact Form ----------*/
	$(wrapper+" #contact_form").submit(function(){
		sendMessage()
		return false;
	})
	
	/*----------Ajax Links----------*/
	$(wrapper+" a.ajax, "+wrapper+" a.ajax2, "+wrapper+" a.ajax3, "+wrapper+" a.ajax4").click(function(e){
		if(jbc.disableAjax&&!$(this).hasClass("currentPageLink")) return;
		e.preventDefault();
		if($(this).hasClass("currentPageLink")||jbc.animating) return;
		var aLink = $(this);
		loadContent({
			page : aLink.attr("href").split("page=")[1].split("&")[0],
			slideBack : aLink.hasClass("slideBack")	,
			useRing : aLink.hasClass("ajax2")?true:false,
			aLink : aLink,
			darkLayer : aLink.hasClass("ajax3")?true:false,
			useZoom : aLink.hasClass("ajax4")?true:false
		})
		
	})
	/*----------Handling Popup Links----------*/
	$(wrapper+" a.popup, "+wrapper+" a.popup2").click(function(e){
		e.preventDefault();
		var pLink = $(this);
		pLink.css({display:"inline-block"})
		popUp({
			url:pLink.attr("href"),
			left:pLink.offset().left,
			top:pLink.offset().top,
			windowWidth:pLink.attr("data-width"),
			pBoxWidth:pLink.width()+pLink.css("padding-left").split("px")[0]*2,
			pBoxHeight:pLink.height()+$(this).css("padding-top").split("px")[0]*1
		},pLink.hasClass("popup")?1:2)
		pLink.css({display:""})	
	})
	$(wrapper+" a.pop-image, "+wrapper+" a.pop-image2").click(function(e){
		e.preventDefault();
		var pLink = $(this);
		pLink.css({display:"inline-block"})
		popUpImage({
			url:pLink.attr("href"),
			left:pLink.offset().left,
			top:pLink.offset().top,
			pBoxWidth:pLink.width()+pLink.css("padding-left").split("px")[0]*2,
			pBoxHeight:pLink.height()+pLink.css("padding-top").split("px")[0]*1
		},pLink.hasClass("pop-image")?1:2)
		pLink.css({display:""})	
	})
	
	/*----------Portfolio and Links with Images----------*/
	$(wrapper+" .f-item a, "+wrapper+" a.imageLink").each(function(){
		var fLink = $(this);
		if(fLink.children("img").length==0 && fLink.attr("href")=="#") return;
		fLink.append('<span class="folio-layer"></span>')
		var fLayer = fLink.find(".folio-layer");
		if(isIE(6)) {
			var imgLink = fLink.children("img");
				fLayer.css({height:imgLink.height()})
		}
		var fClass = fLink.attr("class")
		if(fLink.hasClass("ajax")||fLink.hasClass("ajax2")||fLink.hasClass("ajax3")||fLink.hasClass("ajax4")) {
			fLayer.html('<span class="fi-ajax"></span>')	
		}
		else if(fLink.hasClass("popup")||fLink.hasClass("popup2")) {
			fLayer.html('<span class="fi-popup"></span>')	
		}
		else if(fLink.hasClass("pop-image")||fLink.hasClass("pop-image2")) {
			fLayer.html('<span class="fi-image"></span>')	
		}
		else if(fLink.hasClass("open-item")||fLink.hasClass("open-item")) {
			fLayer.html('<span class="fi-open"></span>')	
		}
		else {
			fLayer.html('<span class="fi-external"></span>')
		}
		if(fLink.attr("data-title")) {
			fLayer.append('<span class="folio-item-title">'+fLink.attr("data-title")+'</span>')	
		}
		fLink.hover(
			function(){
				fLayer.fadeIn(300)	
			},
			function(){
				if($(this).parent(".f-item").hasClass("opened-folio-item")) return;
				fLayer.fadeOut(300)
			}
		)
		
	})
	
	$(wrapper+" a.open-item").click(function(e){
		e.preventDefault();
		var fItem = $(this).parent(".f-item");
		if(fItem.hasClass("opened-folio-item")) {
			closeFolio()
			return;	
		}
		openFolio({item : fItem , url : $(this).attr("href")})
		
	})
	/*----   Social Icons    ----*/
	$(wrapper+" .social-bar a:last").css("margin-right",0)
	$(wrapper+" .toTop").click(function(e){
		e.preventDefault();
		var scrolled = $(window).scrollTop();
		if($('html').css('scrollTop')===null) {
			$('body').animate({scrollTop:0}, scrolled);
			if(jbc.scrollTopWithJump && (isWebKit()||isMozilla())) scrollJump()
		}
		else {
			$('html').animate({scrollTop:0}, scrolled);
			if(jbc.scrollTopWithJump && (isWebKit()||isMozilla())) scrollJump()
		}
		function scrollJump() {
			$('body').csTransform({
					transform:"scale(0.8)",
					time : scrolled/2,
					ease : "linear"
				},function(){
					$(this).csTransform({
						transform:"scale(1)",
						time : scrolled/2,
						ease : "linear"
				})
			})
		}
	})
	/*----   Blockquote    ----*/
	$(wrapper+" blockquote").wrapInner('<div class="blockquote-r"></div>')
	/*----   Blog    ----*/
	$(wrapper+" .latest-posts li:last").css({borderBottom:"none"});
	/*----   Sidebar    ----*/
	$(wrapper+" #sidebar .module:last").css({backgroundImage:"none"});
	
}
function loadContent(params) {
	var _pages = $(".pages"),
	_newPage, moveWidth,
	_oldPage = $(".page:eq(0)");
	$.get("scripts/constructor.php",{page:params.page},function(newPageContent){
		if(!isIE(6)&&!isIE(7)&&!isIE(8)) {
			$.get("scripts/seo.php",{page:params.page},function(newTitle){
				$("title").html(newTitle)
			})
		}
		jbc.animating = true;
		
		if(history.pushState) history.pushState({}, "", "?page="+params.page);
		else {
			document.location.hash="?page="+params.page;
			$("#nav-frame").attr({"src":"scripts/iframe.php?page="+params.page})
		}
		jbc.currentPage = params.page;
		
		_pages.append(newPageContent)
		_newPage = $(".page:last");
		
		var newTWContainer = _newPage.find(jbc.twitterFeed.container)
		if (newTWContainer.length>0&&jbc.twitterFeed.username&&jbc.twitterFeed.cached) {
			newTWContainer.html(jbc.twitterFeed.cached)
		}
		
		moveWidth = _pages.width()>$(window).width()?_pages.width():$(window).width()
		_newPage.css({
			left:params.slideBack? -moveWidth : moveWidth,
			height:"auto"
		})
		_newPage.css({
			height:$(".page:last").height()
		})
		if(!params.useRing&&!params.darkLayer&&!params.useZoom) {
			_newPage.find(".content").css({marginRight:0,marginLeft:0,left:$(".page:last .content").offset().left-_newPage.offset().left,overflow:"hidden"}).hide()
			.end()
			.find(".bottom-content").css({top:120})
		}
		initLinksIn(".page:eq(1)")
		if(params.useRing) { useRing(); return }
		if(params.darkLayer) { darkLayer(); return }
		if(params.useZoom) { useZoom(); return }
		if($('html').css('scrollTop')===null && $(window).scrollTop()>200) {
			$('body').animate({scrollTop:200}, $(window).scrollTop(),function(){switchPage()});
		}
		else if ($(window).scrollTop()>200) {
			$('html').animate({scrollTop:200}, $(window).scrollTop(),function(){switchPage()});
		}
		else switchPage();
	})
	function useZoom() {
		showLoader();
		var zoomFrame = $("body").append('<iframe scrolling="no" id="zoom-frame"></iframe>')
		zoomFrame = $("#zoom-frame")[0];
		if(!isIE(6)&&!isIE(7)&&!isIE(8)) {
			zoomFrame.onload = function(){
				animateFrame()
			}
		}
		$("#zoom-frame").attr({"src":"index.php?page="+jbc.currentPage});
		if(isIE(6)||isIE(7)||isIE(8)) {
			animateFrame()
		}
		function animateFrame() {
			hideLoader();
			$("#zoom-frame").css({
				display:"block", 
				top: params.aLink.offset().top,
				left : params.aLink.offset().left
			}).animate({left:-4, top:-4, height:_newPage.outerHeight(), width : $(window).width() },jbc.zoomFrameDur,function(){
				_newPage.css({left: 0})
				_oldPage.remove()
				fixPageHeight(".page:last")
				_newPage.addClass("active")
				$(this).remove()
				jbc.animating = false	;
				if(jbc.googleMaps && $(".page:last #"+jbc.gm.mapElementID).length>0) {
					_newPage.append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
				}
			})	
		}
	}
	function useRing() {
		closePopup()
		var aLink = params.aLink;
		var jRing = jbc.jRing;
		jRing.css({
			left :aLink.offset().left - (100 - aLink.width()) /2,
			top :aLink.offset().top - (100 - aLink.height()) /2,
			width : 100
		})
		jRing.fadeIn(300)
		jRing.animate({
			left: -(3000 - $(window).width())/2,
			top : -(3000 - $(window).height())/2 + $(window).scrollTop(),
			width : 3000
		},jbc.slideTime)
		$(".dark-layer").delay(1000).fadeTo(600,1,function(){
				_newPage.css({left: 0})
				_oldPage.remove()
				fixPageHeight(".page:last")
				_newPage.addClass("active")
				if(jbc.googleMaps && $(".page:last #"+jbc.gm.mapElementID).length>0) {
					_newPage.append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
				}
				$(".dark-layer").delay(200).fadeOut(600,function(){
					jRing.fadeOut(300)	;
					jbc.animating = false
				})	
		})
	}
	function darkLayer() {
		closePopup()
		var _dl = $(".dark-layer");
		_dl.fadeIn(600,function(){
			_newPage.css({left: 0})
			_oldPage.remove()
			fixPageHeight(".page:last")
			_newPage.addClass("active")
			var newDHeight = Math.round(_dl.height()/5)*5;
			var newDWidth = Math.round(_dl.width()/5)*5;
			_dl.css({height:newDHeight, width:newDWidth})
			$(this).csChop({
				type:"multi",
				hPieces:5,
				vPieces:5,
				pieceDelay:0,
				onStart : function(cs2) {
							cs2.slices().css({backgroundColor:"#000"})	
						}
			},10,function(cs){
				cs.setTo({xOffset:-3000,pieceDelay:200, yOffset: -1000, translateX:-300, rotate: 180, scaleX:0, scaleY:0},jbc.brokenScreenDur,function(){
					jbc.animating = false;
					_dl.hide().css({height:"", width:""});
					cs.reset();
				});
				
			})
			
			if(jbc.googleMaps && $(".page:last #"+jbc.gm.mapElementID).length>0) {
				_newPage.append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
			}
			
		})
		
	}
	function switchPage() {
		if(!$.chopSlider.animation&&jbc.animateSlider&&!isMobile()) {
			$("#slide-next,#slide-prev").hide()
			var isDegrade = isMobile()||!$.chopSlider.hasCSS3();
			$(".sl-slide.activeSlide img").csChop({
				type:"vertical",
				vPieces:!isDegrade?45:20,
				zIndex:4000,
				rotateSymmetric:false,
				rotate: !isDegrade?40:0,
				xOffset : !isDegrade?0:50,
				translateY:!isDegrade?-50:0,
				pieceDelay:10,
				scaleY:!isDegrade?0.8:1
			},jbc.collapseTime-300,function(cs){
				cs.loader().animate({marginLeft:params.slideBack ? 300 : -300},jbc.slideTime/2,function(){
						cs.loader().animate({marginLeft:0},jbc.slideTime/2)
				})
				$(".sl-shadow").animate({marginLeft:params.slideBack ? 400 : -400},jbc.slideTime/2,function(){
						$(this).animate({marginLeft:0},jbc.slideTime/2)
				})
				cs.setTo({
					rotate:!isDegrade ? (params.slideBack ? -540 : 540) : 0,
					rotateSymmetric:true,
					translateY:0,
					scaleY:!isDegrade ?-1:1,
					scaleX:!isDegrade ?-1:1,
					xOffset:0,
					pieceDelay:30
				},jbc.slideTime,function(){
					cs.reset()
					$("#slide-next,#slide-prev").fadeIn(300)
				})	
			})
		}
		closePopup();
		collapseContent();
		_oldPage.removeClass("active");
		_newPage.addClass("active");
		setTimeout(function(){
			jbc.jBox.rotateRel(params.slideBack ? -720 : 720,jbc.slideTime)
		},jbc.collapseTime+100)
		
		jbc.jBox.delay(jbc.collapseTime/2)
		.animate({"left":params.slideBack ? "+=300px" : "-=300px"},{duration:jbc.slideTime/2,easing:"swing"})
		.animate({"left":params.slideBack ? "-=300px" : "+=300px"},{duration:jbc.slideTime/2,easing:"swing"})
		
		
		$(".page").delay(jbc.collapseTime+100).animate({left: params.slideBack ? "+="+(moveWidth)+"px" : "-="+(moveWidth)+"px"},jbc.slideTime,function(){
			_oldPage.remove()	
		})
		setTimeout(function(){
			expandContent();
		},jbc.collapseTime+jbc.slideTime+300)
	}
}
function collapseContent(){
	var collapsedContent = $(".page:eq(0) .content"),
    collapseTime = jbc.collapseTime/2;
	collapsedContent.css({"overflow":"hidden"})
	jbc.jBox.stop().css({opacity:1,filter:"alpha(opacity=100)"}).show()
	jbc.jBox.animate({
		width: collapsedContent.width(),
		height: collapsedContent.height()
	},collapseTime,function(){
			$(".page:eq(0) .bottom-content").animate({top:120},collapseTime,function(){
				fixPageHeight(".page:eq(0)", 120);
			})
			jbc.jBox.animate({width: 0,	height: 0},{queue:false,duration:collapseTime}).rotateRel(180,collapseTime)
			collapsedContent.css({"margin":0,"left":collapsedContent.offset().left}).hide(collapseTime,function(){fixPageHeight(".page:eq(0)", 120)})
		  }
	)	
}
function expandContent(pageIndex) {
	var expandedContent = $(".page:last .content"),
	expandTime = jbc.expandTime/2;
	jbc.jBox.animate({width: expandedContent.width(),height: expandedContent.height()},expandTime,function(){
			jbc.jBox.animate({width: 0,	height: 0},{queue:false,duration:expandTime}).rotateRel(180,expandTime)
			setTimeout(function(){
				jbc.animating = false
				jbc.jBox.fadeOut(300)
				if(jbc.googleMaps && $(".page:last #"+jbc.gm.mapElementID).length>0) {
					$(".page:last").append('<script src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=initGMap"></script>')
				}
			},expandTime)
		  }
	)
	expandedContent.show(expandTime,function(){
		$(this).css({marginLeft:"auto",marginRight:"auto",left:""})	;
		fixPageHeight(".page:last");
	})
	$(".page.active .bottom-content").animate({top:"0px"},expandTime)
};

function popUp(params,ver) {
	closePopup()
	params.windowWidth = params.windowWidth || jbc.puContentWidth;
	params.left = params.left || 0;
	params.top = params.top || 0;
	jQuery.get(params.url,function(windowContent){
		var pBox = $("#popupBox"),
		_popUp = $("#popup");
		if(isIE(6)) {
			$(".dark-layer").css({
				position:"absolute",
				width:$(window).width(),
				height:$(window).height(),
				top:$(window).scrollTop()
			})
			$(window).scroll(function(){
				$(".dark-layer").css({
					top:$(window).scrollTop()
				})	
			})
		}
		$(".dark-layer").fadeTo(300,0.8)
		$(".pop-window").html(windowContent)
		refreshFonts();
		if(ver==1) {
			_popUp.css({
				width:params.windowWidth,
				top:$(window).scrollTop()+50,
				left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2:24
			})
			var pTop = ($(window).height() - _popUp.height())/2;
			var pTop = pTop>50?pTop+$(window).scrollTop():50+$(window).scrollTop()
			_popUp.css({top:pTop})
			.delay(jbc.puRotate+300).fadeIn(600,function(){
				pBox.fadeOut(300)
			})
			pBox
			.css({
				width:params.pBoxWidth,
				height:params.pBoxHeight,
				left:params.left-20,
				top:params.top-20
			}).show().delay(400).animate({
				width:params.windowWidth,
				top:pTop-24,
				left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2-24:0,
				height:_popUp.height()
			},jbc.puRotate)
			setTimeout(function(){
				pBox.rotateRel(180,jbc.puRotate)
			},400)
		};
		if(ver==2) {
			_popUp.css({
				width:params.windowWidth,
				left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2:24,
				display:"block",
				visibility:"hidden"
			})
			var pTop = ($(window).height() - _popUp.height())/2;
			var pTop = pTop>50?pTop+$(window).scrollTop():50+$(window).scrollTop()
			_popUp.css({top:pTop})
			var popHeight = _popUp.height();
			var newPopHeight = Math.round(popHeight/40)*40
			$(".pop-window").css({height:newPopHeight-80})
			_popUp.csChop({
				type:"horizontal",
				onStart : function(cs){
							cs.slices().css("background-color","#fff")
							$(cs.slices()[0]).css({
								"-moz-border-radius":"5px 5px 0px 0px",
								"-webkit-border-radius":"5px 5px 0px 0px",
								"border-radius":"5px 5px 0px 0px"
							})
							$(cs.slices()[39]).css({
								"-moz-border-radius":"0px 0px 5px 5px",
								"-webkit-border-radius":"0px 0px 5px 5px",
								"border-radius":"0px 0px 5px 5px"
							})
						},
				hPieces:40,
				hidden:true,
				scaleX:0,
				yOffset:30,
				origin:"left center",
				animateOrigin:true,
				pieceDelay:0,
				rotateSymmetric:false,
				rotate:!isMobile()?60:0,
				zIndex:9000
			},10,function(cs){
				cs.loader().show()
				cs.setTo({scaleX:1,origin:"right center",rotate:0,yOffset:0,pieceDelay:20},jbc.puMagicContent,function(){
					_popUp.css({display:"none",visibility:"visible"}).fadeIn(600,function(){cs.reset()})	
				})	
				
			})	
			
		}
		initLinksIn("#popup")
	})
}
function popUpImage(params,ver) {
	closePopup()
	params.left = params.left || 0;
	params.top = params.top || 0;
	showLoader();
	var pImage = new Image();
	pImage.src = params.url;
	pImage.onload = function(){
		hideLoader();
		params.windowWidth = pImage.width;
		var pBox = $("#popupBox"),
		_popUp = $("#popup");
		
		if(isIE(6)) {
			var _window = $(window);
			$(".dark-layer").css({
				position:"absolute",
				width:_window.width(),
				height:_window.height(),
				top:_window.scrollTop()
			})
			_window.scroll(function(){
				$(".dark-layer").css({
					top:_window.scrollTop()
				})	
			})
		}
		$(".dark-layer").fadeTo(300,0.8)
		$(".pop-window").hide();
		$(".popup-image").html('<img src="'+pImage.src+'" width="'+pImage.width+'" height="'+pImage.height+'" >')
		if(ver==1) {
			_popUp.css({
				width:params.windowWidth,
				left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2:24
			})
			var pTop = ($(window).height() - _popUp.height())/2;
			var pTop = pTop>50?pTop+$(window).scrollTop():50+$(window).scrollTop()
			_popUp.css({top:pTop})
			.delay(jbc.puRotate+300).fadeIn(600,function(){
				pBox.fadeOut(300)
			})
			pBox
			.css({
				width:params.pBoxWidth,
				height:params.pBoxHeight,
				left:params.left-20,
				top:params.top-20
			}).show().delay(400).animate({
				width:params.windowWidth,
				top:pTop-24,
				left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2-24:0,
				height:_popUp.height()
			},jbc.puRotate)
			setTimeout(function(){
				pBox.rotateRel(180,jbc.puRotate)
			},400)
		};
		if(ver==2) {
			$(".popup-image img").css("visibility","hidden").show()
			$(".close-popup").hide()
			_popUp.css({
				width:params.windowWidth,
				left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2:24,
				display:"block"
			})
			var pTop = ($(window).height() - _popUp.height())/2;
			var pTop = pTop>50?pTop+$(window).scrollTop():50+$(window).scrollTop()
			_popUp.css({top:pTop})
			.delay(jbc.puRotate+300).fadeIn(600,function(){
				pBox.fadeOut(300)
			})
			$(".popup-image img").csChop({
				type:"multi",
				hPieces:5,
				vPieces:5,
				hidden:true,
				scaleX:0,
				scaleY:0,
				xOffset:0,
				origin:"left center",
				animateOrigin:true,
				pieceDelay:20,
				rotateSymmetric:false,
				rotate:!isMobile()?360:0,
				translateX:!isMobile()?600:0,
				zIndex:9000
			},10,function(cs){
				cs.loader().show()
				cs.setTo({scaleX:1,scaleY:1,origin:"right center",rotate:0,xOffset:0,translateX:0,pieceDelay:250},jbc.puMagicImage,function(){
					$(".close-popup").fadeIn(600)
					cs.reset()
				})	
			})
		}
	}
}
function closePopup(){
	$('#popup').hide();
	$(".popup-image").html("")
	$(".pop-window").show().css("height","").html("")
	$(".dark-layer").hide()
	$(".csChopper[data-csid='"+$('#popup').attr("data-csid")+"']").remove()
	$('#popup').attr({"data-csid":""})
}
function openFolio(a) {
	closeFolio()
	jQuery.get(a.url,function(fContent){
		a.item.addClass("opened-folio-item");
		var clearDiv = a.item.nextAll("div.clear:eq(0)");
		var newContent = '<div class="folio-item-info">'+fContent+'</div>';
		var fOItem = $(newContent).insertAfter(clearDiv).css({visibility:jbc.pocWithMagic?"hidden":"visible"}).slideDown(600,function(){
			if(jbc.pocWithMagic) {
				fOItem.css({height : Math.round($(this).height()/20)*20})
				fOItem.csChop({
					type:"horizontal",
					pieceDelay:0,
					rotateSymmetric:false,
					hidden:true,
					hPieces:20,
					scaleX:0,
					origin:"left center",
					rotate:30
					},10,function(cs){
						cs.loader().show()
						cs.slices().css({"background-color":"#ddd","background-image":"none"})
						cs.setTo({scaleX:1,rotate:0,pieceDelay:30},1500,function(){
						fOItem.css({visibility:"visible"})
						cs.loader().fadeOut(600,function(){cs.reset()})		
						})
				})
			}
			refreshFonts()
			fixPageHeight(".page:last")
		})
		initLinksIn(".folio-item-info")
		refreshFonts()
	})
}
function closeFolio() {
	$(".folio-item-info").slideUp(600,function(){$(this).remove();fixPageHeight(".page:last")})
	$(".opened-folio-item").removeClass("opened-folio-item").find(".folio-layer").fadeOut(300)
}	
function showLoader(){
	$(".ajax-loader").css({top:$(window).scrollTop()+300}).show()	
}
function hideLoader(){
	$(".ajax-loader").hide()	
}
function validateEmail() {
	var emailInput = $("#contact_email")
	var email = emailInput.attr("value");
	var re = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|mobi|travel))$/i;
	if(re.test(email)) emailInput.removeClass("required");
 	else emailInput.addClass("required");
}
function validateMessage() {
	message = $("textarea#contact_message").val();
	m_length = ($.trim(message)).length;
	if (m_length < 10) $("textarea#contact_message").addClass("required");
	else $("textarea#contact_message").removeClass("required");
}
function sendMessage() {
	validateEmail();
	validateMessage();
	if (!$("#contact_email,#contact_message").hasClass("required")) {
		var name = $("#contact_name").attr("value");
		var email = $("#contact_email").attr("value");
		var subject = $("#contact_subject").attr("value");
		var message= $("#contact_message").val().replace(/<\/?[^>]+>/gi, '');
			jQuery.post("scripts/send_message.php",{name : name, email : email, subject : subject, message : message},
				function (status) {
					$("#contact_form").fadeTo(600,0,function(){
						$(this).css({"visibility":"hidden"});
						$(".status_message").html(status).fadeIn(600)
						refreshFonts()
					});
				}
			);	
		
	}
}
function fixPageHeight(page,add) {
	var _page = $(page);
	add = add || 0;
	_page.css({height:"auto"})
	_page.css({height:_page.height()+add})	
	$(".pages").css({height:_page.outerHeight(true)});
}

function isWebKit() {
	var bodyDoc = document.body || document.documentElement;
	var bds = bodyDoc.style.WebkitTransition !== undefined;
	return bds;
}
function isMozilla() {
	var bodyDoc = document.body || document.documentElement;
	var bds = bodyDoc.style.MozTransition !== undefined;
	return bds;
}
function isIE(ver) {
	if(navigator.userAgent.indexOf("MSIE "+ver)>=0) return true;
	else return false;	
}
function isMobile() {
	return false;
	var mobileUA = ['Android','iPhone','iPod','BlackBerry','Symbian','Mobile']
	var isMob = false;
	$.each(mobileUA, function(index,mUA) {
		if(navigator.userAgent.indexOf(mUA)>=0) isMob =  true;
	})
	return isMob;
}
(function($) {
	$.fn.rotateRel = function(angle,duration) {
		if(isMobile()) return this;
		var rClass = $(this).attr("class")
		var isRotated = rClass?rClass.indexOf("rotate(")>=0:false;
		var rotatedAngle
		if (isRotated) {
			rotatedAngle = rClass.split("rotate(")[1].split(")")[0]*1;
			var newClass = rClass.replace(/rotate\(\W?\d{0,}\)/,"");
			this.attr({"class":newClass})
		}
		else rotatedAngle=0;
		var newAngle = rotatedAngle + angle;
		return this
		.css({
				"-o-transform":"rotate("+newAngle+"deg)",
				"-o-transition-duration":(duration/1000)+"s",
				"-o-transition-property":"-o-transform",
				"-webkit-transform":"rotate("+newAngle+"deg)",
				"-webkit-transition-duration":(duration/1000)+"s",
				"-webkit-transition-property":"-webkit-transform",
				"-moz-transform":"rotate("+newAngle+"deg)",
				"-moz-transition-duration":(duration/1000)+"s",
				"-moz-transition-property":"-moz-transform",
				"-ms-transform":"rotate("+newAngle+"deg)",
				"-ms-transition-duration":(duration/1000)+"s",
				"-ms-transition-property":"-ms-transform",
				"transform":"rotate("+newAngle+"deg)",
				"transition-duration":(duration/1000)+"s",
				"transition-property":"transform"
		}).addClass("rotate("+newAngle+")")
	}
})(jQuery);
function initGMap() {
    var latlng = new google.maps.LatLng(jbc.gm.latitude, jbc.gm.longitude);
    var myOptions = {
      zoom: jbc.gm.zoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(jbc.gm.mapElementID),
        myOptions);
	var contentString = jbc.gm.bubbleHTML;

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	var marker = new google.maps.Marker({
		  position: latlng, 
		  map: map, 
		  title:jbc.gm.markerTitle
	  }); 
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
}
/*
iDangero.us jQuery Twitter Feed
------------------------
Version - 1.1
*/
(function($) {
	$.fn.idTwitter = function(a,callback) {
		var tweetContainer = this;
		this.html(a.loadingText)
		$.getJSON("scripts/twitter-proxy.php?screen_name="+a.username+"&count="+a.numberOfTweets+"&url="+encodeURIComponent('statuses/user_timeline.json?screen_name='+a.username+'&count='+a.numberOfTweets+'&include_rts=true&include_entities=true'),
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
// JavaScript Document
var isIE6;
sP = {
	replaceFonts : ".cufoned,.menu-link a,.loader-content,.slide-title,h2.heading,h3.blog-title,h3.inner-heading,.p-title,.folio-title,.pr-heading,h2.image-title,.full-size,.fit-screen,.fl-title,.fl-pTitle,.fl-link,.tweet-uname",
	shareTwitter : true,
	twitterUsername: "idangerous",
	shareFaceBook : true,
	faceBookLikeURL : "http://www.idangero.us",
	flickrAPIKey:"30a37e5dd95ab44d8e38443027a7c4e7",
	flickrUserID: "64011873@N04", 
	sliderParams : {
		loader : "#slide-loader",
		slide : ".slide",
		nextTrigger : "a#slide-next",
		prevTrigger : "a#slide-prev",
		type: "multi",
		disableCSS3 : true,
		xOffset: 20,
		yOffset: 20,
		hPieces : 10,
		vPieces: 10,
		rotate : 0 ,
		rotateSymmetric: false,
		scaleX:1,
		scaleY:1,
		dur1: 600,
		dur2 :600,
		dur3: 600,
		pieceDelay : 50,
		xFadeDelay :0,
		hideControls:true,
		onStart: function(){hideDescr()},
		onEnd: function(){showDescr()}
	},
	twitterFeed : {
		container : "#tweets",
		username : "idangerous",
		numberOfTweets : 3,
		tweetFormat : '<li class="single-tweet">'
					+ '<p class="tweet-text">'
					+ '%tweetText'
					+ '</p>'
					+ '<p class="tweet-date">on %tweetDate</p>'
					+ '</li>'
	}
}

sP.tweetCode = '<a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-via="'+sP.twitterUsername+'">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>';
sP.fbCode = '<iframe src="http://www.facebook.com/plugins/like.php?app_id=151366808269029&amp;href='+encodeURIComponent(sP.faceBookLikeURL)+'&amp;send=false&amp;layout=button_count&amp;width=150&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>';

/*----------Ajax Loaders initialization----------- */
sP.ajaxLoader = new Image();
sP.ajaxLoader.src = 'images/ajax-loader.gif';
sP.ajaxLoader2 = new Image();
sP.ajaxLoader2.src = 'images/ajax-loader-w.gif';	

$(function(){
	/*----------Twitter Feed----------- */
	if(sP.twitterFeed.container!=""&&sP.twitterFeed.username!="") {
		$(sP.twitterFeed.container).idTwitter(sP.twitterFeed)	
	}
	$(".openTwitter").click(function(e){
		e.preventDefault();
		if(hasCSS3()){
			$(".tweets").css3({transform:"scale(0) translateX(-900px) rotate(45deg)",time:0}).show()	
			setTimeout(function(){
				$(".tweets").css3({transform:"scale(1) translateX(0px) rotate(0deg)",time:900})
			},100)
		}
		else {
			$(".tweets").slideDown(900)
		}
	})
	$(".close-tweets").click(function(){
		if(hasCSS3()) $(".tweets").css3({transform:"scale(0) translateX(900px) rotate(-45deg)",time:900})
		else $(".tweets").slideUp(900)
	})

	/*----------Page Loading----------- */
	sP.h = document.location.hash;
	if(sP.h.indexOf('content/')>=0) {
		var newContent = sP.h.split("content/")[1];
		loadContent({
			url:"content/"+newContent+".php",
			left:0,
			top:0,
			width:100,
			height:100	
		})
	}
	if(sP.h.indexOf('portfolio/')>=0) {
		var newContent = sP.h.split("portfolio/")[1];
		loadFolio({
			url:"content/"+newContent+".php"
		})
	}
	if(sP.h.indexOf('project/')>=0) {
		var newContent = sP.h.split("project/")[1];
		loadProject({
			url:"content/"+newContent+".php"
		})
	}
	if(sP.h.indexOf('flickr-gallery')>=0) {
		loadFlickr();
	}
	/*----------Background Resize----------- */
	setBackground();
	function setBackground() {
		var bg = $("#background");
		var bgI = bg.find("img")
		var bgImage = new Image();
		bgImage.src = bgI.attr("src");
		bgImage.onload = function(){
			bg.fadeIn(600)	
		
			var newWidth = $(window).width();
			var newHeight = newWidth*bgImage.height/bgImage.width;
			var newLeft = 0;
			if (newHeight<$(window).height()) {
				newWidth = $(window).height()*bgImage.width/bgImage.height;
				newLeft = ($(window).width() - newWidth)/2
			}
			bgI.css({width:newWidth})
			bg.css({left:newLeft})
		}	
		$(window).resize(function(){
			var newWidth = $(window).width();
			var newHeight = newWidth*bgImage.height/bgImage.width;
			var newLeft = 0;
			if (newHeight<$(window).height()) {
				newWidth = $(window).height()*bgImage.width/bgImage.height;
				newLeft = ($(window).width() - newWidth)/2
			}
			bgI.stop().animate({width:newWidth},600)	
			bg.stop().animate({left:newLeft},600)
		})
	}
	/*----------Slider Initialization----------- */
	$("#slider").idChopSlider(sP.sliderParams);
	var newDescr = $(".slide-descriptions div:eq("+$(".slide.activeSlide").index()+")").html()
	$(".slide-descr").html(newDescr)
	
	/*----------Cufon Fonts----------- */
	if(window.Cufon) Cufon.replace(sP.replaceFonts);
	/*----------Menu----------- */
	$(".submenu").css3({transform:"scale(0) rotate(45deg)",time:0})
	$(".menu-link").hover(
	  function(){
		  $(this).children(".link-bg").fadeIn(200)
  		  $(this).children(".submenu").slideDown(200).css3({transform:"scale(1) rotate(0deg)",time:600})
	  },
	  function(){
		  $(this).children(".link-bg").hide()
		  $(this).children(".submenu").slideUp(600).css3({transform:"scale(0) rotate(45deg)",time:600})
	  }
	)
	$(".submenu li").hover(
	  function(){
		  $(this).children(".link-bg").fadeIn(200)
  		  
	  },
	  function(){
		  $(this).children(".link-bg").hide()
	  }
	)
	/*----------social links animation----------- */
	$(".social-links a").hover(
		function(){
			$(this).css3({transform:"scale(0.8) translateY(-10px) rotate(15deg)",time:300}).fadeTo(300,1)	
		},
		function(){
			$(this).css3({transform:"scale(1) rotate(0deg)",time:300}).fadeTo(300,0.5)
		}
	)
	$(".close-popup").click(function(){closePopup()})
	/*----------Links Initialization----------- */
	initLinksIn("body");
})
function hideDescr(){
	$(".slide-descr").hide()
	.css3({transform:"scale(0) translateX(-100px) rotate(45deg)",time:300})
}
function showDescr(){
	var newDescr = $(".slide-descriptions").children("div:eq("+$(".slide.activeSlide").index()+")").html()
	if (newDescr=="") return;
	$(".slide-descr").html(newDescr)
	initLinksIn(".slide-descr")
	cufonRefresh()
	$(".slide-descr").fadeIn(300,function(){
		$(this).css3({transform:"scale(1) translateX(0px) rotate(0deg)",time:600})
		
	})
}
function initLinksIn(a){
	$(a+" a.loadContent").click(function(e){
		e.preventDefault();
		$(this).css({display:"inline-block"})
		loadContent({
			url:"content/"+$(this).attr("href").split("#content/")[1]+".php",
			left:$(this).offset().left,
			top:$(this).offset().top,
			width:$(this).outerWidth(),
			height:$(this).outerHeight()
		})	
		$(this).css({display:""})
		document.location.hash = "content/"+$(this).attr("href").split("#content/")[1]	
	})
	$(a+" a.loadFolio").click(function(e){
		e.preventDefault();
		loadFolio({
			url:"content/"+$(this).attr("href").split("#portfolio/")[1]+".php"
		})
		document.location.hash = "portfolio/"+$(this).attr("href").split("#portfolio/")[1]		
	})
	$(a+" a.loadProject").click(function(e){
		e.preventDefault();
		loadProject({
			url:"content/"+$(this).attr("href").split("#project/")[1]+".php"
		})
		document.location.hash = "project/"+$(this).attr("href").split("#project/")[1]	
	})
	$(a+" a.loadFlickr").click(function(e){
		e.preventDefault();
		loadFlickr()
		document.location.hash = "flickr-gallery"	
	})
	$(a+" a.closeFlickr").click(function(e){
		e.preventDefault();
		$("#flickr,#dark-layer").fadeOut(600,function(){
			$(".fl-photos,.fl-pFull,.fl-pTitle,.fl-pDescr").html("")
			$(".fl-pFull").hide()
		})
		document.location.hash = ""	
	})		
	$(a+" .blink").hover(
		function(){
			$(this).fadeTo(300,0.5)
		},
		function(){
			$(this).fadeTo(300,1)
		}
	)
	$(a+" .toHome").click(function(e){
		e.preventDefault()
		if($(".slider").css("display")!="block") {
			toHome();
			document.location.hash = ""	
		}
	})
	$(a+" a.pop-image").click(function(e){
		e.preventDefault();
		popUp({
			src:$(this).attr("href"),
			title:$(this).attr("data-title")
		})
	})
}
function loadFolio(a) {
	if($(".slider").css("display")=="block") {
		$(".slider").fadeOut(600)	
	}
	if($("#content").css("display")=="block") {
		$("#content").fadeOut(600)	
	}
	if($("#portfolio").css("display")=="block") {
		$("#portfolio").fadeOut(600)	
	}
	setTimeout(function(){
		showLoader()
		$.get(a.url,function(data){
			hideLoader()
			$("#portfolio").html(data).slideDown(600)
			.find(".folio-item").each(function(){
				$(this).css3({transform:"scale(0) translateX(-1000px) translateY(-600px) rotate(180deg)", time: 0})
				$(this).delay(300*$(this).index()).fadeIn(300,function(){
					$(this).css3({transform:"scale(1) translateX(0px) translateY(0px) rotate(0deg)", time: 900})
					$("#footer").animate({top:$("#portfolio").offset().top + $("#portfolio").outerHeight() + 40},500)	
				})
			})
			cufonRefresh()	
			initLinksIn("#portfolio");
		})
	},600)
}
function loadProject(a){
	showLoader()
	if($(".slider").css("display")=="block") {
		$(".slider").fadeOut(600)	
	}
	if($("#content").css("display")=="block") {
		$("#content").fadeOut(600)	
	}
	$("#portfolio").fadeOut(600,function(){
		$("#portfolio").html("")
		$.get(a.url,function(data){
			hideLoader();
			$("#portfolio").html(data).fadeIn(600,function(){
				$(".pr-description").slideDown(600,function(){
					$(this).css({width:$(this).width(),height:$(this).height()})	
				})
				$(".clickPhoto").delay(500).slideDown(200)
				$(".pr-images").delay(700).slideDown(600,function(){
					sP.dImages = [];
					if(hasCSS3()) {
						setTimeout(function(){
							$(".pr-images a").each(function(){
								$(this).css({display : "none", visibility:"visible"})
								.css3({transform:"scale(0) rotate(180deg)",time:0});
								var ij=$(this).index();
								sP.dImages[ij] = new Image();
								sP.dImages[ij].src = $(this).find("img").attr("src")
								sP.dImages[ij].onload = function(){
									$(".pr-images a:eq("+ij+")")
									.show().css3({transform:"scale(1) rotate(0deg)",time:900});
								}
							})
						},10)
					}
					else {
						$(".pr-images a").css({display : "block", visibility:"visible"})
					}
					$("#footer").animate({top:$("#portfolio").offset().top + $("#portfolio").outerHeight() + 40},500)
					$(".pr-images a").click(function(e){
						e.preventDefault();
						showPhoto({
							src:$(this).attr("href"),
							title:$(this).attr("data-title"),
							index:$(this).index()
						})	
					})
				})
			})
			if(sP.shareTwitter) {
				$(".image-controls").append('<div class="tw-link">'+sP.tweetCode+'</div>')
			}
			if(sP.shareFaceBook) {
				$(".image-controls").append('<div class="fb-link">'+sP.fbCode+'</div>')
			}
			initLinksIn("#portfolio")
			cufonRefresh()
			$(".pr-images a:nth-child(8n)").css({marginRight:0})
			$(".pr-images").css({
				width:$(".pr-images").width(),
				height:$(".pr-images").height()	
			})
		})	
	})	
}
function showPhoto(a){
	if(a.src=="undefined") return;
	if($(".full-image").css("display")!="block") {
		$(".pr-description .pr-descr").fadeOut(300,function(){
			$(".image-loader").show()
		})
		$(".clickPhoto").slideUp(600)
		$(".pr-description").animate({
			width:900,
			height:300,
			marginLeft:-40
		},600,function(){loadImage();fixFooter()})
	}
	else {
		$(".image-loader").show();
		$(".image-title,.image-controls").hide();
		$(".prev-image,.next-image").hide()
		if(hasCSS3()) {
			$(".full-image").fadeOut(600,function(){
				loadImage()
			})
			.find("img").css3({transform:"scale(0.2) rotate(90deg)",time:1600}).animate({left:600},1600)
		}
		else {
			$(".full-image img").fadeOut(600,function(){loadImage()	})
		}
	}
	function loadImage() {
		if($(window).scrollTop() > ($("#portfolio").offset().top + 100)) {
			if($('html').css('scrollTop')===null) {
					$('body').animate({scrollTop:$("#portfolio").offset().top}, 600);
			}
			else {
					$('html').animate({scrollTop:$("#portfolio").offset().top}, 600);
			}	
		}
		var lImage = new Image();
		lImage.src = a.src;
		lImage.onload = function(){
			$(".image-loader").hide()
			$(".pr-description").animate({
				height:900*lImage.height/lImage.width
			},600,function(){fixFooter()})
			if(hasCSS3()){
				$(".full-image").html('<img src="'+lImage.src+'" style="width:900px" title="'+a.title+'" />').delay(600).fadeIn(1000)
			}
			else {
				$(".full-image").show()
				$(".full-image").html('<img src="'+lImage.src+'" style="width:900px;display:none" title="'+a.title+'" />')
				$(".full-image img").delay(600).fadeIn(1000)
			}
			$(".image-title").html(a.title).delay(1000).fadeIn(600)
			$(".image-controls").delay(1000).fadeIn(600)
			$(".prev-image,.next-image").delay(1300).fadeIn(300)
			var nextSrc = $(".pr-images a:eq("+(a.index+1)+")").attr("href");
			var nextTitle = $(".pr-images a:eq("+(a.index+1)+")").attr("data-title");
			var nextIndex = $(".pr-images a:eq("+(a.index+1)+")").index();
			var prevSrc = $(".pr-images a:eq("+(a.index-1)+")").attr("href");
			var prevTitle = $(".pr-images a:eq("+(a.index-1)+")").attr("data-title");
			var prevIndex = $(".pr-images a:eq("+(a.index-1)+")").index();
			$(".next-image").attr({"onClick":'showPhoto({src:"'+nextSrc+'",title:"'+nextTitle+'",index:'+nextIndex+'})'})
			$(".prev-image").attr({"onClick":'showPhoto({src:"'+prevSrc+'",title:"'+prevTitle+'",index:'+prevIndex+'})'})
			$(".full-size .im-size").html('('+lImage.width+'x'+lImage.height+')')
			$(".full-size").undelegate().die().unbind().click(function(){
					if(lImage.width <= 900) return;
					$(".image-title,.image-controls,.prev-image,.next-image").fadeOut(300)
					$(".pr-description").css({zIndex:41000})
					var zeroLeft = - $(".full-image img").offset().left+40;
					var newLeft = $(window).width()/2 - lImage.width/2 + zeroLeft;
					var zeroTop =  - $(".full-image img").offset().top+40 + $(window).scrollTop();
					var newTop = $(window).height()/2 - lImage.height/2 + zeroTop;
					$(".full-image img").animate({
						width:lImage.width,
						left: newLeft>=zeroLeft?newLeft:zeroLeft,
						top:  newTop>=zeroTop?newTop:zeroTop
					},1600,function(){
						$("#dark-layer").fadeIn(300)
						$(this).css({cursor:"pointer"}).click(function(){
							$(this).animate({left:40,top:40,width:900},1000,function(){
								$(".image-title,.image-controls,.prev-image,.next-image").fadeIn(300)
								$("#dark-layer").fadeOut(300,function(){$(".pr-description").css({zIndex:5})})
									
							})
							$(this).unbind().undelegate().die().css({cursor:""})	
						})	
					})	
			})
			$(".fit-screen").undelegate().die().unbind().click(function(){
					if(lImage.width <= 900) return;
					$(".image-title,.image-controls,.prev-image,.next-image").fadeOut(300)
					$(".pr-description").css({zIndex:41000})
					var newWidth, newHeight;
					if(lImage.width>$(window).width()) {
						newWidth = $(window).width();
						newHeight = lImage.height;
					}
					else {
						newWidth = lImage.width;
						newHeight = lImage.height;
					}
					if(lImage.height>$(window).height()) {
						newHeight = $(window).height();
						newWidth = newHeight*lImage.width/lImage.height
						if(newWidth>$(window).width()) newWidth = $(window).width()
					}
					else {
						newWidth = lImage.width;
						newHeight = lImage.height;
					}
					var zeroLeft = - $(".full-image img").offset().left+40;
					var newLeft = $(window).width()/2 - newWidth/2 + zeroLeft;
					var zeroTop =  - $(".full-image img").offset().top+40 + $(window).scrollTop();
					var newTop = $(window).height()/2 - newHeight/2 + zeroTop;
					$(".full-image img").animate({
						width:newWidth,
						left: newLeft>=zeroLeft?newLeft:zeroLeft,
						top:  newTop>=zeroTop?newTop:zeroTop
					},1600,function(){
						$("#dark-layer").fadeIn(300)
						$(this).css({cursor:"pointer"}).click(function(){
							$(this).animate({left:40,top:40,width:900},1000,function(){
								$(".image-title,.image-controls,.prev-image,.next-image").fadeIn(300);
								$("#dark-layer").fadeOut(300,function(){$(".pr-description").css({zIndex:5})})	
							})
							$(this).unbind().undelegate().die().css({cursor:""})	
						})	
					})
			})
			cufonRefresh()
		}
	}
	function fixFooter(){
		$("#footer").animate({top:$("#portfolio").offset().top + $("#portfolio").outerHeight() + 40},500)
	}
}
function loadFlickr(){
	if($(window).scrollTop()>100) {
			if($('html').css('scrollTop')===null) {
				$('body').animate({scrollTop:0}, $(window).scrollTop()/2);
			}
			else {
				$('html').animate({scrollTop:0}, $(window).scrollTop()/2);
			}
	}
	$("#dark-layer").fadeTo(600,0.8)
	$("#flickr").delay(600).fadeIn(600,function(){
	$(".fl-photos").html("");
		$.ajax({
		  url: 'http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key='+sP.flickrAPIKey+'&user_id='+sP.flickrUserID+'&extras=description%2Curl_t%2Curl_l&format=json&jsoncallback=?',
		  dataType: 'jsonp',
		  success: function(data){
			 $.each(data.photos.photo, function(i,photo) {
				$(".fl-photos").append('<a href="'+photo.url_l+'" data-descr="'+photo.description._content+'" data-title="'+photo.title+'" class="fl-photo blink"><img src="'+photo.url_t+'" title="'+photo.title+'" width="'+photo.width_t+'" height="'+photo.height_t+'" /></a>')	
			})
			initLinksIn(".fl-photos");
			var flPhotos = [];
			showLoader();
			$(".fl-photo").each(function(){
				$(this).css({left:$(this).position().left,top:$(this).position().top})
				.css3({transform:"scale(0) rotate(90deg)",time:0})
				var ii = $(this).index();
				flPhotos[ii] = new Image();
				flPhotos[ii].src = $(this).find("img").attr("src");
				flPhotos[ii].onload = function(){
					hideLoader();
					$(".fl-photos img[src='"+flPhotos[ii].src+"']").parent("a").css3({transform:"scale(1) rotate(0deg)",time:900})
				}
			}).click(function(e){
				e.preventDefault();
				showFlPhoto({
					title:$(this).attr("data-title"),
					src:$(this).attr("href"),
					descr:$(this).attr("data-descr"),
					index:$(this).index()
				})	
			}) 
		  }
		})
	})
}
function showFlPhoto(a){
	if($(".fl-photo").css("position")!="absolute") {
		var newTop=100;
		$(".fl-photo").each(function(){
			$(this).css({position:"absolute"})
			.css3({transform:"scale(1) rotate(360deg)",time:1600,delay:$(this).index()*50})
			.delay($(this).index()*50).animate({
				left:$(this).index()%2?150:40,
				top:newTop	
			},1600,function(){
				if($(this).index()==($(".fl-photo").length-1)) showFlPhoto2()
			})
			newTop+=$(this).index()%2?$(this).height()+10:0	
		})
	}
	else {
		showFlPhoto2()	
	}
	function showFlPhoto2() {
		showLoader();
		if($(window).scrollTop()>100) {
			if($('html').css('scrollTop')===null) {
				$('body').animate({scrollTop:50}, $(window).scrollTop()/2);
			}
			else {
				$('html').animate({scrollTop:50}, $(window).scrollTop()/2);
			}
		}
		$(".fl-pTitle,.fl-pDescr").hide()
		if(hasCSS3()) $(".fl-pFull").show().css3({transform:"scale(0) rotate(-90deg)",time:0})
		else $(".fl-pFull").hide()
		var flImage = new Image();
		flImage.src = a.src;
		flImage.onload = function(){
			hideLoader();
			if(hasCSS3()) $(".fl-pFull").html('<img src="'+flImage.src+'" />').css3({transform:"scale(1) rotate(0deg)",time:900})
			else $(".fl-pFull").html('<img src="'+flImage.src+'" />').fadeIn(900)
			if(a.title) {
				$(".fl-pTitle").html(a.title).delay(900).fadeIn(300)
			}
		    if(a.descr) {
				$(".fl-pDescr").html(a.descr).delay(1100).fadeIn(400)
				if($(".fl-pDescr").width()>=(flImage.width-40)) $(".fl-pDescr").css({width:flImage.width-40})
				else $(".fl-pDescr").css({width:""})
			}
			cufonRefresh();	
		}
	}
}
function loadContent(a){
	var lContent = $(".loader-content");
	lContent.css({
		left:a.left-10,
		top:a.top-10,
		width:a.width+20,
		height:a.height	+20
	})
	.show()
	.delay(300)
	.animate({
		left:($(window).width() - 60)/2-1,
		top:$(window).scrollTop()+200-1,
		width:60,
		height:60	
	},600,function(){
		$(".ajax-loader").css({
			top:lContent.offset().top + 14	
		}).show()
	})
	$("#dark-layer").fadeIn(300,function(){
		lContent.css3({transform:"rotate(180deg)",time:600})
	})
	$("#content").hide()
	setTimeout(function(){
		$.get(a.url,function(data){
			$(".slider,#portfolio").hide();
			$("#content").html(data).show();
			cufonRefresh();
			$(".loader-content,.ajax-loader").hide()
			$("#footer").css({
				top:$("#content").offset().top + $("#content").outerHeight()+40	
			})
			lContent.css3({transform:"rotate(0deg)",time:0})	
			$("#dark-layer").fadeOut(900,function(){
				if($('html').css('scrollTop')===null && $(window).scrollTop()>200) {
					$('body').animate({scrollTop:0}, $(window).scrollTop());
				}
				else if ($(window).scrollTop()>200) {
					$('html').animate({scrollTop:0}, $(window).scrollTop());
				}
			})
			initLinksIn("#content");
		})
	},1500)
}
function toHome(){
	if($("#content").css("display")=="block") {
		$("#content").animate({
			marginLeft:	-$(window).width(),
			opacity:0
		},900,function(){
			$(".slider").fadeIn(900),
			$("#content").html("").css({
				opacity:1,
				marginLeft:"-450px"	
			}).hide()	
		})
	}
	if($("#portfolio").css("display")=="block") {
		$("#portfolio").fadeOut(900,function(){
			$(".slider").fadeIn(900,function(){
				$(sP.sliderParams.nextTrigger).die().unbind().undelegate()
				$(sP.sliderParams.prevTrigger).die().unbind().undelegate()
				$("#slider").idChopSlider(sP.sliderParams);
				
			})
		})
	}
	$("#footer").animate({
		top:$(".slider").css("top").split("px")[0]*1 + $("#slider").height()+40	
	},900)
}
function popUp(a) {
	$("#dark-layer").fadeTo(300,0.8,function(){
		$(".popup-content").html('<img src="'+sP.ajaxLoader2.src+'" />')
		  .css({
			width:sP.ajaxLoader2.width,
			height: sP.ajaxLoader2.height
		  })
		$("#popup").css({
			left:$(window).width()/2 - $("#popup").outerWidth()/2,
			top:$(window).height()/2 - $("#popup").outerWidth()/2 + $(window).scrollTop()
		}).fadeIn(300,function(){
			var popImage = new Image();
			popImage.src = a.src;
			popImage.onload = function(){
				$(".popup-content")
				  .html('<img src="'+a.src+'" style="display:none"/>')
				  .animate({
					  width:popImage.width, 
					  height:popImage.height
				   },600,function(){
					   $(this).css({height:"auto"})
					   $(this).append('<div class="p-title">'+a.title+'</div>')
					   cufonRefresh()
					   $(".p-title").delay(600).slideDown(600)
					   $(this).find("img").fadeIn(600)
					   $(".close-popup").fadeIn(300)
				   })
				var newLeft = $("#popup").position().left - (popImage.width/2-15)
				var newTop = $("#popup").position().top - popImage.height/2	
				$("#popup").animate({
					left:newLeft<=0?20:newLeft,
					top:newTop<=0?50:newTop	
				},600)	
			}	
		})	
	})
}
function closePopup(){
	$('#dark-layer').fadeOut(200)
	$('#popup').delay(200).fadeOut(300,function(){
		$(".close-popup").hide()
		$('.popup-content').html("").css({width:"auto",height:"auto"});
		
	});	
};
function showLoader() {
	$(".ajax-loader-2").show()
	
}
function hideLoader() {
	$(".ajax-loader-2").hide()	
}
(function($) {
	$.fn.rotateRel = function(angle,duration) {
		var isRotated = this.attr("class").indexOf("rotate(")>=0;
		var rotatedAngle
		if (isRotated) {
			rotatedAngle = this.attr("class").split("rotate(")[1].split(")")[0]*1;
			var newClass = this.attr("class").replace(/rotate\(\W?\d{0,}\)/,"");
			this.attr({"class":newClass})
		}
		else rotatedAngle=0;
		newAngle = rotatedAngle + angle;
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
				"transform":"rotate("+newAngle+"deg)",
				"transition-duration":(duration/1000)+"s",
				"transition-property":"transform"
		}).addClass("rotate("+newAngle+")")
	}
})(jQuery);

(function($) {
	$.fn.css3 = function(params) {
		var delay = params.delay||0;
		var transform = params.transform;
		var time = params.time;
		return this
		.css({
			"-o-transform":transform,
			"-o-transition-duration":(time/1000)+"s",
			"-o-transition-property":"-o-transform",
			"-o-transition-delay":(delay/1000)+"s",
			"-webkit-transform":transform,
			"-webkit-transition-duration":(time/1000)+"s",
			"-webkit-transition-property":"-webkit-transform",
			"-webkit-transition-delay":(delay/1000)+"s",
			"-moz-transform":transform,
			"-moz-transition-duration":(time/1000)+"s",
			"-moz-transition-property":"-moz-transform",
			"-moz-transition-delay":(delay/1000)+"s",
			"transform":transform,
			"transition-duration":(time/1000)+"s",
			"transition-property":"transform",
			"transition-delay":(delay/1000)+"s"
		})
	}
})(jQuery);

/*CSS3 Transitions Test*/
function hasCSS3() {
	var bodyDoc = document.body || document.documentElement;
	var bds = bodyDoc.style;
	var s = bds.transition !== undefined || bds.WebkitTransition !== undefined || bds.MozTransition !== undefined || bds.MsTransition !== undefined || bds.OTransition !== undefined;
	return s;
}
function cufonRefresh() {
	if(window.Cufon) Cufon.refresh()	
}
function validateEmail(emailFieldID) {
	var emailInput = $(emailFieldID)
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
	validateEmail("#contact_email");
	validateMessage();
	if (!$("#contact_email,#contact_message").hasClass("required")) {
		var name = $("#contact_name").attr("value");
		var email = $("#contact_email").attr("value");
		var subject = $("#contact_subject").attr("value");
		var message= $("#contact_message").val().replace(/<\/?[^>]+>/gi, '');
		
		$(".contact-form").slideUp(900,0,function(){
			showLoader();
			$(this).css({visibility:"hidden"});
			jQuery.post("scripts/send-message.php",{name : name, email : email, subject : subject, message : message},
				function (status) {
					hideLoader();
					
						$(".contact-status").html(status).slideDown(900)	
					
				}
			);
		})
	}
}
// JavaScript Document
var isIE6;
jumpBox = {};
jQuery(document).ready(function(){
	/*----   Cufon Replacement    ----*/
	switch (jumpBox.cufonFont) {
		case "CF": {
			$("head").append('<script type="text/javascript" src="scripts/ChunkFive_400.font.js"></script>');	
		};
		break;
		case "MR": {
			$("head").append('<script type="text/javascript" src="scripts/Myriad_Pro_600_700.font.js"></script>');
		}
		break;
	}
	Cufon.replace(jumpBox.cufonReplace)
	/*----   Startup Positioning of Content Pages    ----*/
	jumpBox.bWidth = $(window).width();
	jumpBox.moveWidth = jumpBox.bWidth;
	jumpBox.pagesHeight = [];
	$(".page:eq("+jumpBox.firstPage+"),.menu-link:eq("+jumpBox.firstPage+")").addClass("active")
	$(".page").each(function(){
		$(this).css({display:"block",height:"auto"});
		jumpBox.pagesHeight[$(this).index()] = $(this).outerHeight(true);	
		$(this).css({height:$(this).outerHeight(true)});
	})
	$(".pages").css({height:jumpBox.pagesHeight[$(".page.active").index()]})
	$(".page").css({display:"block"}).not(".active")
	.find(".content").each(function(){
		$(this).css({"overflow":"hidden","margin":0,"left":$(this).offset().left,display:"none"})	
	}).end()
	.find(".bottom-content").css({"top":170})
	var i=0;
	while($(".page:eq("+i+")").width() !== null) {
		var getOffset = (jumpBox.firstPage)*jumpBox.bWidth;
		$(".page:eq("+i+")").css({
			left:i*jumpBox.bWidth-getOffset+"px"
		});
		i++
	}
	/*----   Resize Fix    ----*/
	$(window).resize(function(){
		jumpBox.bWidth = $(window).width();
		var offsetDiffer = jumpBox.bWidth/($(".page:eq(1)").offset().left-$(".page:eq(0)").offset().left);
		jumpBox.moveWidth = jumpBox.bWidth;
		$(".page").not(".active").find(".content").each(function(){
			$(this).css({"left":($(this).parents(".page").width() - $(this).width())/2-20})	
		})
		$("#menu").css({"left":($(window).width()-$("#menu").width())/2});
		$("#jBox").css({
			left:$(".page.active .content").offset().left,
			top:$(".page.active .content").offset().top
		})
		var i=0;
		while($(".page:eq("+i+")").width() !== null) {
			$(".page:eq("+i+")").css({
				left:$(".page:eq("+i+")").offset().left*offsetDiffer+"px"
			});
			i++
		}
	})
	/*---------- Twitter Timeline------------*/
	if (jumpBox.twitterUsername!="") {
		$("a.tweet-link").attr({"href":"http://twitter.com/"+jumpBox.twitterUsername})
		$.getJSON("scripts/twitter-proxy.php?screen_name="+jumpBox.twitterUsername+"&count="+jumpBox.numberOfTweets+"&url="+encodeURIComponent('statuses/user_timeline.json?screen_name='+jumpBox.twitterUsername+'&count='+jumpBox.numberOfTweets+'&include_rts=true&include_entities=true'),
			function(tweetdata) {
				$.each(tweetdata, function(i,tweet) {
					var tweetDate = tweet.created_at.substr(0,20);
      				var tweetText = tweet.text;
					for (var i =0; i<tweet.entities.user_mentions.length; i++) {
						var mentionedName = tweet.entities.user_mentions[i].screen_name;
						tweetText = tweetText.replace('@'+mentionedName,'<a href="http://twitter.com/'+mentionedName+'">@'+mentionedName+'</a>')	
					}
					for (var i =0; i<tweet.entities.urls.length; i++) {
						var uRL = tweet.entities.urls[i].url;
						tweetText = tweetText.replace(uRL,'<a href="'+uRL+'">'+uRL+'</a>')	
					}
					var tweetFormat = '<li class="single-tweet">';
						tweetFormat +='<p class="tweet-text">';
						if (jumpBox.showTwUname) {
							tweetFormat += '<a class="twitUname" href="http://twitter.com/'+jumpBox.twitterUsername+'">@'+jumpBox.twitterUsername+'</a>: ';	
						}
							tweetFormat +=tweetText;
							tweetFormat +='</p>';
							tweetFormat +='<p class="tweet-date">on '+tweetDate+'</p>';
					$(".tweets").append(tweetFormat)	
				});
		});
	}
	/*---------- Button Wrapper------------*/
	$(".button").each(function(){
		if($(this).parent('.button-m').length==0) {
			$(this).wrap('<span class="button-l"><span class="button-m"></span></span>');	
		}
	})
	/*----------Slide Links----------*/
	$("a.slide").click(function(e){
		e.preventDefault();
		var slideToID = $(this).attr("class").split("to(")[1].split(")")[0];
		slideTo ($(".page#"+slideToID).index());	
	})
	/*----------Handling Popup Links----------*/
	$("a.popup").click(function(e){
		e.preventDefault();
		$(this).css({display:"inline-block"})
		popUp({
			url:$(this).attr("href"),
			left:$(this).offset().left,
			top:$(this).offset().top,
			windowWidth:$(this).attr("rel"),
			pBoxWidth:$(this).width()+$(this).css("padding-left").split("px")[0]*2,
			pBoxHeight:$(this).height()+$(this).css("padding-top").split("px")[0]*1
		})
		$(this).css({display:""})	
	})
	$(".dark-layer").click(function(){closePopup()})
	$("a.close").click(function(e){e.preventDefault()})
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		showLoader();
	})
	$("body").ajaxComplete(function(){
		hideLoader();
	})
	/*----------  Menu  ----------*/
	$("#menu").css({"left":($(window).width()-$("#menu").width())/2,"margin-left":0});
	$(".menu-link").not(".active").css({opacity:0.3,filter:"alpha(opacity=30)"})
	$(".menu-link").hover(function(){
		if(!$(this).hasClass("active"))	$(this).fadeTo(300,1,function(){$(this).css({filter:""})})
	},
	function(){
		if(!$(this).hasClass("active"))	$(this).fadeTo(300,0.3)
	})
	$(".menu-link a").click(function(e){
		e.preventDefault()
		if(!$(this).parent(".menu-link").hasClass("active")) {
				slideTo($(this).parent(".menu-link").index())
		}
	})
	/*----------Contact Form ----------*/
	$("#contact_form").submit(function(){
		sendMessage()
		return false;
	})
	/*---------- Jump Box ----------*/
	$("#jBox").css({
		left:$(".page.active .content").offset().left,
		top:$(".page.active .content").offset().top
	})
	/*----------Portfolio----------*/
	$(".folio-item a").hover(
	function(){
		var folioItem = $(this);
		$(".folioDescrContent").html(folioItem.next(".item-description").html())
		if(folioItem.parents(".folio-item").hasClass("first")) {
			$(".folioDescr").css({
				left:folioItem.offset().left+folioItem.width()+20,
				top:folioItem.offset().top-10		
			}).fadeIn(200)
			$(".descr-arrow").css({
				left:-10,
				"background-position":"left bottom"		
			})
		}
		else{
			$(".folioDescr").css({
				left:folioItem.offset().left-$(".folioDescr").width()-60,
				top:folioItem.offset().top-10		
			}).fadeIn(200)
			$(".descr-arrow").css({
				left:"100%",
				"background-position":"left top"		
			})
		}
	},
	function(){
		$(".folioDescr").hide()
	})
	$(".folio-item.first img").hover(
	function(){
		$(this).rotateRel(-7,200)
	},
	function(){
		$(this).rotateRel(7,200)
	})
	$(".folio-item.last img").hover(
	function(){
		$(this).rotateRel(7,200)
	},
	function(){
		$(this).rotateRel(-7,200)
	})
})
function slideTo(slideIndex) {
	if($(".menu-link.active").index()==slideIndex) return;

	if($('html').css('scrollTop')===null && $(window).scrollTop()>200) {
		$('body').animate({scrollTop:0}, $(window).scrollTop(),function(){switchPage()});
	}
	else if ($(window).scrollTop()>200) {
		$('html').animate({scrollTop:0}, $(window).scrollTop(),function(){switchPage()});
	}
	else switchPage();
	
	function switchPage(){
	closePopup();
	collapseContent($(".menu-link.active").index())
	$(".page.active .bottom-content").delay(jumpBox.collapseTime/2).animate({top:"170px"},jumpBox.collapseTime/2)
	activatePage(slideIndex)
	var offset = $(".page:eq("+slideIndex+")").offset()
	var resultWidth = 0 - offset.left;
	var pagesToSlide = Math.abs(resultWidth/jumpBox.moveWidth);
	var speed=pagesToSlide*jumpBox.slideTime;
	if (resultWidth <0 ) {
		setTimeout(function(){
			$("#jBox").rotateRel(720*pagesToSlide,speed)
		},jumpBox.collapseTime+100)
		$("#jBox").delay(jumpBox.collapseTime/2)
		.animate({"left":"-=200px"},{duration:speed/2,easing:"swing"})
		.animate({"left":"+=200px"},{duration:speed/2,easing:"swing"})
		$("#menu").delay(jumpBox.collapseTime+100)
		.animate({"left":"-=200px"},speed/2)
		.animate({"left":"+=250px"},speed/2)
		.animate({"left":"-=50px"},600);
	}
	else {
		setTimeout(function(){
			$("#jBox").rotateRel(-720*pagesToSlide,speed)
		},jumpBox.collapseTime+100)
		$("#jBox").delay(jumpBox.collapseTime/2)
		.animate({"left":"+=200px"},{duration:speed/2,easing:"swing"})
		.animate({"left":"-=200px"},{duration:speed/2,easing:"swing"})
		$("#menu").delay(jumpBox.collapseTime+100)
		.animate({"left":"-=200px"},speed/2)
		.animate({"left":"+=200px"},speed/2+300)
	}
	
	$(".page").delay(jumpBox.collapseTime+100).animate({left: "+="+(resultWidth)+"px"},speed)
	setTimeout(function(){
		expandContent(slideIndex);
		$(".pages").css({height:jumpBox.pagesHeight[slideIndex]})
	},jumpBox.collapseTime+speed+600)
	$(".page.active .bottom-content").delay(speed+jumpBox.collapseTime+700).animate({top:"0px"},jumpBox.expandTime/2)
	}
}
function activatePage(linkIndex){
	var activateItem = $(".menu-link").eq(linkIndex)
	var activatePage = $(".page").eq(linkIndex)
	$(".menu-link.active").fadeTo(300,0.3).removeClass("active");
	$(".page.active").removeClass("active");
	activateItem.addClass("active").fadeTo(300,1,function(){$(this).css({filter:""})});
	activatePage.addClass("active");
}
function collapseContent(pageIndex){
	var collapsedContent = $(".page:eq("+pageIndex+") .content");
	collapsedContent.css({"overflow":"hidden"})
	var jBox = $("#jBox");
	var collapseTime = jumpBox.collapseTime/2;
	jBox.animate({
		width: collapsedContent.width(),
		height: collapsedContent.height()
	},collapseTime,function(){
			jBox.animate({width: 0,	height: 0},{queue:false,duration:collapseTime}).rotateRel(180,collapseTime)
			collapsedContent.css({"margin":0,"left":collapsedContent.offset().left}).hide(collapseTime)
		  }
	)	
}
function expandContent(pageIndex) {
	var expandedContent = $(".page:eq("+pageIndex+") .content");	
	var jBox = $("#jBox");
	var expandTime = jumpBox.expandTime/2;
	jBox.animate({width: expandedContent.width(),height: expandedContent.height()},expandTime,function(){
			jBox.animate({width: 0,	height: 0},{queue:false,duration:expandTime}).rotateRel(180,expandTime)
		  }
	)
	expandedContent.show(expandTime,function(){
		$(this).css({marginLeft:"auto",marginRight:"auto",left:""})	
	})
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
})(jQuery)
function popUp(params) {
	closePopup()
	params.windowWidth = params.windowWidth || 600;
	params.left = params.left || 0;
	params.top = params.top || 0;
	jQuery.get(params.url,function(windowContent){
		if(isIE6) {
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
		Cufon.replace(jumpBox.cufonReplace)
		/*---------- Button Wrapper------------*/
		$(".pop-window .button").each(function(){
			if($(this).parent('.button-m').length==0) {
				$(this).wrap('<span class="button-l"><span class="button-m"></span></span>');	
			}
		})
		$("#popup").css({
			width:params.windowWidth,
			top:$(window).scrollTop()+150,
			left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2:24
		}).delay(900).fadeIn(600,function(){
			$("#popupBox").fadeOut(300)
		})
		$("#popupBox").css({
			width:params.pBoxWidth,
			height:params.pBoxHeight,
			left:params.left-20,
			top:params.top-20
		}).show().delay(400).animate({
			width:params.windowWidth,
			top:$(window).scrollTop()+150-24,
			left:$(window).width()>params.windowWidth?($(window).width() - params.windowWidth)/2-24:0,
			height:$("#popup").height()
		},600)
		setTimeout(function(){
			$("#popupBox").rotateRel(180,600)
		},400)
		$(".pop-window a.popup").click(function(e){
			e.preventDefault();
			popUp({
				url:$(this).attr("href"),
				left:$(this).offset().left,
				top:$(this).offset().top,
				windowWidth:$(this).attr("rel"),
				pBoxWidth:$(this).width()+$(this).css("padding-left").split("px")[0]*2,
				pBoxHeight:$(this).height()+$(this).css("padding-top").split("px")[0]*1
			})	
		})
		$(".pop-window .slide").click(function(e){
			e.preventDefault();
			var slideToID = $(this).attr("class").split("to(")[1].split(")")[0];
			slideTo ($(".page#"+slideToID).index());	
		})
	})
}
function closePopup(){
	$('#popup').hide();
	$(".pop-window").html("")
	$(".dark-layer").hide()
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
		$(".contact-form").fadeOut(600,function(){
			$(".contact-status").html('<img class="ajax-loader" src="'+ajaxLoader.src+'" width="'+ajaxLoader.width+'" height="'+ajaxLoader.height+'" />').show()
		})
		jQuery.post("scripts/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				$("#contact_form").fadeTo(300,0,function(){
					$(this).css({"visibility":"hidden"});
					$(".status_message").html(status).fadeIn(300)
				});
			}
		);
	}
}
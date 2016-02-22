// JavaScript Document
var isIE6;
rotatr = {
	targetYear : 2012,	
	targetMonth : 0,
	targetDate : 1,
	targetHours : 0, //In UTC+00 Time zone
	targetMinutes : 0,
	replaceFonts : ".cufoned,.legend,.day,.hour,.minute,.seconds1,.seconds2,.intouch-status",
	sliderParams : {
		loader : "#slide-loader",
		slide : ".slide",
		nextTrigger : "a#slide-next",
		prevTrigger : "a#slide-prev",
		type: "vertical",
		disableCSS3 : false,
		xOffset: 50,
		yOffset: 0,
		hPieces : 10,
		vPieces: 40,
		rotate : 180 ,
		rotateSymmetric: true,
		scaleX:0,
		scaleY:0,
		dur1: 600,
		dur2 :10,
		dur3: 600,
		pieceDelay : 80,
		xFadeDelay :0,
		hideControls:true	
	},
	twitterFeed : {
		container : "#tweets",
		username : "idangerous",
		numberOfTweets : 1,
		tweetFormat : '<li class="single-tweet">'
					+ '<p class="tweet-text">'
					+ '%tweetText'
					+ '</p>'
					+ '<p class="tweet-date">on %tweetDate</p>'
					+ '</li>'
	}
}
var diff = {};
/*----------Ajax Loader initialization----------- */
var ajaxLoader = new Image();
	ajaxLoader.src = 'images/ajax-loader.gif';

$(function(){
	/*----------Twitter Feed----------- */
	if(rotatr.twitterFeed.container!=""&&rotatr.twitterFeed.username!="") {
		$(rotatr.twitterFeed.container).idTwitter(rotatr.twitterFeed)	
	}
	/*----------Slider Initialization----------- */
	$("#slider").idChopSlider(rotatr.sliderParams);
	$("#features").click(function(){
		if($(".slider").css("display")=="none") {
			$("#date-panes, #seconds-block").fadeOut(600);
			$(".slider").delay(600).fadeIn(600,function(){
				$(window).resize()
				rotatr.stop();	
			});
		}
		else {
			$(".slider").fadeOut(600,function(){
				rotatr.runTimer()	
			})
			$("#date-panes, #seconds-block").delay(600).fadeIn(600);	
		}
	})
	/*----------Clock Timer Initialization----------- */
	var intRotator,intDivider,intTopSeconds,intBotSeconds,intMinutes;
	rotatr.initClock = function(){
		var currentDate = new Date();
		var timeZoneOffset = currentDate.getTimezoneOffset()/60;
			rotatr.targetHours2 = rotatr.targetHours-timeZoneOffset;
			
		var targetDate = new Date(rotatr.targetYear, rotatr.targetMonth, rotatr.targetDate, rotatr.targetHours2, rotatr.targetMinutes, 0, 0);
		
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
		$(".day2").html(diff.days);
		$(".hour2").html(diff.fullHours);
		$(".minute2").html(diff.fullMins);
		if(window.Cufon) Cufon.refresh()
	}
	
	/* --- Rotatr Animation --- */
	rotatr.startRotation = function(){
		$(".rotatr").rotateRel(180,2000)	
		$(".rotatr-shadow").rotateRel(180,2000)	
		intRotator = setInterval (function(){
			$(".rotatr").rotateRel(180,2000)	
			$(".rotatr-shadow").rotateRel(180,2000)		
		},2000)
	}
	
	/* --- Divider Animation --- */
	rotatr.dividerAnimation = function(){
		setTimeout(function(){$(".divider").hide()},500)
		intDivider = setInterval(function(){
				$(".divider").show()
				setTimeout(function(){$(".divider").hide()},500)	
		},1000)
	}

	/*----------Change Second Animation----------- */
	var topSeconds = diff.fullSec-4;
	var botSeconds = diff.fullSec-2;
	if(topSeconds<0) {topSeconds = 60 + topSeconds;}
	if (topSeconds >=0 && topSeconds<10) topSeconds = "0" + topSeconds
	if(botSeconds<0) {botSeconds = 60 + botSeconds;}
	if (botSeconds >=0 && botSeconds<10) botSeconds = "0" + botSeconds
	$(".seconds1").html(topSeconds)
	$(".seconds2").html(botSeconds)
	rotatr.topSecondsAnimation = function(){
		topSeconds = diff.fullSec-4;
		if(topSeconds<0) {topSeconds = 60 + topSeconds;}
		if (topSeconds >=0 && topSeconds<10) topSeconds = "0" + topSeconds
		$(".seconds1").html(topSeconds)
		setTimeout(function(){
			intTopSeconds = setInterval(function(){changeTopSeconds()},4000);
			changeTopSeconds()
		},3500)
	}
	function changeTopSeconds(){
		topSeconds = topSeconds-4;
		if (topSeconds <0 ) {
			topSeconds = 60+topSeconds;
		}
		if (topSeconds >=0 && topSeconds<10) topSeconds = "0" + topSeconds
		$(".seconds1").animate({left:300},{queue:false,duration:1000,easing:"linear",complete:function(){
							$(this).css({left:0}).hide().html(topSeconds)
							Cufon.refresh()
						}
		}).fadeIn(500).fadeOut(500)
	}
	rotatr.botSecondsAnimation = function(){
		botSeconds = diff.fullSec-2;
		if(botSeconds<0) {botSeconds = 60 + botSeconds;}
		if (botSeconds >=0 && botSeconds<10) botSeconds = "0" + botSeconds
		$(".seconds2").html(botSeconds)
		setTimeout(function(){
			intBotSeconds = setInterval(function(){changeBotSeconds()},4000);
			changeBotSeconds()
		},1500)
	}
	function changeBotSeconds(){
		botSeconds = botSeconds-4;
		if (botSeconds <0 ) {
			botSeconds = 60 + botSeconds;
		}
		if (botSeconds >=0 && botSeconds<10) botSeconds = "0" + botSeconds
		$(".seconds2").animate({left:0},{queue:false,duration:1000,easing:"linear",complete:function(){
							$(this).css({left:300}).hide().html(botSeconds)
							Cufon.refresh()
						}
		}).fadeIn(500).fadeOut(500)
	}
	/*----------Change Minute Animation----------- */
	var minutes = diff.fullMins*1;
	rotatr.minutesAnimation = function(){
		minutes = diff.fullMins*1;
		setTimeout(function(){
			intMinutes = setInterval(function(){changeMinute()},60000);
			changeMinute()	
		},diff.fullSec*1000)
	}
	function changeMinute(){
		minutes = minutes - 1;
		if (minutes <0 ) {
			minutes = 59;
			changeHour();
		}
		if (minutes >=0 && minutes<10) minutes = "0" + minutes
		$(".minute2").css3({transform:"scale(0.1) rotate(-450deg)",time:600})
		.animate({left:-100,top:-100,opacity:0},600,function(){
			$(".minute2").html(minutes).css3({transform:"scale(1) rotate(0deg)",time:600})	
			.animate({left:0,top:0,opacity:1},600)
			if(window.Cufon) Cufon.refresh();
		})
	}
	function changeHour(){
		diff.fullHours = diff.fullHours - 1;
		if (diff.fullHours <0 ) {
			diff.fullHours = 23;
			changeDay();
		}
		if (diff.fullHours >=0 && diff.fullHours<10) diff.fullHours = "0" + diff.fullHours
		$(".hour2").css3({transform:"scale(0.1) rotate(-450deg)",time:600})
		.animate({left:100,top:-100,opacity:0},600,function(){
			$(".hour2").html(diff.fullHours).css3({transform:"scale(1) rotate(0deg)",time:600})	
			.animate({left:0,top:0,opacity:1},600)
			if(window.Cufon) Cufon.refresh();
		})	
	}
	function changeDay(){
		diff.days = diff.days - 1;
		if (diff.days <0 ) {
			diff.days = 23;
			changeDay();
		}
		$(".day2").css3({transform:"scale(0.1) rotate(-450deg)",time:600})
		.animate({left:-100,top:-100,opacity:0},600,function(){
			$(".day2").html(diff.days).css3({transform:"scale(1) rotate(0deg)",time:600})	
			.animate({left:0,top:0,opacity:1},600)
			if(window.Cufon) Cufon.refresh();
		})	
	}
	/* --- Start Rotator --- */
	rotatr.runTimer = function(){
		rotatr.initClock()
		rotatr.dividerAnimation();
		rotatr.minutesAnimation();
		rotatr.botSecondsAnimation();
		rotatr.topSecondsAnimation();
		rotatr.startRotation();	
		
	}
	rotatr.stop = function(){
		clearInterval(intRotator);
		clearInterval(intDivider);	
		clearInterval(intTopSeconds);	
		clearInterval(intBotSeconds);	
		clearInterval(intMinutes);	
	}
	rotatr.runTimer()
	
	/*----------Date Panes Animation----------- */
	$(".date-pane").hover(
		function(){
			$(this).find(".shadow").css3({transform:"scale(0.7)",time:300})	
		},
		function(){
			$(this).find(".shadow").css3({transform:"scale(1)",time:300})
		}
	)
	/*----------Cufon Fonts----------- */
	if(window.Cufon) Cufon.replace(rotatr.replaceFonts);
	/*----------Second's links animation----------- */
	$(".social-links a").hover(
		function(){
			$(this).css3({transform:"scale(0.8) rotate(15deg)",time:300})	
		},
		function(){
			$(this).css3({transform:"scale(1) rotate(0deg)",time:300})
		}
	)
	$(".learn-more a").hover(
		function(){
			$(this).css3({transform:"rotate(-5deg)",time:300})	
		},
		function(){
			$(this).css3({transform:"rotate(0deg)",time:300})
		}
	)
	$("a.sendEmail").hover(
		function(){
			$(this).css3({transform:"scale(1) rotate(15deg)",time:300})	
		},
		function(){
			$(this).css3({transform:"scale(1) rotate(0deg)",time:300})
		}
	)
	/*----------Popup links handling----------- */
	$("a.popup").click(function(e){
		e.preventDefault();
		var filename = $(this).attr('href').substr(1);
		popUp({url : "content/"+filename+".php", pWidth : $(this).attr("rel")});
	})
	$(".dark-layer,.close-popup").click(function(){closePopup()})
	/*----------Send Email form----------- */
	$("input.intouch").click(function(){
		if($(this).val()=="your-email@here.com") {
			$(this).val("");	
		}
	})
	$("input.intouch").blur(function(){
		if($.trim($(this).val())=="") {
			$(this).val("your-email@here.com");	
		}
	})
	$(".sendEmail").click(function(e){
		e.preventDefault()
		validateEmail("input.intouch");
		if($("input.intouch").val()=="your-email@here.com") $("input.intouch").addClass("required");
		
		if(!$("input.intouch").hasClass("required")) {
			$(".sendEmail").hide()
			$('<div class="intouch-loader"><img class="ajax-loader" src="'+ajaxLoader.src+'" width="'+ajaxLoader.width+'" height="'+ajaxLoader.height+'" /></div>').insertAfter("input.intouch")
			jQuery.get("scripts/send-email.php",{email:$("input.intouch").val()},function(status){
				$("input.intouch").fadeOut(900)
				$(".intouch-loader").fadeOut(900,function(){
					$(".ajax-loader").remove()
					$(".send-email").append(status)
					if(window.Cufon) Cufon.refresh()
					$(".intouch-status").fadeIn(900)
				})
			})
		}
	})
})
function popUp(params) {
	var popupWidth = params.pWidth||700;
	var popUpContent = $('.popup-content');
	var popupLeftPadding = popUpContent.css("padding-left").split('px')[0];
	popUpContent
	.html('<img class="ajax-loader" src="'+ajaxLoader.src+'" width="'+ajaxLoader.width+'" height="'+ajaxLoader.height+'" />')
	.css({width:"auto",height:"auto"})
	.show()
	$('#popup').css({marginLeft:-ajaxLoader.width/2-popupLeftPadding-10,top:$(window).scrollTop()+100}).show()
	
	jQuery.get(params.url,function(data){
		$(".dummy-block").css({width:popupWidth-popupLeftPadding*2}).html(data);
		$(".ajax-loader").css({opacity:0})
		popUpContent.animate({width:$(".dummy-block").width(),height:$(".dummy-block").height()},1000,function(){
			$(".dummy-block").html("");
			popUpContent.html(data);
			if(window.Cufon) Cufon.refresh(); 
			if(isIE6) {
				$('.dark-layer').css({position:"absolute",height:$(window).height(),top:$(window).scrollTop()})
				$(window).scroll(function(){
					$('.dark-layer').css({top:$(window).scrollTop()})
				})	
			}
			$('.dark-layer').delay(100).fadeTo(300,0.7);
			$(".popup-content a.popup").click(function(e){
				e.preventDefault();
				var filename = $(this).attr('href').substr(1);
				popUp({url : "content/"+filename+".php", pWidth : $(this).attr("rel")});
			})
		})
		$('#popup').animate({marginLeft:-popupWidth/2-10},1000)
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
function closePopup(){
	$('.dark-layer').fadeOut(200)
	$('#popup').delay(200).fadeOut(300,function(){
		$('.popup-content').html("").css({width:"auto",height:"auto"});
		
	});	
}
(function($) {
	$.fn.css3 = function(params) {
		var transform = params.transform;
		var time = params.time;
		return this
		.css({
			"-o-transform":transform,
			"-o-transition-duration":(time/1000)+"s",
			"-o-transition-property":"-o-transform",
			"-webkit-transform":transform,
			"-webkit-transition-duration":(time/1000)+"s",
			"-webkit-transition-property":"-webkit-transform",
			"-moz-transform":transform,
			"-moz-transition-duration":(time/1000)+"s",
			"-moz-transition-property":"-moz-transform",
			"transform":transform,
			"transition-duration":(time/1000)+"s",
			"transition-property":"transform"
		})
	}
})(jQuery);
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
		$(".contact-form").fadeOut(600,function(){
			$(".contact-status").html('<img class="ajax-loader" src="'+ajaxLoader.src+'" width="'+ajaxLoader.width+'" height="'+ajaxLoader.height+'" />').show()
		})
		jQuery.post("scripts/send-message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				$(".contact-status").delay(600).fadeOut(300,function(){
					$(".contact-status").html(status).fadeIn(600)	
				});
			}
		);
	}
}
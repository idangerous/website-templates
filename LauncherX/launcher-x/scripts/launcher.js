// JavaScript Document
var isIE6
/*----------Ajax Loader initialization----------- */
var ajaxLoader = new Image();
	ajaxLoader.src = 'images/ajax-loader.gif';
/*----------Current and target dates----------- */
var currentDate = new Date();
var timeZoneOffset = currentDate.getTimezoneOffset()/60;
var targetYear = 2012; // Target year
var targetMonth = 0; // Target month (from 0(Jan) to 11(Dec))
var targetDate = 1; // Target day (from 1 to 31)
var targetHours = 0 ; // Target hours (from 0 to 23)
	targetHours = targetHours-timeZoneOffset;
var targetMinutes = 0; // Target minute (from 0 to 59)
var targetSeconds = 0; // Target second (from 0 to 59)
var targetDate = new Date(targetYear, targetMonth, targetDate, targetHours, targetMinutes, targetSeconds, 0);
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
if (diff.days<100 && diff.days>=10) diff.days = "0"+diff.days;
if (diff.days<10) diff.days = "00"+diff.days;

$(function(){
	/*----------Clock Timer Initialization----------- */
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
	/*----------Glass panes animation----------- */
	$(".glass-panes").find("img").each(function(){
		makeItAnimated($(this),$(this).width())	
	})
	function makeItAnimated(img,imgWidth) {
		var newSmallWidth = imgWidth*0.9;
		img.hover(
			function(){
				
				img.animate({width:	newSmallWidth},150)
			},
			function(){
				img.animate({width:	imgWidth},150)
			}
		)
	}
	/*----------"Open Content" animation----------- */
	$(".openContent").click(function(e){
		e.preventDefault();
		$("h1.will-open").fadeOut(300);
		$(".clock").animate({top:"-80px"},600);
		$(".glass-panes").animate({top:"-110px",width:800},600);
		$(".glass-pane:eq(0),.glass-pane:eq(1)").animate({marginRight:128},600)
		$(".home-content,.footer").fadeOut(600);
		$(".content-wrap").delay(800).fadeIn(600)
	})
	/*----------"About" links animation----------- */
	$(".ul-links li a").hover(
		function(){
			$(this).animate({marginLeft:"5px"},150)	
		},
		function(){
			$(this).animate({marginLeft:"0px"},150)	
		}
	)
	/*----------Popup links handling----------- */
	$("a.popup").click(function(e){
		e.preventDefault();
		var filename = $(this).attr('href').substr(1);
		popUp({url : "content/"+filename+".html", pWidth : $(this).attr("rel")});
	})
	$(".dark-layer,.close-popup").click(function(){closePopup()})
	/*----------Send Email form----------- */
	$("input#email").click(function(){
		if($(this).val()=="Your email here") $(this).val("")
	})
	$("#sendEmail").click(function(){
		validateEmail("#email");
		if(!$("input#email").hasClass("required")) {
			$("input#email,#sendEmail").hide()
			$(".sendEmail").append('<img class="ajax-loader" src="'+ajaxLoader.src+'" width="'+ajaxLoader.width+'" height="'+ajaxLoader.height+'" />')
			jQuery.get("scripts/send-email.php",{email:$("input#email").val()},function(status){
				$(".sendEmail .ajax-loader").fadeOut(300,function(){$(".sendEmail .ajax-loader").remove()})
				$(".message-status").html(status)
				$(".message-status").delay(400).fadeIn(600)
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
		popUpContent.animate({width:$(".dummy-block").width(),height:$(".dummy-block").height()},600,function(){
			$(".dummy-block").html("");
			popUpContent.html(data);
			Cufon.replace(".cufoned");
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
				popUp({url : "content/"+filename+".html", pWidth : $(this).attr("rel")});
			})
		})
		$('#popup').animate({marginLeft:-popupWidth/2-10},600)
	})
}
function closePopup(){
	$('.dark-layer').fadeOut(200)
	$('#popup').delay(200).fadeOut(300,function(){
		$('.popup-content').html("").css({width:"auto",height:"auto"});
		$(this).css({filter:""})
	});	
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
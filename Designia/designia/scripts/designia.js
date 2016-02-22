// JavaScript Document
jQuery(document).ready(function(){
	pageScript()
	/*----------Blink Effect----------*/
	$("a.blink").hover(
		function(){$(this).fadeTo(300,0.5)},
		function(){$(this).fadeTo(300,1,function(){$(this).css("filter","")})}
	)
	/*----------Menu----------*/
	var linkDescr, linkIndex, menuLink;
	$("#menu li").each(function(){
		$(this).children(".linkDescr").attr({"id":"linkDescr"+$(this).index()});
	})
	$("#menu li:last").css('background','none')
	$("#menu li:first").css({'margin-left':'10px','padding-left':'10px'})
	$("#menu li").hover(
		function(){
			linkIndex = $(this).index();
			$(this).children(".link-bg").fadeIn(300);
			if($(this).children(".linkDescr").length>0) {
				$(this).children("a").animate({top:"5px"},200);
				linkDescr = $(this).children(".linkDescr").attr('title');
				typeWriter({twID:linkIndex,text:linkDescr,id:'linkDescr'+linkIndex,delay:20})
			}
		},
		function(){
			$(this).children(".link-bg").fadeOut(150);
			$(this).children("a").animate({top:"30px"},150);
			typeWriter({twID:linkIndex},"stop");
			$(this).children(".linkDescr").html("");
		}
	)
	$("ul.menu > li").click(function(){
		if($(this).hasClass("openFolio")) {
			if($("#portfolio").css('display')=='block') {
				closePortfolio()
			}
			else openPortfolio()
		}
		else {
			if($("#portfolio").css('display')=='block') closePortfolio()
			menuLink = $(this).children("a");
			loadContent("content/"+menuLink.attr("href").split("content=")[1]+".php")
		}
	})
	$("#menu a").click(function(e){e.preventDefault()})
	/*----------Portfolio----------*/
	$("#portfolio img").hover(
		function(){
			$(this).fadeTo(300,0.3)
		},
		function(){
			$(this).fadeTo(300,1)
		}
	)
	$(".folio-right").click(function(){
		if($(".folio-slide").css("left")!="-" + ($(".folio-slide").length-1)*940 + "px")
		$(".folio-slide").animate({left:"-=940px"},1500)	
	})
	$(".folio-left").click(function(){
		if($(".folio-slide").css("left")!="0px") $(".folio-slide").animate({left:"+=940px"},1500)	
	})
	/*----------Ajax Loader----------*/
	$(".ajax-loader").ajaxStart(function(){
		openLoader()
	})
	$(".ajax-loader").ajaxComplete(function(){
		closeLoader();
	})
	/*----------Popup Window----------*/
	$("#p-layer").click(function(){
		closePopup();
	});
	$("a.popup").click(
	function(e){
		e.preventDefault();
		var width=$(this).attr("rel");
		var height=$(this).attr("rev");
		if($(this).hasClass("direct"))	var uri = $(this).attr("href");
		else {
			var url = "content/"+$(this).attr("href").split("content=")[1]+".php"
		}
		popUp(url,width,height)
	})
	/*----------Ajax Content----------*/
	$("a.ajax").click(
	function(e){
		e.preventDefault();
		if($(this).hasClass("direct"))	loadContent($(this).attr("href"));
		else loadContent("content/"+$(this).attr("href").split("content=")[1]+".php");
	})
})
/*----------Ajax Loader----------*/
function openLoader() {
	$(".ajax-loader").css({"position":"absolute","top":$(window).scrollTop()+250}).show()
}
function closeLoader() {
	$(".ajax-loader").hide()
}
/*----------Content Loading Functions----------*/
function loadContent(url) {
	jQuery.get(url,function(newContent){
		$(".dummy-content").html(newContent)
		$(".content-inner").animate({height:$(".dummy-content").height()},{queue:false, duration:900})
		$(".content-inner").fadeTo(300,0,function(){
			$(".content-inner").html(newContent);
			pageScript();
			$(".content-inner").fadeTo(300,1,function(){$(".content,.content-inner").css("filter","")})
			$(".dummy-content").html("")
		})	
	})	
}
function pageScript() {
	$(".content .blink").hover(
		function(){$(this).fadeTo(300,0.5)},
		function(){$(this).fadeTo(300,1,function(){$(this).css("filter","")})}
	)
	$(".content a.popup").click(
		function(e){
			e.preventDefault();
			var width=$(this).attr("rel");
			var height=$(this).attr("rev");
			if($(this).hasClass("direct"))	var uri = $(this).attr("href");
			else {
				var url = "content/"+$(this).attr("href").split("content=")[1]+".php"
			}
			popUp(url,width,height)
	})
	$(".content a.ajax").click(
		function(e){
			e.preventDefault();
			if($(this).hasClass("direct"))	loadContent($(this).attr("href"));
			else loadContent("content/"+$(this).attr("href").split("content=")[1]+".php");
	})	
	$(".content a.openFolio").click(
		function(e){
			e.preventDefault();
			openPortfolio()
	})
	$(".content a.pop-image").click(function(e){
		e.preventDefault();
		var bigImgUrl = $(this).attr("href");
		var bigImgWidh = $(this).attr("rel");
		popUpImage({url:bigImgUrl,width:bigImgWidh ,smallImg : $(this).children("img") });
	})
}
/*----------Functions to open and to close Portfolio secton----------*/
function openPortfolio(){
		$(".portfolio-bg").delay(1800).fadeIn(600)
		$("#portfolio").slideDown(1000).animate( { "margin-top": "-19px" },600)
		$(".folio-left,.folio-right").delay(1800).fadeIn(300)
	}
function closePortfolio(){
		$(".portfolio-bg").fadeOut(300)
		$("#portfolio").animate({"margin-top":"0px"},600).slideUp(1000)
		$(".folio-left,.folio-right").fadeOut(300)
}
/*----------Popup Windows----------*/
function popUp(url,width,height) {
		var width=width||600;
		var height=height||"auto";
		var windowTop = $(window).scrollTop() + 100;
		var windowPadding = $(".window").css("padding").split("px")[0]
		if(!windowPadding) windowPadding = $(".window").css("padding-left").split("px")[0]
		jQuery.get(url,function(data){
			$(".pop-content").html(data);
			$(".window").css({"width":width,"height":height});
			$(".window").css({"left":($(window).width()-$(".window").width())/2-windowPadding,"top":windowTop}).delay(300).fadeIn(300);
			$('.window .close').delay(600).fadeIn(200);
			openLayer();
		})
}
function openLayer() {
	$('#p-layer').fadeTo(300,0.6)
}
function closePopup() {
	$('.window .close,#p-layer').fadeOut(300)
	$(".window").fadeOut(300,function(){
		$(".window").css({width:"auto",height:"auto"})
	});
}
/*----------Popup Image Functions----------*/
function popUpImage(params) {
		openLoader()
		var smallLeft = params.smallImg.offset().left
		var smallTop = params.smallImg.offset().top
		$(".pop-content").html('<img src="'+params.url+'" style="width:'+params.smallImg.width()+'px" onload="popUpImage2('+smallLeft+','+smallTop+','+params.width+')" />')
}
function popUpImage2(smallLeft,smallTop,newWidth) {
	closeLoader();
	var windowPadding = $(".window").css("padding").split("px")[0]
	if(!windowPadding) windowPadding = $(".window").css("padding-left").split("px")[0]
	$(".window").css({left:smallLeft,top:smallTop,padding:"0px"}).show()
	var newLeft = ($(window).width() - newWidth)/2
	$(".window").animate({top:$(window).scrollTop()+100, left:newLeft-windowPadding, padding:windowPadding},300)
	$(".pop-content img").animate({width:newWidth},300,function(){openLayer()})
	$(".window .close").delay(500).fadeIn(300)
}
/*----------Validation And Send Message Functions----------*/
function validateEmail() {
	var email = $("input#email").attr("value");
	var re = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|mobi|travel))$/i;
	if(re.test(email)) $("input#email").removeClass("invalid");
 	else $("input#email").addClass("invalid");
}
function validateMessage() {
	message = $("textarea#message").val();
	m_length = ($.trim(message)).length;
	if (m_length < 10) $("textarea#message").addClass("invalid");
	else $("textarea#message").removeClass("invalid");
	
}
function validateText(fieldId,length) {
	field = $("input#"+fieldId);
	text = field.val();
	m_length = ($.trim(text)).length;
	if (m_length < length) field.addClass("invalid");
	else field.removeClass("invalid");
}
function sendMessage() {
	validateEmail();
	validateMessage();
	validateText('name',6);
	validateText('subject',6);
	if (!$("textarea#message,input#email,input#subject,input#name").hasClass("invalid")) {
		name = $("input#name").attr("value");
		email = $("input#email").attr("value");
		subject = $("input#subject").attr("value");
		message= $("textarea#message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("scripts/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				$("#contact-form").fadeTo(300,0,function(){
					$(this).css({"visibility":"hidden"})
					$(".message_status").html(status).fadeIn(300)
				})
			}
		);
	}
}
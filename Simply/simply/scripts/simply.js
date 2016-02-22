// JavaScript Document
var getContent;
var isIE6 = navigator.appVersion.indexOf("MSIE 6")>0;
jQuery(document).ready(function(){
	/*----------Menu----------*/
	if(getContent) {
		for (var i=0;i<=$(".menu li:last").index();i++) {
			var menuLink = $(".menu li:eq("+i+")")
			menuLink.children(".link-bg").fadeTo(0,0.2)
			menuLink.css({"left":(menuLink.width()+10)*i,"top":0})
		}
		$(".toHome").show()
	}
	else {
		for (i=0;i<=$(".menu li:last").index();i++) {
			var menuLink = $(".menu li:eq("+i+")")
			menuLink.children(".link-bg").fadeTo(0,0.2)
			menuLink.css({"top":(menuLink.height()+20)*i+40,"left":0})
		}
	}
	$("ul.menu li").hover(
		function(){
			if(!$(this).hasClass('active-link')) {
				$(this).children(".link-bg").fadeTo(300,1)
				$(".menu-decor").css({"left":$(this).offset().left-$(".menu-decor").width(),"top":$(this).offset().top-($(".menu-decor").height()-$(this).height())/2}).fadeIn(600)
			}
		},
		function(){
			if(!$(this).hasClass('active-link')) {
				$(this).children(".link-bg").fadeTo(300,0.2)
			}
			$(".menu-decor").stop(true,true).hide()
			
		})
	$("#menu a").click(function(e){
		e.preventDefault();
		var menuLink = $(this).parent("li");
		if(!menuLink.hasClass("active-link")) {
			$(".menu .active-link .link-bg").fadeTo(300,0.2)
			$(".menu .active-link").removeClass('active-link')
			menuLink.addClass('active-link');
			menuLink.children(".link-bg").fadeTo(300,1);
			var url = $(this).attr('href').split('content=');
			goTo(url[1]);
		}
	})
	/*----------Theme Switcher----------*/
	$(".theme-switcher").hover(
		function(){
			$(this).animate({"top":0},300)	
		},
		function(){
			$(this).animate({"top":-60},300)
		}
	)
	/*----------Features----------*/
	$(".switches span").click(function(){
		if(!$(this).hasClass("current")) {
			var currentIndex = $(".switches .current").index()
			$(".switches .current").animate({"margin-left":0},300,function(){
				$(".switches span:eq("+currentIndex+")").removeClass("current")	
			});
			$(this).animate({"margin-left":10},300,function(){
				$(this).addClass("current")	
			})
			$(".feature:eq("+currentIndex+")").fadeOut(300,function(){
				$(".feature:eq("+currentIndex+")").removeClass("current")	
			})
			$(".feature:eq("+$(this).index()+")").delay(300).fadeIn(300,function(){
				$(".feature:eq("+$(this).index()+")").addClass("current")	
			})
		}
	})
	/*----------Ajax Loader----------*/
	$(".ajax-loader").ajaxStart(function(){
		$(this).css({"position":"absolute","top":$(window).scrollTop()+250}).show()
	})
	$(".ajax-loader").ajaxComplete(function(){
		$(this).hide();
	})
	/*----------Popup Window----------*/
	if($('.window').css("display")=="block") {
		$('.window').css({"left":($(window).width()-$('.window').width())/2})
	}
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
			var uri = "content/"+$(this).attr("href").split("popup=")[1]+".php"
		}
		popUp(uri,width,height)
	})
	/*----------Ajax Content----------*/
	$("a.goTo").click(
	function(e){
		e.preventDefault();
		var url = $(this).attr("href").split("content=")[1]
		goTo(url)
	})
})
function goTo(url) {
	if ($('#features').css("display")!="none") {
		jQuery.get("content/"+url+".php",function(newContent){
			$("#features").fadeOut(600,function(){
				for (i=0;i<=$(".menu li:last").index();i++) {
					var menuLink = $(".menu li:eq("+i+")")
					menuLink.delay(200*(i-1)).animate({"left":(menuLink.width()+10)*i,"top":0},300)
				}
				$(".content").html(newContent)
				pageScript();	
				$(".content-wrap").delay(600).fadeIn(600,function(){
					$(".toHome").fadeIn(600)
				})
			})	
		})

	}
	else {
		jQuery.get("content/"+url+".php",function(newContent){
			$(".content-wrap").fadeOut(600,function(){
				$(".content").html(newContent)
				pageScript()
				$(".content-wrap").delay(300).fadeIn(600);
			})	
		})	

	}
}
function pageScript() {
	$("a.popup").click(
		function(e){
			e.preventDefault();
			var width=$(this).attr("rel");
			var height=$(this).attr("rev");
			if($(this).hasClass("direct"))	var uri = $(this).attr("href");
			else {
				var uri = "content/"+$(this).attr("href").split("popup=")[1]+".php"
			}
			popUp(uri,width,height)
	})
	$("a.goTo").click(
		function(e){
			e.preventDefault();
			var url = $(this).attr("href").split("content=")[1]
			goTo(url)
	})	
}
function goHome() {
	$(".active-link").children('.link-bg').fadeTo(300,0.2);
	$(".active-link").removeClass('active-link')
	$(".content-wrap").fadeOut(600,function(){
		for (i=0;i<=$(".menu li:last").index();i++) {
			var menuLink = $(".menu li:eq("+i+")")
			menuLink.delay(200*(i-1)).animate({"top":(menuLink.height()+20)*i+40,"left":0},300)
		}
		$("#features").delay(900).fadeIn(600);
	})
	$(".toHome").fadeOut(300)
}
/*----------Popup Windows----------*/
function popUp(uri,width,height) {
		var width=width||600;
		var height=height||"auto";
		var windowTop = $(window).scrollTop() + 100;
		jQuery.get(uri,function(data){
			$(".pop-content").html(data);
			$(".window").css({"width":width,"height":height})
			$(".window").css({"left":($(window).width()-$(".window").width())/2,"top":windowTop}).delay(300).fadeIn(300)
			$('.close').delay(600).fadeIn(200)
			if(!isIE6) $('#p-layer').fadeTo(300,0.6)
			else {
				$('#p-layer').css({"position":"absolute","height":$(window).height(),"top":$(window).scrollTop()}).fadeTo(300,0.6)
				$(window).scroll(function(){
					$('#p-layer').css({"top":$(window).scrollTop()})
				})
			}
		})
		
}
function closePopup() {
	$('.close,#p-layer').fadeOut(300)
	$(".window").fadeOut(300);
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
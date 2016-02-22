// JavaScript Document
jQuery(document).ready(function(){
	/*----   Startup Positioning of Content Pages    ----*/
	var $bWidth = $(window).width();
	var $cWidth = $(".page:eq(0)").outerWidth();
	$moveWidth = ($bWidth+$cWidth)/2;
	$posWidth = ($bWidth-$cWidth)/2;
	$(".page:eq(0)").css({left:$posWidth+"px"});
	
	var $i=1;
	while($(".page:eq("+$i+")").width() !== null) {
		var offset = $(".page:eq("+($i-1)+")").offset()
		$(".page:eq("+$i+")").css({
			left:offset.left+$cWidth+$posWidth+"px"
		});
		$i++
	}
	/*----------Slide Left&Right Arrows----------*/
	$("#slide-left,#slide-right,#social").click(function(e){
		e.preventDefault()
	})
	$("#slide-left,#slide-right,#social").hover(
	function(){$(this).fadeTo(300,1)},
	function(){$(this).fadeTo(300,0.5)}
	)
	$("#slide-left").click(function(){
		if($(".menu a.active").index()!=0) {
			var prevMenuItem = $(".menu a.active").index()-1
			slideTo(prevMenuItem)
		}
	})
	$("#slide-right").click(function(){
		var $menuItems = $(".menu a").size()
		if($(".menu a.active").index()!=($menuItems-1)) {
			var nextMenuItem = $(".menu a.active").index()+1
			slideTo(nextMenuItem)
		}
	})
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		$(this).prepend('<div class="ajax-loader">Loading...</div>');
	})
	$("body").ajaxComplete(function(){
		$(".ajax-loader").remove();
	})
	/*----------Social Bar----------*/	
	$("#social").click(function(){
		if(!$(this).hasClass("active-bar")) {
			$("#logo").fadeOut(600)
			$(this).addClass("active-bar")
			for($i=1;$i<=$(".bar-icons a").size();$i++) {
				$(".bar-icons a").eq($i-1).delay($i*100).animate({top:0},300)
			}
		}
		else {
			$("#logo").fadeIn(600)
			for($i=1;$i<=$(".bar-icons a").size();$i++) {
				$(".bar-icons a").eq($i-1).delay($i*100).animate({top:-100},300)
			}
			$(this).removeClass("active-bar")
		}
	})
	$(".bar-icons a").hover(function(){
		$(this).animate({top:"+=8px"},200)
		$(this).children("span").fadeIn(200)	
	},function(){
		$(this).animate({top:"-=8px"},200)	
		$(this).children("span").fadeOut(200)	
	})
	/*----------  Menu  ----------*/
	$(".menu a").click(function(e){
		e.preventDefault()
		if(!$(this).hasClass("active")) {
			slideTo($(this).index())
		}
	})
	/*----------Blink Effect For the links----------*/
	$(".blink").hover(
		function(){$(this).fadeTo(200,0.5)},
		function(){$(this).fadeTo(200,1)}
	)
	/*----------Popup Windows----------*/
	$("#p-layer").click(function(){
		closePopup();
	});
	$("a.pop-image").click(
		function(e){
			var uri = $(this).attr("href");
			var heading = $(this).attr("title");
			e.preventDefault();
			$(".p-content").html('<h3 align="center">'+heading+'</h3><img id="pop-image" onload="popUp()" src="'+uri+'" />');
	})
	$("a.pop-content").click(
	function(e){
		var uri = $(this).attr("href");
		var width=$(this).attr("rel");
		var height=$(this).attr("rev");
		e.preventDefault();
		jQuery.get(uri,function(data){
			$(".p-content").html('<div style="width:'+width+'px; height:'+height+'px">'+data+'</div>');
			popUp()
			})
	})
	$("a.iframe").click(
	function(e){
		var uri = $(this).attr("href");
		var width=$(this).attr("rel");
		var height=$(this).attr("rev");
		e.preventDefault();
		$(".p-content").html('<iframe width="'+width+'" height="'+height+'" src="'+uri+'"></iframe>');
		popUp();

	})
	/*----------Contact Form ----------*/
	$("#contact_form").submit(function(){
		sendMessage()
		return false;
	})
	/*---------- Elements Wrapper ----------*/
	$(".footer").insertAfter('.content')
	$(".content").wrap('<div class="content-wrap"></div>')
	$("h2.content-heading").wrap('<div class="content_heading"><div class="heading-r"></div></div>')
})
function slideTo($slide) {
	var offset = $(".page:eq("+$slide+")").offset()
	var $resultWidth = $posWidth - offset.left;
	var $speed=Math.abs($resultWidth/$moveWidth)*1200
	$("#header").fadeOut(300,function(){
		$(this).delay($speed).fadeIn(300)
	})
	$(".page").delay(300).animate({left: "+="+($resultWidth)+"px"},$speed,function(){
		activateMenuItem($slide)
		})	
	$(".background").delay(300).animate({left: "+="+($resultWidth/6)+"px"},$speed)
}
function activateMenuItem($eq){
	var activeItem = $(".menu a").eq($eq)
	$(".menu a.active").removeClass("active");
	activeItem.addClass("active");
}
/*----------Popup Windows----------*/
function popUp() {
		var p_height = $("#popup").height()/2;
		var p_width = ($(".wrapper").width() - $("#popup").width())/2;
		$("#popup").css({"margin-top":"-"+p_height+"px","margin-left":p_width+"px"}).slideDown(600,function(){
			$("#p-layer").fadeTo(300,0.6);
			})
}
function closePopup() {
	$("#popup").slideUp(600,function(){$(".p-content").html('')});
	$("#p-layer").fadeOut(300);
}
/*----------Validation And Send Message Functions----------*/
function validateEmail() {
	email = $("input#contact_email").attr("value");
	jQuery.post("includes/validate_email.php",{email: email}, 
		function (data) {
				if (data != 1) {
					$("input#contact_email").addClass("required");
				};
				if (data == 1) {
					$("input#contact_email").removeClass("required");
				};
		});	
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
	if ($("#contact_message ,#contact_email").hasClass("required")) {
		$(".p-content").html('<h4>Required fields are empty or filled not correctly</h4>');
		popUp();
	}
	else {
		name = $("input#contact_name").attr("value");
		email = $("input#contact_email").attr("value");
		subject = $("input#contact_subject").attr("value");
		message= $("textarea#contact_message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("includes/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {s
				$(".p-content").html(status);
				popUp()
			}
		
		);
	}
}
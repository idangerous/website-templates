// JavaScript Document
$(function(){
	$("#background").css({height:$(document).height(),width:$(document).width()})
	$(window).resize(function(){
		setBgSize()
	})
	$("#enter").click(function(){
		intro()
	})
	/*----------Menu----------*/
	$(".menu a").click(function(e){
		e.preventDefault()
		loadContent($(this).attr("href"))
		
	})
	$(".menu a,#enter").hover(
		function(){$(this).fadeTo(200,0.5)},
		function(){$(this).fadeTo(200,1)}
	)
	$(".menu > li").hover(
	function(){
		$(this).children(".submenu").show(300)	
	},function(){
		$(this).children(".submenu").hide(300)
	})
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		$(this).prepend('<div class="ajax-loader"><h3>Loading...</h3></div>');
	})
	$("body").ajaxComplete(function(){
		$(".ajax-loader").remove();
	})
	/*----------Social Bar----------*/
	$(".bar-heading").click(function(){
		var $bar=$("#social-bar")
		if ($bar.css('top')=="-100px") {
			$bar.animate({top:'0px'},300)
		}
		else $bar.animate({top:'-100px'},300)
	})
	$(".bar-icons a").hover(
		function(){
				$(this).children("span").fadeIn(200)
				$(this).animate({top:"-5px"},200)
		},
		function(){	
			$(this).animate({top:"0px"},200)
			$(this).children("span").fadeOut(200)
		}
	)
})
function setBgSize() {
	$("#background").css({height:$(document).height(),width:$(document).width()})
}
function loadContent($uri){
		jQuery.get("includes/page-script.php",function(pageScript){
			jQuery.get($uri, function (content) {
			$("#footer").fadeOut(500)	
			$("#content").fadeOut(600,function(){
				$(".content-inner").html(pageScript+content)
				$("#content").delay(300).fadeIn(600,function(){
					$("#footer").fadeIn(600)	
					setBgSize()
					})
				})
			})
		})
}
function closeProduct(activeProduct) {
		activeProduct.children(".description").fadeOut(300)
		activeProduct.delay(300).animate({width:$width,padding:0,left:$left},500)
		activeProduct.children("img").delay(300).animate({width:$width},500)
		$("#dark-layer").delay(800).fadeOut(300,function(){
			activeProduct.removeClass("exposed").css({left:0})
		})	
}
function intro(){
	$("#intro").fadeOut(600)
	$("#content").delay(700).fadeIn(600,function(){
			var $menuLinks = $(".menu li").size()
			for ($i=1;$i<=$menuLinks;$i++) {
				$(".menu > li:eq("+($i-1)+")").delay(($i-1)*300).fadeIn(600,function(){
					setBgSize()
				})
			}
			$("#background").delay($menuLinks*300).fadeIn(900)
			$(".bar-heading").delay($menuLinks*300+900).fadeIn(600)
	})
	$("#footer").delay(1600).fadeIn(300)
}
/*----------Forms----------*/
function validateMessage() {
	if(($.trim($("#contact_message").val()).length) < 10) {
		$("#contact_message").addClass("required")
	}
	else $("#contact_message").removeClass("required")
}
function validateEmail() {
	var email = $("#contact_email").attr("value");
	jQuery.post("includes/validate_email.php",{email: email}, 
						function (data) {
							if (data != 1) {
								$("#contact_email").addClass("required");
							};
							if (data == 1) {
								$("#contact_email").removeClass("required");
							};
						}
					);	
}
function sendMessage() {
	validateEmail()
	validateMessage()
	if (!$("#contact_email,#contact_message").hasClass("required")) {
		name = $("#contact_name").attr("value");
		email = $("#contact_email").attr("value");
		subject = $("#contact_subject").attr("value");
		message= $("#contact_message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("includes/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				$("#message_status").slideDown(300).html(status);
			}
		);
	}
}
/*----------Popup Windows----------*/
function popUp($uri,$title,$width,$height,$type) {
		if ($type == 'image') {
			$(".p-content").html('<h3 align="center">'+$title+'</h3><img id="pop-image" onload="openPopup()" src="'+$uri+'" />')
		}
		if ($type == 'content') {
			jQuery.get($uri,function(data){
				$(".p-content").html('<div style="width:'+$width+'px; height:'+$height+'px">'+data+'</div>');
				openPopup()
			})
		}
		if ($type == 'iframe') {
			$(".p-content").html('<iframe width="'+$width+'" height="'+$height+'" src="'+$uri+'"></iframe>');
			openPopup();
		}
}
function openPopup(){
		var p_height = $("#popup").height()/2;
		var p_width = $("#popup").outerWidth()/2;
		$("#popup").css({"margin-top":"-"+p_height+"px","margin-left":"-"+p_width+"px"}).slideDown(600,function(){
			$("#p-layer").fadeTo(300,0.6);
			})
}
function closePopup() {
	$("#popup").slideUp(600,function(){$(".p-content").html('')});
	$("#p-layer").fadeOut(300);
}
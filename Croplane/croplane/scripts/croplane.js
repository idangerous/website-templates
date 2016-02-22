// JavaScript Document
$(function(){
	/*----------Blink Effect for Block Links----------*/
	$(".block:not(.social_bar)").mouseover(
		function(){
			if(!$(this).hasClass("active")) {
				$(this).fadeTo(200,0.7).fadeTo(200,1)
			}
		})
	/*----------Menu Actions----------*/
	$(".inWindow").click(function(){
		if(!$(this).hasClass("active")) {
			loadContent($(this).attr("id"),0)
		}
		return false;
	})
	$(".inContent").click(function(){
		if(!$(this).hasClass("active")) {
			loadContent($(this).attr("id"),1)
		}
		return false;
	})
	/*----------Back To Home functionality----------*/
	$(".to-home").click(function(){
		toHome();
	})
	$(".to-home-page").click(function(){
		$("#page").fadeOut(600,function(){
			$(".block").delay(300).fadeIn(900)
			$("#blocks_shadow").delay(300).fadeIn(900)
		})
		$(".page-title").fadeOut(600);
	})
	/*----------Social Bar----------*/
	$(".bar-icons a").hover(
		function(){
			$(this).children("span").fadeIn(300)
			$(this).animate({top:"-20px"},300)
		},
		function(){	
			$(this).animate({top:"0px"},300)
			$(this).children("span").fadeOut(300)
		}
	)
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		$(this).prepend('<div class="ajax-loader"><h3>Loading...</h3></div>');
	})
	$("body").ajaxComplete(function(){
		$(".ajax-loader").remove();
	})
})
function loadContent($id,$replaceContent){
	var $uri = "content/"+$id+".php";
	if ($replaceContent==0) {
		$blockLeft = $("#"+$id).css("left")
		$blockTop = $("#"+$id).css("top")
		jQuery.get($uri, function (content) {
			$(".window-content").html(content);
			$("#"+$id).addClass("active")
			$(".block:not(#"+$id+")").fadeOut(600)
			$("#"+$id).delay(600).animate({left:"0px",top:"0px"},600).fadeTo(300,0.2,function(){
				$("#window").fadeIn(600,function(){
					$(".to-home").fadeIn(300);
					$(".page-title").html($("#"+$id).attr("title")).fadeIn(300);
				});
			})
			$("#blocks_shadow").fadeOut(600)
		})
	}
	else {
		jQuery.get($uri, function (content) {
			$(".page-content").html(content);
			$(".block").fadeOut(600)
			$("#page").delay(900).fadeIn(900,function(){
				$("#page .to-home-page").fadeIn(300);
				$(".page-title").html($("#"+$id).attr("title")).fadeIn(300);
			})
			$("#blocks_shadow").fadeOut(600)
		})
	}
}
function toHome(){
	$("#window,.to-home,.page-title").fadeOut(600)
	$(".active").delay(600).fadeTo(300,1,function(){
		$(this).animate({left:$blockLeft,top:$blockTop},600,function(){
			$(".block,#blocks_shadow").fadeIn(600);
			$(this).removeClass("active")	
		})
	})
}
function goTo($id,$replaceContent){
	toHome()
	function newWindow() {
		loadContent($id,$replaceContent)	
	}
	setTimeout(newWindow,2000);
}
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
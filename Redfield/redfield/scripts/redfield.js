// JavaScript Document
$(function(){
	$("#background").css({height:$(document).height()})
	$(window).resize(function(){
		setHeight()
	})
	/*----------Enter Button----------*/
	$("#enter").hover(function(){
		$(this).fadeTo(200,0.4)	
		},
		function(){
			if(!$(this).hasClass('entered')){
				$(this).fadeTo(200,1)
			}
	})
	$("#enter").click(function(){
		$(this).addClass("entered").fadeOut(600)
		intro()
		
	})
	/*----------Menu----------*/
	$(".menu-link").css({opacity:"0.4"}).hide()
	$(".menu-link").hover(function(){
		$(this).fadeTo(300,1).animate({marginLeft:"-10px"},{ queue:false, duration:200 })
	},
	function(){
		$(this).fadeTo(300,0.4).animate({marginLeft:"0px"},{ queue:false, duration:200 })
	})
	$("a.menu-link").click(function(e){
		e.preventDefault()
		$(".menu-link").not($(this)).removeClass("active-link")
		$(this).addClass("active-link")
		loadContent($(this).attr("id"),$(this).attr("href"))
		
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
		if ($bar.css('left')=="-130px") {
			$bar.animate({left:'0px'},300)
		}
		else $bar.animate({left:'-130px'},300)
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
	/*----------Photo Gallery----------*/
	$(".thumbs img,.blink").hover(
	function(){$(this).fadeTo(300,0.5)},
	function(){$(this).fadeTo(300,1)}
	)
	$("#toHome").click(function(){toHome()})
	$(".photo-title").html($('.photos img:eq(0)').attr('title'))
	$(".photo-descr").html($('.descriptions div:eq(0)').html())
	$(".film-left").mousedown(function(){
		$(".thumbs").animate({left:["+=1000px","linear"]},8000)
	})
	$(".film-right").mousedown(function(){
		$(".thumbs").animate({left:["-=1000px","linear"]},8000)
	})
	$(".film-left,.film-right").mouseup(function(){
		$(".thumbs").stop(true,false)
	})
	$(".photo-next").mousedown(function(){
		var $newImg = $(".photos img.active").next('img')
		showImage($newImg)
	})
	$(".photo-prev").mousedown(function(){
		var $newImg = $(".photos img.active").prev('img')
		showImage($newImg)
	})
	$(".thumbs img").click(function(){
		var $newImg = $(".photos img:eq("+$(this).index()+")")
		showImage($newImg)
	})
	/*----------Image Controller----------*/
	$(".imgController").click(function(){
		var imContr=$(".controller")
		if (imContr.css('right')=="-250px") {
			imContr.animate({right:'20px'},300)
		}
		else imContr.animate({right:'-250px'},300)
	})
	$(".controller *:not(.c-photo),.bar-heading,#toHome").hover(
		function(){$(this).fadeTo(300,1)},
		function(){$(this).fadeTo(300,0.2)}
	)
	$(".move-left").mousedown(function(){
		$(".photo-box").animate({left:["-=1000px","linear"]},4000)
	})
	$(".move-right").mousedown(function(){
		$(".photo-box").animate({left:["+=1000px","linear"]},4000)
	})
	$(".move-up").mousedown(function(){
		$(".photo-box").animate({top:["-=1000px","linear"]},4000)
	})
	$(".move-down").mousedown(function(){
		$(".photo-box").animate({top:["+=1000px","linear"]},4000)
	})
	$(".move-left,.move-right,.move-up,.move-down").mouseup(function(){
		$(".photo-box").stop(true,false)
	})
	$(".zoom-in").mousedown(function(){
		$(".photo-box,.photos,.photos img.active").animate({width:["+=50px","linear"]},300,function(){
			$(".photos img:not(.active)").css({width:$(".photos img.active").width()})
		})
		$(".photo-shadow").animate({width:["+=50px","linear"],bottom:["-=40px","linear"]},300)
	})
	$(".zoom-out").mousedown(function(){
		$(".photo-box,.photos,.photos img.active").animate({width:["-=50px","linear"]},300,function(){
			$(".photos img:not(.active)").css({width:$(".photos img.active").width()})
		})
		$(".photo-shadow").animate({width:["-=50px","linear"],bottom:["+=40px","linear"]},300)
	})
})
function setHeight() {
	$("#background").css({height:$(document).height()})
}
function showImage($newImg) {
	var $active = $(".photos img.active")
	if ($active.index()==$newImg.index()) return false
	else {
		if($newImg.attr('title') == undefined) return false
		else {
			$active.fadeOut(600).removeClass("active")
			$newImg.fadeIn(600).addClass("active")
			$(".photo-title").fadeOut(300,function(){
				$(".photo-title").html($newImg.attr('title')).fadeIn(300)
			})
			$(".photo-descr").fadeOut(300,function(){
				$(".photo-descr").html($(".descriptions div:eq("+$newImg.index()+")").html()).fadeIn(300)
			})	
		}
	}
}
function loadContent($id,$uri){
	var $uri = "content/"+$uri+".php";
	if($id != "gallery") {
		jQuery.get($uri, function (content) {
			$("#content").fadeOut(600,function(){
				$(".content-inner").html(content)
				$("#content").delay(300).fadeIn(600,function(){
					setHeight()
				})
			})
		})
	}
	else {
			$("#content,#menu,#logo").fadeOut(600)
			$("#white-layer").delay(600).fadeTo(600,0.5,function(){
				$("#photo-gallery").fadeIn(300)
				$('.img-info').delay(300).fadeIn(600)
				$('.photo-box').delay(600).fadeIn(600,function(){setHeight()})
				$('.film').delay(900).fadeIn(600)
				$('.controller').delay(1500).fadeIn(300)
				$("#swirls").delay(1500).fadeIn(600)
		})
	}
}
function toHome(){
	$("#photo-gallery,.img-info,.photo-box,.film,.controller,#swirls").fadeOut(600)
	$("#white-layer").delay(600).fadeOut(600,function(){
		$("#logo").fadeIn(600)
		intro()
	})
}
function intro(){
	$("#menu,#content").delay(700).fadeIn(600,function(){
			for ($i=0;$i<=$(".menu-link:last").index();$i++) {
				$(".menu-link:eq("+$i+")").delay(($i)*300).fadeIn(600,function(){setHeight()})
			}
	})
	$("#footer").delay(1600).fadeIn(300)
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
function rotate($angel) {
  $(".photo-box").css({
	  "-moz-transition-property":"-moz-transform",
	  "-moz-transition-duration": "1s",
	  "-webkit-transition-property": "-webkit-transform",
	  "-webkit-transition-duration": "1s",
	  "-o-transition-property": "-o-transform",
	  "-o-transition-duration": "1s",
	  "transition-property": "transform",
	  "transition-duration": "1s",
	  "-o-transform":"rotate("+$angel+"deg)",
	  "-webkit-transform":"rotate("+$angel+"deg)",
	  "-moz-transform":"rotate("+$angel+"deg)",
	  "transform":"rotate("+$angel+"deg)"
  })
  $(".rotate-ccw").attr({"onClick":"rotate("+($angel-5)+")"})
  $(".rotate-cw").attr({"onClick":"rotate("+($angel+5)+")"})
}
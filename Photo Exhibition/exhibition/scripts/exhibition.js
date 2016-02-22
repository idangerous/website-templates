// JavaScript Document
jQuery(document).ready(function(){
	/*   Initialize gallery  */
	$(".photo > img").wrap(
	'<div class="photo-bg"><div class="photo-bg-r"><div class="photo-border"></div></div></div>')
	$(".photo-bg,.content-bg").after(
	'<div class="bot-shadow"><div class="bot-r"><div class="bot-m"></div></div></div>')
	$(".photo-title").html($('.photo:eq(0)').find('img').attr('title'))
	$(".photo-description").html($(".description:eq(0)").html())
	if($(window).height()>$("#wrapper").height()) {
		$("#wrapper").css({"height":$(window).height()})
	}
	$(".photos").css({"height":$("#wrapper").height()})
	$(".page").css({"height":$("#wrapper").height()-150})
	var $windowWidth = $(window).width();
	if($(".photo:eq(0) img").width()!=0) {
		var $photoWidth = $(".photo:eq(0)").outerWidth();
	}
	else {
		var $photoWidth = $(".photo:eq(0) img").attr('width');
	}
	$posWidth = ($windowWidth-$photoWidth)/2;
	$(".photo:eq(0)").css({left:$posWidth+"px"});
	var $i=1;
	while($(".photo:eq("+$i+")").width() !== null) {
		var offset = $(".photo:eq("+($i-1)+")").offset()
		$(".photo:eq("+$i+")").css({
			left:offset.left+$photoWidth+$posWidth+"px"
		});
		$i++
	}
	/*   Slide Left and Right Function  */
	$("#slide-left").click(function(e){
		e.preventDefault()
		if($(".show").index()!=0) {
			var prevPhoto = $(".show").index()-1
			slideTo(prevPhoto)
		}
	})
	$("#slide-right").click(function(e){
		e.preventDefault()
		var $photosNumber = $(".photos .photo").size()
		if($(".show").index()!=($photosNumber-1)) {
			var nextPhoto = $(".show").index()+1
			slideTo(nextPhoto)
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
			$(this).addClass("active-bar")
			$("#logo").fadeOut(500)
			$("#social-bar").show()
			for($i=1;$i<=$(".bar-icons a").size();$i++) {
				$(".bar-icons a").eq($i-1).delay($i*100).animate({top:0},300)
			}
		}
		else {
			for($i=1;$i<=$(".bar-icons a").size();$i++) {
				$(".bar-icons a").eq($i-1).delay($i*100).animate({top:-100},300)
			}
			$("#logo").delay(600).fadeIn(500)
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
	/*----------Menu----------*/
	$(".menu a").click(function(e){
		e.preventDefault()  
		vSlide($(this).parent().index())
	})
	/*----------Blink Effect For the links----------*/
	$(".blink").hover(
		function(){$(this).fadeTo(200,0.5)},
		function(){$(this).fadeTo(200,1)}
	)
	/*----------Contact Form ----------*/
	$("#contact_form").submit(function(){
		sendMessage()
		return false;
	})
})
function slideTo($photoEq) {
	var newPhoto = $(".photo").eq($photoEq)
	var offset = newPhoto.offset()
	var $resultWidth = $posWidth - offset.left;
	$(".photo").animate({left: "+="+($resultWidth)+"px"},1000,function(){
		$(".show").removeClass("show")
		newPhoto.addClass("show")
		$("#photoDescr").fadeOut(300,function(){
			$(".photo-title").html(newPhoto.find('img').attr('title'))
			$(".photo-description").html($(".description").eq($photoEq).html())
			$(this).fadeIn(300)
		})
	})
}
function vSlide($pageEq) {
	$activeEq = $(".menu li.active").index()
	$(".menu li.active").removeClass("active")
	if ($pageEq != $activeEq) {
		var $moveHeight = $pageEq*$("#wrapper").height();
		var $moveSpeed = Math.abs($pageEq-$activeEq)*900
		$("#logo,#menu,#gal-nav,#photoDescr,#social-bar,.footer").fadeOut(300)
		$(".page, .photos").delay(300).animate({
			"top":-$moveHeight	
		},$moveSpeed,function(){
				$("#logo,#menu,.footer").fadeIn(300)
				if($(".menu li").eq($pageEq).attr('id') == 'gallery') {
					$('#gal-nav,#photoDescr').fadeIn(300)
				}
				$(".menu li").eq($pageEq).addClass("active")
			})
	}
}
/*----------Validation And Send Message Functions----------*/
function validateEmail() {
	email = $("input#contact_email").attr("value");
	jQuery.post("includes/validate_email.php", 
						{email: email}, 
						function (data) {
							if (data != 1) {
								$("input#contact_email").addClass("required");
							};
							if (data == 1) {
								$("input#contact_email").removeClass("required");
							};
						}
					);	
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
		$(".wrong-status").html('<h4>Required fields are empty or filled not correctly</h4>').fadeIn(300);
	}
	else {
		name = $("input#contact_name").attr("value");
		email = $("input#contact_email").attr("value");
		subject = $("input#contact_subject").attr("value");
		message= $("textarea#contact_message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("includes/send_message.php",
			{name : name, email : email, subject : subject, message : message},
			function (status) {
				$(".wrong-status").fadeOut(300)
				$(".message-status").html(status).delay(700).fadeIn(300);
				$("#contact_form").fadeTo(600,0);
			}
		);
	}
}
// JavaScript Document
jQuery(document).ready(function(){
	$(".error").hover(function(){$(this).addClass("zoom")},function(){$(this).removeClass("zoom")})
	$("#home").hover(
		function(){
			$(this).animate({"left":"40px"},500)	
		},
		function(){
			$(this).stop().animate({"left":"130px"},500)	
		}
	)
	$("#contacts").hover(
		function(){
			$(this).animate({"right":"40px"},500)	
		},
		function(){
			$(this).stop().animate({"right":"130px"},500)	
		}
	)
	$("#contacts").click(function(e){
		e.preventDefault()
		if($("#contact-form").css('display')=='none') {
			$("#content").animate({"margin-top":"-=210px"},300)
			$('.content-mid').animate({"height":"+=210px"},300)
			$(".error-message").delay(300).fadeOut(400)
			$("#contact-form").delay(800).fadeIn(400)
		}
		else {
			$("#contact-form").fadeOut(400)
			$("#content").delay(500).animate({"margin-top":"+=210px"},300)
			$('.content-mid').delay(500).animate({"height":"-=210px"},300)
			$(".error-message").delay(900).fadeIn(400)
		}
	})
	/*----------Ajax Loader----------*/
	$(".wrapper").ajaxStart(function(){
		$(this).prepend('<div class="ajax-loader">Loading...</div>');
	})
	$(".wrapper").ajaxComplete(function(){
		$(".ajax-loader").remove();
	})
});
/*----------Validation And Send Message Functions----------*/
function validateEmail() {
	$email = $("#contact-email").attr("value");
	jQuery.post("includes/validate_email.php", 
						{email: $email}, 
						function (data) {
							if (data != 1) {
								$("#contact-email").addClass("required");
							};
							if (data == 1) {
								$("#contact-email").removeClass("required");
							};
						}
					);	
}
function validateMessage() {
	var $textarea = $("#contact-message")
	message = $textarea.val();
	if ($.trim(message).length < 10) $textarea.addClass("required");
	else $textarea.removeClass("required");
	
}
function sendMessage() {
	validateEmail();
	validateMessage();
	if (!$("#contact-form input,#contact-form textarea").hasClass("required")) {
		name = $("input#contact-name").attr("value");
		email = $("input#contact-email").attr("value");
		subject = $("input#contact-subject").attr("value");
		message= $("textarea#contact-message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("includes/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				$("#contact-form").fadeOut(600,function(){
					$(this).html(status);
					$(this).fadeIn(500)
				})
			}
		);
	}
}
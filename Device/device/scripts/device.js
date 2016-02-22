// JavaScript Document
$(function(){
	/*----------Change Color----------*/
	document.getElementById("blackStyle").disabled = 1;
	$(".change-color").click(function(){changeColor()})
	$(window).scroll(function(){
		$("#white-layer").css({top:$(window).scrollTop()})	
	})
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		showLoader();
	})
	$("body").ajaxComplete(function(){
		hideLoader();
	})
	/*----------Slideshow----------*/
	$(".openSS").click(function(e){
		e.preventDefault();
		$("#slideshow").delay(600).fadeIn(600)
		$("#cp").animate({top:420},600)
		$("#menu").animate({top:700},600)
	})
	$(".slide-right .slide-arrow").click(function(){
		if($(".slide").css("left")!="-" + ($(".slide").length-1)*700 + "px")
		$(".slide").animate({left:"-=700px"},1000)	
	})
	$(".slide-left .slide-arrow").click(function(){
		if($(".slide").css("left")!="0px") $(".slide").animate({left:"+=700px"},1000)	
	})
	$(".close-ss").click(function(){
		$("#slideshow").fadeOut(600)
		$("#cp").delay(600).animate({top:170},600)
		$("#menu").delay(600).animate({top:450},600)
	})
	/*----------CP----------*/
	$("#cp a").hover(
		function(){
			$(this).children("img").fadeIn(300)	
		},
		function(){
			$(this).children("img").fadeOut(300)	
		}
	)
	/*----------menu----------*/
	$(".openMenu").click(function(e){
		e.preventDefault();
		for (var i=1;i<=$(".menu-link").length;i++) {
			$(".menu-link").eq(i-1).delay((i-1)*200).fadeIn(600)	
		}
	})
	$(".menu-link:last-child").css({marginRight:0})
	$(".menu-link").hover(
		function(){
			$(this).children("img").animate({width:"89px"},150) 
		},
		function(){
			$(this).children("img").animate({width:"109px"},150)
		}
	)
	$("a.new-window").click(function(e){
		e.preventDefault();
		var contentType;
		if($(this).hasClass("iframe")) contentType = "iframe";
		else if($(this).hasClass("withImg")) contentType = "image";
		else contentType = "text";
		newWindow({
			url : $(this).attr('href'),
			width : $(this).attr("rel"),
			height : $(this).attr("rev"),
			contentType : contentType,
			title:$(this).hasClass("withImg")?$(this).attr('title'):"",
			left : $(this).offset().left,
			top : $(this).offset().top
		})
	})
})
function showLoader(){
	$(".ajax-loader").css({top:$(window).scrollTop()+200}).show();	
}
function hideLoader(){
	$(".ajax-loader").hide();
}
function expand(id,windowWidth,windowHeight){
	$("#window_"+(id)).resizable("enable");
	$("#window_"+(id)).animate({
		width: windowWidth,
		height: windowHeight
	},{queue:false},300)
	$("#window_"+(id)).find("iframe").animate({height:windowHeight-80},300)
	$("#window_"+(id)+" .w-ml").animate({width:windowWidth-20,height:windowHeight-40},{queue:false},300)
	$("#window_"+(id)+" .expand").remove()
	$("#window_"+(id)+" .toolbar").append('<img class="minimize" src="images/black/minimize.png" width="20" height="20" alt="-" title="Minimize Window" onclick="minimize('+id+')" />')
}
function minimize(id) {
	$("#window_"+id).animate({width:"290px",height:"50px",left:"10px"},300,function(){
		$(this).children(".w-ml").css({height:"10px",width:"270px"})
		$(this).find("iframe").css({height:"120px",width:"100%"})
		$(this).addClass("minimized")
		$(this).fadeTo(300,0.3)
		$(this).resizable("disable")
	})
	$("#window_"+id+" .toolbar").append('<img src="images/black/expand.png" title="Expand Window" alt="oO" class="expand" onclick="expand('+id+','+$("#window_"+id).width()+','+$("#window_"+id).height()+')"/>');
	$("#window_"+id+" .minimize").remove()
}
function closeWindow(id) {
	$("#window_"+id).remove()
}
function newWindow(params){
	params.width = params.width || 600;
	params.contentType = params.contentType||"text";
	params.left = params.left||0;
	params.top = params.top||0;
	params.title = params.title || "";
	var windowID;
	if ($(".window:last").index()=="-1") windowID = 0
	else windowID = $(".window:last").attr("id").split("window_")[1]*1+1;
	if (params.contentType!="image") {
		jQuery.get("window.tmpl.php",{id : windowID, url : params.url, contentType : params.contentType, width: params.width},function(tmpl){
			$("#windows").append(tmpl)
			var windowTop = $(window).scrollTop()+100;
			var windowHeight = params.height||$(".window:last").height()
			var addedWindow = $("#window_"+windowID);
			addedWindow.css({
				width:290,
				left: params.left,	
				top: params.top,
				height: 50,
				opacity:0.1,
				filter: "alpha(opacity=10)"
			})
			addedWindow.animate({
				left: ($(window).width() - params.width)/2+"px",	
				top: $(window).scrollTop()+100,
				height: windowHeight,
				width: params.width,
				opacity:1
			},400,function(){
					 addedWindow.css({filter:""})
					 $(".window:lt("+addedWindow.index()+")").fadeTo(300,0.3)
			})
			$("#window_"+windowID+" .w-ml").animate({height:windowHeight-40},400)
			$("#window_"+windowID+" iframe").animate({height:windowHeight-80},400)
			addedWindow.draggable({ handle: 'div.toolbar' });
			addedWindow.resizable({ 
				alsoResize: '#window_'+windowID+' .w-ml, #window_'+windowID+' iframe',
				minHeight: 50,
				minWidth:290 
			});
			addedWindow.mousedown(function(){
				if($(this).css("opacity")!=1) {
					$(this).css({"z-index":3000}).fadeTo(300,1,function(){$(this).css({"filter":""})})
					$(this).nextAll(".window").css({"z-index":2000}).fadeTo(300,0.3)
					$(this).prevAll(".window").css({"z-index":2000}).fadeTo(300,0.3)
				}
			})
			initWindowLinks(windowID);
		})
	}
	else {
		jQuery.get("img.tmpl.php",{id : windowID, url : params.url, title : params.title},function(tmpl){
			showLoader();
			$("#windows").append(tmpl)
			var addedWindow = $("#window_"+windowID);
			var windowWidth = addedWindow.width()
			addedWindow.draggable({ handle: 'div.toolbar' });
			if(window.Cufon !== undefined) Cufon.replace("#window_"+windowID+" .cufoned");
			addedWindow.css({
				width:365,
				left: params.left,	
				top: params.top
			})
			$("#window_"+windowID+" img.window-image").css({width:345})
			$("#window_"+windowID+" .window-image")[0].onload = function(){
				hideLoader();
				addedWindow.animate({
					left: ($(window).width() - windowWidth+20)/2+"px",	
					top: $(window).scrollTop()+100,
					width: windowWidth
				},{queue : false},400,
				function(){addedWindow.css({filter:""})})
				addedWindow.fadeIn(400)
				$(".window:lt("+addedWindow.index()+")").delay(600).fadeTo(300,0.3)
				$("#window_"+windowID+" .window-image").animate({
					width:windowWidth-20
				},400)
				$("#window_"+windowID+" .image-title").delay(700).slideDown(300)
			}
			addedWindow.mousedown(function(){
				if($(this).css("opacity")!=1) {
					$(this).css({"z-index":3000}).fadeTo(300,1,function(){
						$(this).css({"filter":""})
					})
					$(this).nextAll(".window").css({"z-index":2000}).fadeTo(300,0.3)
					$(this).prevAll(".window").css({"z-index":2000}).fadeTo(300,0.3)
				}
			})
			$("#window_"+windowID+" .zoom-in").click(function(){
				addedWindow.animate({
					width:"+=100px",
					left:"-=50px"
				},300)
				$("#window_"+windowID+" .window-image").animate({width:"+=100px"},300)	
			})
			$("#window_"+windowID+" .zoom-out").click(function(){
				addedWindow.animate({
					width:"-=100px",
					left:"+=50px"
				},300);
				$("#window_"+windowID+" .window-image").animate({width:"-=100px"},300)	
			})
		})
	}
}
function replaceWindowContent(params) {
	var replacedWindow = $("#window_"+params.windowID);
	var replacedContent = replacedWindow.find(".w-content");
	replacedContent.fadeOut(300,function(){
		jQuery.get(params.url,function(newContent){
			replacedContent.html(newContent);
			initWindowLinks(params.windowID);
			if(params.width && params.height) {
				replacedWindow.animate({
					width:params.width,
					left:($(window).width()-params.width)/2,
					height:params.height
				},300)
				replacedWindow.find(".w-ml").animate({
					height:params.height-40,
					width:params.width-20
				},300)
			}
			replacedContent.delay(600).fadeIn(300)
		})	
	})
}
function initWindowLinks(windowID){
	$("#window_"+windowID+" a.new-window").click(function(e){
		e.preventDefault();
		var contentType;
		if($(this).hasClass("iframe")) contentType = "iframe";
		else if($(this).hasClass("withImg")) contentType = "image";
		else contentType = "text";
		$(this).attr({"href":$(this).attr("href").split(document.location.href)[1]})
		newWindow({
			url : $(this).attr('href'),
			width : $(this).attr("rel"),
			height : $(this).attr("rev"),
			contentType : contentType,
			title:$(this).hasClass("withImg")?$(this).attr('title'):"",
			left : $(this).offset().left,
			top : $(this).offset().top
		})
	})
	$("#window_"+windowID+" .closeWindow").click(function(e){
		e.preventDefault();
		closeWindow(windowID)
	})
	$("#window_"+windowID+" a.openHere").click(function(e){
		e.preventDefault();
		replaceWindowContent({
			windowID : windowID,
			url : $(this).attr('href'),
			width : $(this).attr("rel"),
			height : $(this).attr("rev")
		})
	})
	if(window.Cufon !== undefined) Cufon.replace("#window_"+windowID+" .cufoned");	
}
function rotate(degree,windowID) {
	$("#window_"+windowID).css({
		"-o-transition-property":"-o-transform",
		"-o-transition-duration":"1s",
		"-o-transform":"rotate("+degree+"deg)",
		"-webkit-transition-property":"-webkit-transform",
		"-webkit-transition-duration":"1s",
		"-webkit-transform":"rotate("+degree+"deg)",
		"-moz-transition-property":"-moz-transform",
		"-moz-transition-duration":"1s",
		"-moz-transform":"rotate("+degree+"deg)",
		"transition-property":"transform",
		"transition-duration":"1s",
		"transform":"rotate("+degree+"deg)"		
	})	
	$("#window_"+windowID+" .rotate-cw").attr({"onClick":"rotate("+(degree+5)+","+windowID+")"})
	$("#window_"+windowID+" .rotate-ccw").attr({"onClick":"rotate("+(degree-5)+","+windowID+")"})
}
function changeColor(){
	var whiteLayer = $("#white-layer");
	whiteLayer.css({
		width:$(window).width(),
		height:$(window).height(),
		top:$(window).scrollTop()	
	})
	setTimeout(cufonRestart,1000);
	whiteLayer.fadeIn(600,function(){
		var newBodyClass = $("body").hasClass("white")?"black":"white";
		var blackCSS = document.getElementById("blackStyle");
		if (newBodyClass=="black") {
			$("body").removeClass("white").addClass("black")
			blackCSS.disabled = 0;
			$(".menu-link img").each(function(){
				$(this).attr({"src" : $(this).attr("src").replace(/white/,"black")})	
			})
			$(".slide-left img,.slide-right img").each(function(){
				$(this).attr({"src" : $(this).attr("src").replace(/white/,"black")})	
			})
		}
		else {
			$("body").removeClass("black").addClass("white")
			blackCSS.disabled = 1;
			$(".menu-link img").each(function(){
				$(this).attr({"src" : $(this).attr("src").replace(/black/,"white")})	
			})
			$(".slide-left img,.slide-right img").each(function(){
				$(this).attr({"src" : $(this).attr("src").replace(/black/,"white")})	
			})
		}
	}).delay(400).fadeOut(600,function(){cufonRestart()})
}
function cufonRestart() {
	if(window.Cufon !== undefined) {
		$(".cufoned").each(function(){
			var cufonContent = "";
			var cufonedParts = $(this).find("cufontext")
			for (var i=1; i <= cufonedParts.length; i++) {
				cufonContent+=cufonedParts[i-1].innerHTML
			}
			$(this).html(cufonContent);
		})
		Cufon.replace('.cufoned');
	}
}
function validateText(fieldId,length) {
	field = $("input#"+fieldId);
	text = field.val();
	m_length = ($.trim(text)).length;
	if (m_length < length) field.addClass("required");
	else field.removeClass("required");
}
function validateMessage() {
	message = $("textarea#contact_message").val();
	m_length = ($.trim(message)).length;
	if (m_length < 10) $("textarea#contact_message").addClass("required");
	else $("textarea#contact_message").removeClass("required");
}
function validateEmail() {
	var email = $("input#contact_email").attr("value");
	var re = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|mobi|travel))$/i;
	if(re.test(email)) $("input#contact_email").removeClass("required");
 	else $("input#contact_email").addClass("required");
}
function sendMessage() {
	validateText("contact_name",6)
	validateText("contact_subject",6)
	validateEmail()
	validateMessage()
	if ($("#contact_email,#contact_message,#contact_name,#contact_subject").hasClass("required")) {
		newWindow({url:"includes/message_error.php",width:480,height:150})
	}
	else {
		name = $("#contact_name").attr("value");
		email = $("#contact_email").attr("value");
		subject = $("#contact_subject").attr("value");
		message= $("#contact_message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("includes/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				if(status==1) newWindow({url:"includes/message_sent.php",width:550})
				else newWindow({url:"includes/server_error.php",width:500})
			}
		);
	}
}
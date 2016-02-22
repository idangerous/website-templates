// JavaScript Document
var skyline = {};
var sliderParams = {};
$(function(){
	if (skyline.replaceFonts!="" && window.Cufon) {
		Cufon.replace(skyline.replaceFonts)	
	}
	/*----------Intro----------*/
	if (skyline.showIntro) {
		showIntro()
	}
	/*----------Twitter Feed----------*/
	if(skyline.twitter.username!="") $("#tweets").idTwitter(skyline.twitter);
	/*----------Resize Fix----------*/
	$(window).resize(function(){
		$(".slider").zoomSlider(sliderParams)	
	})
	/*----------Move Background----------*/
	if(skyline.animateBackground) {
		$(document).bind('mousemove',function(e){ 
			$("#background").css({left:-(e.pageX-$(window).width()/2)/60}); 
		}); 
	}
	if(skyline.animateBottom) {
		$(document).bind('mousemove',function(e){ 
			$("#bottom-content").css({left:(e.pageX-$(window).width()/2)/40});
		}); 
	}
	/*----------Toolbar----------*/
	$(".toolbar-icon").css3({transform:"",time:0})
	
	$(".toolbar-icon").hover(
		function(){
			if($(this).index()>=2){
			$(this).css3({
				transform:"scale(0.8) rotate(5deg) skewX(1deg)",	
				time:300
				})
			}
			else {
			$(this).css3({
				transform:"scale(0.8) rotate(-5deg) skewX(-1deg)",	
				time:300
				})
			}
			if(isFade()) $(this).fadeTo(300,0.8)
				
		},
		function(){
			$(this).css3({
				transform:"scale(1) rotate(0deg) skewX(0deg)",	
				time:300
			})
			if(isFade()) $(this).fadeTo(300,1)
		}
	)
	$(".toolbar-icon a").each(function(){
		var tIcon = $(this).parent(".toolbar-icon");
		if (!tIcon.hasClass("noBG")) $(this).css({top:(tIcon.height()-$(this).height())/2-5})
		else $(this).css({top:($(".toolbar-icon").height()-$(this).height())/2})
	});
	$(".icons-row:last .toolbar-icon").append('<span class="icon-reflect"></span>');
	/*----------Portfolio----------*/
	$(".folio-item:not(:eq(1))").css3({
		transform:"scale(0.8)",
		time:0
	}).css({
		opacity:0.7,
		filter:isFade()?"alpha(opacity=70)":""	
	})
	$(".folio-item:eq(1)").addClass("active")
	$(".folio-item:eq(0)").css("margin-left","0px")
	$(".folio-next").click(function(e){
		e.preventDefault();
		if($(".folio-item.active").index() < $(".folio-item").length-1) {
			$(".folio-item.active").css3({
				transform:"scale(0.8)",
				time:skyline.folioSlideTime+300		
			})
			if(isFade()) $(".folio-item.active").fadeTo(skyline.folioSlideTime+200,0.7)
			$(".folio-item.active").next(".folio-item").css3({
				transform:"scale(1)",
				time:skyline.folioSlideTime+300	
			}).addClass("active")
			$(".folio-item.active:eq(0)").removeClass("active")
			if(isFade()) $(".folio-item.active").fadeTo(skyline.folioSlideTime,1,function(){$(this).css({filter:""})})
			$(".folio-item").animate({left:"-=270px"},{queue:false},skyline.folioSlideTime)
		}
	})
	$(".folio-prev").click(function(e){
		e.preventDefault();
		if($(".folio-item.active").index() > 0) {
			$(".folio-item.active").css3({
				transform:"scale(0.8)",
				time:skyline.folioSlideTime+300		
			})
			if(isFade()) $(".folio-item.active").fadeTo(500,0.7)
			$(".folio-item.active").prev(".folio-item").css3({
				transform:"scale(1)",
				time:skyline.folioSlideTime+300		
			}).addClass("active")
			$(".folio-item.active:eq(1)").removeClass("active")
			if(isFade()) $(".folio-item.active").fadeTo(skyline.folioSlideTime,1,function(){$(this).css({filter:""})})
			$(".folio-item").animate({left:"+=270px"},{queue:false},skyline.folioSlideTime)
		}
	})
	/*----------Slider----------*/
	$(".slider").zoomSlider(sliderParams)
	
	/*----------Bottom Modules----------*/
	if (skyline.fixModHeight) {
		fixModulesHeight();
	}
	/*---------- Twitter Timeline------------*/
	
	/*----------Social Icons----------*/
	$("#social a").hover(
		function(){
			$(this).animate({left:-5,top:-5},300).children("img").animate({width:25},300)	
		},
		function(){
			$(this).animate({left:0,top:0},300).children("img").animate({width:30},300)				
		}
	)
	/*----------Ajax Loader----------*/
	$("body").ajaxStart(function(){
		showLoader();
	})
	$("body").ajaxComplete(function(){
		hideLoader();
	})
	/*----------Links Initialization----------*/
	initLinksIn("body");
})
function isFade() {
	if (skyline.noFadeInIE6_8 && isIE6_8()) return false;
	else return true;
}
function isIE6_8() {
	if(navigator.appVersion.indexOf("MSIE 6") > 0 || navigator.appVersion.indexOf("MSIE 7") > 0 || navigator.appVersion.indexOf("MSIE 8") > 0) return true;	
}
function initLinksIn(parent) {
	if (parent=="body") parent = "";
	/*----- New Window Links -----*/
	$(parent+" a.new-window").click(function(e){
		e.preventDefault();
		var contentType, windowTollbar, windowColor;
		/*----- Window Content -----*/
		if($(this).hasClass("iframe")) contentType = "iframe";
		else if($(this).hasClass("withImg")) contentType = "image";
		else contentType = "text";
		/*----- Window Color & Toolbar -----*/
		if($(this).attr("class").indexOf("set(")>=0) {
			windowColor = $(this).attr("class").split("set(")[1].split(",")[0]
			windowToolbar = $(this).attr("class").split("set(")[1].split(",")[1].split(")")[0]
		}
		else {
			windowColor = skyline.windowColor
			windowToolbar = contentType=="image"?skyline.imageWindowToolbar:skyline.contentWindowToolbar
		}
		newWindow({
			url : $(this).attr('href'),
			width : $(this).attr("rel"),
			height : $(this).attr("rev"),
			contentType : contentType,
			title:$(this).hasClass("withImg")?$(this).attr('title'):"",
			left : skyline.windowFromLink==true?$(this).offset().left:0,
			top : skyline.windowFromLink==true?$(this).offset().top:0,
			windowColor : windowColor,
			windowToolbar : windowToolbar
		})
	})
	/*----- Change Content Links -----*/
	$(parent+" .toSlider").click(function(e){
		e.preventDefault()
		changeContentTo("#slider");	
	})
	$(parent+" .toHome").click(function(e){
		e.preventDefault()
		changeContentTo("#toolbar");	
	})
	$(parent+" .toFolio").click(function(e){
		e.preventDefault()
		changeContentTo("#portfolio");	
	})
	/*----- Show Intro -----*/	
	$(parent+" .showIntro").click(function(e){
		e.preventDefault()
		showIntro();	
	})
	/*----- Tooltips -----*/
	$(parent+" .hasTip").hover(
		function(){
			var toolTip = $("#tooltip");
			if ($(this).attr("title")) {
				var tipText = $(this).attr("title");
				toolTip.html(tipText)
				var ttLeft = $(this).offset().left-20-50;
				var ttTop = $(this).offset().top - toolTip.height() - 30 - 120;
				toolTip.css({
					left:ttLeft,
					top:ttTop
				})
				.animate({
					top:ttTop+120,
					left:ttLeft+50
				},{queue:false,duration:skyline.toolTipShowTime/2})
				.fadeIn(skyline.toolTipShowTime)
			}
		},
		function(){
			$("#tooltip").stop(true,true).hide().html("")
		}
	)
	/*----- Button -----*/
	$(parent+" .button").wrap('<span class="button-l"><span class="button-m"></span></span>');
	$(parent+" .button-l").css3 ({
		transform:"scale(1) translateY(0px)",
		time:0
	})
	$(parent+" .button-l").hover(
		function(){
			$(this).css3 ({
				transform:"scale(1.2) translateY(-10px)",
				time:300
			})
		},
		function(){
			$(this).css3 ({
				transform:"scale(1) translateY(0px)",
				time:300
			})
		}
	)
	/*------ Window Content ------*/
	if (parent!="") {
		var windowID = $(parent).attr('id').split("window_")[1];
		$(parent+" .closeWindow").click(function(e){
			e.preventDefault();
			closeWindow(windowID)
		})
		$(parent+" a.openHere").click(function(e){
			e.preventDefault();
			replaceWindowContent({
				windowID : windowID,
				url : $(this).attr('href'),
				width : $(this).attr("rel"),
				height : $(this).attr("rev")
			})
		})
	}
}
function changeContentTo(newContent) {
	var contentSection = $(".content-section");
	contentSection.css({height:contentSection.height()})
	.delay(600).animate({height:$(newContent).outerHeight(true)},600)
	var oldContent;
	contentSection.children().each(function(){
		if ($(this).css("display")=="block") {
			oldContent = $(this);
			return;
		}
	})
	oldContent.fadeOut(600,function(){
		$(newContent).delay(300).fadeIn(600,function(){
			if(newContent=="#slider") $(".slider").zoomSlider(sliderParams);	
		})
	})	
}
function showLoader(){
	$(".ajax-loader").css({top:$(window).scrollTop()+200}).show();	
}
function hideLoader(){
	$(".ajax-loader").hide();
}
function expand(id,windowWidth,windowHeight){
	$("#window_"+id).resizable("enable")
	.animate({
		width: windowWidth,
		height: windowHeight
	},{queue:false, duration:skyline.expandWindowTime})
	.find("iframe").animate({height:windowHeight-80},skyline.expandWindowTime)
	if (skyline.withScrollBar && $("#window_"+id).find("iframe").length==0) {
		$("#window_"+id).find(".w-mm").css({overflow:"auto"})	
	}
	$("#window_"+(id)+" .w-ml").animate({width:windowWidth-20,height:windowHeight-40},skyline.expandWindowTime)
	$("#window_"+id+" .toolbar .expand-icon").remove()
	$('<div class="minimize-icon" title="Minimize Window" onclick="minimize('+id+')"></dic>').insertBefore("#window_"+id+" .close-icon")
}
function minimize(id) {
	$("#window_"+id).animate({width:"175px",height:"50px",left:"10px"},{queue:false, duration:skyline.minimizeWindowTime,complete:function(){
		$(this).addClass("minimized")
		if(isFade()) $(this).fadeTo(300,0.3)
		$(this).resizable("disable")
	}})
	.children(".w-ml").animate({height:"10px",width:"155px"},{queue:false, duration:skyline.minimizeWindowTime})
	.find("iframe").animate({height:"120px",width:"100%"},{queue:false, duration:skyline.minimizeWindowTime})
	if (skyline.withScrollBar && $("#window_"+id).find("iframe").length==0) {
		$("#window_"+id).find(".w-mm").css({overflow:"visible"})
	}
	$("#window_"+id+" .toolbar .minimize-icon").remove()
	$('<div class="expand-icon" title="Expand Window" onclick="expand('+id+','+$("#window_"+id).width()+','+$("#window_"+id).height()+')"></dic>').insertBefore("#window_"+id+" .close-icon")
}
function closeWindow(id) {
	$("#window_"+id).remove()
}
function newWindow(params){
	params.width = params.width || skyline.defaultWindowWidth;
	params.contentType = params.contentType||"text";
	params.left = params.left||0;
	params.top = params.top||0;
	params.title = params.title || "";
	params.windowColor = params.windowColor||skyline.windowColor;
	var windowID;
	if ($(".window:last").index()=="-1") windowID = 0
	else windowID = $(".window:last").attr("id").split("window_")[1]*1+1;
	if (params.contentType!="image") {
		params.windowToolbar = params.windowToolbar || skyline.contentWindowToolbar;
		jQuery.get("window.tmpl.php",{
				id : windowID, 
				url : params.url, 
				contentType : params.contentType, 
				width: params.width
			},function(tmpl){
			$("#windows").append(tmpl)
			var addedWindow = $("#window_"+windowID)
			var windowTop = $(window).scrollTop()+100;
			var windowHeight = params.height||addedWindow.outerHeight()*1;
			addedWindow.addClass(params.windowColor)
			if(window.Cufon !== undefined) Cufon.refresh();	
			addedWindow.find(".toolbar").addClass(params.windowToolbar);
			if (params.windowToolbar=="os") {
				addedWindow.find(".toolbar").wrap('<div class="t-os-l"><div class="t-os-r"></div></div>')	
			}
			if (skyline.rotateWindows) addedWindow.css3({transform:"rotate(45deg)",time:0})
			addedWindow.css({
				width:290,
				left: params.left,	
				top: params.top,
				height: 50,
				opacity:0.1,
				display: "block",
				filter: "alpha(opacity=10)"
			})
			.animate({
				left: ($(window).width() - params.width)/2+"px",	
				top: $(window).scrollTop()+100,
				height: windowHeight*1+10,
				width: params.width,
				opacity:1
			},skyline.openWindowTime,function(){
					 addedWindow.css({filter:""})
					 if(isFade())$(".window:lt("+addedWindow.index()+")").fadeTo(300,0.3)
			})
			.find(".w-mm").css({overflow:(skyline.withScrollBar&&params.contentType=="text")?"auto":""}).end()
			.find(".w-ml").animate({height:windowHeight-30},skyline.openWindowTime).end()
			.find("iframe").animate({height:windowHeight-80},skyline.openWindowTime).end()
			.draggable({ handle: 'div.drag-icon' })
			.resizable({ 
				alsoResize: '#window_'+windowID+' .w-ml, #window_'+windowID+' iframe',
				minHeight: 50,
				minWidth:175 
			})
			.mousedown(function(){
				if($(this).css("opacity")!=1 && isFade()) {
					$(this).css({"z-index":3000}).fadeTo(300,1,function(){$(this).css({"filter":""})})
					$(this).nextAll(".window").css({"z-index":2000}).fadeTo(300,0.5)
					$(this).prevAll(".window").css({"z-index":2000}).fadeTo(300,0.5)
				}
				if(!isFade()) {
					$(this).css({"z-index":3000})
					$(this).nextAll(".window").css({"z-index":2000})
					$(this).prevAll(".window").css({"z-index":2000})
				}
			})
			if (skyline.rotateWindows) addedWindow.css3({transform:"rotate(0deg)",time:skyline.openWindowTime})
			initLinksIn("#window_"+windowID);
		})
	}
	else {
		params.windowToolbar = params.windowToolbar || skyline.imageWindowToolbar;
		jQuery.get("img.tmpl.php",{id : windowID, url : params.url, title : params.title},function(tmpl){
			showLoader();
			$("#windows").append(tmpl)
			var addedWindow = $("#window_"+windowID);
			if (skyline.rotateWindows) addedWindow.css3({transform:"rotate(45deg)",time:skyline.openWindowTime})
			addedWindow.find(".toolbar").addClass(params.windowToolbar);
			if (params.windowToolbar=="os") {
				addedWindow.find(".toolbar").wrap('<div class="t-os-l"><div class="t-os-r"></div></div>')	
				.end().find(".w-content").css({borderTop:"none"})
			}
			var windowWidth = addedWindow.width()
			addedWindow.draggable({ handle: 'div.toolbar' });
			addedWindow.css({
				width:365,
				left: params.left,	
				top: params.top
			})
			.addClass(params.windowColor)
			if(window.Cufon !== undefined) Cufon.refresh()
			$("#window_"+windowID+" img.window-image").css({width:345})
			//$("#window_"+windowID+" .window-image")[0].onload = function(){
				hideLoader();
				addedWindow.animate({
					left: ($(window).width() - windowWidth+20)/2+"px",	
					top: $(window).scrollTop()+100,
					width: windowWidth
				},{queue : false, duration : skyline.openWindowTime,complete:function(){
					addedWindow.css({filter:""})
				}})
				if (skyline.rotateWindows) addedWindow.css3({transform:"rotate(0deg)", time:skyline.openWindowTime})
				addedWindow.fadeIn(skyline.openWindowTime)
				
				if(isFade()) $(".window:lt("+addedWindow.index()+")").delay(skyline.openWindowTime+200).fadeTo(300,0.3)
				$("#window_"+windowID+" .window-image").animate({
					width:windowWidth-20
				},skyline.openWindowTime)
				$("#window_"+windowID+" .image-title").delay(skyline.openWindowTime+300).slideDown(300)
			//}
			addedWindow.mousedown(function(){
				if($(this).css("opacity")!=1 && isFade()) {
					$(this).css({"z-index":3000}).fadeTo(300,1,function(){
						$(this).css({"filter":""})
					})
					$(this).nextAll(".window").css({"z-index":2000}).fadeTo(300,0.5)
					$(this).prevAll(".window").css({"z-index":2000}).fadeTo(300,0.5)
				}
				if(!isFade()) {
					$(this).css({"z-index":3000})
					$(this).nextAll(".window").css({"z-index":2000})
					$(this).prevAll(".window").css({"z-index":2000})
				}
			})
			$("#window_"+windowID+" .zoom-in-icon").click(function(){
				addedWindow.animate({
					width:"+=100px",
					left:"-=50px"
				},300)
				$("#window_"+windowID+" .window-image").animate({width:"+=100px"},300)	
			})
			$("#window_"+windowID+" .zoom-out-icon").click(function(){
				if (addedWindow.width()<=500) return;
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
			if(window.Cufon !== undefined) Cufon.refresh();
			initLinksIn("#window_"+params.windowID);
			if(params.width && params.height) {
				replacedWindow.animate({
					width:params.width,
					left:($(window).width()-params.width)/2,
					height:params.height
				},skyline.openWindowTime)
				replacedWindow.find(".w-ml").animate({
					height:params.height-40,
					width:params.width-20
				},skyline.openWindowTime)
			}
			replacedContent.delay(300+skyline.openWindowTime).fadeIn(300)
		})	
	})
}
function rotate(degree,windowID) {
	$("#window_"+windowID).css3({
		transform:"rotate("+degree+"deg)",
		time:1000
	})	
	$("#window_"+windowID+" .rotate-cw-icon").attr({"onClick":"rotate("+(degree+5)+","+windowID+")"})
	$("#window_"+windowID+" .rotate-ccw-icon").attr({"onClick":"rotate("+(degree-5)+","+windowID+")"})
}
(function($) {
	$.fn.css3 = function(params) {
		if (skyline.disableCSS3Transforms) return this;
		var transform = params.transform;
		var time = params.time;
		return this
		.css({
			"-o-transform":transform,
			"-o-transition-duration":(time/1000)+"s",
			"-o-transition-property":"-o-transform",
			"-webkit-transform":transform,
			"-webkit-transition-duration":(time/1000)+"s",
			"-webkit-transition-property":"-webkit-transform",
			"-moz-transform":transform,
			"-moz-transition-duration":(time/1000)+"s",
			"-moz-transition-property":"-moz-transform",
			"transform":transform,
			"transition-duration":(time/1000)+"s",
			"transition-property":"transform"
		})
	}
})(jQuery)
function fixModulesHeight() {
	$(".module").css({height:""})
	var moduleHeight=0;
	for (var i=0;i<$(".module").length;i++) {
		var iModuleHeight = $(".module").eq(i).height()
		if(iModuleHeight > moduleHeight) moduleHeight = iModuleHeight;
	}
	$(".module").height(moduleHeight)
}
function showIntro() {
		$("#intro-start").unbind()
		$("#intro-skip").unbind()
		$("#intro,.intro-control").show()
		var introSlides = $(".intro-slides");
		skyline.introDelays = [];
		$(".intro-slide").css3({transform:skyline.introStartTransform,time:0})
		$("#intro-start").click(function(e){
			e.preventDefault()
			$(".intro-control").hide()
			var slideDelay=0
			for (var i=0; i < $(".intro-slide").length; i++) {
				var introSlide = $(".intro-slide:eq("+i+")");
				var slideTime;
				if (introSlide.attr("class").indexOf("time(")>=0) {
					slideTime = introSlide.attr("class").split("time(")[1].split(")")[0]*1;
				}
				else {
					slideTime = skyline.introSlideDuration;
				}
				skyline.introDelays[i] = slideTime;
				introSlide.delay(slideDelay).fadeIn(300,function(){
						$(this).css3({transform:skyline.introFinalTransform,time:skyline.introDelays[$(this).index()-1]})
				}).delay(skyline.introDelays[i]+300).fadeOut(300)
				slideDelay += (slideTime+900);
			}
			$("#intro").delay(slideDelay+300).fadeOut(1000)
		})
		$("#intro-skip").click(function(e){
			e.preventDefault()
			$("#intro").fadeOut(1000)
		})	
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
		newWindow({url:"includes/message_error.php",width:480,height:200})
	}
	else {
		name = $("#contact_name").attr("value");
		email = $("#contact_email").attr("value");
		subject = $("#contact_subject").attr("value");
		message= $("#contact_message").val().replace(/<\/?[^>]+>/gi, '');
		jQuery.post("scripts/send_message.php",{name : name, email : email, subject : subject, message : message},
			function (status) {
				if(status==1) newWindow({url:"includes/message_sent.php",width:550})
				else newWindow({url:"includes/server_error.php",width:500})
			}
		);
	}
}
(function($) {
	$.fn.idTwitter = function(a) {
		var tweetContainer = this;
		$.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+a.username+"&count="+a.numberOfTweets+"&include_entities=true&include_rts=true&callback=?",
		function(tweetData){
			$.each(tweetData, function(i,tweet) {
				var tweetDate = tweet.created_at.substr(0,20);
				var tweetText = tweet.text;
				for (var i =0; i<tweet.entities.user_mentions.length; i++) {
					var mentioned = tweet.entities.user_mentions[i].screen_name;
					tweetText = tweetText.replace('@'+mentioned,'<a href="http://twitter.com/'+mentioned+'">@'+mentioned+'</a>')	
				}
				for (var i =0; i<tweet.entities.urls.length; i++) {
					var uRL = tweet.entities.urls[i].url;
					tweetText = tweetText.replace(uRL,'<a href="'+uRL+'">'+uRL+'</a>')	
				}
				var readyTweet = a.tweetFormat.replace(/%username/g,a.username)
					readyTweet = readyTweet.replace(/%tweetDate/g,tweetDate)
					readyTweet = readyTweet.replace(/%tweetText/g,tweetText)
				tweetContainer.append(readyTweet);
				
			})
			
		})
		if (skyline.fixModHeight) {fixModulesHeight();}
	}
})(jQuery)
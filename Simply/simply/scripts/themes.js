// JavaScript Document
var theme = new Object();
	theme.grey = new Object();
	theme.grey.bgImage = new Image();
	theme.grey.bgImage.src = 'images/grey/grey-bg.png';
	theme.grey.bgColor = "#ddd";
	theme.grey.header = new Image();
	theme.grey.header.src = 'images/grey/header.jpg';
	theme.grey.menuImg = new Image();
	theme.grey.menuImg.src = 'images/grey/menu-link.png';
	theme.grey.menuLinkColor = "#fff";
	theme.grey.menuDecor = new Image();
	theme.grey.menuDecor.src = 'images/grey/menu-decor.png';
	theme.grey.homeLinkImg = new Image();
	theme.grey.homeLinkImg.src = 'images/grey/home.png';
	theme.grey.logo = new Image();
	theme.grey.logo.src = 'images/grey/logo.png';
	theme.grey.contentHeading = "#555";
	theme.grey.moduleTitle = "#777";
	theme.grey.linkColor = "#721555";
	theme.grey.switchColor = "#000";
	
	theme.blue = new Object();
	theme.blue.bgImage = new Image();
	theme.blue.bgImage.src = 'images/blue/blue-bg.png';
	theme.blue.bgColor = "#64ceff";
	theme.blue.header = new Image();
	theme.blue.header.src = 'images/blue/header.jpg';
	theme.blue.menuImg = new Image();
	theme.blue.menuImg.src = 'images/blue/menu-link.png';
	theme.blue.menuLinkColor = "#fff";
	theme.blue.menuDecor = new Image();
	theme.blue.menuDecor.src = 'images/blue/menu-decor.png';
	theme.blue.homeLinkImg = new Image();
	theme.blue.homeLinkImg.src = 'images/blue/home.png';
	theme.blue.logo = new Image();
	theme.blue.logo.src = 'images/blue/logo.png';
	theme.blue.contentHeading = "#F25BC2";
	theme.blue.moduleTitle = "#FFA1E1";
	theme.blue.linkColor = "#2d9bed";
	theme.blue.switchColor = "#0093ff";
	
	theme.dark = new Object();
	theme.dark.bgImage = new Image();
	theme.dark.bgImage.src = 'images/dark/dark-bg.png';
	theme.dark.bgColor = "#222";
	theme.dark.header = new Image();
	theme.dark.header.src = 'images/dark/header.jpg';
	theme.dark.menuImg = new Image();
	theme.dark.menuImg.src = 'images/dark/menu-link.png';
	theme.dark.menuLinkColor = "#555";
	theme.dark.menuDecor = new Image();
	theme.dark.menuDecor.src = 'images/dark/menu-decor.png';
	theme.dark.homeLinkImg = new Image();
	theme.dark.homeLinkImg.src = 'images/dark/home.png';
	theme.dark.logo = new Image();
	theme.dark.logo.src = 'images/dark/logo.png';
	theme.dark.contentHeading = "#333";
	theme.dark.moduleTitle = "#555";
	theme.dark.linkColor = "#111";
	theme.dark.switchColor = "#000";
	
jQuery(document).ready(function(){
	var menuDecor = new Image()
	menuDecor.src = getBgSrc(".menu-decor")
	
	theme.def = new Object();
	theme.def.bgImage = new Image();
	theme.def.bgImage.src = getBgSrc("body");
	theme.def.bgColor = $("body").css("background-color");
	theme.def.header = new Image();
	theme.def.header.src = getBgSrc("#header");
	theme.def.menuImg = new Image();
	theme.def.menuImg.src = getBgSrc(".link-bg");
	theme.def.menuLinkColor = $("#menu a").css("color");
	theme.def.menuDecor = new Image();
	theme.def.menuDecor.src = getBgSrc('.menu-decor');
	theme.def.homeLinkImg = new Image();
	theme.def.homeLinkImg.src = getBgSrc(".toHome");
	theme.def.logo = new Image();
	theme.def.logo.src = $("#logo").attr("src");
	theme.def.contentHeading = "#F25BC2";
	theme.def.moduleTitle = "#9CA7AF";
	theme.def.linkColor = "#1a7ec8";
	theme.def.switchColor = "#FF7BD5";
})
function getBgSrc(selector) {
	var bgSrc = $(selector).css('background-image').split('"');
	if(bgSrc[1]) return bgSrc[1];
	else {
		var bgSrc = $(selector).css('background-image').substr(4)
		bgSrc = bgSrc.substr(0,bgSrc.length-1)
		return bgSrc;
	}
}
function setTheme(themeColor) {
	if(isIE6) {
		$(".white-layer").css({"position":"absolute","top":$(window).scrollTop(),"left":0,"width":"100%","height":$(window).height()})
	}
	$(".white-layer").delay(200).fadeIn(600,function(){
		$('body').css({'background-color':theme[themeColor]['bgColor'],'background-image':'url('+theme[themeColor].bgImage.src+')'})
		$('#header').css({'background-image':'url('+theme[themeColor].header.src+')'})
		$('.link-bg').css({'background-image':'url('+theme[themeColor].menuImg.src+')'})
		$('.toHome').css({'background-image':'url('+theme[themeColor].homeLinkImg.src+')'})
		$("#logo").attr({"src":theme[themeColor].logo.src})
		$("#menu a").css({"color":theme[themeColor].menuLinkColor})
		$(".menu-decor").css({'background-image':'url('+theme[themeColor].menuDecor.src+')','width':theme[themeColor].menuDecor.width,'height':theme[themeColor].menuDecor.height})
		var CSSStyleSheet = document.styleSheets[0];
		if(CSSStyleSheet.insertRule){
			var lastRule = CSSStyleSheet.cssRules.length;
		    CSSStyleSheet.insertRule("h2.content-heading {color: "+theme[themeColor].contentHeading+"}", lastRule);	
			CSSStyleSheet.insertRule(".module-title {color: "+theme[themeColor].moduleTitle+"}", lastRule);
			CSSStyleSheet.insertRule("a {color: "+theme[themeColor].linkColor+"}", lastRule);
			CSSStyleSheet.insertRule(".switches span.current {color: "+theme[themeColor].switchColor+"}", lastRule);
		}
		else {
			var lastRule = CSSStyleSheet.rules.length;
			CSSStyleSheet.addRule("h2.content-heading", 'color: '+theme[themeColor].contentHeading);	
			CSSStyleSheet.addRule(".module-title", 'color: '+theme[themeColor].moduleTitle);	
			CSSStyleSheet.addRule("a", 'color: '+theme[themeColor].linkColor);	
			CSSStyleSheet.addRule(".switches span.current", 'color: '+theme[themeColor].switchColor);	
		}
	}).delay(200).fadeOut(600);
}

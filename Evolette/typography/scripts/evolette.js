// JavaScript Document
var editor_settings = {
			script_url : "tiny_mce/tiny_mce.js",
			theme : "advanced",
			plugins : "pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
			theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
			theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
			theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
			theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking",
			theme_advanced_toolbar_location : "top",
			theme_advanced_toolbar_align : "left",
			theme_advanced_statusbar_location : "bottom",
			theme_advanced_resizing : true,
			template_external_list_url : "lists/template_list.js",
			external_link_list_url : "lists/link_list.js",
			external_image_list_url : "lists/image_list.js",
			media_external_list_url : "lists/media_list.js"
	}
$(function(){
	mainFunctionality()
	/*-----Login Form------*/
	$("#loginForm").submit(function(e){
		e.preventDefault();
		var username = $('#username').val()
		var password = $('#password').val()
		jQuery.post("includes/login-check.php",{username:username,password:password},function(checkStatus){
			if (checkStatus == 1) $('.wrong-status').fadeOut(300,function(){
					logIn()
				})
			else $('.wrong-status').hide().fadeIn(300)
		})	
	})
	$('a.openUname').click(function(e){
		e.preventDefault();
		$(".forgotPass").fadeOut(200)
		if($(".forgotUname").css('display')=='none') {
			$(".forgotUname").slideDown(600)	
		}
		else $(".forgotUname").fadeOut(200)	
	})
	$('a.openPass').click(function(e){
		e.preventDefault();
		$(".forgotUname").fadeOut(200)
		if($(".forgotPass").css('display')=='none') {
			$(".forgotPass").slideDown(600)	
		}
		else $(".forgotPass").fadeOut(200)	
	})
	/*----- Fix Content Size ------*/
	$(window).resize(function(){
		contentResize()
	})
	/*----- Slide Menu ------*/
	$(window).scroll(function(){
		$('.menu > ul').stop(true,false).delay(500).animate({top:$(window).scrollTop()},600)
	})
	/*----- Logout ------*/
	$("#logout").click(function(){logOut()})
	/*----- Close Popup ------*/
	$('.close-popup,.dark-layer').click(function(){closePopup()})
	/*----- Ajax Loader ------*/
	$("#ajax-loader").ajaxStart(function(){
		$(this).css({display:"block"})
	})
	$("#ajax-loader").ajaxComplete(function(){
		$(this).css({display:"none"});
	})
})
function mainFunctionality(){
	$(function(){
		/*----- Links Handling ------*/
		$('a.ajaxed').click(function(e){
			e.preventDefault();
			var url = $(this).attr('href')
			loadContent('content/'+getVars(url,'content')+'.php', getVars(url))
		})
		$('a.ajax-d').click(function(e){
			e.preventDefault();
			loadContent($(this).attr('href'))
		})
		$('a.sendVars').click(function(e){
			e.preventDefault();
			var url = $(this).attr('href')
			sendVars('content/'+getVars(url,'content')+'.php', getVars(url))
		})
		$('a.popup').click(function(e){
			e.preventDefault();
			var url = $(this).attr('href')
			var width = $(this).attr('rel');
			var height = $(this).attr('rev');
			popUp({url:'content/'+getVars(url,'content')+'.php',width:width,height:height}, getVars(url))
		})
		$('a.sendMessage').click(function(e){
			e.preventDefault();
			popUp({url:"content/new-message.php"},{mailto:$(this).attr('href')})	
		})
		/*----- Forms ------*/
		$('form.formToContent').submit(function(e){
			e.preventDefault();
			loadContent($(this).attr('action'),getFormVars($(this)))
		})
		$('form.formToPopup').submit(function(e){
			e.preventDefault();
			popUp({url:$(this).attr('action')},getFormVars($(this)))
		})
		$('form.sendVars').submit(function(e){
			e.preventDefault();
			sendVars($(this).attr('action'),getFormVars($(this)))
		})
		/*----- CP Icons ------*/
		$('.cp-icons img').hover(
			function(){
				$(this).fadeTo(200,0.5)
			},
			function(){
				$(this).fadeTo(200,1)
			}
		)
		/*----- TinyMCE ------*/
		//$('textarea.tinymce').tinymce(editor_settings);
		/*----- Expandable Tables ------*/
		$('table.expandable thead').attr({'tip':'Click to expand table'})
		$('table.expandable thead').click(function(){
			var expandTable = $(this).closest('table');
			if(!expandTable.hasClass('expanded')) {
				var tableOffset = expandTable.offset().left-$('#menu').width();
				expandTable.animate({width:'+='+(tableOffset*2-50),left:-tableOffset+25},600).addClass('expanded');
			}
			else {
				expandTable.animate({width:'100%',left:0},600).removeClass('expanded');
			}
				
		})
		/*----- Tips ------*/
		$('*[tip]').hover(
			function(){
				openTip($(this));
			},
			function(){
				$("#tip").stop(true,true).fadeOut(100)
			}
		)
		/*----- Wrappers ------*/
		$("h3.pane-title").each(function(){
			$(this).html('<span class="p-title-r"><span class="p-title-m">'+$(this).html()+'</span></span>')
		})
		$(".tabs-head li").each(function(){
			$(this).html('<span class="p-title-r"><span class="p-title-m">'+$(this).html()+'</span></span>')
		})
		$(".button").wrap('<span class="button-l"><span class="button-m"></span></span>')
		$(".w-button").wrap('<span class="w-button-l"><span class="w-button-m"></span></span>')
		$(".bw-button").wrap('<span class="bw-button-l"><span class="bw-button-m"></span></span>')
		$(".bb-button").wrap('<span class="bb-button-l"><span class="bb-button-m"></span></span>')
		/*----- Accordion ------*/
		$(".accordion .acc-title").click(function(){
			if(!$(this).hasClass('current')) {
				var accordion = $(this).closest('.accordion');
				if (accordion.attr('class').indexOf('time-')>=0) var time = accordion.attr('class').split('time-')[1].split(' ')[0]*1;
				else var time = 300;
				$(this).next('.acc-pane').slideDown(time).nextAll('.acc-pane').slideUp(time).end().prevAll('.acc-pane').slideUp(time)
				accordion.children('h3.current').removeClass('current')
				$(this).addClass('current')
			}
		})
		/*----- Tabs ------*/
		$(".tabs-head li").click(function(){
			if(!$(this).hasClass('current')) {
				var tabs = $(this).closest('.tabs');
				tabs.children('.tabs-pane').eq(tabs.find('li.current').index()).hide()
				tabs.children('.tabs-pane').eq($(this).index()).show()
				tabs.find('li.current').removeClass('current')
				$(this).addClass('current')
			}
		})
	})	
}
function menuFunctionality(){
	$(function(){
		$('.submenu > li:last-child').css('border-bottom','none')
		$('.menu a,.menu .separator').hover(
			function(){
				$(this).fadeTo(150,0.5)
			},
			function(){
				$(this).fadeTo(150,1)
			}
		)
		$('.menu li:has(ul.submenu)').hover(
			function(){
				$(this).children('.submenu').stop(true,true).slideDown(300)	
			},
			function(){
				$(this).children('.submenu').delay(300).slideUp(300)
			}
		)
		/*----- Menu Links Handling ------*/
		$('a.m-ajaxed').click(function(e){
			e.preventDefault();
			var url = $(this).attr('href')
			loadContent('content/'+getVars(url,'content')+'.php', getVars(url))
		})
		$('a.m-popup').click(function(e){
			e.preventDefault();
			var url = $(this).attr('href')
			popUp({url:'content/'+getVars(url,'content')+'.php'}, getVars(url))
		})
		/*----- Menu Tip ------*/
		$('*[mtip]').hover(
			function(){
				openTip($(this))
			},
			function(){
				$("#tip").stop(true,true).fadeOut(100)
			}
		)
	})
}
function contentResize(){
	$("#maincontent").css({'height':$(document).height()})
}
function retrieveUsername(){
	var email = $("#retrieveUnameEmail").val()
	jQuery.post("includes/forgotUname.php",{email:email},function(status){
			$(".forgotUname .forgotStatus").hide().html(status).fadeIn(300)
		})	
}
function retrievePassword(){
	var email = $("#retrievePassEmail").val()
	jQuery.post("includes/forgotPass.php",{email:email},function(status){
			$(".forgotPass .forgotStatus").hide().html(status).fadeIn(300)
		})	
}
function logIn(){
	jQuery.post("content/cp.php",function(controlPanel){
		jQuery.post("includes/menu.php",function(menu){
			$('.content-inner').html(controlPanel)
			$('.menu').html(menu)
			$('#login').fadeOut(600);
			$('.lock').css({left:$('.lock').position().left}).delay(1200).animate({
				"left":0,"top":-5,"height":"-=1px",marginLeft:0},600)
			$('#logo').css({left:$('#logo').position().left}).delay(1800).animate({
				"left":240,	marginLeft:0},500)
			$('#maincontent').delay(600).fadeIn(600)
			$('#menu').delay(1800).animate({height:"100%"},1000)
			$('.lock2').delay(3000).fadeOut(300,function(){
				$('.content').fadeIn(600,function(){
					contentResize()
					$('.menu').fadeIn(600)
				})
				mainFunctionality();
				menuFunctionality()
				$('#logout').delay(100).fadeIn(300)}
			)
		})
	})
}
function logOut() {
	jQuery.post('includes/logout.php');
	$(".content").fadeOut(600,function(){contentResize();$('.content-inner').html("")});
	$('.menu').delay(300).fadeOut(600,function(){$('.menu').html("")});
	$('#menu').delay(1000).animate({height:"0"},1000);
	$('#logo').delay(2000).animate({left:"50%",marginLeft:'-350px'},600);
	$('.lock').delay(2000).animate({left:"50%",marginLeft:'-350px',top:200,height:"+=1px"},600);
	$('#maincontent').delay(2000).fadeOut(300);
	$('#login').delay(2700).fadeIn(600);
	$('#logout').delay(3300).fadeOut(300,function(){$('.lock2').delay(100).fadeIn(300)});
}
function loadContent(url,vars){
	closePopup();
	vars=vars||{}
	jQuery.post(url,vars,function(newContent){
		$('.content').fadeOut(600,function(){
			$('.content-inner').html(newContent)
			$('.content').fadeIn(600,function(){
				if($(window).scrollTop()>($('.content').height()+200)){ 
					if($('html').css('scrollTop')===null) {
						$('body').delay(300).animate({scrollTop:150}, 900);
					}
					else {
						$('html').delay(300).animate({scrollTop:150}, 900);
					}
				}
			})
			mainFunctionality()	;
			contentResize()
		})
	})
}
function popUp(params,vars) {
	params=params||{};
	vars = vars || {};
	params.width = params.width || 700;
	params.height = params.height || 'auto';
	if(params.url) {
		jQuery.post(params.url,vars,function(data){
			$('.popup-content').html(data)
			popUp2();
		})
	}
	else {
		if(params.length) {
			$('.popup-content').html(params);popUp2();		
		}
		else {
			$('.popup-content').html(params.text);popUp2()	
		}
	}
	function popUp2(){
		if(params.width) $('.popup-content').css({width:params.width})
		if(params.height) $('.popup-content').css({height:params.height})	
		$('#popup').css({marginLeft:-params.width/2-10})
		$('.dark-layer').fadeTo(300,0.7);
		$('#popup').css({top:$(window).scrollTop()+100})
		$('#popup').delay(400).fadeIn(300)
	}
}
function closePopup(){
	$('.dark-layer,#popup').fadeOut(300,function(){
		$('.popup-content').html("");
	});	
}
function sendVars(url,vars){
	jQuery.post(url,vars)
}
function getVars(varString,only){
	varString.indexOf('?')>=0?varString = varString.split("?")[1]:varString;
	var pairs = varString.split('&');
	var object1 = {};
	for (var i = 0; i<pairs.length;i++) {
		if(pairs[i].split('=')[0]==only) return pairs[i].split('=')[1].split('&')[0];
		object1[pairs[i].split('=')[0]]=pairs[i].split('=')[1];
	}
	if (only) return null;
	return object1;
}
function getFormVars(form) {
	var formVars = {};
	var fieldName,fieldVal;
	form.find('input,select,textarea').each(function(){
		fieldName = $(this).attr('name');
		if ($(this).attr('type')=="radio") {
			if($(this).is(':checked')) {
				fieldVal = $(this).val();
				formVars[fieldName]=fieldVal;
			}
		}
		else {
			if($(this).attr('type')=="checkbox") {
				if(fieldName.indexOf('[]')>0) {
					if(!formVars[fieldName]) formVars[fieldName]=[];
					if($(this).is(':checked')) {
						fieldVal = $(this).val();
						formVars[fieldName].push(fieldVal);
					}	
				}
				else {
					if($(this).is(':checked')) {
						fieldVal = $(this).val();
						formVars[fieldName]=fieldVal;
					}
				}
			}
			else {
				fieldVal = $(this).val();
				formVars[fieldName]=fieldVal;
			}
		}
	})
	return formVars;	
}
function openTip(e) {
	$(".tip-content").html(e.attr('tip')||e.attr('mtip'))
	var left = e.offset().left-($("#tip").width()-e.width())/2
	left<0?left=0:left=left
	var top = e.offset().top-$("#tip").height()-20
	top<0?top=0:top=top
	$("#tip").stop(true,true).css({"left":left,"top":top}).fadeIn(200)
}
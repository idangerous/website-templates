$(function(){
	$.extend(emp, {
		templateHTML : 	$('.person-template').html(),
		templatePopupHTML : $('.popup').html(),
		activeID : false,
		is3d : Modernizr.csstransforms3d,
		css3 : Modernizr.csstransitions,
		openedPerson : false,
		inFB : (window.parent.length > 0 || document.referrer.indexOf('facebook.com')>=0) ,
		fbScrollTop : 0,
		pageIsChanging : false
	});
	//Facebook API
	if (emp.inFB) {
		$('body').append('<div id="fb-root"></div>');
		window.fbAsyncInit = function() {
			FB.init({appId: '', status: true, cookie: true, xfbml: true});
			window.setTimeout(function() {
				FB.Canvas.setAutoGrow();
				FB.Canvas.scrollTo(0,0);
			}, 1000);
			//Get FB Tab Scroll
			setInterval(function(){
				FB.Canvas.getPageInfo(
					function(info) {
						emp.fbScrollTop = info.scrollTop + 100;
					}
				);	
			},500);
		};	
		(function() {
			var e = document.createElement('script'); e.async = true;
			e.src = document.location.protocol + '//connect.facebook.net/ru_RU/all.js';
			document.getElementById('fb-root').appendChild(e);
		}());
		
	}
	//Request XML With Employees
	$.get(emp.xmlPath, function(xml){
		emp.xml = $(xml);
		addPersons();
	});
	
	function addPersons() {
		var template = $('.person-template');
		var xml = emp.xml;
		var total = $('.person').length;
		var counter = 0;
		$('.person[data-id]').each(function(index, element) {
			var p = $(this);
			var id = p.data('id');
			var person = xml.find('person[id="'+id+'"]:first');
			if (person.length==0) return;
			//Inserts
			template.find('[data-insert]').each(function(index, element) {
				$(this).html(person.find( $(this).data('insert') ).text());
            });
			//Replaces
			template.find('[data-replace]').each(function(index, element) {
				$(this).replaceWith(person.find( $(this).data('replace') ).text());
            });
			//Attributes
			template.find('[data-attr]').each(function(index, element) {
				var el = $(this);
				var attributes = eval('('+el.data('attr')+')');
				for (var at in attributes) {
					el.attr(at, person.find(attributes[at]).text()  )	
				}
            });
			//Check for parameters
			template.find('[data-check]').each(function(){
				var propFound = person.find( $(this).data('check')  ).length > 0;
				if (!propFound) $(this).remove();	
			})
			
			//Insert Template
			p.html( template.html() );
			
			//Clean Template
			template.html( emp.templateHTML );
			
			//Fade In Person
			$(this).delay(50*index).fadeTo(100,1);
			
			//Set to Absolute if Filter is Used
			if (emp.filter.use) {
				var index = index;
				var row = Math.floor((index)/(emp.filter.cols));
				var col = index - row*emp.filter.cols;
				$(this).css({
					left : col*emp.filter.cell[0],
					top: row*emp.filter.cell[1],
					position: 'absolute'
				});
				
				
				
			}
		});	
	}
	//Set Size to Filtered Content DIV:
	if (emp.filter.use) {
		var fc = $('.filter-content');
		var rows = Math.ceil(fc.find('.person').length/emp.filter.cols);
		fc.css({height: rows*emp.filter.cell[1] })
	
	}
	$('a[data-filter]').click(function(e) {
        e.preventDefault();
		if (!emp.filter.use) return;
		var filter = $(this).data('filter');
		filterPersons(filter);
		$('a[data-filter].active').removeClass('active');
		$(this).addClass('active')
    });
	function filterPersons(filter) {
		var fc = $('.filter-content');
		if(filter=="*") var filterSearch = 'data-filter';
		else filterSearch = 'data-filter*="'+filter+'"';
		fc.find('.person').removeClass('match-filter');
		var newPersons = fc.find('.person['+filterSearch+']').addClass('match-filter');
		
		fc.find('.person:not(.match-filter)').fadeOut(500);
		fc.find('.person');
		var index = -1;
		newPersons.each(function(){
			index++;
			var row = Math.floor((index)/(emp.filter.cols));
			var col = index - row*emp.filter.cols;
			$(this).animate({
				left : col*emp.filter.cell[0],
				top: row*emp.filter.cell[1]
			},{queue:false, duration:500}).fadeIn(500);
		});
		//Update Filter Content
		var rows = Math.ceil(newPersons.length/emp.filter.cols);
		fc.animate({height: rows*emp.filter.cell[1] }, 500)
	}
	
	
	//Popup Vars
	var popup = $('.popup').transform({time:0});
	var popupLayer = $('.popup-overlay');
	var popupView = $('.popup-view');
	//Show Popup
	$('.open-popup').live('click',function(e){
		e.preventDefault();
		//Clear Popup's HTML
		popup.html(emp.templatePopupHTML);
		//--
		var clicked = $(this).parents('.person');
		var id = clicked.data('id');
		emp.openedPerson = clicked;
		emp.activeID = id;
		/*============
		  ============*/
		var xml = emp.xml;
		
		var person = xml.find('person[id="'+id+'"]:first');
		if (person.length==0) return;
		//Inserts
		popup.find('[data-insert]').each(function(index, element) {
			$(this).html(person.find( $(this).data('insert') ).text());
		});
		//Replaces
		popup.find('[data-replace]').each(function(index, element) {
			$(this).replaceWith(person.find( $(this).data('replace') ).text());
		});
		//Attributes
		popup.find('[data-attr]').each(function(index, element) {
			var el = $(this);
			var attributes = eval('('+el.data('attr')+')');
			for (var at in attributes) {
				el.attr(at, person.find(attributes[at]).text()  )	
			}
			
		});
		//Check for parameters
		popup.find('[data-check]').each(function(){
			var propFound = person.find( $(this).data('check')  ).length > 0;
			if (!propFound) $(this).remove();	
		})
		
		/*============
		  ============*/
		// Popup Animation
		var use3d = emp.popupEffect=='flip' && emp.is3d;
		var popupContent = $('.popup-content');
		popupView.show();
		popup.css('display','block');
		popupContent.css('display','block');
		var newHeight = popupContent.height();
		popupContent.css({opacity:0})
		popup
		.css({
			left: clicked.offset().left,
			top: clicked.offset().top,
			width: clicked.width(),
			height: clicked.height(),
			display:'block',
			opacity:0
		})
		//Hide Clicked Person
		clicked.fadeTo(300,0);
		
		//Show Overlay
		popupLayer.fadeIn(700);
		
		//Popup Animation	
		if (use3d || emp.css3) {
			var popupTop = 0;
			if (emp.inFB) {
				popupTop = emp.fbScrollTop;
			}
			else popupTop = $(window).scrollTop()+100;
			
			popup
			.addClass('popup-fixed')
			.transform({
				transform: use3d ? 'rotateY(360deg) translate3d(0,0,0)' : '',
				time:1000
			})
			.css({
				width:540,
				left: $(window).width()/2 - 298,
				height:newHeight,
				top: popupTop,
				padding:30,
				opacity:1
			})
			.transitionEnd(function(){
				setTimeout(function(){
					popup.transform({time:0}).css({height:'auto'})
					popupContent.transform({time:0})
				},50)
			})
			popupContent.css({opacity:1}).transform({time:1000})
		}
		else {
			popup
			.addClass('popup-fixed')
			
			.animate({
				width:540,
				left: $(window).width()/2 - 298,
				height:newHeight,
				top: $(window).scrollTop()+100,
				padding:30,
				opacity:1
			},1000, function(){
				popup.css({height:'auto'})
			})
			popupContent.animate({opacity:1}, 1000);
		}
	})
	$('.close-popup').live('click', function(e){
		e.preventDefault();
		var person = emp.openedPerson;
		var popupContent = $('.popup-content');
		popup.css({height: popup.height()});
		if (emp.css3) {
			setTimeout(function(){
				//Hide Popup
				popup.css({
					left: person.offset().left,
					top: person.offset().top,
					width: person.width(),
					height: person.height() ,
					padding : 10,
					opacity : 0
				})
				.removeClass('popup-fixed')
				.transform({time: 1000, transform: emp.is3d ? 'rotateY(0deg)' : ''})
				.transitionEnd(function(){
					//Hide View
					$('.popup-view').hide();
					//Reset Popup and Its Content
					$('.popup').css({opacity:1, height:'auto', width:'auto'}).transform({time:0});
					popupContent.css({opacity:1}).transform({time:0});
				})
				//Hide Overlay
				$('.popup-overlay').fadeOut(700);
				//Show Person
				person.delay(600).fadeTo(300,1);
				//Hide Popup Content
				popupContent
				.css({opacity:0})
				.transform({time:1000})
			},50)
		}
		else {
			popup
			.animate({
				left: person.offset().left,
				top: person.offset().top,
				width: person.width(),
				height: person.height() ,
				padding : 10,
				opacity : 0
			},1000, function(){
				//Hide View
				$('.popup-view').hide();
				//Reset Popup and Its Content
				$('.popup').css({opacity:1, height:'auto', width:'auto'});
				popupContent.css({opacity:1});
			})
			.removeClass('popup-fixed')
			$('.popup-overlay').fadeOut(700);
			person.delay(600).fadeTo(300,1);
			popupContent.animate({opacity:0},1000)
		}
	})
	$('.open-popup-content').live('click', function(e){
		e.preventDefault();
		if ($('.popup-loader:visible').length>0) return;
		var pLoader = $('.popup-loader')
		pLoader.slideDown(500);	
		
	})
	$('.close-popup-content').live('click', function(e){
		e.preventDefault();
		if ($('.popup-loader:visible').length==0) return;
		var pLoader = $('.popup-loader');
		pLoader.slideUp(500)	
	})
	
	//Switch Pages
	$('a[data-page]').live('click', function(e){
		e.preventDefault();		
		loadPage ($(this).data('page'));	
	});
	function loadPage(page){
		if (emp.pageIsChanging) return;
		emp.pageIsChanging = true;
		var pageDiv = $('#'+page);
		if (pageDiv.length==0) return;
		var activePage = $('.active-page');
		if (activePage.attr('id')==page) return;
		activePage.fadeOut(300);
		pageDiv.delay(300).fadeIn(300,function(){
			activePage.removeClass('active-page');
			$(this).addClass('active-page');
			emp.pageIsChanging = false;	
		})
		$('a[data-page]').removeClass('active');
		$('a[data-page="'+page+'"]').addClass('active');
	}
});




// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; try { args.callee = f.caller } catch(e) {}; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


//CSS3 Transform & Transitions by iDangero.us
$.fn.transitionEnd = function(callback) {
	return this.each(function(){
		var _this = this;
		var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
		if (callback) {
			
			function fireCallBack() {
				callback.call(this);
				for (var i=0; i<events.length; i++) {
					_this.removeEventListener(events[i], fireCallBack, false)
				}
			}
			for (var i=0; i<events.length; i++) {
				_this.addEventListener(events[i], fireCallBack, false)
			}
		}
	})
};
$.fn.transform = function(params) {
	return this.each(function(){
		var es = $(this)[0].style
		if (params.transform) {
			if (!Modernizr.csstransforms3d && params.transform.indexOf('translate3d')>=0) {
				var tr = params.transform.split('translate3d(')[1].split(')')[0].split(',')
				var before = params.transform.split('translate3d(')[0]
				var after = params.transform.split('translate3d(')[1].split(')')[1]
				params.transform = before+' translateX('+tr[0]+') translateY('+tr[1]+') '+after
			}
			if (Modernizr.csstransforms3d && params.transform.indexOf('translate')<0) {
				params.transform+=' translate3d(0px,0px,0px)'
			}
			es.webkitTransform = es.MsTransform = es.MozTransform = es.OTransform = es.transform = params.transform
		}
		if (params.time||params.time===0) {
			es.webkitTransitionDuration = es.MsTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = params.time/1000+'s'
		}
		if (params.delay||params.delay===0) {
			es.webkitTransitionDelay = es.MsTransitionDelay = es.MozTransitionDelay = es.OTransitionDelay = es.transitionDelay = params.delay/1000+'s'
		}
		if (params.origin) {
			es.webkitTransformOrigin = es.MsTransformOrigin = es.MozTransformOrigin = es.OTransformOrigin = es.transformOrigin = params.origin
		}
		if (params.ease) {
			es.webkitTransitionTimingFunction = es.MsTransitionTimingFunction = es.MozTransitionTimingFunction = es.OTransitionTimingFunction = es.transitionTimingFunction = params.ease
		}
		es.webkitTransitionProperty = es.MsTransitionTransitionProperty = es.MozTransitionTransitionProperty = es.OTransitionProperty = es.transitionProperty = 'all'
		
	})
};
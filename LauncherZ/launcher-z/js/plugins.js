// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

/* 
	iDangero.us CSS3 Transforms & Transitions Helpers 
*/
$.fn.transitionEnd=function(c){return!window.Modernizr?this:this.each(function(){var d=this,b=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(c)for(var e=function(){c.call(this);for(var a=0;a<b.length;a++)d.removeEventListener(b[a],e,!1)},a=0;a<b.length;a++)d.addEventListener(b[a],e,!1)})};

$.fn.transform=function(b){return!window.Modernizr?this:this.each(function(){var a=$(this)[0].style;if(b.transform){if(!Modernizr.csstransforms3d&&0<=b.transform.indexOf("translate3d")){var c=b.transform.split("translate3d(")[1].split(")")[0].split(","),d=b.transform.split("translate3d(")[0],e=b.transform.split("translate3d(")[1].split(")")[1];b.transform=d+" translateX("+c[0]+") translateY("+c[1]+") "+e}Modernizr.csstransforms3d&&0>b.transform.indexOf("translate")&&(b.transform+=" translate3d(0px,0px,0px)");
a.webkitTransform=a.MsTransform=a.MozTransform=a.OTransform=a.transform=b.transform}if(b.time||0===b.time)a.webkitTransitionDuration=a.MsTransitionDuration=a.MozTransitionDuration=a.OTransitionDuration=a.transitionDuration=b.time/1E3+"s";if(b.delay||0===b.delay)a.webkitTransitionDelay=a.MsTransitionDelay=a.MozTransitionDelay=a.OTransitionDelay=a.transitionDelay=b.delay/1E3+"s";b.origin&&(a.webkitTransformOrigin=a.MsTransformOrigin=a.MozTransformOrigin=a.OTransformOrigin=a.transformOrigin=b.origin);
b.ease&&(a.webkitTransitionTimingFunction=a.MsTransitionTimingFunction=a.MozTransitionTimingFunction=a.OTransitionTimingFunction=a.transitionTimingFunction=b.ease);a.webkitTransitionProperty=a.MsTransitionTransitionProperty=a.MozTransitionTransitionProperty=a.OTransitionProperty=a.transitionProperty="all"})};
(function(){
    // Header Slider
    if ($('header .swiper-container').length>0) {
        var headerSwiper = $('header .swiper-container').swiper({
            pagination: 'header .swiper-pagination',
            paginationClickable: true,
            speed:600,
            parallax:true
        })
        $('.video-link').click(function(e){
            e.preventDefault()
            headerSwiper.swipeTo( $('header .video-slide').index() )
        })
        
    }
    if ($('.swiper-container.screenshots').length>0) {
        $('.swiper-container.screenshots').swiper({
            grabCursor:true,
            loop:true,
            autoplay:3000
        })
    }
    if (Modernizr.touch) {
        $('.feat .pic').on('touchstart', function(e){
            e.stopPropagation();
            $(this).toggleClass('hovered');
        })
    }


})();

(function(){
    // Paralax header
    if (!Modernizr.touch && $('.header-bg').length>0) {
        var headerBG = $('.header-bg')
        function handleScroll(){
            var st = $(window).scrollTop()
            var transform = Modernizr.csstransforms3d ? 'translate3d(0px,'+(st/2)+'px,0px)' : 'translate(0px,'+(st/2)+'px)'
            headerBG.css({
                '-webkit-transform':transform,
                '-o-transform':transform,
                '-moz-transform':transform,
                '-ms-transform':transform,
                'transform':transform
            }) 
        }
        $(window).scroll(function(){
            handleScroll()
        })
        $(window).resize(function(){
            handleScroll()
        })
    }
    

    // Phone sliders
    var swiperLeft = $('.phone-left .swiper-container').swiper({
        onlyExternal:true
    })
    var swiperRight = $('.phone-right .swiper-container').swiper({
        grabCursor:true,
        autoplay:3000,
        onTouchMove: function(s){
            swiperLeft.stopAutoplay()
            swiperLeft.setWrapperTransition(0)
            swiperLeft.setWrapperTranslate(s.getWrapperTranslate())
        },
        onSlideChangeStart: function(s){
            swiperLeft.swipeTo(s.activeIndex)
        },
        onSlideReset: function(s){
            swiperLeft.swipeTo(s.activeIndex)
        }
    })

    // Video
    $('.open-video a').click(function(e){
        e.preventDefault()
        $('.video-layer').addClass('opened')
    })
    $('.close-video a').click(function(e){
        e.preventDefault()
        $('.video-layer').removeClass('opened')
    })

    // Scroll Link
    $('.scroll-link').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href')
        var el = $(id)
        if (id=='#') $('html, body').animate({scrollTop: 0},500);
        else if (el.length==0) return;
        else {
            $('html, body').animate({scrollTop: el.offset().top - 60},500);
        }
        
    })


})();

jQuery(document).ready(function ($) {
    //Navigation Drawer    
    var $nav = $('#mainmenu');
    var $navBtn = $('.gnav-btn');
    var $speed = 300;
    var $navW = 270;
    var state = false;
    var scrollpos;

    $('body').on('click', '.gnav-btn', function () {
        drawerFunc();
    });
    $('body').on('click', '.gnav-overlay', function () {
        drawerFunc();
    });

    function drawerFunc() {
        if ($('body').hasClass('gnav-open') && (state == true)) {
            $('body').removeClass('gnav-open');
            $nav.animate({
                right: -1 * $navW
            }, $speed, 'swing');
            $('.gnav-overlay').fadeOut($speed);
            window.scrollTo(0, scrollpos);
            state = false;
        } else {
            scrollpos = $(window).scrollTop();
            $('body').addClass('fixed').css({
                'top': -scrollpos
            });
            $('body').addClass('gnav-open');
            if (!$('.gnav-overlay').length) {
                $('header').prepend('<div class="gnav-overlay"></div>');
            }
            $nav.animate({
                right: 0
            }, $speed, 'swing');
            $('.gnav-overlay').fadeIn($speed);
            state = true;
        }
    }

    $interval = 6000,
            $fade_speed = 1000;

    $('.text-fadeOut li:first-child').addClass('active').show();
    setInterval(function () {
        var $active = $('.text-fadeOut li.active');
        var $next = $active.next('li').length ? $active.next('li') : $('.text-fadeOut li:first');
        $active.fadeOut($fade_speed).removeClass('active');
        $next.addClass('active').fadeIn($fade_speed);
    }, $interval);

    //　Smooth Scroll
    $('a[href^="#"]').click(function () {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'linear');
        return false;
    });
});
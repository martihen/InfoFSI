;
(function() {

    'use strict';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    var header = function() {
        $(window).scroll(function() {
            //console.log("scroll");
            var st = $(window).scrollTop();
            if (st > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });

    };

    // Reflect scrolling in navigation
    var navActive = function(section) {

        var $el = $('.main-nav > ul');
        $el.find('li').removeClass('active');
        $el.each(function() {
            $(this).find('[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function() {
        // console.log("navigationSection");
        var $section = $('section[data-section]');
        // console.log("navigationSection ->$section");
        $section.waypoint(function(direction) {

            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function(direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function() { return -$(this.element).height() + 155; }
        });

    };

    //Animacion
    var contentWayPoint = function() {
        var i = 0;
        // console.log("contentWayPoint");
        $('.animate-box').waypoint(function(direction) {
            // console.log("contentWayPoint ->animate-box");
            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function() {

                    $('app-root .animate-box.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };

    // Loading page
    var loaderPage = function() {
        // console.log("loading..." + Date());
        //setTimeout(function() {
        $(".loader").fadeOut("slow");
        // console.log("Fin loading..." + Date());
        //}, 500);
    };

    //VIDEO
    var video = function() {
        console.log("hola" + $('video'));
        // $('video'); //.play();
        document.getElementById('video').play();
    };
    $(function() {
        video();
        // console.log("inicio");
        header();
        navigationSection();
        contentWayPoint();
        loaderPage();
    });


}());
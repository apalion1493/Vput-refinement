jQuery(document).ready(function($) {
    $('#main.js-fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:[
            'home',
            'statistics',
            'competitors',
            'competitors-two',
            'competitors-three',
            'notifications',
            'affiliate-program',
            'payments',
            'multilanguage',
            'api',
            'scheme'
        ],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: '.footer',
        responsiveWidth: 1200,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events

        onLeave: function(home, nexthome, direction){
                 competitorsMain(nexthome, direction);
                 notificationsScript(nexthome, direction);
        },
        afterLoad: function(anchorLink, home){
            $this = $(this);

            switch(anchorLink) {
                case 'statistics':
                    if ($this.hasClass('initialized-chart')) {
                        break;
                    } else {
                        $this.addClass('initialized-chart');
                        window.initStatisticsChart();
                    }
                    break;
                case 'competitors':
                    $this.find('[href="#competitors__diagram__content"]').click();
                    break;
                case 'notifications':
                    $(window).off().on('mousewheel', function(e){
                        if(e.originalEvent.wheelDelta > 0) {
                            $('.nav-tabs > .active').prev('li').find('a').trigger('click');
                        }  else {
                            $('.nav-tabs > .active').next('li').find('a').trigger('click');
                        }
                    });
                    break;
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, home, slideAnchor, slidehome){},
        onSlideLeave: function(anchorLink, home, slidehome, direction, nextSlidehome){}
    });


    document.getElementById('turnOff').addEventListener('click', function(){
        $.fn.fullpage.setAllowScrolling(false);
    });

    document.getElementById('turnOn').addEventListener('click', function(){
        $.fn.fullpage.setAllowScrolling(true);
    });



    $('body').removeClass('unvisibility');

    $('[data-toggle="tab"]').on('click', function() {
        var $this = $(this),
            contentElementId = $this.attr('href');

        $this.closest('.section').attr('data-activated-tab', contentElementId);
    });

    AOS.init();
});


$(document).ready(function(){
    $('.notification-tab-first').click(function () {
        $(this).toggleClass('active');
        $(".notification-tab-second").removeClass('active');
        $(".notification-tab-three").removeClass('active');
    });
});

$(document).ready(function(){
    $('.notification-tab-second').click(function () {
        $(this).toggleClass('active');
        $(".notification-tab-first").removeClass('active');
        $(".notification-tab-three").removeClass('active');
    });
});

$(document).ready(function(){
    $('.notification-tab-three').click(function () {
        $(this).toggleClass('active');
        $(".notification-tab-second").removeClass('active');
        $(".notification-tab-first").removeClass('active');
    });
});

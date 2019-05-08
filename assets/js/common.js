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
            'notifications-two',
            'notifications-three',
            'affiliate-program',
            'payments',
            'multilanguage',
            'api',
            'scheme',
            'other-jobs',
            'write-ToUs'
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
        dragAndMove: true,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: false,
            disableMouse: true,
            interactiveScrollbars: true,
            deceleration: 0.1
        },
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
            var $this = $(this);

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
                    $this.find('[href="#notifications_push"]').click();
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
    $('.notification-tab-first a').click(function () {
        $(".notification-tab-first").addClass('active');
        $(".notification-tab-second").removeClass('active');
        $(".notification-tab-three").removeClass('active');
        $("#_notifications").toggleClass('first-tab').removeClass('second-tab').removeClass('three-tab');
    });
});

$(document).ready(function(){
    $('.notification-tab-second a').click(function () {
        $(".notification-tab-second").addClass('active');
        $(".notification-tab-first").removeClass('active');
        $(".notification-tab-three").removeClass('active');
        $("#_notifications").toggleClass('second-tab').removeClass('first-tab').removeClass('three-tab');
    });
});

$(document).ready(function(){
    $('.notification-tab-three a').click(function () {
        $(".notification-tab-three").addClass('active');
        $(".notification-tab-second").removeClass('active');
        $(".notification-tab-first").removeClass('active');
        $("#_notifications").toggleClass('three-tab').removeClass('second-tab').removeClass('first-tab');
    });
});

$(document).ready(function(){
    $('.notification-tab-first').click(function () {
        $(".notifications-section-container").addClass('first-slide').removeClass('second-slide').removeClass('three-slide');
    });
});

$(document).ready(function(){
    $('.notification-tab-second').click(function () {
        $(".notifications-section-container").removeClass('first-slide').addClass('second-slide').removeClass('three-slide');
    });
});

$(document).ready(function(){
    $('.notification-tab-three').click(function () {
        $(".notifications-section-container").removeClass('first-slide').removeClass('second-slide').addClass('three-slide');
    });
});

$(function() {
    //  changes mouse cursor when highlighting loawer right of box
    $(".write-ToUs__form-control-comment").mousemove(function(e) {
        var myPos = $(this).offset();
        myPos.bottom = $(this).offset().top + $(this).outerHeight();
        myPos.right = $(this).offset().left + $(this).outerWidth();

        if (myPos.bottom > e.pageY && e.pageY > myPos.bottom - 16 && myPos.right > e.pageX && e.pageX > myPos.right - 16) {
            $(this).css({ cursor: "nw-resize" });
        }
        else {
            $(this).css({ cursor: "" });
        }
    })
    //  the following simple make the textbox "Auto-Expand" as it is typed in
        .keyup(function(e) {
            //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
            if (e.which === 8 || e.which === 46) {
                $(this).height(parseFloat($(this).css("min-height")) !== 0 ? parseFloat($(this).css("min-height")) : parseFloat($(this).css("font-size")));
            }
            //  the following will help the text expand as typing takes place
            while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
                $(this).height($(this).height()+1);
            }
        });
});
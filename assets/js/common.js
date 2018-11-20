jQuery(document).ready(function($) {
    $('#main.js-fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:[
            'home',
            'statistics',
            'competitors',
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
                    console.log(11);
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

    $('[data-toggle="tab"]').on('click', function() {
       var $this = $(this),
           contentElementId = $this.attr('href');

       $this.closest('.section').attr('data-activated-tab', contentElementId);
    });

    AOS.init();
});


window.onload = function(){

    var playBtn = document.getElementById("playBtn"),
        pauseBtn = document.getElementById("pauseBtn"),
        restartBtn = document.getElementById("restartBtn");

    TweenMax.to("#vput", 1, {opacity: 1, delay: 1});
    TweenMax.to("#vput-label", 1, {opacity: 1, delay: 1});
    TweenMax.to("#line_4-left", 1, {opacity: 1, delay: 1.5});
    TweenMax.to("#partner", 1, {opacity: 1, delay: 2});
    TweenMax.to("#partner-text", 1, {opacity: 1, delay: 2});
    TweenMax.to("#Line2-top", 1, {opacity: 1, delay: 2.5});
    TweenMax.to("#parter-links", 1, {opacity: 1, delay: 2.5});
    TweenMax.to("#websites", 1, {opacity: 1, delay: 3});
    TweenMax.to("#Oval7", 1, {opacity: 1, delay: 3});
    TweenMax.to("#Line2-center", 1, {opacity: 1, delay: 3.5});
    TweenMax.to("#blogs", 1, {opacity: 1, delay: 4});
    TweenMax.to("#Oval7Copy6", 1, {opacity: 1, delay: 4});
    TweenMax.to("#Line2-bottom", 1, {opacity: 1, delay: 4.5});
    TweenMax.to("#socials", 1, {opacity: 1, delay: 5});
    TweenMax.to("#Oval7Copy", 1, {opacity: 1, delay: 5});
    TweenMax.to("#Line3", 1, {opacity: 1, delay: 6});
    TweenMax.to("#Line2Copy", 1, {opacity: 1, delay: 6.5});
    TweenMax.to("#referal", 1, {opacity: 1, delay: 7});
    TweenMax.to("#referals", 1, {opacity: 1, delay: 7});
    TweenMax.to("#line_4-right", 1, {opacity: 1, delay: 7.5});
    TweenMax.to("#house-container", 0.5, {opacity: 1, delay: 8, x: "283px"});
    TweenMax.to("#house-container", 0.5, {opacity: 1, delay: 8.5, y: "-145px"});
    TweenMax.to("#house-container", 0.5, {opacity: 0, delay: 9, y: "-145px"});
    TweenMax.to("#Line3Copy-left", 1, {opacity: 1, delay: 9});
    TweenMax.to("#Line3Copy-right", 1, {opacity: 1, delay: 9});
    TweenMax.fromTo("#euro", 0.5, {opacity: 0, delay: 10, x: "420px", y: "250px"}, {opacity: 1, delay: 10, x: "425px", y: "135px"});
    TweenMax.to("#euro", 0.5, {opacity: 1, delay: 10.5, x: "80px", y: "135px"});
    TweenMax.to("#euro", 0.5, {opacity: 0, delay: 11, x: "80px", y: "105px"});
    TweenMax.fromTo("#euro", 0.5, {opacity: 0, delay: 11, x: "80px", y: "105px"}, {opacity: 0, delay: 11.1, x: "0px", y: "0px"});
    TweenMax.to("#euro", 0.5, {opacity: 1, delay: 11.5});
    TweenMax.fromTo("#percent", 0.5, {opacity: 0, delay: 10, x: "-420px", y: "250px"}, {opacity: 1, delay: 10, x: "-425px", y: "135px"});
    TweenMax.to("#percent", 0.5, {opacity: 1, delay: 10.5, x: "-80px", y: "135px"});
    TweenMax.to("#percent", 0.5, {opacity: 0, delay: 11, x: "-80px", y: "105px"});
    TweenMax.fromTo("#percent", 0.5, {opacity: 0, delay: 11, x: "-80px", y: "105px"}, {opacity: 0, delay: 11.1, x: "0px", y: "0px"});
    TweenMax.to("#percent", 0.5, {opacity: 1, delay: 11.5});

    playBtn.onclick = function() {
        tween.play();
    };

    pauseBtn.onclick = function() {
        tween.pause();
    };

    restartBtn.onclick = function() {
        tween.restart();
    };
};



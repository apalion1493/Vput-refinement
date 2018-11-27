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

var restart = document.querySelector("#restart");
var pauseBtn = document.getElementById("play"),
    tl = new TimelineMax({paused:true});

tl.to("#vput", 0.8, {opacity: 1}, 'icon1')
  .to("#vput-label", 0.8, {opacity: 1}, 'icon1')
  .to("#line_4-left", 1, {opacity: 1})
  .to("#partner", 0.8, {opacity: 1}, 'icon2')
  .to("#partner-text", 0.8, {opacity: 1}, 'icon2')
  .to("#Line2-top", 0.5, {opacity: 1}, 'icon3')
  .to("#parter-links", 0.8, {opacity: 1}, 'icon3')
  .to("#websites", 0.8, {opacity: 1}, 'icon4')
  .to("#Oval7", 0.8, {opacity: 1}, 'icon4')
  .to("#Line2-center", 0.5, {opacity: 1})
  .to("#blogs", 0.8, {opacity: 1}, 'icon5')
  .to("#Oval7Copy6", 0.8, {opacity: 1}, 'icon5')
  .to("#Line2-bottom", 0.5, {opacity: 1})
  .to("#socials", 0.8, {opacity: 1}, 'icon6')
  .to("#Oval7Copy", 0.8, {opacity: 1}, 'icon6')
  .to("#Line3", 0.8, {opacity: 1})
  .to("#Line2Copy", 0.8, {opacity: 1})
  .to("#referal", 0.8, {opacity: 1}, 'icon7')
  .to("#referals", 0.8, {opacity: 1}, 'icon7')
  .to("#line_4-right", 0.8, {opacity: 1})
  .to("#house-container", 0.5, {opacity: 1, x: "283px"})
  .to("#house-container", 0.5, {opacity: 1, y: "-145px"})
  .to("#house-container", 0.5, {opacity: 0, y: "-145px"} , 'icon8')
  .to("#Line3Copy-left", 1, {opacity: 1} , 'icon8')
  .to("#Line3Copy-right", 1, {opacity: 1} , 'icon8')
  .fromTo("#euro", 0.5, {opacity: 0,  x: "420px", y: "250px"}, {opacity: 1,  x: "425px", y: "135px"}, 'icon9')
  .to("#euro", 0.5, {opacity: 1,  x: "80px", y: "135px"}, 'icon10')
  .to("#euro", 0.5, {opacity: 0,  x: "80px", y: "105px"}, 'icon11')
  .fromTo("#euro", 0.5, {opacity: 0,  x: "80px", y: "105px"}, {opacity: 0,  x: "0px", y: "0px"} , 'icon12')
  .to("#euro", 0.5, {opacity: 1}, 'icon13')
  .fromTo("#percent", 0.5, {opacity: 0,  x: "-420px", y: "250px"}, {opacity: 1,  x: "-425px", y: "135px"}, 'icon9')
  .to("#percent", 0.5, {opacity: 1,  x: "-80px", y: "135px"}, 'icon10')
  .to("#percent", 0.5, {opacity: 0,  x: "-80px", y: "105px"}, 'icon11')
  .fromTo("#percent", 0.5, {opacity: 0,  x: "-80px", y: "105px"}, {opacity: 0,  x: "0px", y: "0px"} , 'icon12')
  .to("#percent", 0.5, {opacity: 1}, 'icon13')
  .fromTo(".number-steps__first", 0.5, {opacity: 1}, {opacity: 0}, 3)

  .fromTo(".number-steps__second", 0.5, {opacity: 0}, {opacity: 1}, 3.5)
  .to(".number-steps__second", 0.5, {opacity: 0}, 7)
  .fromTo(".number-steps__three", 0.5, {opacity: 0}, {opacity: 1}, 7.5)
  .to(".number-steps__three", 0.5, {opacity: 0}, 11)
  .fromTo(".number-steps__four", 0.5, {opacity: 0}, {opacity: 1}, 11.5)

  .fromTo(".progress-bar__sheme", 19, {width: "0%"}, {width: "100%"}, 'icon1');

tl.call(function() {
    $('#restart').addClass("active-opacity");
}, null, null, 15);

tl.call(function() {
    $('#play').removeClass("active-opacity");
}, null, null, 15);

pauseBtn.onclick = function() {
    tl.paused(!tl.paused());
    pauseBtn.innerHTML = tl.paused() ? "Play" : "Pause";
};

restart.onclick = function() {
    tl.restart();
};

$(function() {
    $('#restart').click(function() {
        $(this).siblings("#restart").toggle();
        $(this).toggleClass('active-opacity');
    });
});

$(document).ready(function() {
    $("#restart").click(function() {
        $('#play').addClass("active-opacity");
    });
});



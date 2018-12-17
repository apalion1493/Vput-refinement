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

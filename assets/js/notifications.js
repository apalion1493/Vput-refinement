function notificationsScript(nexthome, direction) {
        if (nexthome === 6) {
            $("#turnOff").click();
            $(window).off().on('mousewheel', function(e){

                if (($("#_notifications").hasClass("first-tab")) && (e.originalEvent.wheelDelta > 0))  {
                    $("#turnOn").click();
                } else if(($("#_notifications").hasClass("three-tab")) && (e.originalEvent.wheelDelta < 0)) {
                    $('.nav-tabs > .active').next('li').find('a').trigger('click');
                    $("#turnOn").click();
                } else if (($("#_notifications").hasClass("first-tab")) && (e.originalEvent.wheelDelta < 0)) {
                    $("#turnOff").click();
                    $('.nav-tabs > .active').next('li').find('a').trigger('click');
                } else if(($("#_notifications").hasClass("second-tab")) && (e.originalEvent.wheelDelta < 0)) {
                    $('.nav-tabs > .active').next('li').find('a').trigger('click');
                } else if(($("#_notifications").hasClass("second-tab")) && (e.originalEvent.wheelDelta > 0)) {
                    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
                } else if(($("#_notifications").hasClass("three-tab")) && (e.originalEvent.wheelDelta > 0)) {
                    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
                }
            });
        }

        if ((nexthome >= 7) || (nexthome <= 5)) {
            $(document).ready(function(){
                $(".notification-tab-first").removeClass('active');
                $(".notification-tab-second").removeClass('active');
                $(".notification-tab-three").removeClass('active');
                $("#_notifications .nav-link").removeClass('active').removeClass('show');
                $("#_notifications .tab-pane").removeClass('show');
                $("#_notifications").removeClass('three-tab').removeClass('second-tab').removeClass('first-tab');
                $("#turnOn").click();
            });
        }

        if (nexthome === 7 && direction === 'down') {
            $("#turnOn").click();
        }
}



// document.getElementById('turnOff').addEventListener('click', function(){
//     fullpage_api.setAllowScrolling(false);
// });
//
//
// document.getElementById('turnOn').addEventListener('click', function(){
//     fullpage_api.setAllowScrolling(true);
// });


// if ( direction === 'down') {
//     alert("asdsfsdfa");
// } else if (direction === 'up') {
//     $(".notification-tab-second").click();
//     document.querySelector('#_notifications').onwheel = e => e.stopPropagation();
//     alert("1234566");
// }


// var result = document.getElementById('result');
// var scrollableElement = document.getElementById('scrollableElement');
// scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);
//
//
// function findScrollDirectionOtherBrowsers(event){
//     var delta;
//     if (event.wheelDelta){
//         delta = event.wheelDelta;
//     }else{
//         delta = -1 *event.deltaY;
//     }
//     if (delta < 0){
//         result.innerHTML = "DOWN";
//     }else if (delta > 0){
//         result.innerHTML = "UP";
//     }
// }



// function myFunction() {
//
// }
//
// myFunction();
// if ($("#_notifications").hasClass("active")) {
//     $(".notifications--section").addClass("red");
// }
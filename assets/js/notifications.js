function notificationsScript(nexthome, direction) {
    if ( nexthome >= 5 && nexthome <=7 ) {
        if ( nexthome === 5 ) {
            $( ".notification-tab-second a" ).click();
        }

        if ( nexthome === 6 && direction === 'down' ) {
            $("#turnOff").click();
            $( ".notification-tab-first a" ).click();
        }

        if ( nexthome === 6 && direction === 'up' ) {
            $( ".notification-tab-three a" ).click();
            $("#turnOff").click();
        }

        if ( nexthome === 7 ) {
            $( ".notification-tab-second a" ).click();
        }
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
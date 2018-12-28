$('#_competitors>.container').append( $('.competitors__main-container>.competitors__main') );

function googleServices(nexthome, direction) {
    if ( nexthome >= 2 && nexthome <=6 ) {}
}


function notificationsScript(nexthome, direction) {
    if (nexthome === 6) {

    }

    if ((nexthome >= 7) || (nexthome <= 5)) {
        $(document).ready(function(){
            $(".notification-tab-first").removeClass('active');
            $(".notification-tab-second").removeClass('active');
            $(".notification-tab-three").removeClass('active');
            $("#_notifications .nav-link").removeClass('active').removeClass('show');
            $("#_notifications .tab-pane").removeClass('show');
            $("#_notifications").removeClass('three-tab').removeClass('second-tab').removeClass('first-tab');
        });
    }

    if (nexthome === 7 && direction === 'down') {
        $("#turnOn").click();
    }
}

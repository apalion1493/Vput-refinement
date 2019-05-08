function notificationsScript(nexthome, direction) {
    if ( nexthome >= 5 && nexthome <=9 ) {
        if ( nexthome === 6 && direction === 'down' ) {
            $('.notifications-section').addClass('active').animate({ top: '10%' }, 50, function () {
                $(this).addClass('active');
            });
        }

        if ( nexthome === 6  ) {
            $(".notification-tab-first .nav-link").click();
            $(".notifications-section-container").addClass('first-slide').removeClass('three-slide').removeClass('second-slide');
        }

        if ( nexthome === 5 && direction === 'up' ) {
            $('.notifications-section').animate({top: '150%'}, 50, function () {
                $(this).removeClass('active');
            });
            $(".notifications-section-container").removeClass('three-slide').removeClass('second-slide').removeClass('first-slide');

        }

        if ( nexthome === 7 ) {
            $(".notification-tab-second .nav-link").click();
            $(".notifications-section-container").addClass('second-slide').removeClass('three-slide').removeClass('first-slide');
        }

        if ( nexthome === 8 ) {
            $(".notification-tab-three .nav-link").click();
            $(".notifications-section-container").addClass('three-slide').removeClass('second-slide').removeClass('first-slide');
        }

        if ( nexthome === 8 && direction === 'up' ) {
            $('.notifications-section').animate({ top: '13%' }, 50, function () {
                $(this).addClass('active');
            });
        }

        if ( nexthome === 9 && direction === 'down' ) {
            $('.notifications-section').animate({ top: '-150%' }, 50, function () {
                $(this).removeClass('active');
            });
            $(".notifications-section-container").removeClass('three-slide').removeClass('second-slide').removeClass('first-slide');
            $(".nav-link").removeClass('active');
            setTimeout(function () {
                $(".nav-link-second").click();
            }, 500);
        }
    }
}
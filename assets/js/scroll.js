function competitorsMain(nexthome, direction) {
    if ( nexthome >= 2 && nexthome <=6 ) {
        if ( nexthome === 3 && direction === 'down' ) {
            $('.competitors__main').animate({ top: '13%' }, 50, function () {
                $(this).addClass('active');
            });
            $(".nav-link-first").click().addClass('active');
        }

        if ( nexthome === 3  ) {
            $(".nav-link-second").removeClass('active');
            $(".nav-link-first").click().addClass('active');
            $(".nav-link-three").removeClass('active');
        }

        if ( nexthome === 2 && direction === 'up' ) {
            $('.competitors__main').animate({top: '150%'}, 50, function () {
                $(this).removeClass('active');
            });
            $(".nav-link").removeClass('active');
            setTimeout(function () {
                $(".nav-link-second").click();
            }, 500);

        }

        if ( nexthome === 4 ) {
            $(".nav-link-second").click().addClass('active');
            $(".nav-link-first").removeClass('active');
            $(".nav-link-three").removeClass('active');
        }

        if ( nexthome === 5 ) {
            $(".nav-link-first").removeClass('active');
            $(".nav-link-second").removeClass('active');
            $(".nav-link-three").click().addClass('active');
        }

        if ( nexthome === 5 && direction === 'up' ) {
            $('.competitors__main').animate({ top: '13%' }, 50, function () {
                $(this).addClass('active');
            });
            $(".nav-link-three").click().addClass('active');

        }

        if ( nexthome === 6 && direction === 'down' ) {
            $('.competitors__main').animate({ top: '-150%' }, 50, function () {
                $(this).removeClass('active');
            });
            $(".nav-link").removeClass('active');
            setTimeout(function () {
                $(".nav-link-second").click();
            }, 500);
        }
    }
}

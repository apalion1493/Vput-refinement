function notificationsScript(nexthome, direction) {
        if (nexthome === 6) {
            $("#turnOff").click();

            //Firefox
            $(window).off().on('wheel', function(e){

                if (($("#_notifications").hasClass("first-tab")) && (e.originalEvent.deltaY < 0))  {
                    $("#turnOn").click();
                } else if(($("#_notifications").hasClass("three-tab")) && (e.originalEvent.deltaY > 0)) {
                    $('.nav-tabs > .active').next('li').find('a').trigger('click');
                    $("#turnOn").click();
                } else if (($("#_notifications").hasClass("first-tab")) && (e.originalEvent.deltaY > 0)) {
                    $("#turnOff").click();
                    $('.nav-tabs > .active').next('li').find('a').trigger('click');
                } else if(($("#_notifications").hasClass("second-tab")) && (e.originalEvent.deltaY > 0)) {
                    window.clearTimeout(Timeout2);
                    function Timeout2(){
                        $('.nav-tabs > .active').next('li').find('a').trigger('click');
                    }
                    setTimeout(Timeout2, 500);
                } else if(($("#_notifications").hasClass("second-tab")) && (e.originalEvent.deltaY < 0)) {
                    window.clearTimeout(Timeout3);
                    function Timeout3(){
                        $('.nav-tabs > .active').prev('li').find('a').trigger('click');
                    }
                    setTimeout(Timeout3, 500);
                } else if(($("#_notifications").hasClass("three-tab")) && (e.originalEvent.deltaY < 0)) {
                    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
                }
            });

            //IE, Opera, Safari
            // $(window).off().on('mousewheel', function(e){
            //
            //     if (($("#_notifications").hasClass("first-tab")) && (e.originalEvent.wheelDelta > 0))  {
            //         $("#turnOn").click();
            //     } else if(($("#_notifications").hasClass("three-tab")) && (e.originalEvent.wheelDelta < 0)) {
            //         $('.nav-tabs > .active').next('li').find('a').trigger('click');
            //         $("#turnOn").click();
            //     } else if (($("#_notifications").hasClass("first-tab")) && (e.originalEvent.wheelDelta < 0)) {
            //         $("#turnOff").click();
            //         $('.nav-tabs > .active').next('li').find('a').trigger('click');
            //     } else if(($("#_notifications").hasClass("second-tab")) && (e.originalEvent.wheelDelta < 0)) {
            //         window.clearTimeout(Timeout2);
            //         function Timeout2(){
            //             $('.nav-tabs > .active').next('li').find('a').trigger('click');
            //         }
            //         setTimeout(Timeout2, 500);
            //     } else if(($("#_notifications").hasClass("second-tab")) && (e.originalEvent.wheelDelta > 0)) {
            //         window.clearTimeout(Timeout3);
            //         function Timeout3(){
            //             $('.nav-tabs > .active').prev('li').find('a').trigger('click');
            //         }
            //         setTimeout(Timeout3, 500);
            //     } else if(($("#_notifications").hasClass("three-tab")) && (e.originalEvent.wheelDelta > 0)) {
            //         $('.nav-tabs > .active').prev('li').find('a').trigger('click');
            //     }
            // });
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
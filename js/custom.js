$(document).ready(function () {
        // AOS script
        AOS.init();

        $('.mob-menu .icon-bars').on('click', function () {
                $('.nav-bar').toggleClass('open');
                $('.mob-menu').toggleClass('open');
            })

            var goTopBtn = $(".go-to-top-btn");
            var scrollThreshold = 100; 
        

        $(window).scroll(function () {
            var scrollPosition = $(window).scrollTop();

        
            if (scrollPosition > scrollThreshold) {
                goTopBtn.addClass("show");
            } else {
                goTopBtn.removeClass("show");
            }
        });

       
        $('.go-to-top-btn').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
            
})


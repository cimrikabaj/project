$(document).ready(function () {
        // AOS script
        AOS.init();

        $('.mob-menu .icon-bars').on('click', function () {
                $('.nav-bar').toggleClass('open');
                $('.mob-menu').toggleClass('open');
            })
})


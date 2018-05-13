'use strict';
$(function () {
    $('#wyslij').on('click', function (event) {
        event.preventDefault();
        alert('Dziękujemy za wysłanie formularza!');
    });
    $(window).on('scroll', function () {
        var wysokoscOkna = window.innerHeight;
        var scroll = document.documentElement.scrollTop;
        if (scroll >= wysokoscOkna - 50) {
            $('#main-nav').removeClass('navbarunscrolled')
            $('#main-nav').addClass('navbarscrolled')
        } else {
            $('#main-nav').removeClass('navbarscrolled')
            $('#main-nav').addClass('navbarunscrolled')
        };
    });
    $('a[href*="#"]:not([href="#"])').click(function (e) {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500)
    });
});
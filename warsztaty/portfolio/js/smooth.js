$(function(){ 
$('a[href*="#"]:not([href="#"])').click(function (e) {
    'use strict';
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500)
    });
});
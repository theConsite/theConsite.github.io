'use strict';
$(function () {
    var slideShow = $('#allSliders');
    var slideCount = $('.sliders').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    slideShow.css('width', 100 * slideCount + '%');

    slideShow.find('.sliders').each(function (i) {
        $(this).css({
            width: slideWidth + '%',
            'margin-left': slideWidth * i + '%',
        });
    });

    $('.fa-arrow-left').click(function () {
        slide(slideIndex - 1);
    });
    $('.fa-arrow-right').click(function () {
        slide(slideIndex + 1);
    });

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        var slideCaption = $('.text');
        var marginLeft = newSlideIndex * -100;
        slideCaption.hide();
        slideShow.animate({
            'margin-left': marginLeft + '%'
        }, 800, function () {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
    }
});
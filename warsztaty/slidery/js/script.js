'use strict';
$(function(){
    var slideShow= $('#allSliders');
    var slideCount= $('.sliders').length;
    var slideWidth= 100/slideCount;
    var slideIndex = 0;
    
  slideShow.css('width', 100 * slideCount + '%');
    
    slideShow.find('.sliders').each(function(i){
        $(this).css({
            width: slideWidth + '%',
            'margin-left':slideWidth * i + '%',
        });
    });
    
    
    
});
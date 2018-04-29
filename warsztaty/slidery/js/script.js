'use strict';
$(function(){
    function slide(){
    $('.fa-arrow-right').click(function(){
        $('#allSliders').animate({right:'100vw'}, 2000, slide());
    });
    $('.fa-arrow-left').click(function(){
        $('#allSliders').animate({left:'100vw'}, 2000, slide());
    });
    };
});
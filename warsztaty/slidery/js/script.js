'use strict';
$(function(){
    
    
    $(".fa-arrow-right").click(function(){
        $('#allSliders').animate({left:'-100vw'}, 2000)
    });
    
      $(".fa-arrow-left").click(function(){
        $('#allSliders').animate({left:'100vw'}, 2000)
    });
    
});
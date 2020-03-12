$(function(){
  
  $('.bbbtn').click(function(){
    
    let $bbtn = $('.bbbtn').index($(this));
    
    $('.pho').eq($bbtn).fadeToggle(500);
    console.log($bbtn);
    
  });  
  
});

var $card = $('.s-card');
var lastCard = $(".card-list .card").length - 1;

$('.top-slider1').click(function(){
  $('.top-slider2').removeClass("top-slider-active");
  $('.top-slider3').removeClass("top-slider-active");
  $('.top-slider1').addClass("top-slider-active");
});

$('.top-slider2').one("click",function(){
  var prependList = function() {
    if( $('.s-card').hasClass('activeNow') ) {
      var $slicedCard = $('.s-card').slice(lastCard).removeClass('transformThis activeNow');
      $('.card-list').prepend($slicedCard);
    }
  }
  $('.card-stack-itemss').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
  setTimeout(function(){prependList();}, 150);});
$('.top-slider2').click(function(){
  $('.top-slider1').removeClass("top-slider-active");
  $('.top-slider3').removeClass("top-slider-active");
  $('.top-slider2').addClass("top-slider-active");
});

$('.top-slider3').one("click",function(){
var prependList = function() {
  if( $('.s-card').hasClass('activeNow') ) {
    var $slicedCard = $('.s-card').slice(lastCard).removeClass('transformThis activeNow');
    $('.card-list').prepend($slicedCard);
  }
}
$('.card-stack-itemss').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
setTimeout(function(){prependList(); prependList();}, 150);});
$('.top-slider3').click(function(){
  $('.top-slider1').removeClass("top-slider-active");
  $('.top-slider2').removeClass("top-slider-active");
  $('.top-slider3').addClass("top-slider-active");
});
$('.next').click(function(){ 
  var prependList = function() {
    if( $('.s-card').hasClass('activeNow') ) {
      var $slicedCard = $('.s-card').slice(lastCard).removeClass('transformThis activeNow');
      $('.card-list').prepend($slicedCard);
    }
  }
  $('.card-stack-itemss').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
  setTimeout(function(){prependList(); }, 150);
});

$('.prev').click(function() {
  var appendToList = function() {
    if( $('.s-card').hasClass('activeNow') ) {
      var $slicedCard = $('.s-card').slice(0, 1).addClass('transformPrev');
      $('.card-list').append($slicedCard);
    }}
  
  $('.card-stack-itemss').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
  setTimeout(function(){appendToList();}, 150);
});
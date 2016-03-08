$(function(){

  // 瀑布流布局
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry();
  });

  $('.brief').on('click', function(event) {
    event.preventDefault();
    var $allItem = $('.brief').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    $('.grid').masonry('layout');
  });

  $('.mask').on('click', function(event) {
    event.preventDefault();
    $(this).addClass('hide');
  });

})
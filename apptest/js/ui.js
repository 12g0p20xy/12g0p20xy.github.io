$(function(){

  // 瀑布流布局
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry();
  });

  $('.brief').on('click', function(event) {
    event.preventDefault();
    var $allItem = $('.brief').removeClass('open');
    $(this).addClass('open');
    $('.grid').masonry();
  });

})
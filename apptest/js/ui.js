$(function(){

  // 瀑布流布局
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry();
  });

  $('.mask').on('click', function(e) {
    if (!$(e.target).closest('.register').length) {
      $('.mask').addClass('hide').removeClass('show');
    }
  });

  $('.btn-3').on('click', function(event) {
    event.preventDefault();
    $('.mask').addClass('show').removeClass('hide');
  });

  $('.delete').on('click', function() {
    $(this).parent().animate({opacity: 0}, 'fast',
      function(){
        $(this).remove();
      });
  });

  $('.vote-btn').on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass('voted')) {
      $(this).val('已投票').addClass('voted');
    }
  });

  // //initialize swiper when document ready  
  // var swiper = new Swiper ('.swiper-container', {
  //   pagination: '.swiper-pagination',
  //   paginationClickable: true,
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev'
  // });

  // $('.swiper-pagination-bullet').eq(1).trigger('click');

});
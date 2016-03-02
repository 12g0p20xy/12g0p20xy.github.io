$(function(){



  $('.brief').on('click', function(event) {
    event.preventDefault();
    var $allItem = $('.brief').removeClass('open');
    $(this).addClass('open');
    var $grid = $('.grid').imagesLoaded( function() {
      $grid.masonry();
    });
  });

	// 瀑布流布局
	var $grid = $('.grid').imagesLoaded( function() {
	  $grid.masonry();
	});

})
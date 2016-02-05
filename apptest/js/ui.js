$(function(){

	$('.delete').on('click', function() {
		$(this).parent().animate({opacity: 0}, 'fast',
			function(){
				$(this).remove();
			});
	});

  $('.grid-item .btn').on('click', function() {
    $(this).css('background', '#BFADA0').val('已投票');
  });


	// 瀑布流布局
	var $grid = $('.grid').imagesLoaded( function() {
	  $grid.masonry();
	});

    $grid.infinitescroll({
        navSelector: "#next",     // 页面分页元素，成功后会被隐藏
        nextSelector: "#next a",    // 翻页的链接
        itemSelector: ".grid-item",   // ajax回来之后，每一项的selecter
        animate: true,          // 加载完毕是否采用动态效果
        extraScrollPx: 100,       //向下滚动的像素，必须开启动态效果
        bufferPx: 3,          // 提示语展现的时长，数字越大，展现时间越短
        loading:{
          msgText: '正在加载',
          finishedMsg: '已经是最后一页!',
        },
    }, function(newElements, opts){
       var page = opts.state.currPage;
       console.log(page);

       var $newElems = $(newElements);
       $grid.masonry('appended', $newElems); 
       // 新加载的内容插入grid并重新排列
  });

})
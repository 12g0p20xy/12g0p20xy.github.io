// 搜索框
$(function(){
	$('.search-icon').click(function() {
		$('.searchbar>input').stop(true, false).animate({width: 180, opacity: 1}, 300).focus();
	});
	$('.searchbar>input').blur(function(){
		$(this).stop(true, false).animate({width: 0, opacity: 0}, 300);
	});
});

// 头图微移动
$(function(){
	$(document).scroll(function(){
		var distance = $(document).scrollTop();
		$('.jumbotron').css('backgroundPosition', 0+'px '+distance/10+'px'); // 注意px后面有个空格
		$('.jumbotron').find('h1, h2, .btn').css({position: 'relative', top: -distance/10, opacity: (1-distance/500)});
		console.log(distance);
	});
});
$(function(){

	// 视差移动
	var viewWidth = $(window).innerWidth();
	if (viewWidth > 768) {
		$('body').on('mousemove', function(e){
			var xpos = e.pageX,
				ypos = e.pageY;
			$('.iphone').css({
				marginTop: (30 - ypos/80) + 'px',
				left: -xpos/80
			});
			$('.download').css({
				marginTop: (120 - ypos/200) + 'px',
				left: -xpos/200
			});
			$('.fluid').css({
				backgroundPositionX: 50 + xpos/100 + '%',
				backgroundPositionY: 25 - ypos/100 + '%'
			});
		})
	};

	// tab页
	$('nav li').click(function(e) {
		e.preventDefault();
		// 位置初始化
		$('.hide h3').css({top: '110px', opacity: 0})
			         .siblings('h4').css({top: '180px', opacity: 0});
		$('.hide img').css({top: '60px', opacity: 0});
		// tab切换
		var page = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.intro section').eq(page).addClass('show').removeClass('hide')
									.siblings().removeClass('show').addClass('hide');
		// 动画
		$('.show img').animate({top: 0, opacity: 1}, 500);
		$('.show h3').delay(200).animate({top: 60, opacity: 1}, 500)
					 .siblings('h4').delay(100).animate({top: 130, opacity: 1}, 600);
	});

})
$(function(){

	var $header = $('header'),
		$main = $('main'),
		$userName = $('.user-name'),
		$intro = $('.intro'),
		$bg = $('.user-bg');
	var myHammer = new Hammer($header.get(0)); // 转换成原生DOM
	myHammer.get("pan").set({
	    // 默认是禁用纵向移动的，用下面这行代码开启
	    direction: Hammer.DIRECTION_ALL
	});
 	
 	// 向下滑动动画
	myHammer.on('pandown', function(e){
		if (!$main.hasClass('spread')) {
			mainPos = e.deltaY; // 手指位移的距离
			$main.css({
				'-webkit-transform': 'translate3d(0,' + mainPos + 'px, 0)',
				'transform': 'translate3d(0,' + mainPos + 'px, 0)'
			});
			$userName.css({
				opacity: 1 - e.deltaY/400,
				fontSize: 16 + e.deltaY/10,
				'-webkit-transform': 'translate3d(' + mainPos/200 + 'px, 0, 0)',
				'transform': 'translate3d(' + mainPos/200 + 'px, 0, 0)'
			});
			$bg.css({
				backgroundSize: 100 + e.deltaY/10 + '%'
			});
		}
	});

	// 向上滑动动画
	myHammer.on('panup', function(e) {
		mainPos = e.deltaY;
		if ($main.hasClass('spread')) {
			$main.removeClass('spread');
			$intro.removeClass('in');
		}
	});

	// 每次手指触摸时重置
	$(document).on('touchstart', $header, function() {
		if (!$main.hasClass('spread')) {
			$main.removeClass('go-back').css({
				'-webkit-transform': 'translate3d(0, 0, 0)',
				'transform': 'translate3d(0, 0, 0)',
			});
			$userName.removeClass('go-back').css({
				fontSize: 16,
				opacity: 1
			});
			$bg.removeClass('go-back').css({
				backgroundSize: 100 + '%'
			});
		}
	});

	// 每次手指离开时判断
	$(document).on('touchend', $header, function() {
		console.log(mainPos);
		if (mainPos > 260) {
			$main.addClass('spread');
			$intro.addClass('in');
		}
		else{
			$main.addClass('go-back');
			$userName.addClass('go-back');
			$bg.addClass('go-back');
		}
	});

});
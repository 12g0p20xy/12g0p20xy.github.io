$(function(){

	var $header = $('header'),
		$main = $('main');
	var myHammer = new Hammer($header.get(0)); //转换成原生DOM
	myHammer.get("pan").set({
	    // 默认是禁用纵向移动的，用下面这行代码开启
	    direction: Hammer.DIRECTION_ALL
	});

	$(document).on('touchstart', $header, function() {
		$main.removeClass('go-back').css('top', 200);
	});
	$(document).on('touchend', $header, function() {
		console.log(mainTop);
		if (mainTop > 360) {
			$main.addClass('spread');
		}
		else{
			$main.addClass('go-back');
		}
	});
	myHammer.on('pan', function(e){
		$main.css('top', e.deltaY/2 + 200);
		mainTop = parseInt($main.css('top'));
	});

});
$(function(){

	// $(window).scroll(function() {
	// 	var scroll = $(window).scrollTop();
	// 	$(".user-bg img").css({
	// 		width: (100 + scroll/5)  + "%",
	// 		top: -(scroll/10)  + "%",
	// 		//Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
	// 		"-webkit-filter": "blur(" + (scroll/200) + "px)",
	// 		filter: "blur(" + (scroll/200) + "px)"
	// 	});
	// });

	// $('header').on('touchmove', function(e) {
	// 	e.preventDefault();
	// 	var $bg = $(this).find('.user-bg'),
	// 	    touchY = e.touches[0].clientY;
	// 	console.log(touchY);
	// });


	var $header = $('header');
	var myHammer = new Hammer($header.get(0)); //转换成原生DOM
	myHammer.get("pan").set({
	    // 默认是禁用纵向移动的，用下面这行代码开启
	    direction: Hammer.DIRECTION_ALL
	});
	myHammer.on('pan', function(e) {
		console.log(e.deltaY);
		var headerH = $header.height();
		$header.height(headerH + e.deltaY/100);
	});

});
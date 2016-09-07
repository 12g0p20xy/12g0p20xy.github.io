$(function(){

	var login = false;

	// 投票按钮和弹出框
	var $showBtn = $('.vote-btn'),
		$layer = $('.layer'),
		$closeBtn = $layer.find('.close-btn');

	$showBtn.on('touchstart', function() {
		if (login && !$(this).hasClass('voted')) {
			// alert('每天只能投3票');
			$(this).addClass('voted').html('已投票' + '<i>+1</i>');
		}
		else if ($(this).hasClass('voted')) {
			alert('每人只能投一票哦～');
		}
		else if (!login){
			$layer.addClass('show');
			$('body').css('overflow', 'hidden');
			$(document).on('touchstart', function() {
				if (event.target == $layer[0]) {
					$layer.removeClass('show');
					$('body').css('overflow', 'visible');
				}
			});
			$closeBtn.on('touchstart', function() {
				$layer.removeClass('show');
				$('body').css('overflow', 'visible');
			});
		}
	});
	
	

	// var $sBar = $('.searchbar'),
	// 	sDis = $sBar.offset().top;
	// $(document).on('scroll',  function() {
	// 	if (document.body.scrollTop >= sDis) {
	// 		$sBar.addClass('fixed');
	// 	}
	// 	else if (document.body.scrollTop < sDis) {
	// 		$sBar.removeClass('fixed');
	// 	}
	// });

});
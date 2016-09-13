$(function(){

	var login = true;

	// 投票按钮和弹出框
	var $activeBtn = $('.big-btn'),
		$layer = $('.layer'),
		$closeBtn = $layer.find('.close-btn');
	var $letter = $('.letter'),
		$line = $letter.find('label');
	$activeBtn.on('touchstart', function() {
		if (login) {
			setTimeout(function(){
				$line.eq(0).addClass('sent');
			}, 30);
			setTimeout(function(){
				$line.eq(1).addClass('sent');
			}, 100);
			setTimeout(function(){
				$line.eq(2).addClass('sent');
			}, 200);
			setTimeout(function(){
				$activeBtn.val('').parent().addClass('active');
			}, 300);
			setTimeout(function(){
				window.location.href = 'reward.html';
			}, 1200);
		}
		else {
			modal();
		}
	});

	function modal(){
		$layer.addClass('show');
		$('main, section, nav').addClass('blur');
		$('body').css('overflow', 'hidden');
		$(document).on('touchstart', function() {
			if (event.target == $layer[0]) {
				$layer.removeClass('show');
				$('main, section, nav').removeClass('blur');
				$('body').css('overflow', 'visible');
			}
		});
		$closeBtn.on('touchstart', function() {
			$layer.removeClass('show');
			$('main, section, nav').removeClass('blur');
			$('body').css('overflow', 'visible');
		});
	}

	var $reward = $('.big-btn2').on('touchstart', function(event) {
		event.preventDefault();
		modal();
	});

});
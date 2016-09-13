$(function(){

	var login = false;

	// 投票按钮和弹出框
	var $activeBtn = $('.big-btn'),
		$layer = $('.layer'),
		$closeBtn = $layer.find('.close-btn');
	var $letter = $('.letter'),
		$line = $letter.find('label');
	var $nav = $('nav');

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
			modalShow();
		}
	});

	function modalShow(){
		$layer.addClass('show');
		$nav.css('display', 'none');
		$('main, section, nav').addClass('blur');
		$('body').css('overflow', 'hidden');
		$(document).on('touchstart', function(event) {
			if (event.target == $layer[0]) {
				modalHide();
			}
		});
		$closeBtn.on('touchstart', function(){
			modalHide();
		});
	}

	function modalHide(){
		$layer.removeClass('show');
		$nav.css('display', 'block');
		$('main, section, nav').removeClass('blur');
		$('body').css('overflow', 'visible');
	}

	var $reward = $('.big-btn2').on('touchstart', function(event) {
		event.preventDefault();
		modalShow();
	});

});
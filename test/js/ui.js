$(function(){

	// 投票按钮和弹出框
	var $showBtn = $('.vote-btn'),
		$submitBtn = $('.submit-btn'),
		$layer = $('.layer'),
		$closeBtn = $layer.find('.close-btn');

	$showBtn.on('click', function() {
		if ($(this).hasClass('voted')) {
			$(this).removeClass('voted').html('投票');
		}
		else {
			$(this).addClass('voted').html('<i class="fa fa-check" aria-hidden="true"></i>' + ' 已选择');
		}
	});

	$submitBtn.on('click', function() {
		var isVoted = $('input:checked').length;
		// 单个手机号码投票数必须等于8票，否则不可提交
		if (isVoted == 8) {
			$layer.addClass('show');
			$('body').css('overflow', 'hidden');
			$(document).on('click', function() {
				if (event.target == $layer[0]) {
					$layer.removeClass('show');
					$('body').css('overflow', 'visible');
				}
			});
			$closeBtn.on('click', function() {
				$layer.removeClass('show');
				$('body').css('overflow', 'visible');
			});
		}
		else {
			alert('单个手机号码投票数必须等于8票');
		}
	});
	
	$('#cover').on('click', function() {
		$(this).fadeOut(300);
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
$(function() {

	// 选择商品
	!function() {
		var $list = $('.item-list'),
			$li = $list.children('li'),
			$input = $li.find('input'),
			$delete = $li.find('i');

		$li.on('click', function() {
			$(this).addClass('active')
				.find('i').removeClass('icon-plus').addClass('icon-trash');
		});
		$input.on('click', function() {
			$(this).select();
		})
			.on('blur', $input, function() {
			if ($(this).val() < 0) {
				$(this).addClass('error').select();
			}
			else {
				$(this).removeClass('error');
			}
		});
		$delete.on('click', function(event) {
			event.stopPropagation();
			$(this).removeClass('icon-trash').addClass('icon-plus');
			var $_li = $(this).parents('li');
			if ($_li.hasClass('active')) {
				$_li.find('input').val(0);
				$_li.removeClass('active');
			}
		});
		
	}(),

	// 提交检测
	function() {
		var $nextBtn = $('.next-btn');
		$nextBtn.on('click', function(event) {
			event.preventDefault();
			Modal.init();
		});
	}(),

	// 头部提示
	function() {
		var $hint = $('.top-hint'),
			$closeBtn = $hint.find('i');
		$hint.on('click', $closeBtn, function() {
			$hint.slideUp(300);
		});
	}()
	
});
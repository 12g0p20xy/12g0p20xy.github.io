;(function($, document, undefined) {

	$(function() {
		// 搜索按钮
		var $search = $('.searchbar'),
			$navLi = $search.siblings('.main-nav').children('li'),
			$sInput = $search.children('input:text'),
			$sBtn = $search.children('a');
		$search.on('click', $sBtn, function(event) {
			event.preventDefault();
			$search.addClass('active');
			$sInput.focus();
			$navLi.stop(true, true).animate({opacity: 0}, 300);
			$(document).on('click', function(event) {
				event.preventDefault();
				if (!$(event.target).closest($search).length) {
					$search.removeClass('active');
					$navLi.stop(true, true).animate({opacity: 1}, 300);
				}
			});
		});

		// 回到顶部
		var $backBtn = $('.back-to-top').on('click', function(event) {
			event.preventDefault();
			$(document.body).stop(true, false).animate({scrollTop: 0}, 300);
		});
	});

})(jQuery, document)
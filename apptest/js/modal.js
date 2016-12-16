
// 弹出框

var Modal = (function() {

	var layer = $('#layer'),
		closeBtn = layer.find('.close-btn');

    function show() {
		layer.addClass('show');
		$('body').css('overflow', 'hidden')
			.children().not(layer).addClass('blur');
		$(document).on('click', function(event) {
			if (event.target == layer[0]) {
				hide();
			}
		});
		closeBtn.on('click', function(){
			hide();
		});
	}

	function hide() {
		layer.removeClass('show');
		$('body').css('overflow', 'visible')
			.children().not(layer).removeClass('blur');
	}

	return {
		init: function() {
			show();
		}
	};
	
})();
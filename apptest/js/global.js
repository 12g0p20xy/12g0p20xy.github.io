;(function($){

    var	$gridItem = $('.grid-item'),
    	$checkBtn = $gridItem.find('.check-btn');
    $checkBtn.on('click', function() {
    	if ($(this).hasClass('active')) {
    		$(this).removeClass('active').html("选 择");
    	}
    	else{
    		$(this).addClass('active').html("<i></i>已选择");
    	}
    });

    // 弹出框
    var $layer = $('.layer'),
		$closeBtn = $layer.find('.close-btn');
		
	var $voteBtn = $('.vote-btn');
	$voteBtn.on('click', function(event) {
		event.preventDefault();
		$.modalShow();
	});

	var $confirmBtn = $layer.find('.confirm-btn').on('click',function(event) {
		event.preventDefault();
		window.location.href = "share.html";
	});

    $.modalShow = function(){
		$layer.addClass('show');
		$('main, section, nav').addClass('blur');
		$('body').css('overflow', 'hidden');
		$(document).on('click', function(event) {
			if (event.target == $layer[0]) {
				$.modalHide();
			}
		});
		$closeBtn.on('click', function(){
			$.modalHide();
		});
	}

	$.modalHide = function(){
		$layer.removeClass('show');
		$('main, section, nav').removeClass('blur');
		$('body').css('overflow', 'visible');
	}

})(jQuery);
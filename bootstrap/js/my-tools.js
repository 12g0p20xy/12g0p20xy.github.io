$('a').click(function(event){
	event.preventDefault();
});

$(function(){
	$('.main-nav>li').hover(function(){
		$(this).find('.sub-nav').stop(true, false).slideDown(100);
	}, function(){
		$('.sub-nav').stop(true, false).slideUp(200);
	});
});

// 移动端登录按钮
$(function(){
	var signup = $('.sign-menu');
	$('.m-login').on('mouseenter', function(){
		signup.addClass('mobile-login');
		if ($('nav .sign-menu').length > 0) {
			// 只克隆一次
			return false;
		}else{
			$('nav').append(signup.clone());
		};
	});
	$('nav').mouseleave(function(){
		$('nav').find('.sign-menu').remove();
		signup.removeClass('mobile-login');
	});
});
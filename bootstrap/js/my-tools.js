$('a').click(function(event){
	event.preventDefault();
});

$(function(){
	$('.main-nav>li').hover(function(){
		$('.sub-nav').stop(true, false).show(100);
	}, function(){
		$('.sub-nav').stop(true, false).hide(100);
	});
});

// 移动端登录按钮
$(function(){
	var signup = $('.sign-menu');
	$('.m-login').on('mouseenter', function(){
		signup.addClass('mobile-login');
		$('nav').append(signup.clone());
	});
	$('nav').mouseleave(function(){
		$('nav').find('.sign-menu').remove();
		signup.removeClass('mobile-login');
	});
});
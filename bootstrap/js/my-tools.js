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
	$('.m-login').on('mousedown', function(){
		signup.addClass('mobile-login');
		if ($('nav .sign-menu').length > 0) {
			// 只克隆一次
			return false;
		}else{
			$('nav').append(signup.clone());
			$('#account').focus();
		};
	});

	// 点击除菜单外的任何地方菜单消失，使用了closest防止冒泡
	$(document).on('touchstart', function(e){
		if (!$(e.target).closest('.sign-menu').length) {
			$('nav').find('.sign-menu').remove();
			signup.removeClass('mobile-login');
		};
	});
});

// 移动端菜单按钮
$(function(){
	$('.m-menu').on('mousedown',function(){
		$('.m-submenu').stop(true, false).slideDown(100);
	});
	// 点击除菜单外的任何地方菜单消失
	$(document).on('touchstart', function(e){
		if ($(e.target).parent().attr('class') != 'm-submenu') {
			$('.m-submenu').stop(true, false).slideUp(100);
		};
	});
});
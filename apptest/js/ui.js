$(function(){

	var $yuan = $('.yuan img').not('.cover');
	$yuan.on('click', function(event) {
		event.preventDefault();
		chozenCSS = {
			'animation': 'none',
			'-webkit-transform': 'translateY(-30px) scale(1.5)',
			'transform': 'translateY(-30px) scale(1.5)'
		};
		$(this).css(chozenCSS);
		window.setTimeout(
			function(){ 
				location.href = "register.html";
			}, 100);
	});

	$('.get-reward').on('click', function(event) {
		event.preventDefault();
		if (true) {
			confirm('关注徽商银行宣城分行公众号后即可领取奖品(本地活动仅限宣城微信用户)');
		}
		else{
			alert('成功领取奖品！');
		}
	});	

})
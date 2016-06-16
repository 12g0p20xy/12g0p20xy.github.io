$(function(){

	var pocket =0;
	var removepackage = setInterval(function(){
				for(var jj=0;jj<$('.div>div').size()/4;jj++){
					$('.div>div').eq($('.div>div').size()-jj).remove();
				}
			},1000);
	var t = 0;

	function rain(){
		t++;
		for(var i=0;i<4;i++){
			var m=parseInt(Math.random()*700+100);
			var j2=parseInt(Math.random()*300+1200);
			var j=parseInt(Math.random()*1600+000);
			var j1=0;
			var n=parseInt(Math.random()*10+(-10));
			$('.div').prepend('<div class="dd"></div>');
			$('.div').children('div').eq(0).css({'left':j,'top':n});
			$('.div').children('div').eq(0).animate({'left':j-j1,'top':$(window).height()+20},3000);
		}
		timer = setTimeout(rain, 200);
		// if (t >= 30) {
		// 	$(".result-box").show();
		// 	clearTimeout(timer, 20);
		// }
	}

	$(document).on('touchend', '.start-game', function(event) {
		event.preventDefault();
		setTimeout(rain, 200);
		$(this).addClass('hide');
		$(".div").addClass("bg_1");
	});

	$(document).on('touchend', '.dd', function(event){
		event.stopPropagation();
		$(this).css("background-position","0 -100px");
		pocket++;
		if(pocket == 5){
			$(".result").addClass('show');
			clearTimeout(timer, 20);
			setTimeout(function(){
				$('.result .btn').attr('href', 'register.html');
				$('.result .more').attr('href', '');
			}, 2000);
		}
	});

	var $weixin = $('.weixin').on('touchend', function(event) {
		event.preventDefault();
		$(this).siblings('.qr')
			.animate({
				width: 60 + "%",
				right: 20 + '%',
				bottom: 200 + '%'
			}, 200);
	});

	$(document).on('touchend', function() {
		if(!$(event.target).closest('nav').length){
			$weixin.siblings('.qr')
			.animate({
				width: 0,
				right: 0,
				bottom: 0
			}, 200);
		} 
	});

});
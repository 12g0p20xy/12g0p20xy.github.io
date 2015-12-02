$(function(){

	// var minHeight = $('.overlay').height();
	// var imgHeight = $('.overlay img').height();
	// if (imgHeight < minHeight) {
	// 	$('.overlay img').each().addClass('height100');
	// };
	
	$('.btn').click(function(){
			$(this).addClass('voted').val('已投票');
		});
})
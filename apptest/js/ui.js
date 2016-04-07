$(function(){

	$('.option label').click(function(){
		var aaa = $(this).closest('li').addClass('chosen').siblings().removeClass('chosen')
	    .parent().next().addClass('active');
	});

	//initialize swiper when document ready  
	var swiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.to-next',
		prevButton: '.to-prev',
		paginationType: 'progress'
	});

	$('.info').on('focus blur', function() {
		var val1 = $(this).val(),
			val2 = $(this).siblings().val();
		if (val1 && val2) {
			$(this).parent().siblings('.submit-btn').addClass('active');
		}
		else{
			$(this).parent().siblings('.submit-btn').removeClass('active');
		}
		$('body').scrollTop($(this).offset().top - 10);
	});

})
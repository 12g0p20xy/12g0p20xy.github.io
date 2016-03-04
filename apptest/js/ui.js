$(function(){

	$('.vote-area').on('click', '.vote-btn', function(event) {
		event.preventDefault();
		var $name = $(this).parent().find('.info>p').text();
		if (confirm('要投票给' + $name + '吗？（每天限投1票哦）')) {
			$(this).addClass('voted').text('已投票')
				.parents('.vote-area').find('.vote-btn').not($(this)).hide();
		}
		else{

		}
	});

	//initialize swiper when document ready  
    var swiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });

})
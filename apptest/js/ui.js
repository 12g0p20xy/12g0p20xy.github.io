$(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        loop : true,
        pagination: '.swiper-pagination'
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev'
    });

    var $submitBtn = $('.submit-btn');
    $submitBtn.one('click', function() {
        $(this).addClass('active').html('已投票' + '<i>+1</i>');
    });

    var $hintBox = $('.hint-box');
    setTimeout(function(){
        $hintBox.css('display', 'none');
    }, 2400);
    
});
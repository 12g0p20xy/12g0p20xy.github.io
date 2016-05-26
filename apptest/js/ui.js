$(function(){

  $('.option').on('tap', 'li', function() {
    var itemID = $(this).attr('id');
    var partID = $(this).parents('.item').index();
    console.log(partID);
    $('.result div').eq(partID).find('img').attr({
      'src': "images/" + itemID + ".gif"
    });
  });

  $('.game').on('tap', '.item', function() {
    if ($(this).hasClass('able')) {
      var ypos = window.pageYOffset,
          $option = $(this).find('.option');
      $option.removeClass('hide');
      
      var optionHeight = $option.height();
      $option.css('top', ypos - optionHeight - 64);
      $('.mask').removeClass('hide');
      setInterval(function(){
        ypos = window.pageYOffset;
        $option.css('top', ypos - optionHeight - 64);
      }, 600);
    }
    else{
      alert('快快分享！');
    }
  });
  
  $('.close-btn').on('tap', function(e) {
    event.stopPropagation();
    $(this).parent().addClass('hide');
    $('.mask').addClass('hide');
  });

  $('.confirm-btn').on('tap', function(event) {
    event.preventDefault();
    $('.register').removeClass('hide');
    $('.mask').removeClass('hide');
    $('body').scrollTop(0);
  });

});
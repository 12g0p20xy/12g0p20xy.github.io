
$(function(){
  $('.t-item').mousedown(function(){
    $(this).find('.delete').show();
  });
  $(document).on('mousedown', function(e){
     if (!$(e.target).closest('.t-item').length) {
      $('.delete').hide();
     };
  });
  $('.icon').mousedown(function(){
    $(this).parents('.t-item').remove();
  });
});

$(function(){
  $('.choose a').mousedown(function() {
    $(this).addClass('t-chosen').siblings().removeClass('t-chosen');
  });
  var num = 1;
  $('.t-num').on('click', '#plus', function() {
    event.preventDefault();
    num++;
    $(this).siblings('input').val(num);
  });
  $('.t-num').on('click', '#minus', function() {
    event.preventDefault();
    if (num <= 0) {
      return false;
    }else{
      num--;
      $(this).siblings('input').val(num);
    };
  });
});
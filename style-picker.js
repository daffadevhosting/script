jQuery('.style-picker li').click(function() {
  var target = $(this).attr('id');
  $(this).addClass('item_color').siblings().removeClass('item_color');
  $('#' + target).show().siblings('div').hide();
});

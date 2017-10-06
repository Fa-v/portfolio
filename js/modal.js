$(document).ready(function () {
  $('.button').click(function () {
    var modal = $(this).data('modal');
    $('#' + modal).fadeIn(300);
  });

  $('.close').click(function () {
    $('.modal').fadeOut(300);
  });
});

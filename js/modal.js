$(document).ready(function () {

  $('.button').click(function () {
    var modal = $(this).data('modal');
    $('#' + modal).show('slow');
  });

  $('.close').click(function () {
    $('.modal').hide('slow');
  });

});




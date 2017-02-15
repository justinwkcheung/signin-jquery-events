function fadingIn() {
  $('.modal').fadeIn(800)
}

function fadingOut() {
  $('.modal').fadeOut(600)
}

function submitButton(eventObject) {
  eventObject.stopPropagation();
  $('input').addClass('error')
}

function formFocus() {
  $('input').focus(
  function(eventObject) {
    $(this).removeClass('error');
  }
)};



$(document).on('ready', function() {
  $('.signin').on('click', fadingIn);

  // $('.close').on('click', fadingOut);

  $('.submit').on('click', submitButton);

  $('.modal').on('click', fadingOut);
  formFocus();
});

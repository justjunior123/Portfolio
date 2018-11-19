console.log('We loaded');
$(document).ready(function(){
  $('.modal-btn').click(function(event){
    console.log('Clicked');

    var email = $('.email').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    var statusElm = $('.status');
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')){
      console.log('<div>Email is valid</div>');
    } else {
      event.preventDefault();
      console.log('<div>email is not valid</div>');
    }

    if (subject.length >= 2) {
      statusElm.append('<div>subject is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>subject is not valid</div>');
    }

    if (message.length > 20) {
      statusElm.append('<div>message is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>message is not valid</div>');
    }
  });
});

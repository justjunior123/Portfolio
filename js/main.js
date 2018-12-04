// Code for the modal that will be used in the contact form
// Basic error handeling that will give an alert message if input is wrong

console.log('We loaded');
$(document).ready(function(){
  $('.modal-btn').click(function(event){
    console.log('Clicked');

    let email = $('.email').val();
    let subject = $('.subject').val();
    let message = $('.message').val();
    let statusElm = $('.status');
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div>Email is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Email is not valid</div>');
    }

    if (subject.length >= 2) {
      statusElm.append('<div>Subject is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Subject is not valid</div>');
    }

    if (message.length > 20) {
      statusElm.append('<div>Message is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Message is not valid</div>');
    }
  });
});

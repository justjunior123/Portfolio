// Contact Modal open and close ----------------------------------------
// critical: window.onload executes the script when the DOM is ready.
//
window.onload = () => {
  // TODO: if the load screen is already loaded remove it
  const position = $('.load-screen').position();
  const clone = $('.load-screen').clone();


  $('.load-screen').addClass('complete');
  setTimeout(function(){
    $('.load-screen').remove();
  },3000);

  const loader = () => { setTimeout($('.insert').append(clone),2000); };

  let open = document.getElementById('button-toggle');
  open.addEventListener("click", function(){
    document.querySelector('.bg-modal').style.display = "flex";
  });

  let close = document.querySelector('.close');
  close.addEventListener("click", function(){
    document.querySelector('.bg-modal').style.display = "none";
  });

  $(document).ready(function(){

    $('body').on('click',function(e){
      const target = $(e.target).attr('id');
      console.log(target);
      console.log(target === 'button-toggle');
      if (target === 'load-chatter' || target === 'load-tetris'||
       target === 'load-weather' || target === 'load-favorite' ||
       target === 'load-timzam'
      ) {
        loader();
        setTimeout(1000);
        scroll(0,position.top);
        $('html, body').css({
          'overflow': 'hidden',
          'height': '100%'
        });

      }
    });
  });

};

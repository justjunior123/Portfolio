// Contact Modal open and close ----------------------------------------
// critical: window.onload executes the script when the DOM is ready.

window.onload = function () {

  var open = document.getElementById('button-toggle');
  open.addEventListener("click", function(){
    document.querySelector('.bg-modal').style.display = "flex";
  });

  var close = document.querySelector('.close');
  close.addEventListener("click", function(){
    document.querySelector('.bg-modal').style.display = "none";
  });

};

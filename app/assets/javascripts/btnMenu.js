// window.onload= function () {
  $(document).on('turbolinks:load', function() { 
  let btn = document.querySelector("#btnMenu");
  let menu = document.querySelector("#menu");


  btn.addEventListener('click', classIf);

  function classIf(){
    if(menu.classList.contains('show') == false ){
      menu.classList.add('show');
    }else{
      menu.classList.remove('show');
    }
  }
});
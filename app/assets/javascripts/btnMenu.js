// window.onload= function () {
  $(document).on('turbolinks:load', function() { 
  const btn = document.querySelector("#btnMenu"), menu = document.querySelector("#menu");
  btn.addEventListener('click', classIf);

  function classIf(){
    (menu.classList.contains('show') == false ) ? menu.classList.add('show') : menu.classList.remove('show');
  };
});
// window.onload= function () {
  $(document).on('turbolinks:load', function() { 
  const html = {
    get(element) {
      return document.querySelector(element);
    }
  }
  const button = html.get("#btnMenu")
  const menu = html.get("#menu")

  function menuShow(){
    (menu.classList.contains('show') == false ) 
    ? menu.classList.add('show') 
    : menu.classList.remove('show');

    menuButton();
  };
  function menuButton() {
    (button.classList.contains('fa-times') == false ) 
    ?button.classList.replace('fa-bars', 'fa-times') 
    :button.classList.replace('fa-times', 'fa-bars');
  }
  button.addEventListener('click', menuShow);
  
  window.addEventListener("resize", function() {
    button.classList.replace('fa-times', 'fa-bars');
    menu.classList.remove('show');
  });
});
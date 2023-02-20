document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.toggle');
    const div = document.querySelector('.hid');
    const list = document.querySelector('.menu');
    const ex = document.querySelector('.close');
    const cls = document.querySelector('.toggle-2')
  
    menu.addEventListener('click', function(event) {
      event.preventDefault();
      div.classList.toggle('primary-navigation');
      list.classList.toggle('menu')
      menu.classList.toggle('hide')
      ex.classList.toggle('close')
    });

    cls.addEventListener('click', function(event) {
      event.preventDefault();
      div.classList.toggle('primary-navigation');
      list.classList.toggle('menu')
      menu.classList.toggle('hide')
      ex.classList.toggle('close')
    });
  });
document.addEventListener("DOMContentLoaded", function (event) {

  const menuElem = document.querySelector('.menu');
  const burger = document.querySelector('.humburger-menu');


  const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
  };
 
  burger.addEventListener('click', () => toggleMenu());



  // delegirovanie
  menuElem.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('menu-list__link')) {

      toggleMenu();

    }

  });


});
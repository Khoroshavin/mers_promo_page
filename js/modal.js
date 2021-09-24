document.addEventListener("DOMContentLoaded", function (event) {

  const btnModalOpen = document.querySelector('.more');
  const modal = document.querySelector('.modal');
  // const modalOverlay = document.querySelector('.overlay');

  // show modal on btn click
  btnModalOpen.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });


  modal.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {

      modal.classList.add('hidden');

    }

  });






});
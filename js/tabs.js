document.addEventListener("DOMContentLoaded", function (event) {

  const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
  const tabsContentElems = document.querySelectorAll('[data-tabs-field]');

  for (let btnTab of tabsHandlerElems) {
    btnTab.addEventListener('click', () => {
      // go through an array tab btns and remove active class
      tabsHandlerElems.forEach(el => el.classList.remove('design-list__item_active'));
      // add active class for click elem
      btnTab.classList.add('design-list__item_active');

      // go through an array tab contents and delete class hidden from all tab contents
      tabsContentElems.forEach(el => {
        if (el.dataset.tabsField === btnTab.dataset.tabsHandler) {
          el.classList.remove('hidden');
        }
        // and add class hiddens for non active tab content
        else {
          el.classList.add('hidden');
        }
      });      

    });
  };

});
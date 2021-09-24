document.addEventListener("DOMContentLoaded", function(event) {

  const featureLinkBtns = document.querySelectorAll('.feature__link');
  const featureSubs = document.querySelectorAll('.feature-sub');


    featureLinkBtns.forEach((btnAcc, idx) => {
      btnAcc.addEventListener('click', () => {

        // go through an array and delete active class in ever featureLinkBtns
        featureLinkBtns.forEach((btnAcc) => {
          btnAcc.classList.remove('feature__link_active');
        });
        // add active class for active acc
        btnAcc.classList.add('feature__link_active');

        // go through an array and add hidden class in ever featureSubs
        featureSubs.forEach((subEl) => {
          subEl.classList.add('hidden');
        });

        // remove hidden class for active acc desc
        featureSubs[idx].classList.remove('hidden');

        console.dir(btnAcc);

      });
    });



});
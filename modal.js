const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__container__btn');


modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal');
})
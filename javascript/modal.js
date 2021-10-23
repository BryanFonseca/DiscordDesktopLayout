const buttonClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

buttonClose.addEventListener('click', (e) => {
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.classList.add('invisible');
  }, 500);
});

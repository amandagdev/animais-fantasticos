export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (buttonOpen && buttonClose && modal) {
    const toggleModal = (e) => {
      e.preventDefault();
      modal.classList.toggle('ativo');
    };

    const outOfModal = (e) => {
      e.preventDefault();
      if (e.target === e.currentTarget) toggleModal(e);
    };

    buttonOpen.addEventListener('click', toggleModal);
    buttonClose.addEventListener('click', toggleModal);
    modal.addEventListener('click', outOfModal);
  }
}

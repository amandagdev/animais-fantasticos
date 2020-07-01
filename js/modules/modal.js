export default class initModal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outOfModal = this.outOfModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  outOfModal(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) this.eventToggleModal(e);
  }

  addModalEvent() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.modal.addEventListener('click', this.outOfModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.modal) {
      this.addModalEvent();
    }
  }
}

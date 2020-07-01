export default class initAccordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  activeAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.activeAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}

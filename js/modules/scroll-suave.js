export default class initScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    this.addLinkEvent();
    return this;
  }
}

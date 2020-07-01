export default class tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.closeTooltip = this.closeTooltip.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  mouseMove(e) {
    this.tooltipBox.style.top = e.pageY + 20 + 'px';
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = e.pageX + 20 + 'px';
    }
    // os 20 adicionado é pra dar uma margem do mouse pra div
  }

  closeTooltip(e) {
    this.tooltipBox.remove();
    e.currentTarget.removeEventListener('mouseleave', this.closeTooltip);
    e.currentTarget.removeEventListener('mousemove', this.closeTooltip);
  }

  createTooltip(element) {
    const tooltipss = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipss.classList.add('tooltip');
    tooltipss.innerText = text;
    document.body.appendChild(tooltipss);
    this.tooltipBox = tooltipss;
  }

  onMouseOver(e) {
    // cria a tooltipbox e coloca em uma propriedade
    this.createTooltip(e.currentTarget);
    e.currentTarget.addEventListener('mousemove', this.mouseMove);
    e.currentTarget.addEventListener('mouseleave', this.closeTooltip);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) =>
      item.addEventListener('mouseover', this.onMouseOver)
    );
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}

export default function tooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function openTooltip() {
    const tooltipBox = createTooltip(this);

    function mouseMove(e) {
      tooltipBox.style.top = e.pageY + 20 + 'px';
      tooltipBox.style.left = e.pageX + 20 + 'px';
      //os 20 adicionado é pra dar uma margem do mouse pra div
    }
    function closeTooltip() {
      tooltipBox.remove();
      this.removeEventListener('mouseleave', closeTooltip);
    }
    this.addEventListener('mousemove', mouseMove);
    this.addEventListener('mouseleave', closeTooltip);
  }

  function createTooltip(element) {
    const tooltip = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    document.body.appendChild(tooltip);
    return tooltip;
  }
  tooltips.forEach((item) => item.addEventListener('mouseover', openTooltip));
}

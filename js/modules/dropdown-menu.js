import outsideClick from './outside.js';
export default function initDropdownMenu() {
  const menu = document.querySelector('[data-dropdown]');

  function toggleMenu(e) {
    e.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, () => {
      this.classList.remove('active');
    });
  }

  menu.addEventListener('click', toggleMenu);
  menu.addEventListener('touchstart', toggleMenu);
}

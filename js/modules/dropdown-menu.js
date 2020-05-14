import outsideMenu from './outside.js';
export default function initDropdownMenu() {
  const menu = document.querySelector('[data-dropdown]');

  function toggleMenu(e) {
    e.preventDefault();
    this.classList.toggle('active');
    outsideMenu(this);
  }

  menu.addEventListener('click', toggleMenu);
  menu.addEventListener('touchstart', toggleMenu);
}

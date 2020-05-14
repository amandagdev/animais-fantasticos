export default function initDropdownMenu() {
  const menu = document.querySelector('[data-dropdown]');

  function toggleMenu(e) {
    e.preventDefault();
    this.classList.toggle('active');
  }

  menu.addEventListener('click', toggleMenu);
}

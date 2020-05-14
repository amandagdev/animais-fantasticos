import outsideClick from './outside.js';

export default function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    this.classList.toggle('active');
    menuList.classList.toggle('active');
    outsideClick(menuList, () => {
      this.classList.remove('active');
      menuList.classList.remove('active');
    });
  }
  menuMobile.addEventListener('click', openMenu);
  menuMobile.addEventListener('touchstart', openMenu);
}

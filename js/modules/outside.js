export default function outsideClick(element) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    html.addEventListener('click', handleOutMenu);
    html.addEventListener('touchstart', handleOutMenu);
    element.setAttribute(outside, '');
  }

  function handleOutMenu(e) {
    //Event Bubble função é ativada depois do bubble acontecer e achar a função no html
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      element.classList.remove('active');
      html.removeEventListener('click', handleOutMenu);
      html.removeEventListener('touchstart', handleOutMenu);
    }
  }
}

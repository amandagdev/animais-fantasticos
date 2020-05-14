export default function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      html.addEventListener('click', handleOutMenu);
      html.addEventListener('touchstart', handleOutMenu);
    });

    element.setAttribute(outside, ''); //impedindo que o event addevent fique ocorrendo várias vezes
  }
  function handleOutMenu(e) {
    //Event Bubble função é ativada depois do bubble acontecer e achar a função no html
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      html.removeEventListener('click', handleOutMenu);
      html.removeEventListener('touchstart', handleOutMenu);
      callback();
    }
  }
}

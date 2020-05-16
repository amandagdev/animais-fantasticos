export default function initNumero() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((item) => {
      const total = +item.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start = start + incremento;
        item.innerText = start;
        if (start > total) {
          item.innerHTML = total;
          clearInterval(timer);
        }
      }, 25);
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation); //obj que observa quando algo muda no codigo

  observer.observe(observerTarget, { attributes: true }); //observa se algum atributo do .numeros mudou
}

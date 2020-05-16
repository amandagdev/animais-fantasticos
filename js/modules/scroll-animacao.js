export default function initAnimationScroll() {
  let animaScroll;
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6; // pega o tamanho da tela do usuario e multiplica por 60% por cento

  if (sections.length) {
    animaScroll = () => {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowMetade; // pegando o topo e diminuindo do tamanho de 60% da pessoa evito que a tela fique mt tempo em branco na hora de ocorrer a animação já que ela só ocorre quando o scroll bate no topo do elemento
        if (sectionTop < 0) {
          item.classList.add('ativo');
        }
      });
    };
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll);
}

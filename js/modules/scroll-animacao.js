export default function initAnimationScroll() {
  let animaScroll;
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  if (sections.length) {
    animaScroll = () => {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          item.classList.add('ativo');
        }
      });
    };
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll);
}

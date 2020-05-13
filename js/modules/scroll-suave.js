export default function initScrollSuave() {
  const linksInterno = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInterno.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}

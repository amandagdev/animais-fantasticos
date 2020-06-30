import ScrollSuave from './modules/scroll-suave.js';
import initAnimationScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabNav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/animaisFetch.js';
import initCountdown from './modules/countdown.js';

const dias = new initCountdown('24 December 2020 23:00:00 GMT-0300');

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();

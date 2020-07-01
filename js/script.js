import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/animaisFetch.js';
import initCountdown from './modules/countdown.js';
import initAnimationScroll from './modules/scroll-animacao.js';

const dias = new initCountdown('24 December 2020 23:00:00 GMT-0300');

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabnav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

initAnimationScroll();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();

'use strict';

import { jqueryselectBox } from './lib/jquery.selectBox.js';
// import { DrawSVGPluginme } from './lib/DrawSVGPlugin.min.js';

import { menu } from './modules/menu.js';
import { modal } from './modules/modal.js';
import { search } from './modules/search.js';
import { iframe } from './modules/iframe.js';
import { slick } from './modules/customSlick.js';
import { share } from './modules/share.js';
import { selectBox } from './modules/selectBox.js';
import { magnificPopup } from './modules/magnificPopup.js';
import { gsapanim } from './modules/gsap.js';
import { gsapscroll } from './modules/gsapscroll.js';
import { uiAccordion } from './modules/accordion.js';

(function () {
  menu.init();
  modal.init();
  search.init();
  iframe.init();
  slick.init();
  share.init();
  jqueryselectBox.init();
  selectBox.init();
  magnificPopup.init();
  gsapanim.init();
  gsapscroll.init();
  uiAccordion.init();
})();

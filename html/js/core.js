'use strict';

import { jqueryselectBox } from './lib/jquery.selectBox.js';
// import { DrawSVGPluginme } from './lib/DrawSVGPlugin.min.js';

import { menu } from './modules/menu.js';
import { modal } from './modules/modal.js';
import { search } from './modules/search.js';
import { iframe } from './modules/iframe.js';
import { myslick } from './modules/customSlick.js';
import { share } from './modules/share.js';
import { selectBox } from './modules/selectBox.js';
import { magnificPopup } from './modules/magnificPopup.js';
import { uiAccordion } from './modules/accordion.js';
import { gsapanim } from './modules/gsap.js';
import { counter } from './modules/counter.js';
import { gsapscroll } from './modules/gsapscroll.js';
import { sticky } from './modules/stickySidebar.js';
import { stickyYear } from './modules/stickyYear.js';
import { sidebyside } from './modules/sidebyside.js';
import { retired } from './modules/retired.js';

(function () {
  menu.init();
  modal.init();
  search.init();
  iframe.init();
  myslick.init();
  share.init();
  jqueryselectBox.init();
  selectBox.init();
  magnificPopup.init();
  uiAccordion.init();
  gsapanim.init();
  counter.init();
  gsapscroll.init();
  sticky.init();
  stickyYear.init();
  sidebyside.init();
  retired.init();
})();

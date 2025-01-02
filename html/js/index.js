'use strict';

import { jqueryselectBox } from './lib/jquery.selectBox.js';
// import { DrawSVGPluginme } from './lib/DrawSVGPlugin.min.js';

import { menu } from './modules/menu';
import { search } from './modules/search';
import { iframe } from './modules/iframe.js';
import { slick } from './modules/customSlick';
import { share } from './modules/share';
import { selectBox } from './modules/selectBox';
import { magnificPopup } from './modules/magnificPopup';
import { gsapanim } from './modules/gsap.js';
import { gsapscroll } from './modules/gsapscroll.js';

(function () {
  menu.init();
  search.init();
  iframe.init();
  slick.init();
  share.init();
  jqueryselectBox.init();
  selectBox.init();
  magnificPopup.init();
  gsapanim.init();
  gsapscroll.init();
})();

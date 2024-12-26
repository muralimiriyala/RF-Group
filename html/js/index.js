'use strict';

import { jqueryselectBox } from './lib/jquery.selectBox.js';

import { menu } from './modules/menu';
import { search } from './modules/search';
import { slick } from './modules/customSlick';
import { share } from './modules/share';
import { selectBox } from './modules/selectBox';
import { magnificPopup } from './modules/magnificPopup';

(function () {
  menu.init();
  search.init();
  slick.init();
  share.init();
  jqueryselectBox.init();
  selectBox.init();
  magnificPopup.init();
})();

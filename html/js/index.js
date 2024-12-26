import { menu } from './modules/menu';
import { search } from './modules/search';
import { slick } from './modules/customSlick';
import { share } from './modules/share';
import { magnificPopup } from './modules/magnificPopup';

(function () {
  menu.init();
  search.init();
  slick.init();
  share.init();
  magnificPopup.init();
})();

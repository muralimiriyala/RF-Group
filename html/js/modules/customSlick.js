import $ from 'jquery';
import 'slick-slider';

export const slick = {
  slider: document.querySelectorAll('.about-history-article'),
  init() {
    const _$ = this;
    if (window.matchMedia('(max-width:809px)').matches) {
      _$.slider.forEach((ele) => {
        $(ele).slick({
          dots: true,
          arrow: true,
          infinite: false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-arrow slick-prev flex flex-center radius-50" aria-label="Previous Arrow" tabindex="0" type="button"><span><i class="fa-regular fa-chevron-left"></i></span></button>',
          nextArrow: '<button class="slick-arrow slick-next flex flex-center radius-50" aria-label="Next Arrow" tabindex="0" type="button"><span><i class="fa-regular fa-chevron-right"></i></span></button>',
        });
      });
    }
  },
};

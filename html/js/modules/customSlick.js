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
        });
      });
    }
  },
};

import $ from 'jquery';
import 'slick-slider';

export const slick = {
  slider: document.querySelectorAll('.slider'),
  init() {
    const _$ = this;
    _$.slider.forEach((ele) => {
      $(ele).slick({
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    });
  },
};

import $ from 'jquery';
import 'slick-slider';

export const myslick = {
  $tst: document.querySelectorAll('.tst-slider-main'),
  $hele: document.querySelectorAll('.about-history-article'),
  $ele: document.querySelector('ul.about-history-years'),
  init() {
    const _$ = this;
    if (!_$.$hele || !_$.$tst) return;

    _$.$tst.forEach((ele) => {
      const $ele = $(ele);
      if (!$ele.hasClass('slick-initialized')) {
        $ele.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    });

    const $hSlider = $(_$.$hele);
    function historyinitSlider() {
      $hSlider.each(function () {
        const $historySlider = $(this);
        const historyAppend = $(this)
          .parent()
          .children('.about-history-appends');
        if (window.matchMedia('(max-width: 809px)').matches) {
          if (!$historySlider.hasClass('slick-initialized')) {
            $historySlider.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              prevArrow:
                '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center"><span class="slick-arrows slick-prev-arrow fa-solid fa-chevron-right"></span></button>',
              nextArrow:
                '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center"><span class="slick-arrows slick-next-arrow fa-solid fa-chevron-right"></span></button>',
              dots: true,
              speed: 1000,
              infinite: false,
              autoplay: false,
              variableWidth: true,
              appendArrows: historyAppend,
              appendDots: historyAppend,
              dotsClass: 'slick-dots history-slick-dots flex',
            });
          }
          _$.$ele.addEventListener('click', function (e) {
            e.preventDefault();
            const $year = Number(e.target.getAttribute('data-slide-yr'));
            console.log($year);
            $historySlider.slick('slickGoTo', $year - 1);
          });
        }
      });
    }
    historyinitSlider();

    function culturedestroySlider() {
      $hSlider.each(function () {
        const $this = $(this);
        $(window).width() >= 810 && $this.hasClass('slick-initialized')
          ? $this.slick('unslick')
          : '';
      });
    }
    window.onresize = function () {
      culturedestroySlider();
      historyinitSlider();
    };
  },
};

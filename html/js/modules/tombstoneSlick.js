import $ from 'jquery';
import 'slick-slider';

export const tombstoneSlick = {
  tombeles: document.querySelectorAll('.service-years-row'),
  tombul: document.querySelector('ul.service-history-years'),

  init() {
    const __ = this;

    if (!__.tombul) return;

    // tombostone slider starts here //
    const $tombstoneSlider = $(__.tombeles);
    function tombstoneinitSlider() {
      $tombstoneSlider.each(function () {
        const $tombSlider = $(this);
        const sha = $tombSlider.parent().children('.service-history-appends');
        if (window.matchMedia('(max-width: 809px)').matches) {
          if (!$tombSlider.hasClass('slick-initialized')) {
            $tombSlider.slick({
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
              //   appendArrows: sha,
              //   appendDots: sha,
              dotsClass: 'slick-dots service-slick-dots flex',
            });
          }
          __.tombeles.forEach(function (ele) {
            ele.addEventListener('click', function (e) {
              e.preventDefault();
              const $year = Number(e.target.getAttribute('data-slide-yr'));
              $tombSlider.slick('slickGoTo', $year - 1);
            });
          });
        }
      });
    }
    tombstoneinitSlider();

    function tombstonedestroySlider() {
      $tombstoneSlider.each(function () {
        const $this = $(this);
        $(window).width() >= 810 && $this.hasClass('slick-initialized')
          ? $this.slick('unslick')
          : '';
      });
    }

    // tombostone slider ends here //

    window.onresize = function () {
      tombstonedestroySlider();
      tombstoneinitSlider();
    };
  },
};

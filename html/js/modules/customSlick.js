import $, { speed } from 'jquery';
import 'slick-slider';

export const myslick = {
  $tst: document.querySelectorAll('.tst-slider-main'),
  $tstNext: document.querySelectorAll('.tst-slider-next'),
  $hele: document.querySelectorAll('.about-history-slider'),
  $ele: document.querySelector('ul.about-history-years'),
  $carousel: document.querySelectorAll('.carousel-slider-main'),
  $carouselNext: document.querySelectorAll('.carousel-slider-next'),
  $carouselPrev: document.querySelectorAll('.carousel-slider-prev'),
  init() {
    const _$ = this;

    if (!_$.$hele || !_$.$tst) return;

    _$.$tst.forEach((ele) => {
      const $ele = $(ele);
      const $firstbg = $ele.children('.tst-slider-slide').first();
      const $firstcolor = $(ele)
        .children('.tst-slider-slide')
        .first()
        .attr('data-color');
      $firstbg.css({ backgroundColor: $firstcolor });
      const $append = $ele.parent().children('.tst-slider-appends');
      if (!$ele.hasClass('slick-initialized')) {
        $ele.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          arrows: true,
          adaptiveHeight: true,
          prevArrow:
            '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
          nextArrow:
            '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
          dots: true,
          appendArrows: $append,
          appendDots: $append,
          dotsClass: 'slick-dots history-slick-dots flex',
        });
        $ele.on(
          'beforeChange',
          function (event, slick, currentSlide, nextSlide) {
            const slideElement = $(slick.$slides.eq(nextSlide));
            const $color = slideElement
              .find('.tst-slider-slide')
              .attr('data-color');
            slideElement.css({ backgroundColor: $color });
          }
        );
        _$.$tstNext.forEach(function (singleNext) {
          singleNext.addEventListener('click', function () {
            $ele.slick(
              'slickGoTo',
              parseInt($ele.slick('slickCurrentSlide')) + 1
            );
          });
        });
      }
    });

    const $hSlider = $(_$.$hele);
    function historyinitSlider() {
      $hSlider.each(function () {
        const $historySlider = $(this);
        const historyAppend = $historySlider
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
            $historySlider.slick('slickGoTo', $year - 1);
          });
        }
      });
    }
    historyinitSlider();

    function historydestroySlider() {
      $hSlider.each(function () {
        const $this = $(this);
        $(window).width() >= 810 && $this.hasClass('slick-initialized')
          ? $this.slick('unslick')
          : '';
      });
    }
    window.onresize = function () {
      historydestroySlider();
      historyinitSlider();
    };

    // carousel slider starts here //
    _$.$carousel.forEach((ele) => {
      const $ele = $(ele);
      const $firstbg = $ele.children('.carousel-slider-slide').first();
      const $firstcolor = $(ele)
        .children('.carousel-slider-slide')
        .first()
        .attr('data-color');
      $firstbg.css({ backgroundColor: $firstcolor });
      const $append = $ele.parent().children('.carousel-slider-appends');
      if (!$ele.hasClass('slick-initialized')) {
        $ele.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          arrows: true,
          prevArrow:
            '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center"><span class="slick-arrows slick-prev-arrow fa-regular fa-chevron-right"></span></button>',
          nextArrow:
            '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center"><span class="slick-arrows slick-next-arrow fa-regular fa-chevron-right"></span></button>',
          dots: true,
          appendArrows: $append,
          appendDots: $append,
          dotsClass: 'slick-dots carousel-slick-dots flex',
        });
        $ele.on(
          'beforeChange',
          function (event, slick, currentSlide, nextSlide) {
            const slideElement = $(slick.$slides.eq(nextSlide));
            const $color = slideElement
              .find('.carousel-slider-slide')
              .attr('data-color');
            slideElement.css({ backgroundColor: $color });
          }
        );
        _$.$carouselNext.forEach(function (singleNext) {
          singleNext.addEventListener('click', function () {
            $ele.slick(
              'slickGoTo',
              parseInt($ele.slick('slickCurrentSlide')) + 1
            );
          });
        });
        _$.$carouselPrev.forEach(function (singleNext) {
          singleNext.addEventListener('click', function () {
            $ele.slick(
              'slickGoTo',
              parseInt($ele.slick('slickCurrentSlide')) - 1
            );
          });
        });
      }
    });
    // carousel slider ends here //
  },
};

import $ from 'jquery';
export const selectBox = {
  init() {
    jQuery('select').each(function () {
      $(this).parents('.cta-investment-form').find('select').addClass('choose');
    });
    jQuery('select').selectBox({
      keepInViewport: false,
      menuSpeed: 'normal',
      mobile: true,
      hideOnWindowScroll: true,
      menuTransition: 'slide',
    });
    const $eles = [
      ...document.querySelectorAll(
        '.selectBox, .selectBox-dropdown .selectBox-label'
      ),
    ];
    for (let $ele of $eles) {
      $ele.removeAttribute('style');
    }
  },
};

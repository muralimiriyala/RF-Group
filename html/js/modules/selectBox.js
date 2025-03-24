import $ from 'jquery';
export const selectBox = {
  init() {
    jQuery('select').each(function () {
      jQuery(this)
        .parents('.cta-investment-form')
        .find('select')
        .addClass('choose');
    });
    jQuery('.news-post-dropdown select').each(function () {
      jQuery(this).addClass('white-dropdown');
    });
    jQuery('.have-questions-form select').each(function () {
      jQuery(this).addClass('have-dropdown');
    });
    jQuery('.contact-form select').each(function () {
      jQuery(this).addClass('contact');
    });
    jQuery('.dividend-list select').each(function () {
      jQuery(this).addClass('calcultor');
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
    jQuery('select')
      .selectBox()
      .change(function () {
        jQuery(this).parent().children('.frm_error').remove();
      });

    jQuery(document).on('click', '.reset-btn, .start-over', function (e) {
      var calculator = jQuery(this).closest('.future-value-calculator');
      calculator.find('select').each(function () {
        const ele = jQuery(this);
        const firstvalue = ele.prop('selectedIndex', 0).selectBox('refresh');

        let eletext = ele.find('option:first-of-type').val();
        jQuery('.dividend-list span.selectBox-label').text(eletext);
      });
    });
  },
};

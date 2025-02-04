export const menu = {
  $ele: document.querySelector('header.site-header'),
  $nav: document.querySelector('.header_right'),
  $btn: document.querySelector('.humburger-btn'),
  $login: document.querySelector('.user-login'),
  $smallHeader: [
    ...document.querySelectorAll(
      'body.page-template-service-tier-2, body.page-template-tier3-fund-detail, body.page-template-tombostones, body.page-template-about-history, body.page-template-about-team'
    ),
  ],
  $gpages: [
    ...document.querySelectorAll(
      'body.tax-forms_category, body.page-template-resources, body.page-template-calculator-pension, body.page-template-calculator-retirement, body.page-template-calculator-dividend, body.page-template-calculator-margin-interest, body.page-template-calculator-compound-interest, body.page-template-calculator-education, body.tax-reports-category, body.page-template-resource-fees, body.page-template-contact, body.page-template-resource-faq, body.page-template-404'
    ),
  ],
  $site: document.querySelector('main.site-main-cover'),
  init() {
    const _ = this;
    if (!_.$ele) return;

    _.$gpages.forEach(() => {
      const _ = this;
      _.$ele.classList.add('gray-header');
      _.$site.classList.add('site-gray');
    });

    _.$smallHeader.forEach(() => {
      const _ = this;
      _.$ele.classList.add('white-header');
      _.$site.classList.add('site-white');
    });

    // scrolly
    let $scrolly = 0;
    const grayscroll = () => {
      $scrolly = Number(window.scrollY);
      $scrolly > 0
        ? _.$ele.classList.add('gray-header', 'white-bg')
        : _.$ele.classList.remove('gray-header', 'white-bg');
    };
    const whitescroll = () => {
      $scrolly = Number(window.scrollY);
      $scrolly > 0
        ? _.$ele.classList.add('white-bg')
        : _.$ele.classList.remove('white-bg');
    };
    if (!_.$gpages[0]) {
      window.addEventListener('scroll', grayscroll);
      window.addEventListener('load', grayscroll);
    }
    if (_.$gpages[0]) {
      window.addEventListener('scroll', whitescroll);
      window.addEventListener('load', whitescroll);
    }
    // scrolly with

    _.$btn.addEventListener('click', (e) => {
      const __ = e.currentTarget;
      __.classList.toggle('open');
      _.$nav.classList.toggle('open');
    });

    _.$login.addEventListener('click', (e) => {
      const ___ = this;
    });
  },
};

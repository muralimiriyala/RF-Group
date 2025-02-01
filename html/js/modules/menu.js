export const menu = {
  $ele: document.querySelector('header.site-header'),
  $nav: document.querySelector('.header_right'),
  $btn: document.querySelector('.humburger-btn'),
  $login: document.querySelector('.user-login'),
  $tpages: [...document.querySelectorAll('body.page-template-about-bio')],
  $smallHeader: [
    ...document.querySelectorAll(
      'body.page-template-tier3-fund-detail, body.page-template-tombostones, body.page-template-about-history, body.page-template-about-team'
    ),
  ],
  $gpages: [
    ...document.querySelectorAll(
      'body.tax-forms_category, body,page-template-calculator-education, body.tax-reports-category, body.page-template-resource-fees, body.page-template-contact, body.page-template-resource-faq, body.page-template-404'
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
    const scroll = () => {
      $scrolly = Number(window.scrollY);
      $scrolly > 0
        ? _.$ele.classList.add('gray-header', 'white-bg')
        : _.$ele.classList.remove('gray-header', 'white-bg');
    };
    const scroll1 = () => {
      $scrolly = Number(window.scrollY);
      $scrolly > 0
        ? _.$ele.classList.add('white-bg')
        : _.$ele.classList.remove('white-bg');
    };
    if (!_.$gpages[0]) {
      window.addEventListener('scroll', scroll);
      window.addEventListener('load', scroll);
    }
    if (_.$gpages[0]) {
      window.addEventListener('scroll', scroll1);
      window.addEventListener('load', scroll1);
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

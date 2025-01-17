export const menu = {
  $ele: document.querySelector('header.site-header'),
  $nav: document.querySelector('.header_right'),
  $btn: document.querySelector('.humburger-btn'),
  $login: document.querySelector('.user-login'),
  $tpages: [...document.querySelectorAll('body.page-template-about-bio')],
  $smallHeader: [
    ...document.querySelectorAll('body.page-template-about-history'),
  ],
  $gpages: [
    ...document.querySelectorAll(
      'body.page-template-contact, body.page-template-resource-faq, body.page-template-404'
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
        ? _.$ele.classList.add('gray-header')
        : _.$ele.classList.remove('gray-header');
    };
    if (!_.$gpages[0]) {
      window.addEventListener('scroll', scroll);
      window.addEventListener('load', scroll);
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

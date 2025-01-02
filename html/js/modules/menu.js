export const menu = {
  $ele: document.querySelector('header.site-header'),
  $nav: document.querySelector('.header_right'),
  $btn: document.querySelector('.humburger-btn'),
  $login: document.querySelector('.user-login'),
  $tpages: [...document.querySelectorAll('body.page-template-about-bio')],
  $gpages: [
    ...document.querySelectorAll(
      'body.page-template-contact, body.page-template-404'
    ),
  ],
  $site: document.querySelector('main.site-main-cover'),
  init() {
    const _ = this;
    _.$btn.addEventListener('click', (e) => {
      const __ = e.currentTarget;
      __.classList.toggle('open');
      _.$nav.classList.toggle('open');
    });

    _.$login.addEventListener('click', (e) => {
      const ___ = this;
    });

    _.$gpages.forEach((ele) => {
      const _ = this;
      _.$ele.classList.add('gray-header');
      _.$site.classList.add('site-gray');
    });
  },
};

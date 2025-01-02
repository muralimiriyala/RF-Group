import $ from 'jquery';
export const modal = {
  $body: document.querySelector('body'),
  $center: document.querySelector('.modal-main .modal-center'),
  $ele: [
    ...document.querySelectorAll('.appointment'),
    ...document.querySelectorAll('a[href="#appointment"]'),
    ...document.querySelectorAll('.callback'),
    ...document.querySelectorAll('a[href="#callback"]'),
  ],
  $window: document.querySelector('.modal-window'),
  $main: document.querySelector('.modal-main'),
  $close: document.querySelector('.modal-main .modal-close'),
  init() {
    const _ = this;

    let modal = (e) => {
      e.preventDefault();
      e.target.classList.toggle('open');
      if (_.$window) {
        let $overlay = $(_.$window);
        $overlay.fadeToggle(900);
        let $main = $(_.$main);
        $main.fadeToggle(700);
      }
    };
    let id = null;
    _.$ele.forEach((btn) => {
      id = btn.getAttribute('href').substring(1);
      btn.addEventListener('click', modal);
    });

    // Open the modal if URL contains '#{id}'
    if (window.location.href.includes(`#${id}`)) {
      const ele = _.$ele[0];
      if (ele) ele.click();
    }

    if (!_.$close) return false;
    _.$close.addEventListener('click', modal);
    let modalClose = function (e) {
      if (e.target.contains(_.$center)) {
        $(_.$window).fadeOut(700);
        $(_.$main).fadeOut(700);
      }
    };
    _.$body.addEventListener('click', modalClose);
  },
};

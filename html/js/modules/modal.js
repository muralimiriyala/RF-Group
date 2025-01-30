import $ from 'jquery';
export const modal = {
  $body: document.querySelector('body'),
  $center: document.querySelectorAll('.modal-main .modal-center'),
  $ele: [
    ...document.querySelectorAll('.appointment'),
    ...document.querySelectorAll('a[href="#appointment"]'),
    ...document.querySelectorAll('.callback'),
    ...document.querySelectorAll('a[href="#callback"]'),
    ...document.querySelectorAll('.cta-popup'),
    ...document.querySelectorAll('a[href="#cta"]'),
  ],
  $window: document.querySelectorAll('.modal-window'),
  $main: document.querySelectorAll('.modal-main'),
  $close: document.querySelectorAll('.modal-close'),
  init() {
    const _ = this;
    if (!_.$main) return;
    let $overlay = $(_.$window);
    let $main = $(_.$main);

    let id = null;
    let modal = (e) => {
      e.preventDefault();
      e.target.classList.toggle('open');
      $overlay.fadeIn(900);
      id = e.target ? e.target.getAttribute('href').substring(1) : '';
      let $show = $(document.querySelector(`.modal-main[id=${id}]`));
      $show.fadeIn(700);
    };

    _.$ele.forEach((btn) => {
      btn.addEventListener('click', modal);
    });

    // Open the modal if URL contains '#{id}'
    if (window.location.href.includes(`#${id}`)) {
      const ele = _.$ele[0];
      if (ele) ele.click();
    }

    // close button
    let modalClose = (e) => {
      e.preventDefault();
      $overlay.fadeOut(900);
      $main.fadeOut(700);
    };
    _.$close.forEach(function (ele) {
      ele.addEventListener('click', modalClose);
    });

    // click on body tag
    let modalbodyClose = function (e) {
      _.$center.forEach((ele) => {
        if (e.target.contains(ele)) {
          $overlay.fadeOut(700);
          $main.fadeOut(700);
        }
      });
    };
    _.$body.addEventListener('click', modalbodyClose);
  },
};

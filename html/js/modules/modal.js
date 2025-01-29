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
  $close: document.querySelectorAll('.modal-close'),
  init() {
    const _ = this;
    if (!_.$main) return;

    let id = null;
    let modal = (e) => {
      e.preventDefault();
      e.target.classList.toggle('open');

      let $overlay = $(_.$window);
      $overlay.fadeToggle(900);
      id = e.target ? e.target.getAttribute('href').substring(1) : 'mu';
      console.log(id);
      let $main = $(document.querySelector(`.modal-main[id=${id}]`));
      $main.fadeToggle(700);
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
    _.$close.forEach(function (ele) {
      ele.addEventListener('click', modal);
    });

    // click on body tag
    let modalClose = function (e) {
      if (e.target.contains(_.$center)) {
        $(_.$window).fadeOut(700);
        $(_.$main).fadeOut(700);
      }
    };
    _.$body.addEventListener('click', modalClose);
  },
};

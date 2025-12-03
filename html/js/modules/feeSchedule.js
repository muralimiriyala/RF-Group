import $ from 'jquery';
export const feeSchedule = {
  $el: document.querySelector('ul.fee-schd-links'),
  $rows: document.querySelectorAll('.fee-schd-row'),
  $btn: document.querySelector('.fee-schd-mbl-btn'),
  init() {
    const __ = this;
    const toggle = (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        e.currentTarget.querySelectorAll('a').forEach((ele) => {
          ele.classList.remove('current');
        });
        e.target.classList.toggle('current');
        const $h = e.target.getAttribute('href').substring(1);
        __.$rows.forEach((ele) => {
          $(ele).fadeOut(100);
        });
        const row = document.querySelector(`.fee-schd-row[id=${$h}]`);
        if (row) {
          $(row).fadeIn(800);
        }
        if (window.matchMedia('(min-width: 759px)').matches) {
          __.$btn.classList.remove('current');
          $(__.$el).slideUp(800);
          const $text = e.target.textContent;
          __.$btn.querySelector('span').textContent = $text;
        }
      }
    };
    if (!__.$el) return;
    __.$el.addEventListener('click', toggle);
    const mbltoggle = (e) => {
      e.currentTarget.classList.toggle('current');
      $(__.$el).slideToggle(800);
    };
    __.$btn.addEventListener('click', mbltoggle);
  },
};

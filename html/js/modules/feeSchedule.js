import $ from 'jquery';
export const feeSchedule = {
  $el: document.querySelector('ul.fee-schd-links'),
  $rows: document.querySelectorAll('.fee-schd-row'),
  $btn: document.querySelector('.fee-schd-mbl-btn'),
  init() {
    const __ = this;
    if(__.$el) return
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
      }
    };
    __.$el.addEventListener('click', toggle);
    const mbltoggle = (e) => {
      e.currentTarget.classList.toggle('current');
      $(__.$el).slideToggle(800);
    };
    __.$btn.addEventListener('click', mbltoggle);
  },
};
import $ from 'jquery';
export const feeSchedule = {
  $el: document.querySelector('ul.fee-schd-links'),
  $rows: document.querySelectorAll('.fee-schd-row'),
  init() {
    const __ = this;
    const toggle = (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        e.currentTarget.querySelectorAll('a').forEach((ele) => {
          ele.classList.remove('current');
        });
        e.target.classList.toggle('current');
        const $h = e.target.getAttribute('href');
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
  },
};

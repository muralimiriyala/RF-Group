import $ from 'jquery';

export const uicategory = {
  $ele: document.querySelector('ul.ui-tier-2-links'),
  $rows: document.querySelectorAll('.ui-tier-2-row'),
  $anims: document.querySelectorAll('[data-animate]'),
  init() {
    const __ = this;
    __.$ele.children[0].querySelector('a').classList.add('current');
    __.$ele.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        __.$anims.forEach((ele) => {
          const timeline = ele.tl;
          if (timeline) {
            timeline.play();
          }
        });
        __.$ele.querySelectorAll('a').forEach((ele) => {
          ele.classList.remove('current');
        });
        e.target.classList.toggle('current');
        const id = e.target.getAttribute('href').substring(1);
        __.$rows.forEach((ele) => {
          $(ele).hide();
        });
        const tier = document.querySelector(`.ui-tier-2-row[id=${id}]`);
        $(tier).fadeIn(800);
      }
    });
  },
};

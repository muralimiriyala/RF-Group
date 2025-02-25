import $ from 'jquery';

export const resforms = {
  $header: document.querySelector('header'),
  $el: document.querySelectorAll('ul.form-js-links'),
  $rows: document.querySelectorAll('.doc-form-ids'),
  $anims: document.querySelectorAll('[data-animate]'),

  init() {
    const __ = this;
    if (!__.$el) return;

    let hash = window.location.hash.substring(1);
    if (hash !== '') {
      let activeLinks = [];
      __.$el.forEach((ele) => {
        const links = ele.querySelectorAll('a');
        activeLinks.push(links);
      }),
        activeLinks.forEach((activeLinknodes) => {
          activeLinknodes.forEach((activeLink) => {
            if (activeLink.href.endsWith(`#${hash}`)) {
              __.$el.forEach((elelink) => {
                elelink.querySelectorAll('a').forEach((ele) => {
                  ele.classList.remove('mPS2id-clicked');
                });
              });
              activeLink.classList.add('mPS2id-clicked');
              const activeRow = document.getElementById(hash);
              if (activeRow) {
                $('html, body').animate(
                  {
                    scrollTop:
                      $(activeRow).offset.top -
                      __.$header.getBoundingClientRect().height +
                      40,
                  },
                  500
                );
              }
            }
          });
        });
    }
  },
};

import $ from 'jquery';

export const reports = {
  $header: document.querySelector('header'),
  $el: document.querySelector('ul.report-links'),
  $rows: document.querySelectorAll('.doc-repo-ids'),
  $anims: document.querySelectorAll('[data-animate]'),

  init() {
    const __ = this;
    if (!__.$el) return;

    document.querySelector('ul.report-links li a').classList.add('current');

    let hash = window.location.hash.substring(1);
    if (hash !== '') {
      const activeLinks = __.$el.querySelectorAll('a');
      activeLinks.forEach((activeLink) => {
        if (activeLink.href.endsWith(`#${hash}`)) {
          __.$el.querySelectorAll('a').forEach((ele) => {
            ele.classList.remove('current');
          });
          activeLink.classList.add('current');
          __.$rows.forEach((ele) => $(ele).hide());
          const activeRow = document.getElementById(hash);
          if (activeRow) {
            setTimeout(() => {
              $('html, body').animate(
                {
                  scrollTop:
                    $(activeRow).offset.top -
                    __.$header.getBoundingClientRect().height,
                },
                500
              );
              $(activeRow).fadeIn(800); // Show matching row
            }, 0);
          }
        }
      });
    }

    const toggle = (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        __.$anims.forEach((ele) => {
          const timeline = ele.tl;
          if (timeline) {
            timeline.play();
          }
        });

        let targetId = e.target.getAttribute('href').substring(1);

        __.$el
          .querySelectorAll('a')
          .forEach((ele) => ele.classList.remove('current'));

        e.target.classList.add('current');

        __.$rows.forEach((ele) => $(ele).fadeOut(100));

        const row = document.getElementById(targetId);
        if (row) {
          setTimeout(() => {
            $('html, body').animate(
              {
                scrollTop:
                  $(row).offset.top - __.$header.getBoundingClientRect().height,
              },
              500
            );
            $(row).fadeIn(800); // Show matching row
          }, 0);
        }
      }
    };
    __.$el.addEventListener('click', toggle);
  },
};

import $ from 'jquery';

export const reports = {
  $header: document.querySelector('header'),
  $el: document.querySelectorAll('ul.dist-js-links'),
  $rows: document.querySelectorAll('.doc-repo-ids'),
  $anims: document.querySelectorAll('[data-animate]'),

  init() {
    const __ = this;
    if (!__.$el) return;

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

        __.$el.forEach((elelink) => {
          elelink
            .querySelectorAll('a')
            .forEach((ele) => ele.classList.remove('current'));
        });

        e.target.classList.add('current');

        __.$rows.forEach((ele) => $(ele).fadeOut(100));

        const row = document.getElementById(targetId);
        if (row) {
          setTimeout(() => {
            $('html, body').animate(
              {
                scrollTop:
                  $(row).offset.top -
                  __.$header.getBoundingClientRect().height +
                  40,
              },
              500
            );
            $(row).fadeIn(800); // Show matching row
          }, 0);
        }
      }
    };
    __.$el.forEach((ele) => {
      ele.children[0].querySelector('a').classList.add('current');
      ele.addEventListener('click', toggle);
    });

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
                  ele.classList.remove('current');
                });
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
                        __.$header.getBoundingClientRect().height +
                        40,
                    },
                    500
                  );
                  $(activeRow).fadeIn(800); // Show matching row
                }, 0);
              }
            }
          });
        });
    }
  },
};

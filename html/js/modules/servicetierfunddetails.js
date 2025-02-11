import $ from 'jquery';
export const servicetierfunddetails = {
  $lists: document.querySelectorAll('.asset-performance-list'),
  $ul: document.querySelectorAll('ul.ui-years-fund-details'),
  $anims: document.querySelectorAll('[data-animate]'),

  fund() {
    const ___ = this;
    ___.$lists[0]?.classList.add('current');
    ___.$lists.forEach((ele) =>
      ele.addEventListener('click', (e) => {
        ___.$lists.forEach((ele) => ele.classList.remove('current'));
        e.currentTarget.classList.add('current');
        let $name = e.currentTarget.getAttribute('data-name');
        document
          .querySelectorAll(`.asset-performance-graph`)
          .forEach((ele) => $(ele).hide(0));
        $(
          document.querySelector(
            `.asset-performance-graph[data-value="${$name}"]`
          )
        ).fadeIn(800);
      })
    );
    ___.$ul.forEach((ele) => {
      ele.children[0].querySelector('a').classList.add('current');
      ele.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          e.preventDefault();
          ___.$anims.forEach((ele) => {
            const timeline = ele.tl;
            if (timeline) {
              timeline.play();
            }
          });

          ___.$ul.forEach((ele) => {
            ele.querySelectorAll('a').forEach((a) => {
              a.classList.remove('current');
            });
          });
          e.target.classList.add('current');
          let $id = e.target.getAttribute('href').substring(1);
          document
            .querySelectorAll(`.ui-row-fund-details`)
            .forEach((ele) => $(ele).hide(0));
          $(document.querySelector(`.ui-row-fund-details[id="${$id}"]`)).fadeIn(
            800
          );
        }
      });
    });
  },
};

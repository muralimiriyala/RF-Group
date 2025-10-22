import $ from 'jquery';
export const megamenu = {
  $navfor: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul > li > a'
  ),
  init() {
    const __ = this;
    const desktopmenu = () => {
      if (__.$navfor[0]) {
        __.$navfor[0].parentElement.classList.add('hover');
      }

      //mouse enter
      __.$navfor.forEach((ele) => {
        ele.addEventListener('mouseenter', function (e) {
          let show = e.currentTarget.parentElement.querySelector('ul');
          let currentLi = e.currentTarget.parentElement;
          let prevLi = Array.from(
            e.currentTarget.parentElement.parentElement.children
          );

          if (prevLi !== currentLi) {
            // hide except hover
            prevLi.forEach((ele) => {
              ele.classList.remove('hover');
            });
            prevLi.forEach((ele) => {
              ele.children[1].style.display = 'none';
            });
          }
          e.target.parentElement.classList.add('hover');
          $(show).fadeIn(200);
        });
      });
    };
    const media = window.matchMedia('(min-width: 1024px)');
    if (media.matches) {
      desktopmenu();
    }
    media.addEventListener('change', (event) => {
      if (event.matches) {
        desktopmenu();
      } else {
      }
    });
  },
};

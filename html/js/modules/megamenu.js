import $ from 'jquery';
export const megamenu = {
  $navfor: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul > li > a'
  ),
  $navOdd: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul > li.odd > a'
  ),
  $navul: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul > li > ul'
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
            prevLi.forEach((ele, i) => {
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
      // step1 for odd lis enter into mouse
      __.$navOdd.forEach((ele, i) => {
        ele.addEventListener('mouseenter', function (e) {
          let currentLi = e.currentTarget.parentElement;
          let prevLi = Array.from(
            e.currentTarget.parentElement.parentElement.children
          );
          if (prevLi !== currentLi) {
            prevLi.forEach((ele, i) => {
              if (i % 2 === 1) {
                ele.classList.add('siblingsme');
              }
            });
          }
          e.target.parentElement.classList.remove('siblingsme');
        });
      });
      //mouse enter for ul starts
      if (__.$navul && __.$navul.length) {
        __.$navul.forEach((ul) => {
          ul.addEventListener('mousemove', (e) => {
            __.$navfor.forEach((ele) => {
              ele.parentElement.classList.remove('siblingsme');
            });
          });
        });
      }
      //mouse enter for ul ends
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

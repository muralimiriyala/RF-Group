import $ from 'jquery';
export const megamenu = {
  $navforlinks: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > a'
  ),
  $navfor: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul'
  ),
  init() {
    const __ = this;
    const desktopmenu = () => {
      __.$navfor.forEach((ulele) => {
        ulele.children[0].classList.add('hover');

        ulele.querySelectorAll('li').forEach((eleHasClass) => {
          if (eleHasClass.classList.contains('current_page_item')) {
            eleHasClass.parentElement.querySelectorAll('li').forEach((ele) => {
              ele
                .querySelectorAll('ul')
                .forEach((ul) => (ul.style.display = 'none'));
              ele.classList.remove('hover');
            });
            eleHasClass.classList.add('hover');
            $(eleHasClass.querySelector('ul')).fadeIn(200);
          }
        });
        //mouse enter
        ulele.querySelectorAll('a').forEach((ele) => {
          ele.addEventListener('mouseenter', function (e) {
            let show = e.target.parentElement.querySelector('ul');
            let currentLi = e.target.parentElement;
            let prevLi = ulele.children;
            if (prevLi !== currentLi) {
              // hide except hover
              currentLi.parentElement.querySelectorAll('li').forEach((ele) => {
                ele.classList.remove('hover');
                ele
                  .querySelectorAll('ul')
                  .forEach((ul) => (ul.style.display = 'none'));
              });
            }
            e.target.parentElement.classList.add('hover');
            jQuery(show).fadeIn(200);
          });
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

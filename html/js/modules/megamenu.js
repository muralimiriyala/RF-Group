import $ from 'jquery';
export const megamenu = {
  $navforlinks: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > a'
  ),
  $navfor: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul'
  ),
  $navul: document.querySelectorAll(
    'nav.navigation ul.menu > li.nav-item-for > ul > li > ul'
  ),
  init() {
    const __ = this;
    const desktopmenu = () => {
      __.$navfor.forEach((ulele) => {
        //mouse enter
        ulele.querySelectorAll('a').forEach((ele) => {
          ele.addEventListener('mouseenter', function (e) {
            let show = e.target.parentElement.querySelector('ul');
            __.$navul.forEach((ele) => {
              ele.parentElement.classList.remove('hover');
              jQuery(ele).hide(0);
            });
            e.target.parentElement.classList.add('hover');
            jQuery(show).fadeIn(600);
          });
        });
        //mouse leave
        __.$navforlinks.forEach((ele) => {
          ele.addEventListener('mouseenter', function (e) {
            $(ulele.children[0].querySelector('ul')).show();
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

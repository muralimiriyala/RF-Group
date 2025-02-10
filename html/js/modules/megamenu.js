import $ from 'jquery';
export let megamenu = {
  $navfor: document.querySelectorAll(
    'ul.main_menu > li.nav-item-for > ul > li.menu-item-has-children > a'
  ),
  $navul: document.querySelectorAll(
    'ul.main_menu > li.nav-item-for > ul > li.menu-item-has-children > ul'
  ),
  init() {
    const __ = this;
    function desktopmenu() {
      __.$navfor.forEach((ele) => {
        ele.addEventListener('mouseenter', function (e) {
          let show = e.target.parentElement.querySelector('ul');
          __.$navul.forEach((ele) => $(ele).hide(0));
          $(show).fadeIn(400);
        });
      });
    }
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

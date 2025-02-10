import $ from 'jquery';
export let megamenu = {
  $navfor: document.querySelectorAll(
    'ul.main_menu > li.nav-item-for > ul > li > a:not(.text-link)'
  ),
  init() {
    const __ = this;
    __.$navfor.forEach((ele) => {
      ele.addEventListener('mouseover', function (e) {
        let show = e.target.closest('ul');
        $(show).fadeIn(800);
        console.log();
      });
    });
  },
};

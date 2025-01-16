import gsap from 'gsap';

var DrawSVGPlugin = DrawSVGPlugin || window.DrawSVGPlugin;
gsap.registerPlugin(DrawSVGPlugin);

export const gsapanim = {
  iconanims: document.querySelectorAll('[data-animate*="ui-icon"]'),
  init() {
    const _ = this;
    _.iconanims.forEach(function (ele) {
      const $duration = Number(ele.getAttribute('data-duration')) / 3000 || 0;
      const $paths = ele.querySelectorAll('path');
      var tl = gsap.timeline({
        paused: true,
      });
      $paths.forEach(function ($path) {
        tl.fromTo(
          $path,
          { drawSVG: '0%' },
          { drawSVG: '100%', duration: $duration, ease: 'power1.out' }
        );
      });
      ele.tl = tl;
    });
  },
};

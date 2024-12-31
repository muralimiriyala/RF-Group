import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const gsapscroll = {
  header: document.querySelector('header'),
  uiele: document.querySelectorAll('[data-animate]'),
  init() {
    const __ = this;
    const $height = Math.ceil(__.header.getBoundingClientRect().height);
    const $perce = Math.ceil(($height / 1000) * 100);
    const $top = 100 - $perce;
    const $bottom = $perce;

    __.uiele.forEach((ele) => {
      const timeline = ele.tl;
      gsap.to(ele, {
        scrollTrigger: {
          trigger: ele,
          start: `${$top}% bottom`,
          end: `bottom 22%`,
          scrub: true,
          onEnter: function () {
            ele.classList.add('visible');
            timeline.play();
          },
          onEnterBack: function () {
            ele.classList.add('visible');
            timeline.play();
          },
          onLeave: function () {
            timeline.pause();
          },
        },
      });
    });
  },
};

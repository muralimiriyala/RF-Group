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
      const $animateType = ele.getAttribute('data-animate');

      gsap.to(ele, {
        scrollTrigger: {
          trigger: ele,
          start: `${$top}% bottom`,
          end: `bottom ${$bottom}%`,
          scrub: true,
          toggleClass: 'visible',
          onEnter: () => {
            timeline?.play();
            $animateType === 'counter' ? ele.counter?.start() : '';
          },
          onEnterBack: () => {
            timeline?.play();
            $animateType === 'counter' ? ele.counter?.start() : '';
          },
          onLeave: () => {
            timeline?.pause();
            $animateType === 'counter' ? ele.counter?.pauseResume() : '';
          },
        },
      });
    });
  },
};

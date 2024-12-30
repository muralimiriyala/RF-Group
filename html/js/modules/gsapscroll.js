import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const gsapscroll = {
  uiele: document.querySelectorAll('[data-animate*="ui"]'),
  init() {
    const __ = this;
    __.uiele.forEach((ele) => {
      const timeline = ele.tl;
      gsap.to(ele, {
        scrollTrigger: {
          trigger: ele,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: function () {
            // ele.classList.add('visible');
            timeline.play();
          },
          onEnterBack: function () {
            // ele.classList.add('visible');
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

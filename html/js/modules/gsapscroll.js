import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const gsapscroll = {
  header: document.querySelector('header'),
  uiele: document.querySelectorAll('[data-animate]'),
  init() {
    const __ = this;
    if (!__.header) return;

    const $height = Math.ceil(__.header?.getBoundingClientRect().height);
    const $perce = Math.ceil(($height / 1000) * 100);
    const $top = 100 - $perce;
    const $bottom = $perce;

    __.uiele.forEach((ele) => {
      const timeline = ele.tl;
      const $animateType = ele.getAttribute('data-animate');
      const $animateNames = $animateType.split(' ');
      const $duration = ele.getAttribute('data-duration');
      gsap.to(ele, {
        scrollTrigger: {
          trigger: ele,
          start: `${$top}% bottom`,
          end: `bottom ${$bottom}%`,
          scrub: true,
          // once: true,
          // toggleClass: 'visible',
          onEnter: () => {
            $animateNames.forEach((className) => {
              className
                ? ele.classList.add(className, 'visible')
                : ele.classList.add('visible');
            });
            timeline?.play();
            $animateType === 'counter' ? ele.counter?.start() : '';
            if (ele.classList.contains('counter-back')) {
              setTimeout(function () {
                ele.style.opacity = 1;
              }, $duration);
            }
          },
          onRefresh: () => {
            // $animateNames.forEach((className) => {
            //   className
            //     ? ele.classList.add(className, 'visible')
            //     : ele.classList.add('visible');
            // }); // creating issue here
            timeline?.play();
            $animateType === 'counter' ? ele.counter?.start() : '';
            if (ele.classList.contains('counter-back')) {
              setTimeout(function () {
                ele.style.opacity = 1;
              }, $duration);
            }
          },
          onEnterBack: () => {
            $animateNames.forEach((className) => {
              className
                ? ele.classList.add(className, 'visible')
                : ele.classList.add('visible');
            });
            timeline?.play();
            $animateType === 'counter' ? ele.counter?.start() : '';
            if (ele.classList.contains('counter-back')) {
              setTimeout(function () {
                ele.style.opacity = 1;
              }, $duration);
            }
          },
          onLeave: () => {
            $animateNames.forEach((className) => {
              className
                ? ele.classList.remove(className, 'visible')
                : ele.classList.remove('visible');
            });
            timeline?.pause();
            $animateType === 'counter' ? ele.counter?.pauseResume() : '';
            if (ele.classList.contains('counter-back')) {
              setTimeout(function () {
                ele.style.opacity = 0;
              }, $duration);
            }
          },
        },
      });
    });
  },
};

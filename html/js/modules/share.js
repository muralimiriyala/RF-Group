import { root } from 'postcss';

// named export module
export const share = {
  init() {
    function stickyShare(entries, observer) {
      console.log(entries[0]);
    }
    let options = {
      root: null,
    };
    const observer = new IntersectionObserver(stickyShare, options);
    const targetElement = document.querySelectorAll('.sticky__share');
    targetElement.forEach((targetEle) => {
      observer.observe(targetEle);
    });
  },
};

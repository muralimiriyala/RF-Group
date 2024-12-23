// named export module
export const share = {
  init() {
    function stickyShare(entries, observer) {
      entries.forEach((entry) => {
        const ele = entry.target;
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          ele.classList.add('sticky');
        } else {
          ele.classList.remove('sticky');
        }
      });
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

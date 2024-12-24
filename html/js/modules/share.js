// named export module
export const share = {
  $ele: document.querySelector('header'),
  $sticky: document.querySelectorAll('.sticky__share'),
  $share: document.querySelector('.share-icons'),
  init() {
    let scroll = Math.floor(window.scrollY);
    const _ = this;
    const $height = _.$ele.getBoundingClientRect().height;
    const $iconsHeight = _.$share.getBoundingClientRect().height;

    function stickyShare(entries, observer) {
      entries.forEach((entry) => {
        const ele = entry.target;

        if (entry.isIntersecting) {
          // When the element intersects, add the scroll event listener
          const myscroll = () => {
            scroll = Math.floor(window.scrollY);
            if (
              scroll >= ele.offsetTop - $height &&
              scroll <=
                ele.offsetTop - $height + ele.clientHeight - $iconsHeight
            ) {
              ele.classList.add('sticky');
            } else {
              ele.classList.remove('sticky');
            }
          };
          myscroll();

          document.addEventListener('scroll', myscroll);

          // Stop observing the element once we've added the scroll event listener
          observer.unobserve(entry.target);
        }
      });
    }

    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(stickyShare, options);

    _.$sticky.forEach((targetEle) => {
      observer.observe(targetEle); // observing each element
    });
  },
};

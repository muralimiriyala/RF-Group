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
    function stickyShare(entries) {
      entries.forEach((entry) => {
        const ele = entry.target;
        function myscroll() {
          scroll = Math.floor(window.scrollY);
          if (
            scroll >= ele.offsetTop - $height &&
            scroll <= ele.offsetTop - $height + ele.clientHeight - $iconsHeight
          ) {
            ele.classList.add('sticky');
            _.$share.style.top = `${$height}px`;
          } else {
            ele.classList.remove('sticky');
            _.$share.style.top = `${0}px`;
          }
        }
        document.addEventListener('scroll', myscroll);

        // console.log(ele.offsetTop);
        // console.log(ele.clientHeight);
        // console.log(ele.offsetTop + ele.clientHeight, 'ele height');
        // const eleTop = Math.floor(entry.boundingClientRect.top);
        // if (entry.isIntersecting) {
        //   ele.classList.add('sticky');
        // } else if (!entry.isIntersecting) {
        //   ele.classList.remove('sticky');
        // }
        // if (ele === nextele) {
        //   if (entry.isIntersecting) {
        //     ele.classList.remove('sticky');
        //   }
        // }
      });
    }
    let options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(stickyShare, options);
    const targetElement = _.$sticky;
    targetElement.forEach((targetEle) => {
      observer.observe(targetEle);
    });
  },
};

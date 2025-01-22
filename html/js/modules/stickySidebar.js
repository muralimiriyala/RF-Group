import 'sticksy';
// named export module
export const sticky = {
  $ele: document.querySelector('header'),
  $sticky: document.querySelectorAll('.is-sticky'),
  init() {
    const _ = this;
    if (!_.$sticky) return;
    const $height = _.$ele.getBoundingClientRect().height;
    _.$sticky.forEach((ele) => {
      let $ptop = null;
      if (!ele.classList.contains('social-share-main')) {
        $ptop = parseInt(
          window.getComputedStyle(ele.parentElement.parentElement).paddingTop
        );
      }
      new Sticksy(ele, {
        topSpacing: $height + $ptop,
        listen: true,
      });
    });
  },
};

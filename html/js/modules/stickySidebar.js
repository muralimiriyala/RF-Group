// named export module
export const sticky = {
  $ele: document.querySelector('header'),
  $sticky: document.querySelectorAll('.is-sticky'),
  init() {
    const _ = this;
    if (!_.$sticky) return;
    const $height = _.$ele.getBoundingClientRect().height;
    _.$sticky.forEach((ele) => {
      new Sticksy(ele, {
        topSpacing: $height,
        listen: true,
      });
    });
  },
};

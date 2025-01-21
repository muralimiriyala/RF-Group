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
      const $ptop = parseInt(
        window.getComputedStyle(ele.parentElement.parentElement).paddingTop
      );
      console.log($ptop);
      new Sticksy(ele, {
        topSpacing: $height + $ptop,
        listen: true,
      });
    });
  },
};

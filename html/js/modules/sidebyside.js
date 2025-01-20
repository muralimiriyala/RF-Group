export const sidebyside = {
  $blue: document.querySelector('.blue .side-by-ipad'),
  $purple: document.querySelector('.purple .side-by-ipad'),
  $arrow: document.querySelector('.side-by-arrow'),
  init() {
    const _ = this;
    _.$blue.addEventListener('mouseenter', (e) => {
      _.$arrow.classList.add('blue-hover');
    });
    _.$blue.addEventListener('mouseleave', (e) => {
      _.$arrow.classList.remove('blue-hover');
    });
    // _.$purple.addEventListener('mouseenter', (e) => {
    //   _.$arrow.classList.add('purple');
    // });
    // _.$purple.addEventListener('mouseleave', (e) => {
    //   _.$arrow.classList.remove('purple');
    // });
    ['mouseenter', 'mouseleave'].forEach((event) => {
      _.$purple.addEventListener(event, () => {
        _.$arrow.classList.toggle('purple-hover', event === 'mouseenter');
      });
    });
  },
};

export const sidebyside = {
  $blue: document.querySelector('.blue .side-by-ipad'),
  $purple: document.querySelector('.purple .side-by-ipad'),
  $arrow: document.querySelector('.side-by-arrow'),
  init() {
    const _ = this;
    _.$blue.addEventListener('mouseenter', (e) => {
      e.currentTarget.classList.add('blue-hover');
      _.$arrow.classList.add('blue-hover');
    });
    _.$blue.addEventListener('mouseleave', (e) => {
      e.currentTarget.classList.remove('blue-hover');
      _.$arrow.classList.remove('blue-hover');
    });
    _.$purple.addEventListener('mouseenter', (e) => {
      e.currentTarget.classList.add('purple-hover');
      _.$arrow.classList.add('purple-hover');
    });
    _.$purple.addEventListener('mouseleave', (e) => {
      e.currentTarget.classList.remove('purple-hover');
      _.$arrow.classList.remove('purple-hover');
    });
    // ['mouseenter', 'mouseleave'].forEach((event) => {
    //   _.$purple.addEventListener(event, () => {
    //     _.$arrow.classList.toggle('purple-hover', event === 'mouseenter');
    //   });
    // });
  },
};

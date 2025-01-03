import { CountUp } from 'countup.js';
export const counter = {
  $ele: document.querySelectorAll('[data-count-to]'),
  init() {
    const _ = this;
    if (!_.$ele) return;
    _.$ele.forEach(($el) => {
      const $target = $el.getAttribute('id');
      $el.counter = new CountUp(
        `${$target}`,
        $el.getAttribute('data-count-to'),
        {
          startVal: 0,
          duration: Number(($el.getAttribute('data-duration') / 1000) * 1),
        }
      );
    });
  },
};

import { CountUp } from 'countup.js';
export const counter = {
  $ele: document.querySelectorAll('[data-count-to]'),
  init() {
    const _ = this;
    if (!_.$ele) return;
    _.$ele.forEach(($el) => {
      const $target = $el.getAttribute('id');
      const $duration = $el.getAttribute('data-duration');
      const $back = [...$el.parentElement.querySelectorAll('.counter-back')];
      $el.counter = new CountUp(
        `${$target}`,
        $el.getAttribute('data-count-to'),
        {
          startVal: 0,
          duration: parseInt(($el.getAttribute('data-duration') / 1000) * 1),
        }
      );
      setTimeout(function () {
        $back.forEach(($ele) => {
          $ele.style.opacity = '1';
        });
      }, $duration);
    });
  },
};

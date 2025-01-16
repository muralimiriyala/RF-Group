import { CountUp } from 'countup.js';

export const counter = {
  $ele: document.querySelectorAll('[data-count-to]'),
  $back: document.querySelectorAll('.counter-back'),
  init() {
    const _ = this;
    if (!_.$ele) return;

    _.$ele.forEach(($el) => {
      const $target = $el.getAttribute('id');
      const $duration = parseInt(
        ($el.getAttribute('data-duration') / 1000) * 1
      );

      const countTo = parseFloat($el.getAttribute('data-count-to'));
      const decimalPlaces =
        countTo % 1 !== 0 ? countTo.toString().split('.')[1].length : 0;

      $el.counter = new CountUp(`${$target}`, countTo, {
        startVal: 0,
        duration: $duration,
        decimalPlaces,
      });
      setTimeout(() => {
        console.log($el.textContent);
      }, 5000);
    });
    _.$back.forEach((ele) => {
      console.log(ele);
    });
  },
};

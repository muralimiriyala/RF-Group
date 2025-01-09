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

      // Parse data-count-to as a number to check for decimals
      const countTo = parseFloat($el.getAttribute('data-count-to'));
      const decimalPlaces =
        countTo % 1 !== 0 ? countTo.toString().split('.')[1].length : 0;

      $el.counter = new CountUp(`${$target}`, countTo, {
        startVal: 0,
        duration: parseInt(($el.getAttribute('data-duration') / 1000) * 1),
        decimalPlaces, // Ensure decimal precision
      });

      // Start the counter
      $el.counter.start();

      // Set opacity for the background elements after the duration
      setTimeout(() => {
        $back.forEach(($ele) => {
          $ele.style.opacity = '1';
        });
      }, $duration);
    });
  },
};

import { CountUp } from 'countup.js';

export const counter = {
  $ele: document.querySelectorAll('[data-count-to]'),
  init() {
    const _ = this;
    if (!_.$ele) return;

    _.$ele.forEach(($el) => {
      const $target = $el.getAttribute('id');
      const $duration = parseInt($el.getAttribute('data-duration'));

      const countTo = parseFloat($el.getAttribute('data-count-to'));
      const decimalPlaces =
        countTo % 1 !== 0 ? countTo.toString().split('.')[1].length : 0;

      $el.counter = new CountUp(`${$target}`, countTo, {
        startVal: 0,
<<<<<<< HEAD
        duration: parseInt(($el.getAttribute('data-duration') / 1000) * 1),
=======
        duration: parseInt(($duration / 1000) * 1),
>>>>>>> 49324c6718b9e33e7c459ab1852b39edbb62e9a4
        decimalPlaces,
      });
    });
  },
};

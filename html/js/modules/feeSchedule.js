export const feeSchedule = {
  $el: document.querySelector('ul.fee-schd-links'),
  init() {
    const __ = this;
    const toggle = (e) => {};
    __.$el.addEventListener('click', toggle);
  },
};

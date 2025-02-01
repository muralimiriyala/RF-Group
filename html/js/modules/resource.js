import $ from 'jquery';
export const resource = {
  $el: document.querySelector('ul.res-js-links'),
  $btn: document.querySelector('.report-category-btn'),
  init() {
    const __ = this;

    // Mobile toggle
    const mbltoggle = (e) => {
      e.currentTarget.classList.toggle('current');
      $(__.$el).slideToggle(800);
    };
    if (!__.$btn) return;
    __.$btn.addEventListener('click', mbltoggle);
  },
};

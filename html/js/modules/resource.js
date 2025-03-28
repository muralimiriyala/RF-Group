import $ from 'jquery';
export const resource = {
  $el: document.querySelectorAll('ul.target-js-links'),
  $btn: document.querySelector('.report-category-btn'),
  init() {
    const __ = this;
    if (!__.$el) return;

    if (window.matchMedia('(max-width: 809px)').matches) {
      __.$el.forEach((ele) => {
        ele.addEventListener('click', function (e) {
          if (e.target.tagName === 'A') {
            e.target.classList.toggle('current');
            __.$btn.classList.remove('current');
            __.$btn.querySelector('span').textContent = e.target.textContent;
            $(ele).slideUp(800);
          }
        });
      });
    }
    // Mobile toggle
    const mbltoggle = (e) => {
      e.currentTarget.classList.toggle('current');
      __.$el.forEach((ele) => {
        $(ele).slideToggle(800);
      });
    };
    if (!__.$btn) return;
    __.$btn.addEventListener('click', mbltoggle);
  },
};

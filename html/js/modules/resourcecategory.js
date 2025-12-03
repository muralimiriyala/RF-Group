import $ from 'jquery';
export const resourcecategory = {
  $el: document.querySelector('ul.form-links'),
  $btn: document.querySelector('.form-category-btn'),
  init() {
    const __ = this;
    if (!__.$el) return;

    if (window.matchMedia('(min-width: 759px)').matches) {
      __.$el.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          e.target.classList.toggle('current');
          __.$btn.classList.remove('current');
          __.$btn.querySelector('span').textContent = e.target.textContent;
          $(__.$el).slideUp(800);
        }
      });
    }

    const frmtoggle = (e) => {
      e.currentTarget.classList.toggle('current');
      $(__.$el).slideToggle(800);
    };
    if (!__.$btn) return;
    __.$btn.addEventListener('click', frmtoggle);
  },
};

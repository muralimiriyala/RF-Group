export const search = {
  form: document.querySelector('form.srch-form'),
  btn: document.querySelector('.btn-srch'),
  init() {
    const _ = this;
    _.btn.addEventListener('click', function (e) {
      e.preventDefault();
      _.form.classList.toggle('open');
    });
  },
};

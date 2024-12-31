export const search = {
  $bdy: document.querySelector('body'),
  form: document.querySelector('form.srch-form'),
  btn: document.querySelector('.btn-srch'),
  init() {
    const _ = this;
    if (!_.form) return;
    _.btn.addEventListener('click', function (e) {
      e.preventDefault();
      _.form.classList.toggle('open');
    });
    _.$bdy.addEventListener('click', function (e) {
      // Never use preventDefault here
      if (!_.form.contains(e.target)) {
        _.form.classList.remove('open');
      }
    });
  },
};

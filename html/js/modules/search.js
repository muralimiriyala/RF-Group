export const search = {
  btn: document.querySelector('.btn-srch em'),
  oly: document.querySelector('.srch-form-overlay'),
  frm: document.querySelector('.srch-form'),
  init() {
    const _ = this;
    if (!_.btn) return;
    _.btn.addEventListener('click', function (e) {
      e.preventDefault();
      $(_.oly).slideToggle(900);
      setTimeout(() => {
        $(_.frm).fadeToggle(900);
      }, 1100);
    });
    _.oly.addEventListener('click', function (e) {
      // Never use preventDefault here
      if (_.oly.contains(e.target)) {
        $(_.oly).fadeToggle(400);
        $(_.frm).fadeToggle(400);
      }
    });
  },
};

import $ from 'jquery';
export const stickyYear = {
  $ele: document.querySelector('ul.about-history-years'),
  $btn: document.querySelector('.about-history-btn'),
  init() {
    const _ = this;
    if (!_.$ele) return;
    _.$ele.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        // e.preventDefault();
        const siblings = [..._.$ele.querySelectorAll('a')];
        siblings.forEach((sibling) => sibling.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
    _.$btn.addEventListener('click', function (e) {
      e.preventDefault();
      _.$btn.classList.toggle('open');
      $(_.$ele).slideToggle(700);
    });
  },
};

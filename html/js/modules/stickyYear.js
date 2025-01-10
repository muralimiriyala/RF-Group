import $ from 'jquery';
export const stickyYear = {
  $ele: document.querySelector('ul.about-history-years'),
  $btn: document.querySelector('.about-history-btn'),
  init() {
    const _ = this;
    if (!_.$ele) return;
    const $siblings = [..._.$ele.querySelectorAll('a')];
    _.$ele.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        // e.preventDefault();
        $siblings.forEach((sibling) => sibling.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
    _.$btn.addEventListener('click', function (e) {
      e.preventDefault();
      _.$btn.classList.toggle('open');
      $(_.$ele).slideToggle(700);
    });

    const mobileToggle = function () {
      _.$ele.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        _.$btn.classList.remove('open');
        $(e.currentTarget).slideUp(700);
        const $t = e.target.textContent;
        _.$btn.querySelector('span').textContent = $t;
      });
    };
    mobileToggle();
  },
};

import $ from 'jquery';

export const stickyYear = {
  $ele: document.querySelector('ul.about-history-years'),
  $btn: document.querySelector('.about-history-btn'),
  mobileInitialized: false,

  init() {
    const _ = this;
    if (!_.$ele) return;

    const $siblings = [..._.$ele.querySelectorAll('a')];

    _.$ele.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
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
      if (_.$ele) {
        _.$ele.addEventListener('click', (e) => {
          e.preventDefault();
          _.$btn.classList.remove('open');
          $(e.currentTarget).slideUp(700);
          const $t = e.target.textContent;
          _.$btn.querySelector('span').textContent = $t;
        });
      }
    };

    const handleResize = () => {
      if (window.matchMedia('(max-width: 809px)').matches) {
        if (!_.mobileInitialized) {
          mobileToggle();
          _.mobileInitialized = true;
          _.$ele.style.display = 'none';
        }
      } else {
        if (_.mobileInitialized) {
          $(_.$ele).stop(true, true).slideDown(0);
          _.$btn.classList.remove('open');
          _.mobileInitialized = false;
        }
        _.$ele.style.display = 'block';
      }
    };

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
  },
};

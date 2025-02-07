import $ from 'jquery';

export const servicestickyYear = {
  $ele: document.querySelector('ul.service-history-years'),
  $btn: document.querySelector('.service-history-btn'),
  $list: document.querySelectorAll('.service-year-list'),
  mobileInitialized: false,
  init() {
    const _ = this;
    if (!_.$ele) return;

    const $siblings = [..._.$ele.querySelectorAll('a')];
    $siblings[0].classList.add('active');
    const $year = $siblings[0].getAttribute('href').substring(1);
    _.$btn.querySelector('span').textContent = $year;

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
          let id = e.target.getAttribute('href').substring(1);
          document.querySelectorAll(`.service-year-list`).forEach((ele) => {
            $(ele).hide();
          });
          let show = document.querySelector(`.service-year-list[id="${id}"]`);
          $(show).fadeIn(700);
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

import $ from 'jquery';

export const servicestickyYear = {
  $header: document.querySelector('header'),
  $ele: document.querySelector('ul.service-history-years'),
  $btn: document.querySelector('.service-history-btn'),
  $list: document.querySelectorAll('.service-year-list'),
  $jump: document.querySelector('.jumpto-rt ul.jumpto-links'),
  mobileInitialized: false,
  init() {
    const _ = this;
    if (!_.$ele) return;
    const $height = _.$header.clientHeight + 69;
    const $siblings = [..._.$ele.querySelectorAll('a')];
    $siblings[0].classList.add('active');
    const $year = $siblings[0].getAttribute('href').substring(1);
    _.$btn.querySelector('span').textContent = $year;

    // new func
    const newfunc = (e) => {
      e.preventDefault();
      if (e.target.tagName === 'A') {
        $siblings.forEach((sibling) => sibling.classList.remove('active'));
        e.target.classList.add('active');
        const id = e.target.getAttribute('href').substring(1);
        const show = $(
          document.querySelector(`.service-year-list[id="${id}"]`)
        );
        $(show).fadeIn(800);
        setTimeout(() => {
          $('html, body').animate(
            {
              scrollTop: $(show).offset().top - $height,
            },
            1000
          );
        });
        if ($(e.target.parentElement).next().length === 0) {
          $('.service-year-list').fadeIn(800);
          $('.load-service-year').hide(0);
        }
      }
    };
    // new func
    _.$ele.addEventListener('click', newfunc);
    // top func
    const topfunc = (e) => {
      e.preventDefault();
      if (e.target.tagName === 'A') {
        _.$jump.querySelectorAll('a').forEach((ele) => {
          ele.classList.remove('active');
        });
        e.target.classList.add('active');
        const id = e.target.getAttribute('href').substring(1);
        $siblings.forEach((sibling) => {
          sibling.classList.remove('active');
        });
        const elements = $(`ul.service-history-years a[href="#${id}"]`);
        elements.addClass('active');

        const show = $(
          document.querySelector(`.service-year-list[id="${id}"]`)
        );
        $(show).fadeIn(800);
        setTimeout(() => {
          $('html, body').animate(
            {
              scrollTop: $(show).offset().top - $height,
            },
            1000
          );
        });
      }
    };
    _.$jump.addEventListener('click', topfunc);
    // top func

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
      if (window.matchMedia('(max-width: 759px)').matches) {
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

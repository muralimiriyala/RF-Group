export const menu = {
  $ele: document.querySelector('header.site-header'),
  $nav: document.querySelector('.header_right'),
  $btn: document.querySelector('.humburger-btn'),
  $login: document.querySelector('.user-login'),
  $smallHeader: [
    ...document.querySelectorAll(
      'body.page-template-service-tier-2, body.page-template-service-tier-3-fund-detail, body.page-template-tombostones, body.page-template-about-history, body.page-template-about-team'
    ),
  ],
  $gpages: [
    ...document.querySelectorAll(
      'body.tax-forms_category, body.page-template-resources, body.page-template-calculator-pension, body.page-template-calculator-retirement, body.page-template-calculator-dividend, body.page-template-calculator-margin-interest, body.page-template-calculator-compound-interest, body.page-template-calculator-education, body.tax-reports-category, body.page-template-resource-fees, body.page-template-contact, body.page-template-resource-faq, body.page-template-404'
    ),
  ],
  $navfor: document.querySelectorAll(
    'ul.main_menu > li.nav-item-for > ul > li.menu-item-has-children > a'
  ),
  $navul: document.querySelectorAll(
    'ul.main_menu > li.nav-item-for > ul > li.menu-item-has-children > ul'
  ),
  $site: document.querySelector('main.site-main-cover'),
  init() {
    const _ = this;
    if (!_.$ele) return;

    _.$gpages.forEach(() => {
      const _ = this;
      _.$ele.classList.add('gray-header');
      _.$site.classList.add('site-gray');
    });

    _.$smallHeader.forEach(() => {
      const _ = this;
      _.$ele.classList.add('white-header');
      _.$site.classList.add('site-white');
    });

    // scrolly
    let $scrolly = 0;
    const grayscroll = () => {
      $scrolly = Number(window.scrollY);
      $scrolly > 0
        ? _.$ele.classList.add('gray-header', 'white-bg')
        : _.$ele.classList.remove('gray-header', 'white-bg');
    };
    const whitescroll = () => {
      $scrolly = Number(window.scrollY);
      $scrolly > 0
        ? _.$ele.classList.add('white-bg')
        : _.$ele.classList.remove('white-bg');
    };
    if (!_.$gpages[0]) {
      window.addEventListener('scroll', grayscroll);
      window.addEventListener('load', grayscroll);
    }
    if (_.$gpages[0]) {
      window.addEventListener('scroll', whitescroll);
      window.addEventListener('load', whitescroll);
    }
    // scrolly with
    _.$btn.addEventListener('click', (e) => {
      const __ = e.currentTarget;
      __.classList.toggle('open');
      _.$nav.classList.toggle('open');
    });

    _.$login.addEventListener('click', (e) => {
      const ___ = this;
    });

    const mobilemenu = () => {
      document
        .querySelectorAll('ul.main_menu > li.menu-item-has-children > a')
        .forEach((level1) => {
          level1.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.toggle('open');
            const $li = e.target.parentElement;
            $($li.querySelector('ul')).slideToggle(800);
            const siblings = Array.from($li.parentElement.children);
            siblings.forEach(($item) => {
              if ($item !== $li) {
                $item.querySelector('a').classList.remove('open');
                const $itemul = $item.querySelector('ul');
                $($itemul).slideUp(800);
              }
            });
          });
        });
      document
        .querySelectorAll(
          'ul.main_menu > li.menu-item-has-children:not(.nav-item-for) > ul > li.menu-item-has-children > a'
        )
        .forEach((level2) => {
          level2.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.currentTarget.tagName === 'A') {
              e.currentTarget.classList.toggle('open');
              const $li = e.currentTarget.parentElement;
              $($li.querySelector('ul')).slideToggle(800);
              const siblings = Array.from($li.parentElement.children);
              siblings.forEach(($item) => {
                if ($item !== $li) {
                  $item.querySelector('a').classList.remove('open');
                  const $itemul = $item.querySelector('ul');
                  $($itemul).slideUp(800);
                }
              });
            }
          });
        });
    };

    const media = window.matchMedia('(max-width: 1023px)');
    if (media.matches) {
      mobilemenu();
    }
    media.addEventListener('change', (event) => {
      if (event.matches) {
        mobilemenu();
      } else {
      }
    });
  },
};

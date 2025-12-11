export const jumpto = {
  $jumptobtn: document.querySelectorAll('.service-tier-banner-btn'),
  $jumptoul: document.querySelector('ul.jumpto-links'),
  init() {
    let _ = this;
    _.$jumptobtn.forEach(function (ele) {
      ele.addEventListener('click', function (e) {
        e.preventDefault();
        e.currentTarget.classList.toggle('open');
        let $links =
          e.currentTarget.parentElement.querySelector('ul.jumpto-links');
        $($links).slideToggle(700);
      });
    });
    const jumptoulMobile = () => {
      if (!_.$jumptoul) return;
      _.$jumptoul.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
          let $txt = e.target.textContent;
          $(_.$jumptoul).slideUp(800);
          _.$jumptobtn.forEach(function (ele) {
            ele.classList.remove('open');
            ele.querySelector('span').textContent = $txt;
          });
        }
      });
    };
    let media = window.matchMedia('(max-width: 759px)');
    if (media.matches) {
      jumptoulMobile();
    }
    media.addEventListener('change', (event) => {
      if (event.matches) {
        jumptoulMobile();
      } else {
      }
    });
  },
};

export const jumpto = {
  $jumptobtn: document.querySelectorAll('.service-tier-banner-btn'),
  $jumptoul: document.querySelector('ul.jumpto-links'),
  init() {
    let _ = this;
    _.$jumptobtn.forEach(function (ele) {
      ele.addEventListener('click', function (e) {
        e.preventDefault();
        e.target.classList.toggle('open');
        let $links = e.target.parentElement.querySelector('ul.jumpto-links');
        $($links).slideToggle(700);
      });
    });
  },
};

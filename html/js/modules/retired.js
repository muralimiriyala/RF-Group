export const retired = {
  $body: document.querySelector('body'),
  $main: document.querySelector('.cta-investment-wrap'),
  $iselect: document.getElementById('investment-select'),
  $ele: document.querySelectorAll('.investment-form-main'),
  $selectBox: document.querySelector('.cta-investment-form select'),
  $wrap: document.querySelector('.cta-investment-wrap'),
  init() {
    const _ = this;
    const $select = jQuery(_.$iselect);
    $select.selectBox().change(function () {
      const $value = jQuery(this).val();
      _.$ele.forEach((ele) => {
        const $name = ele.getAttribute('data-name');
        if ($value === $name) {
          _.$ele.forEach((ele) => {
            ele.style.maxHeight = `0px`;
          });
          ele.style.maxHeight = `${ele.scrollHeight}px`;
        } else if ($value === 'Not Retired') {
          _.$ele.forEach((ele) => {
            ele.style.maxHeight = `0px`;
          });
          ele.style.maxHeight = `${ele.scrollHeight}px`;
        }
      });
    });
    _.$body.addEventListener('click', (e) => {
      const $container = document.querySelector(
        'ul.choose-selectBox-dropdown-menu'
      );
      if (!_.$wrap.contains(e.target) && !$container.contains(e.target)) {
        _.$ele.forEach((ele) => {
          ele.style.maxHeight = `0px`;
        });
      }
    });
  },
};

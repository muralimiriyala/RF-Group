export const serviceTierTombstones = {
  $btn: document.getElementById('load-more'),
  $ele: [...document.querySelectorAll('.service-year-list')],

  tier() {
    const __ = this;
    let $start = 4;
    let $end = 8;
    const service = (e) => {
      e.preventDefault();
      const $len = __.$ele.length;
      if ($start < $len) {
        const $show = __.$ele.slice($start, $end);
        $show.forEach((ele) => {
          $(ele).fadeIn(1000);
        });
        $start = $end;
        $end = $start + 4; // Show the next 4 items
      }
      if ($start >= $len) {
        __.$btn.parentElement.style.display = 'none';
      }
    };
    if (!__.$btn) return;
    __.$btn.addEventListener('click', service);
  },
};

import $ from 'jquery';
export const reports = {
  $el: document.querySelector('ul.report-links'),
  $rows: document.querySelectorAll('.doc-repo-ids'),
  init() {
    const __ = this;
    if (!__.$el) return;

    const toggle = (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        let targetId = e.target.getAttribute('href').substring(1);

        __.$el
          .querySelectorAll('a')
          .forEach((ele) => ele.classList.remove('current'));

        e.target.classList.add('current');

        __.$rows.forEach((ele) => $(ele).fadeOut(100));

        const row = document.getElementById(targetId);
        if (row) {
          $(row).fadeIn(800);
        }

        // Handle mobile view
        if (window.matchMedia('(max-width: 809px)').matches) {
          __.$btn.classList.remove('current');
          $(__.$el).slideUp(800);
        }
      }
    };
    __.$el.addEventListener('click', toggle);

    let hash = window.location.hash.substring(1); // Get ID from hash
    if (hash) {
      const activeLink = __.$el.querySelector(`a[href="#${hash}"]`);
      if (activeLink) {
        activeLink.classList.add('current'); // Highlight link
        __.$rows.forEach((ele) => $(ele).hide()); // Hide all
        const activeRow = document.getElementById(hash);
        if (activeRow) {
          $(activeRow).fadeIn(800); // Show matching row
          setTimeout(function () {
            $('html, body').animate(
              {
                scrollTop: $(activeRow).offset.top - 200,
              },
              500
            );
          }, 500);
        }
      }
    }
  },
};

import $ from 'jquery';
export const reports = {
  $el: document.querySelector('ul.report-links'),
  $rows: document.querySelectorAll('.reports-row'),
  $btn: document.querySelector('.report-category-btn'),
  init() {
    const __ = this;
    if (!__.$el) return;

    let url = window.location.href;
    let hash = window.location.hash.substring(1); // Get ID from hash

    const toggle = (e) => {
      if (e.target.tagName === 'A') {
        // e.preventDefault(); // Prevent default navigation
        let targetId = e.target.getAttribute('href').substring(1);
        localStorage.setItem('url', url); // Save last visited URL

        // Remove 'current' class from all links
        __.$el
          .querySelectorAll('a')
          .forEach((ele) => ele.classList.remove('current'));

        // Add 'current' class to the clicked link
        e.target.classList.add('current');

        // Hide all rows
        __.$rows.forEach((ele) => $(ele).fadeOut(100));

        // Show the selected row
        const row = document.getElementById(targetId);
        if (row) {
          $(row).fadeIn(800);
        }

        // Handle mobile view
        if (window.matchMedia('(max-width: 809px)').matches) {
          __.$btn.classList.remove('current');
          $(__.$el).slideUp(800);
          __.$btn.querySelector('span').textContent = e.target.textContent;
        }
      }
    };

    // Event Listener for link click
    __.$el.addEventListener('click', toggle);

    // Mobile toggle
    const mbltoggle = (e) => {
      e.currentTarget.classList.toggle('current');
      $(__.$el).slideToggle(800);
    };
    __.$btn.addEventListener('click', mbltoggle);

    // **Handle case when page loads with a hash in the URL**
    console.log(hash, 'test11');
    if (hash) {
      const activeLink = __.$el.querySelector(`a[href="#${hash}"]`);
      if (activeLink) {
        activeLink.classList.add('current'); // Highlight link
        __.$rows.forEach((ele) => $(ele).hide()); // Hide all
        const activeRow = document.getElementById(hash);
        if (activeRow) {
          $(activeRow).fadeIn(800); // Show matching row
        }
      }
    }
  },
};

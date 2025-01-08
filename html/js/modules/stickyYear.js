export const stickyYear = {
  $ele: document.querySelector('ul.about-history-years'),
  init() {
    const _ = this;
    if (!_.$ele) return;
    _.$ele.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        const siblings = [..._.$ele.querySelectorAll('a')];
        siblings.forEach((sibling) => sibling.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  },
};

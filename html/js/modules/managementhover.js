export const managementHover = {
  $btn: document.querySelectorAll('.navy-block-btn [data-btn-hover]'),
  $ele: document.querySelectorAll('.management-team-info a'),
  me() {
    const ___ = this;
    ___.$btn.forEach((ele) => {
      ele.addEventListener('mouseover', (e) => {
        const value = e.currentTarget.getAttribute('data-btn-hover');
        e.currentTarget.style.setProperty('--button-hover-color', value);
      });
      ele.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.setProperty(
          '--button-hover-color',
          'transparent'
        );
      });
    });
    ___.$ele.forEach((ele) => {
      ele.addEventListener('mouseover', (e) => {
        const value = e.currentTarget.getAttribute('data-link-hover');
        e.currentTarget.style.color = value;
      });
      ele.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.color = '';
      });
    });
  },
};

export const managementHover = {
  $ele: document.querySelectorAll('.management-team-info a'),
  me() {
    const ___ = this;
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

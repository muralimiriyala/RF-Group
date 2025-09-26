


export const notification = {
  note: document.querySelector('.notification-bar'),
  header: document.querySelector('.site-header'),
  init() {
    if (!this.note) return;

    this.header.classList.add('with-notification');

    this.note.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('notification-close') ||
        e.target.parentElement.classList.contains('notification-close')
      ) {
        // add hide class to trigger CSS animation
        this.note.classList.add('hide');
        this.header.classList.remove('with-notification');

        // after transition ends, fully hide from layout
        this.note.addEventListener(
          'transitionend',
          () => {
            this.note.style.display = 'none';
          },
          { once: true }
        );
      }
    });
  },
};






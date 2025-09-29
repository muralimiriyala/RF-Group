export const notification = {
  note: document.querySelector('.notification-bar'),
  header: document.querySelector('.site-header'),
  init() {
    if (!this.note) return;
    this.header.classList.add('with-notification');
    this.note.classList.add('show-notification');
    this.note.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('notification-close') ||
        e.target.parentElement.classList.contains('notification-close')
      ) {
        this.header.classList.remove('with-notification');
        this.note.classList.add('hide-notification')
      }
    });
  },
};
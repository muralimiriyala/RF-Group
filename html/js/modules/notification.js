
export const notification = {
    note: document.querySelector('.notification-bar'),
    header: document.querySelector('.site-header'),
    init() {
        if (!this.note) return;
       this.note? this.header.classList.add('with-notification'): this.header.classList.remove('with-notification');
       this.note.addEventListener('click', (e) => {
            if(e.target.classList.contains('notification-close') || e.target.parentElement.classList.contains('notification-close')){
                this.note.style.display = 'none';
                this.header.classList.remove('with-notification');
            }
         });
      
    }
}

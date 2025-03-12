export const uiAccordion = {
  init() {
    const accordions = (aList, aHeader, aContent) => {
      const items = document.querySelectorAll(aList);
      if (!items.length) return;

      items.forEach((el) => {
        const header = el.querySelector(aHeader);
        const content = el.querySelector(aContent);

        jQuery(content).hide(); // Ensure all content sections are initially hidden

        header.addEventListener('click', () => {
          if (el.dataset.open !== 'true') {
            // Close all siblings
            items.forEach((item) => {
              if (item !== el) {
                item.dataset.open = 'false';
                const itemHeader = item.querySelector(aHeader);
                const itemContent = item.querySelector(aContent);
                if (itemHeader) {
                  itemHeader.parentElement.classList.remove('open');
                  itemHeader.classList.remove('open');
                }
                if (itemContent) {
                  jQuery(itemContent).slideUp(800);
                }
              }
            });
            // Open the clicked one
            el.dataset.open = 'true';
            header.parentElement.classList.add('open');
            header.classList.add('open');
            jQuery(content).slideDown(800);
          } else {
            el.dataset.open = 'false';
            header.parentElement.classList.remove('open');
            header.classList.remove('open');
            jQuery(content).slideUp(800);
          }
        });
      });
    };
    accordions('.accordion-list', '.accordion-header', '.accordion-content');
  },
};

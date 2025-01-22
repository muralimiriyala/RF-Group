export const sidebyside = {
  $blue: document.querySelectorAll('.blue .side-by-ipad'),
  $purple: document.querySelectorAll('.purple .side-by-ipad'),
  $arrow: document.querySelector('.side-by-arrow'),
  init() {
    const _ = this;
    if (!_.$arrow) return;

    const addBColor = (e) => {
      e.currentTarget.classList.add('blue-hover');
      _.$purple.forEach((elepurple) => {
        elepurple.classList.add('right-purple');
      });
      _.$arrow.classList.add('blue-hover');
    };
    const removeBColor = (e) => {
      e.currentTarget.classList.remove('blue-hover');
      _.$purple.forEach((elepurple) => {
        elepurple.classList.remove('right-purple');
      });
      _.$arrow.classList.remove('blue-hover');
    };
    _.$blue.forEach((eleblue) => {
      eleblue.addEventListener('mouseenter', addBColor);
      eleblue.addEventListener('mouseleave', removeBColor);
    });

    const addPColor = (e) => {
      e.currentTarget.classList.add('purple-hover');
      _.$blue.forEach((eleblue) => {
        eleblue.classList.add('left-purple');
      });
      _.$arrow.classList.add('purple-hover');
    };
    const removePColor = (e) => {
      e.currentTarget.classList.remove('purple-hover');
      _.$blue.forEach((eleblue) => {
        eleblue.classList.remove('left-purple');
      });
      _.$arrow.classList.remove('purple-hover');
    };

    _.$purple.forEach((elepurple) => {
      elepurple.addEventListener('mouseenter', addPColor);
      elepurple.addEventListener('mouseleave', removePColor);
    });
  },
};

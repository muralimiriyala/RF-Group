export const sidebyside = {
  $blue: document.querySelectorAll('.blue-ui'),
  $purple: document.querySelectorAll('.purple-ui'),
  $arrow: document.querySelector('.side-by-arrow'),
  init() {
    const _ = this;

    const addBColor = (e) => {
      e.currentTarget.classList.add('blue-hover-ui');
      _.$purple.forEach((elepurple) => {
        elepurple.classList.add('right-purple');
      });
      _.$arrow.classList.add('blue-hover-ui');
    };
    const removeBColor = (e) => {
      e.currentTarget.classList.remove('blue-hover-ui');
      _.$purple.forEach((elepurple) => {
        elepurple.classList.remove('right-purple');
      });
      _.$arrow.classList.remove('blue-hover-ui');
    };
    _.$blue.forEach((eleblue) => {
      eleblue.addEventListener('mouseenter', addBColor);
      eleblue.addEventListener('mouseleave', removeBColor);
    });

    const addPColor = (e) => {
      e.currentTarget.classList.add('purple-hover-ui');
      _.$blue.forEach((eleblue) => {
        eleblue.classList.add('left-blue');
      });
      _.$arrow.classList.add('purple-hover-ui');
    };
    const removePColor = (e) => {
      e.currentTarget.classList.remove('purple-hover-ui');
      _.$blue.forEach((eleblue) => {
        eleblue.classList.remove('left-blue');
      });
      _.$arrow.classList.remove('purple-hover-ui');
    };

    _.$purple.forEach((elepurple) => {
      elepurple.addEventListener('mouseenter', addPColor);
      elepurple.addEventListener('mouseleave', removePColor);
    });
  },
};

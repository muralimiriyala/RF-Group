export const inputNumber = {
  $ele: document.querySelectorAll('input[type="number"]'),
  input() {
    const _ = this;
    _.$ele.forEach((ele) => {
      ele.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, '');
      });
    });
  },
};

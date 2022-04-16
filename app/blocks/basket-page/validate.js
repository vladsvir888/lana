app.validate = {
  name: 'Валидация',
  init() {
    const orderForm = document.querySelector('.basket-page__order-form');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const patronymic = document.getElementById('patronymic');
    const phone = document.getElementById('phone');

    if (orderForm === null) return;

    if (phone) {
      IMask(
        document.getElementById('phone'), {
          mask: '+{7} (000) 000 00 00',
        },
      );
    }

    function showError(input) {
      const parent = input.closest('.basket-page__order-item');

      parent.classList.add('error');
    }

    function showSuccess(input) {
      const parent = input.closest('.basket-page__order-item');

      parent.classList.remove('error');
    }

    function checkInputs() {
      if (name.value.trim() === '') {
        showError(name);
      } else {
        showSuccess(name);
      }

      if (surname.value.trim() === '') {
        showError(surname);
      } else {
        showSuccess(surname);
      }

      if (patronymic.value.trim() === '') {
        showError(patronymic);
      } else {
        showSuccess(patronymic);
      }
    }

    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      checkInputs();
    });
  },
};

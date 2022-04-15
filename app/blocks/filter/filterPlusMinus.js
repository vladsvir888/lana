app.filterPlusMinus = {
  name: 'Переключение фильтра плюс-минус',
  init() {
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('minus-btn')) return;

      const counterValue = target.nextElementSibling;

      if (counterValue.textContent > 1) {
        counterValue.textContent--;
      }
    });

    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('plus-btn')) return;

      const counterValue = target.previousElementSibling;

      counterValue.textContent++;
    });
  },
};

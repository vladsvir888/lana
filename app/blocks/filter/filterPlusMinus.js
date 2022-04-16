app.filterPlusMinus = {
  name: 'Переключение фильтра плюс-минус',
  init() {
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('minus-btn')) return;

      const counterValue = target.nextElementSibling;

      if (counterValue.textContent > 1) {
        counterValue.textContent--;
      } else return;

      // const parent = target.closest('.calc-wrap');

      // if (parent === null) return;

      // // curentPrice
      // const currentPrice = parent.querySelector('.current-price');

      // if (currentPrice === null) return;

      // const curentPriceInitialValue = 8100;

      // const currentPriceAccValue = +currentPrice.textContent.replace(/\s+/g, ''); // 8 100 -> 8100

      // const resCurrentPriceValue = currentPriceAccValue - curentPriceInitialValue;

      // currentPrice.textContent = String(resCurrentPriceValue).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

      // // oldPrice
      // const oldPrice = parent.querySelector('.old-price');

      // if (oldPrice === null) return;

      // const oldPriceInitialValue = 9000;

      // const oldPriceAccValue = +oldPrice.textContent.replace(/\s+/g, ''); // 9 000 -> 9000

      // const resOldPriceValue = oldPriceAccValue - oldPriceInitialValue;

      // oldPrice.textContent = String(resOldPriceValue).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    });

    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('plus-btn')) return;

      const counterValue = target.previousElementSibling;

      counterValue.textContent++;

      // const parent = target.closest('.calc-wrap');

      // if (parent === null) return;

      // // curentPrice
      // const currentPrice = parent.querySelector('.current-price');

      // if (currentPrice === null) return;

      // const curentPriceInitialValue = 8100;

      // const currentPriceAccValue = +currentPrice.textContent.replace(/\s+/g, ''); // 8 100 -> 8100

      // const resCurrentPriceValue = currentPriceAccValue + curentPriceInitialValue;

      // currentPrice.textContent = String(resCurrentPriceValue).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

      // // oldPrice
      // const oldPrice = parent.querySelector('.old-price');

      // if (oldPrice === null) return;

      // const oldPriceInitialValue = 9000;

      // const oldPriceAccValue = +oldPrice.textContent.replace(/\s+/g, ''); // 9 000 -> 9000

      // const resOldPriceValue = oldPriceAccValue + oldPriceInitialValue;

      // oldPrice.textContent = String(resOldPriceValue).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    });
  },
};

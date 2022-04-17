app.calculator = {
  name: 'Калькулятор',
  init() {
    // initial values
    const curentPriceInitialValue = 8100;
    const oldPriceInitialValue = 9000;
    const priceProduct = 8000;

    // helpers func
    function transformToNumber(value) {
      return +value.textContent.replace(/\s+/g, ''); // '8 100' -> 8100
    }

    function transformToString(value) {
      return String(value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '); // 16200 -> '16 200'
    }

    // calc for cards
    function increase(parent) {
      // currentPrice
      const currentPrice = parent.querySelector('.current-price');

      if (currentPrice === null) return;

      const currentPriceAccValue = transformToNumber(currentPrice);

      const resCurrentPriceValue = currentPriceAccValue + curentPriceInitialValue;

      currentPrice.textContent = transformToString(resCurrentPriceValue);

      // oldPrice
      const oldPrice = parent.querySelector('.old-price');

      if (oldPrice === null) return;

      const oldPriceAccValue = transformToNumber(oldPrice);

      const resOldPriceValue = oldPriceAccValue + oldPriceInitialValue;

      oldPrice.textContent = transformToString(resOldPriceValue);
    }

    function decrease(parent) {
      // curentPrice
      const currentPrice = parent.querySelector('.current-price');

      if (currentPrice === null) return;

      const currentPriceAccValue = transformToNumber(currentPrice);

      const resCurrentPriceValue = currentPriceAccValue - curentPriceInitialValue;

      currentPrice.textContent = transformToString(resCurrentPriceValue);

      // oldPrice
      const oldPrice = parent.querySelector('.old-price');

      if (oldPrice === null) return;

      const oldPriceAccValue = transformToNumber(oldPrice);

      const resOldPriceValue = oldPriceAccValue - oldPriceInitialValue;

      oldPrice.textContent = transformToString(resOldPriceValue);
    }

    // calc for basket
    function basketIncrease(parent) {
      const sumElement = parent.querySelector('.sum');
      const numSumElement = transformToNumber(sumElement);

      sumElement.textContent = transformToString(priceProduct + numSumElement);

      const wrap = parent.closest('.basket-page__basket-wrap');
      const sumElements = [...wrap.querySelectorAll('.sum')];
      const total = document.querySelector('.total');

      // eslint-disable-next-line max-len
      const sumPriceProduct = sumElements.reduce((sum, current) => sum + transformToNumber(current), 0);

      total.textContent = transformToString(sumPriceProduct);
    }

    function basketDecrease(parent) {
      const sumElement = parent.querySelector('.sum');
      const numSumElement = transformToNumber(sumElement);

      sumElement.textContent = transformToString(numSumElement - priceProduct);

      const wrap = parent.closest('.basket-page__basket-wrap');
      const sumElements = [...wrap.querySelectorAll('.sum')];
      const total = document.querySelector('.total');

      // eslint-disable-next-line max-len
      const sumPriceProduct = sumElements.reduce((sum, current) => sum + transformToNumber(current), 0);

      total.textContent = transformToString(sumPriceProduct);
    }

    // listeners for counters
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('minus-btn')) return;

      const counterValue = target.nextElementSibling;

      if (counterValue.textContent > 1) {
        counterValue.textContent--;
      } else return;

      if (target.closest('.calc-wrap')) {
        decrease(target.closest('.calc-wrap'));
      }

      if (target.closest('.basket-wrap')) {
        basketDecrease(target.closest('.basket-wrap'));
      }
    });

    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('plus-btn')) return;

      const counterValue = target.previousElementSibling;

      counterValue.textContent++;

      if (target.closest('.calc-wrap')) {
        increase(target.closest('.calc-wrap'));
      }

      if (target.closest('.basket-wrap')) {
        basketIncrease(target.closest('.basket-wrap'));
      }
    });
  },
};

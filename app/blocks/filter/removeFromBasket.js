app.removeFromBasket = {
  name: 'Удаление с корзины',
  init() {
    const basketWrap = document.querySelector('.basket-page__basket-wrap');

    if (basketWrap === null) return;

    // helpers func
    function transformToNumber(value) {
      return +value.textContent.replace(/\s+/g, ''); // '8 100' -> 8100
    }

    function transformToString(value) {
      return String(value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '); // 16200 -> '16 200'
    }

    basketWrap.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('basket-page__btn-close')) return;

      const basketItem = target.closest('.basket-page__basket-item');

      basketItem.remove();

      const numItems = basketWrap.querySelectorAll('.basket-page__basket-item').length;

      document.querySelector('.num-product').textContent = numItems;

      const sumItems = [...basketWrap.querySelectorAll('.sum')];

      const res = sumItems.reduce((sum, current) => sum + transformToNumber(current), 0);

      document.querySelector('.total').textContent = transformToString(res);
    });
  },
};

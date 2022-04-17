app.accordion = {
  name: 'Аккордеон в каталоге',
  init() {
    const catalogWrap = document.querySelector('.catalog-wrap');

    function toggle(item) {
      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
        catalogWrap.style.rowGap = '';
        item.querySelector('.main-page__catalog-text').firstElementChild.textContent = 'показать разделы';
      } else {
        item.classList.add('is-active');
        catalogWrap.style.rowGap = `${12}rem`;
        item.querySelector('.main-page__catalog-text').firstElementChild.textContent = 'скрыть разделы';
      }
    }

    catalogWrap.addEventListener('click', (e) => {
      const { target } = e;

      const parent = target.closest('.main-page__catalog-item');

      if (!parent) return;

      const activeElement = document.querySelector('.main-page__catalog-item.is-active');

      if (activeElement && activeElement !== parent) {
        toggle(activeElement);
      }

      toggle(parent);
    });
  },
};

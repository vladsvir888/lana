app.showMoreParam = {
  name: 'Дропдаун - показать больше параметров',
  init() {
    const filterMoreBtn = document.querySelector('.filterMoreBtn');
    const filterHideParam = document.querySelector('.param-filter__hide-param');

    if (filterMoreBtn === null) return;

    filterMoreBtn.addEventListener('click', () => {
      if (filterHideParam.style.maxHeight) {
        filterHideParam.style.maxHeight = null;
        filterMoreBtn.textContent = 'развернуть все параметры';
      } else {
        filterHideParam.style.maxHeight = `${filterHideParam.scrollHeight}px`;
        filterMoreBtn.textContent = 'cкрыть все параметры';
      }
    });
  },
};

app.search = {
  name: 'Поиск',
  init() {
    const searchBtn = document.querySelector('.searchBtn');
    const searchForm = document.querySelector('.searchForm');

    if (searchBtn === null) return;

    searchBtn.addEventListener('click', () => {
      searchForm.classList.toggle('is-active');
    });
  },
};

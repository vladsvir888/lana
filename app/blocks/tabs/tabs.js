app.tabs = {
  name: 'Табы',
  init() {
    const tabsNav = document.querySelector('.tabsNav');
    const tabsContent = document.querySelectorAll('.tabs__content-item');

    if (tabsNav === null) return;

    tabsNav.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'BUTTON') return;

      document.querySelector('.tabs__btn.is-active').classList.remove('is-active');

      target.classList.add('is-active');

      tabsContent.forEach((tabContent) => {
        if (target.dataset.tab === tabContent.dataset.tabContent) {
          tabContent.classList.add('show');
        } else {
          tabContent.classList.remove('show');
        }
      });
    });
  },
};

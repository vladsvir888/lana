app.languageSelect = {
  name: 'Селект с языками',
  init() {
    const languageBtn = document.querySelector('.languageBtn');
    const languageDropMenu = document.querySelector('.languageDropMenu');

    if (languageBtn === null) return;

    languageBtn.addEventListener('click', () => {
      const parent = languageBtn.closest('.header__languages');

      parent.classList.toggle('is-active');
    });

    languageDropMenu.addEventListener('click', (e) => {
      const { target } = e;

      const btn = target.closest('button');

      if (btn === null) return;

      const text = btn.firstElementChild.textContent;
      const attr = btn.lastElementChild.getAttribute('src');

      const parent = btn.closest('.header__languages');

      const children = parent.firstElementChild.children;

      children[0].textContent = text;
      children[1].setAttribute('src', attr);

      parent.classList.remove('is-active');
    });
  },
};

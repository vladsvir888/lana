app.burgerMenu = {
  name: 'Бургер-меню',
  init() {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burgerMenu');

    if (burger === null) return;

    burger.addEventListener('click', () => {
      burgerMenu.classList.toggle('is-active');
    });

    burgerMenu.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('burger-menu__item')) return;

      const submenu = target.querySelector('.burger-menu__sublist');

      if (submenu === null) return;

      if (target.contains(submenu)) {
        target.classList.toggle('is-active');
      }

      // if (target.contains('ul')) {
      //   target.classList.toggle('is-active');
      // }

      // const lastElementChild = target.lastElementChild;

      // if (lastElementChild === null) return;

      // lastElementChild.classList.toggle('is-active');
    });
  },
};

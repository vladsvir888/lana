app.burgerMenu = {
  name: 'Бургер-меню',
  init() {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burgerMenu');

    if (burger === null) return;

    function toggle(item) {
      item.classList.toggle('is-active');

      if (window.matchMedia('(max-width: 767px)').matches) {
        const subList = item.lastElementChild;

        if (subList.style.maxHeight) {
          subList.style.maxHeight = null;
        } else {
          subList.style.maxHeight = `${subList.scrollHeight}px`;
        }
      }
    }

    burger.addEventListener('click', () => {
      burgerMenu.classList.toggle('is-active');
    });

    burgerMenu.addEventListener('click', (e) => {
      const { target } = e;

      const parent = target.closest('.burgerItem');

      if (parent === null) return;

      const activeItem = document.querySelector('.burgerItem.is-active');

      if (activeItem && activeItem !== parent) {
        toggle(activeItem);
      }

      toggle(parent);
    });
  },
};

app.thanks = {
  name: 'Окно спасибо',
  init() {
    const popupThanks = document.querySelector('.popup-thanks');

    if (!popupThanks) return;

    setTimeout(() => {
      popupThanks.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }, 500);

    document.querySelector('.popup-thanks__btn-close').addEventListener('click', () => {
      popupThanks.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    document.querySelector('.popup-thanks').addEventListener('click', (e) => {
      if (e.target.classList.contains('is-active')) {
        popupThanks.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  },
};

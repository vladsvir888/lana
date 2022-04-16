app.preloader = {
  name: 'Прелоадер',
  init() {
    const preloader = document.querySelector('.preloader');

    if (!preloader) return;

    document.body.style.overflow = 'hidden';

    window.addEventListener('load', () => {
      preloader.style.display = 'none';

      document.querySelectorAll('.video-iframe').forEach((video) => video.remove());

      document.body.style.overflow = '';
    });
  },
};

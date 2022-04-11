app.marquee = {
  name: 'Бегущая строка',
  init() {
    const splides = document.querySelectorAll('.splide');

    if (splides.length === 0) return;

    for (let i = 0; i < splides.length; i++) {
      new Splide(splides[i], {
        arrows: false,
        pagination: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoWidth: true,
        autoScroll: {
          speed: 2,
        },
        direction: splides[i].classList.contains('splide--top') ? 'rtl' : 'ltr',
      }).mount(window.splide.Extensions);
    }
  },
};

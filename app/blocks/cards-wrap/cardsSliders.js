app.cardSliders = {
  name: 'Основной слайдер',
  init() {
    const cardSliders = document.querySelectorAll('.cardSlider1');

    if (cardSliders.length === null) return;

    cardSliders.forEach((cardSlider) => {
      new Swiper(cardSlider, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1025: {
            slidesPerView: 4,
          },
        },
        grabCursor: true,
        pagination: {
          el: '.cardSlider1 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.cardSlider1 .swiper-button-next',
          prevEl: '.cardSlider1 .swiper-button-prev',
        },
      });
    });
  },
};

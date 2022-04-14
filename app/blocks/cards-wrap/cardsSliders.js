app.catalogSliders = {
  name: 'Слайдеры в каталоге',
  init() {
    const cardSlider1 = document.querySelector('.cardSlider1');

    if (cardSlider1 === null) return;

    new Swiper(cardSlider1, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      spaceBetween: 30,
      breakpoints: {
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1025: {
          slidesPerView: 4,
          slidesPerGroup: 4,
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

    const cardSlider2 = document.querySelector('.cardSlider2');

    if (cardSlider1 === null) return;

    new Swiper(cardSlider1, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      spaceBetween: 30,
      breakpoints: {
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1025: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
      grabCursor: true,
      pagination: {
        el: '.cardSlider2 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.cardSlider2 .swiper-button-next',
        prevEl: '.cardSlider2 .swiper-button-prev',
      },
    });
  },
};

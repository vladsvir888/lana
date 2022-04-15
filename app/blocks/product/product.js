app.productSlider = {
  name: 'Слайдер-товар',
  init() {
    const galleryThumbs = new Swiper('.galleryThumbs', {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
      breakpoints: {
        768: {
          direction: 'vertical',
        },
      },
    });

    const galleryMain = new Swiper('.galleryMain', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.product-page__slider-block .swiper-button-next',
        prevEl: '.product-page__slider-block .swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  },
};

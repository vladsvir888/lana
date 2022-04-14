app.mobileCardSlider = {
  name: 'Слайдер только на тач-девайсах',
  init() {
    let cardSlider2 = null;

    function initCardSlider2() {
      if (!cardSlider2) {
        cardSlider2 = new Swiper('.cardSlider2', {
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
            el: '.cardSlider2 .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.cardSlider2 .swiper-button-next',
            prevEl: '.cardSlider2 .swiper-button-prev',
          },
        });
      }
    }

    function destroyCardSlider2() {
      if (cardSlider2) {
        cardSlider2.destroy();
        cardSlider2 = null;
      }
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        initCardSlider2();
      } else {
        destroyCardSlider2();
      }
    });
  },
};

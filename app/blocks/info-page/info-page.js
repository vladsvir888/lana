app.infoSlider = {
  name: 'Инфо-слайдер',
  init() {
    let infoSlider = null;

    function initinfoSlider() {
      if (!document.querySelector('.infoSlider')) return;

      if (!infoSlider) {
        infoSlider = new Swiper('.infoSlider', {
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
            el: '.infoSlider .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.infoSlider .swiper-button-next',
            prevEl: '.infoSlider .swiper-button-prev',
          },
        });
      }
    }

    function destroyinfoSlider() {
      if (infoSlider) {
        infoSlider.destroy();
        infoSlider = null;
      }
    }

    if (window.matchMedia('(max-width: 1024px)').matches) {
      initinfoSlider();
    } else {
      destroyinfoSlider();
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        initinfoSlider();
      } else {
        destroyinfoSlider();
      }
    });
  },
};

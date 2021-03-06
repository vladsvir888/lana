document.addEventListener('DOMContentLoaded', () => {
  app.marquee.init(); // blocks/marquee
  app.search.init(); // blocks/search
  app.languageSelect.init(); // blocks/languages
  app.tabs.init(); // blocks/tabs
  app.burgerMenu.init(); // blocks/burger-menu
  app.cardSliders.init(); // blocks/cards-wrap
  app.mobileCardSlider.init(); // blocks/cards-wrap
  app.showMoreParam.init(); // blocks/dropdown
  app.calculator.init(); // blocks/filter
  app.productSlider.init(); // blocks/product
  app.infoSlider.init(); // blocks/info-page
  app.thanks.init(); // blocks/thanks
  app.preloader.init(); // blocks/preloader
  app.validate.init(); // blocks/basket-page
  app.removeFromBasket.init(); // blocks/filter
  // app.accordion.init(); // blocks/main-page

  new WOW().init();

  new LazyLoad();

  GLightbox({
    autoplayVideos: true,
  });
});

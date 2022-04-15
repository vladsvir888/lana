document.addEventListener('DOMContentLoaded', () => {
  app.marquee.init(); // blocks/marquee
  app.search.init(); // blocks/search
  app.languageSelect.init(); // blocks/languages
  app.tabs.init(); // blocks/tabs
  app.burgerMenu.init(); // blocks/burger-menu
  app.cardSliders.init(); // blocks/cards-wrap
  app.mobileCardSlider.init(); // blocks/cards-wrap
  app.showMoreParam.init(); // blocks/dropdown
  app.filterPlusMinus.init(); // blocks/filterPlusMinus
  app.productSlider.init(); // blocks/product

  new WOW().init();

  new LazyLoad();

  GLightbox({
    autoplayVideos: true,
  });
});

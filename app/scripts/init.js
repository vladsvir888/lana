document.addEventListener('DOMContentLoaded', () => {
  app.marquee.init(); // blocks/marquee
  app.search.init(); // blocks/search
  app.languageSelect.init(); // blocks/languages
  app.tabs.init(); // blocks/tabs
  app.burgerMenu.init(); // blocks/burger-menu
  app.catalogSliders.init(); // blocks/cards-wrap

  new WOW().init();

  new LazyLoad();

  GLightbox({
    autoplayVideos: true,
  });
});

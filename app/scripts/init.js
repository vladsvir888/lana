document.addEventListener('DOMContentLoaded', () => {
  app.marquee.init();
  app.search.init();
  app.languageSelect.init();

  new WOW().init();

  new LazyLoad();
});

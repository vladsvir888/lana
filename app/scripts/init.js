document.addEventListener('DOMContentLoaded', () => {
  app.marquee.init();
  app.search.init();
  app.languageSelect.init();
  app.tabs.init();

  new WOW().init();

  new LazyLoad();

  GLightbox({
    autoplayVideos: true,
  });
});

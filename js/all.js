"use strict";

var navSlider = new Swiper(".nav-slider", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true
});
var slideHero = new Swiper(".slider-hero", {
  effect: "fade",
  thumbs: {
    swiper: navSlider
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
}); // ======= GAMES =======

var allGamesFilter = document.querySelectorAll('.js-nav-games li a');
var tabPane = document.querySelectorAll('.tab-pane-games');
allGamesFilter.forEach(function (filter, index) {
  filter.addEventListener('click', function (event) {
    event.preventDefault();
    allGamesFilter.forEach(function (item) {
      item.classList.remove('active');
    });
    tabPane.forEach(function (item) {
      item.classList.remove('active');
    });
    filter.classList.add('active');
    tabPane[index].classList.add('active');
  });
});
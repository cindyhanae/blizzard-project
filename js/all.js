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
}); // ========= MODAL ==========

var btnShowModal = document.querySelector('.js-show-modal');
var closeModal = document.querySelector('.js-close');
btnShowModal.addEventListener('click', function (event) {
  event.preventDefault();
  document.documentElement.classList.add('show-modal');
});
closeModal.addEventListener('click', function () {
  document.documentElement.classList.remove('show-modal');
}); // ========== DROPDOWN ============

var btnGames = document.querySelector('.js-games-dropdown');
var btnSports = document.querySelector('.js-sports-dropdown');
var gamesDropdown = document.querySelector('.menu');
var sportsDropdown = document.querySelector('.menu.e-sports');
btnGames.addEventListener('click', function (event) {
  event.preventDefault();
  gamesDropdown.classList.add('active');
  sportsDropdown.classList.remove('active');
});
btnSports.addEventListener('click', function (event) {
  event.preventDefault();
  sportsDropdown.classList.add('active');
  gamesDropdown.classList.remove('active');
});
"use strict";

var navSlider = new Swiper(".nav-slider", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal'
    },
    1025: {
      direction: 'vertical'
    }
  }
});
var progressSlide = document.querySelector('.js-progress');
var slideHero = new Swiper(".slider-hero", {
  effect: "fade",
  thumbs: {
    swiper: navSlider
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  // pega alguns eventos que tem dentro do swiper slide
  on: {
    init: function init() {
      progressSlide.classList.remove('animate');
      progressSlide.classList.remove('active');
      progressSlide.classList.add('animate');
      progressSlide.classList.add('active');
    },
    slideChangeTransitionStart: function slideChangeTransitionStart() {
      progressSlide.classList.remove('animate');
      progressSlide.classList.remove('active');
      progressSlide.classList.add('active');
    },
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      progressSlide.classList.add('animate');
    }
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

var btnMenu = document.querySelectorAll('.js-btn-menu');
var menuDropdown = document.querySelectorAll('.js-menu');
btnMenu.forEach(function (btn, index) {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    menuDropdown.forEach(function (itemMenu) {
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', function () {
        itemMenu.classList.remove('active');
        btnMenu.forEach(function (itemBtn) {
          itemBtn.classList.remove('active');
        });
      });
    });
    btnMenu.forEach(function (itemBtn) {
      itemBtn.classList.remove('active');
    });
    btn.classList.add('active');
    menuDropdown[index].classList.add('active');
  });
}); // ======== MENU MOBILE ======

var btnHamburger = document.querySelector('.js-hamburger');
var menuMobile = document.querySelector('.js-mobile');
var btnLinkMobile = document.querySelectorAll('.js-link-mobile');
btnHamburger.addEventListener('click', function (event) {
  event.preventDefault();
  menuMobile.classList.toggle('active');
  menuDropdown.forEach(function (item) {
    item.classList.remove('active');
  });
});
btnLinkMobile.forEach(function (link, index) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    menuMobile.classList.remove('active');
    menuDropdown[index].classList.add('active');
  });
});
window.addEventListener('scroll', function () {
  menuMobile.classList.remove('active');
  menuDropdown.forEach(function (item) {
    item.classList.remove('active');
  });
});
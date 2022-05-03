var navSlider = new Swiper(".nav-slider", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
});

var slideHero = new Swiper(".slider-hero", {
  effect: "fade",
  thumbs: {
    swiper: navSlider,
  },
  autoplay:{
    delay: 5000,
    disableOnInteraction: false
  }
});


// ======= GAMES =======
const allGamesFilter = document.querySelectorAll('.js-nav-games li a')
const tabPane = document.querySelectorAll( '.tab-pane-games')

allGamesFilter.forEach((filter, index) => {
  
  filter.addEventListener('click', (event) => {
    event.preventDefault()

    allGamesFilter.forEach(item => {
      item.classList.remove('active')
    })

    tabPane.forEach(item => {
      item.classList.remove('active')
    })

    filter.classList.add('active')
    tabPane[index].classList.add('active')
  })
})


// ========= MODAL ==========
const btnShowModal = document.querySelector('.js-show-modal')
const closeModal = document.querySelector('.js-close')

btnShowModal.addEventListener('click', (event) => {
  event.preventDefault()
  document.documentElement.classList.add('show-modal')
})

closeModal.addEventListener('click', () => {
  document.documentElement.classList.remove('show-modal')
})


// ========== DROPDOWN ============
const btnGames = document.querySelector('.js-games-dropdown')
const btnSports = document.querySelector('.js-sports-dropdown')
const gamesDropdown = document.querySelector('.menu')
const sportsDropdown = document.querySelector('.menu.e-sports')

btnGames.addEventListener('click', (event) => {
  event.preventDefault()
  gamesDropdown.classList.add('active')
  sportsDropdown.classList.remove('active')

})

btnSports.addEventListener('click', (event) => {
  event.preventDefault()
  sportsDropdown.classList.add('active')
  gamesDropdown.classList.remove('active')

})
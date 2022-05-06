var navSlider = new Swiper(".nav-slider", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal',
    },
    1025:{
      direction: 'vertical',
    }
  }
});

const progressSlide = document.querySelector('.js-progress')

var slideHero = new Swiper(".slider-hero", {
  effect: "fade",
  thumbs: {
    swiper: navSlider,
  },
  autoplay:{
    delay: 5000,
    disableOnInteraction: false
  },
  // pega alguns eventos que tem dentro do swiper slide
  on: {
    init: function(){
      progressSlide.classList.remove('animate')
      progressSlide.classList.remove('active')

      progressSlide.classList.add('animate')
      progressSlide.classList.add('active')
    },
    slideChangeTransitionStart: function(){
      progressSlide.classList.remove('animate')
      progressSlide.classList.remove('active')

      progressSlide.classList.add('active')
    },
    slideChangeTransitionEnd: function(){
      progressSlide.classList.add('animate')

    }
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
const btnMenu = document.querySelectorAll('.js-btn-menu')
const menuDropdown = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault()

    menuDropdown.forEach(itemMenu => {
      itemMenu.classList.remove('active')

      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active')
        
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active')
        });
      })
    })

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active')
    });

    btn.classList.add('active')
    menuDropdown[index].classList.add('active')
  })
})

// ======== MENU MOBILE ======
const btnHamburger = document.querySelector('.js-hamburger')
const menuMobile = document.querySelector('.js-mobile')
const btnLinkMobile = document.querySelectorAll('.js-link-mobile')

btnHamburger.addEventListener('click', (event) => {
  event.preventDefault()
  menuMobile.classList.toggle('active')
  menuDropdown.forEach((item) => {
    item.classList.remove('active')
  })
})

btnLinkMobile.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    menuMobile.classList.remove('active')
    menuDropdown[index].classList.add('active')
    
  })
})

window.addEventListener('scroll', () => {
  menuMobile.classList.remove('active')
  menuDropdown.forEach((item) => {
    item.classList.remove('active')
  })
})
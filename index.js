// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


let currentSlide = 0;
const slides = document.querySelectorAll('#projects .projects__row');

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  const offset = currentSlide * -100;
  document.querySelector('#projects .projects-carousel__slides').style.transform = `translateX(${offset}%)`;
}


let currentSlide2 = 0;
const slides2 = document.querySelectorAll('#Research_projects .projects__row');


function changeSlide2(direction) {

  currentSlide2 += direction;
  if (currentSlide2 < 0) currentSlide2 = slides2.length - 1;
  if (currentSlide2 >= slides2.length) currentSlide2 = 0;

  const offset = currentSlide2 * -100;
  const slideContainer = document.querySelector('#Research_projects .projects-carousel__slides');

  slideContainer.style.transform = `translateX(${offset}%)`;
  // document.querySelector('.projects-carousel__slides').style.transform = `translateX(${offset}%)`;
}

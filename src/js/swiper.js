
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper('.mySwiperAbout', {
  loop: true,
  slidesPerGroup: 1,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  slideActiveClass: 'about_active',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

const nextButton = document.getElementById('custom-next-btn');
nextButton.addEventListener('click', () => {
  swiper.slidePrev(); // Переход на следующий слайд
});


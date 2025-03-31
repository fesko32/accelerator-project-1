import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './lazy-video-loader.js';
import './tabs.js';
import './validate-form.js';

const swiper = new Swiper('.juri__slider-wrap', {
  modules: [Navigation],
  grabCursor: true,
  loop: true,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: '.juri__button.button-slider__button--next',
    prevEl: '.juri__button.button-slider__button--prev',
  },

  breakpoints: {
    336: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
});

const swiper2 = new Swiper('.reviews__slider-wrap', {
  modules: [Navigation],
  grabCursor: true,
  loop: false,
  initialSlide: 0,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: '.reviews__button.button-slider__button--next',
    prevEl: '.reviews__button.button-slider__button--prev',
  },

  breakpoints: {
    336: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 1,
    },

    1366: {
      slidesPerView: 1,
    }
  }
});
export { swiper, swiper2 };

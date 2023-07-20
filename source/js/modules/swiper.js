import Swiper from '../vendor/swiper';
const swiperContainer = document.querySelectorAll('[data-swiper]');
const swiperButtons = document.querySelectorAll('[data-swiper-button]');

const getSwiper = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="trainers"]', {
      direction: 'horizontal',

      watchOverflow: true,

      loop: true,

      keyboard: {
        enabled: true,
      },

      observer: true,

      grabCursor: true,

      navigation: {
        prevEl: '[data-swiper-button="trainers-prev"]',
        nextEl: '[data-swiper-button="trainers-next"]',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },
      },
    });
    swiper.init();
    const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
    duplicates.forEach((el) => el.removeAttribute('tabindex'));
  }
};

const getSwiperReview = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="reviews"]', {
      direction: 'horizontal',
      slidesPerView: 1,
      watchOverflow: true,
      loop: false,
      autoHeight: true,

      navigation: {
        prevEl: '[data-swiper-button="reviews-prev"]',
        nextEl: '[data-swiper-button="reviews-next"]',
      },
    });
    swiper.init();
  }
};

const removeNotJs = () => {
  if (!swiperButtons || !swiperContainer) {
    return;
  }
  swiperButtons.forEach((el) => el.classList.remove('is-not-js'));
  swiperContainer.forEach((el) => el.classList.remove('is-not-js'));
};

export {getSwiper, getSwiperReview, removeNotJs};

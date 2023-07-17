const getSwiper = () => {
  const swiperFirst = new Swiper('.trainers__swiper', {
    allowTouchMove: true,
    loop: true,
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },

    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is <= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
    },
  })
}

const getSwiperSecond = () => {
  const swiperSecond = new Swiper('.review-swiper', {
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 30,

    navigation: {
      nextEl: '.review__button-next',
      prevEl: '.review__button-prev',
    },
  })
}

export { getSwiper, getSwiperSecond }

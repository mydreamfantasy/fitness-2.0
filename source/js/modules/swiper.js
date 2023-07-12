const getSwiper = () => {
  const swiperFirst = new Swiper('.swiper', {
    allowTouchMove: true,
    loop: true,
    navigation: {
      nextEl: '.trainer__button-next',
      prevEl: '.trainer__button-prev',
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
    spaceBetween: 40,
    loopedSlides: 2,
    // effect: 'fade',
    loop: true,

    navigation: {
      nextEl: '.review__button-next',
      prevEl: '.review__button-prev',
    },
  })
}
export { getSwiper, getSwiperSecond }

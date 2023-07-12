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

export { getSwiper }

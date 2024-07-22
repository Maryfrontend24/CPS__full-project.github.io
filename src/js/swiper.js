
let mql = window.matchMedia('(max-width: 767px)');

function initSwiper(mql) {
  if (mql.matches) {
    var newSwiper = new Swiper('.swiper', {
      slidesPerView: 1.5,
      centeredSlides: false,
      spaceBetween: 16,
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      freeSwipe: true,
      init: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      controller: {
        invert: true,
      },

    });
  } else if (newSwiper !== undefined) {
    newSwiper.destroy();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initSwiper(mql);
})

window.addEventListener('resize', () => {
  initSwiper(mql);
})





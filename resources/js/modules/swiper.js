
import Swiper, { Navigation, Autoplay } from 'swiper';

const SwiperLanding = (function() {

  let swiper;
  
  const selectors = {
    body: 'body',
    swiper: {
      container: '.js-swiper-landing',
      btns: {
        prev: '.js-swiper-landing-prev',
        next: '.js-swiper-landing-next',
      },
    },
  };

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: '.js-swiper-landing-next',
      prevEl: '.js-swiper-landing-prev',
    },
  };

  const initialize = function() {
    swiper = new Swiper(
      selectors.swiper.container, 
      swiperOptions
    );

    const prevBtn = document.querySelector(selectors.swiper.btns.prev);
    const nextBtn = document.querySelector(selectors.swiper.btns.next);
    
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  };

  return {
    init: initialize,
  };
})();

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  const swiperWrapper = document.querySelector('.js-swiper-landing');
  if (swiperWrapper) {
    SwiperLanding.init();
  }
});

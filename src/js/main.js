import { Swiper, EffectFade, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'normalize.css';

Swiper.use([EffectFade, Pagination]);

const slider = document.querySelector(`.swiper-container`);
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(slider, {
  slidesPerView: 1,
  speed: 2000,
  effect: `fade`,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },
});


const bodyBgs = document.querySelectorAll(`.body-bg__bg`);

swiper.on(`activeIndexChange`, function () {
  bodyBgs[swiper.activeIndex].classList.add(`body-bg__bg--active`);
  bodyBgs[swiper.previousIndex].classList.remove(`body-bg__bg--active`);

  if (swiper.activeIndex === 2) {
    document.body.style.color = `black`;
  } else {
    document.body.style.color = `white`;
  }
});


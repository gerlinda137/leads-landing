import { Swiper, EffectFade, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import 'normalize.css';
Swiper.use([EffectFade, Pagination]);


// const bgSlider = document.querySelector(`.swiper-container`);

// // eslint-disable-next-line no-unused-vars
// const mySwiper = new Swiper(bgSlider, {
//   slidesPerView: 1,
//   speed: 1000,
//   effect: `fade`,
//   fadeEffect: {
//     crossFade: true
//   },
// });

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

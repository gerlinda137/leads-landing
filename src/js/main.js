import { Swiper, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';

import 'normalize.css';
Swiper.use([EffectFade]);

const bgSlider = document.querySelector(`.swiper-container`);

// eslint-disable-next-line no-unused-vars
const mySwiper = new Swiper(bgSlider, {
  slidesPerView: 1,
  speed: 1000,
  effect: `fade`,
  fadeEffect: {
    crossFade: true
  },
});


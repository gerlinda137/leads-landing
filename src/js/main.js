import { Swiper, EffectFade, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'normalize.css';

Swiper.use([EffectFade, Pagination]);

const swiper = new Swiper(`.swiper-container`, {
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
  bodyBgs[swiper.previousIndex].classList.remove(`body-bg__bg--active`);
  bodyBgs[swiper.activeIndex].classList.add(`body-bg__bg--active`);

  const classList = swiper.slides[swiper.activeIndex].querySelector(`ul`).classList;

  if (classList.contains(`terms--white`)) {
    document.body.style.color = `white`;
  }

  if (classList.contains(`terms--black`)) {
    document.body.style.color = `black`;
  }
});


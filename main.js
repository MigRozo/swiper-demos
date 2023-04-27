import './src/css/styles.css';

import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

document.querySelector('#app').innerHTML = `
  <details>
    <summary>See JS Settings</summary>
    <pre>
      import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';
      import 'swiper/css';
      import 'swiper/css/effect-fade';
      import 'swiper/css/navigation';
      import 'swiper/css/pagination';
      import 'swiper/css/scrollbar';

      document.querySelectorAll('.sym-slides').forEach(sym_slides => {
        const prevEl = sym_slides.querySelector('.swiper-arrow-prev')
          ? sym_slides.querySelector('.swiper-arrow-prev')
          : sym_slides.querySelector('.swiper-button-prev');
      
        const nextEl = sym_slides.querySelector('.swiper-arrow-next')
          ? sym_slides.querySelector('.swiper-arrow-next')
          : sym_slides.querySelector('.swiper-button-next');
      
        const swiper = new Swiper(sym_slides, {
          modules: [ EffectFade, Navigation, Pagination ],
          effect: sym_slides.dataset.fade !== undefined ? 'fade' : 'slide',
          loop: true,
          spaceBetween: 30,
          fadeEffect: {
            crossFade: true
          },
          navigation: {
            prevEl,
            nextEl,
          },
          pagination: sym_slides.dataset.dots !== undefined && {
            el: sym_slides.querySelector('.swiper-pagination'),
            type: 'bullets',
            clickable: true,
          },
        });
      });
    </pre>
  </details>

  <section>
    <div class="sym-slides" data-dots>
      <div class="swiper-wrapper">
        <article class="swiper-slide">
          <div class="card yellow">item1</div>
        </article>
        <article class="swiper-slide">
          <div class="card">item2</div>
        </article>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-pagination"></div>
    </div>
  </section>

  <section>
    <div class="sym-slides" data-fade data-dots>
      <button class="swiper-arrow-prev">custom prev</button>
      <button class="swiper-arrow-next">custom next</button>

      <div class="swiper-wrapper">
        <article class="swiper-slide">
          <div class="card">item1</div>
        </article>
        <article class="swiper-slide">
          <div class="card yellow">item2</div>
        </article>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </section>
`;

document.querySelectorAll('.sym-slides').forEach(sym_slides => {
  const prevEl = sym_slides.querySelector('.swiper-arrow-prev')
    ? sym_slides.querySelector('.swiper-arrow-prev')
    : sym_slides.querySelector('.swiper-button-prev');

  const nextEl = sym_slides.querySelector('.swiper-arrow-next')
    ? sym_slides.querySelector('.swiper-arrow-next')
    : sym_slides.querySelector('.swiper-button-next');

  const swiper = new Swiper(sym_slides, {
    modules: [ EffectFade, Navigation, Pagination ],
    effect: sym_slides.dataset.fade !== undefined ? 'fade' : 'slide',
    loop: true,
    spaceBetween: 30,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl,
      nextEl,
    },
    pagination: sym_slides.dataset.dots !== undefined && {
      el: sym_slides.querySelector('.swiper-pagination'),
      type: 'bullets',
      clickable: true,
    },
  });

  console.log(sym_slides, swiper);
});

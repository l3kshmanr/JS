import { Controller } from "@hotwired/stimulus"
import Swiper from 'swiper'
import 'lottie-web'

export default class extends Controller {
  connect() {
    this.initSlideAnimations();
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 3000, // automatically swipes every 3sec. autoplay stops with a manual swipe
      },
      on: {
        slideChange: (swiper) => {
          const previousAnimation = this.lotties[swiper.previousRealIndex];
          previousAnimation?.goToAndStop(0);

          const animation = this.lotties[swiper.realIndex];
          animation?.goToAndPlay(0);
        },
      },
    });
  }

  disconnect() {
    this.lotties.forEach((lottie) => lottie?.destroy());
  }

  initSlideAnimations() {
    const slides = Array.from(this.element.getElementsByClassName('swiper-slide'));
    this.lotties = slides.map((slide) => {
      const animation = slide.getElementsByClassName('animation')[0];
      if (animation == null) return null;

      return lottie.loadAnimation({
        container: animation,
        renderer: "svg",
        autoplay: false,
        path: animation.dataset.url,
        loop: false,
      });
    });
  }
};

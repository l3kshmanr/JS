import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get values() {
    return {
      position: { type: Number, default: 0 }
    }
  }

  static get targets() {
    return ['scroller'];
  }

  connect() {
    this.slider = this.element;
    this.isDown = false;
    this.startX;
    this.scrollLeft;
    this.scrollToPosition();
  }

  grab(e) {
    this.isDown = true;
    this.slider.classList.add('active');
    this.startX = e.pageX - this.slider.offsetLeft;
    this.scrollLeft = this.slider.scrollLeft;
  }

  release() {
    this.isDown = false;
    this.slider.classList.remove('active');
  }

  pan(e) {
    if(!this.isDown) return;

    e.preventDefault();
    const x = e.pageX - this.slider.offsetLeft;
    const walk = (x - this.startX) * 2; //scroll-fast
    this.slider.scrollLeft = this.scrollLeft - walk;
  }

  highlightActiveButton(e) {
    [...this.scrollerTarget.children].forEach(child => {
      child.classList.add('is-secondary');
      child.classList.remove('is-main');
    })
    e.target.classList.add('is-main');
    e.target.classList.remove('is-secondary');
  }

  scrollToPosition() {
    this.slider.scrollTo({
      left: this.positionValue,
      behavior: 'smooth' // Makes scrolling smooth
    });
  }
};

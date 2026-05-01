import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['button'];
  }

  removeFavorite(event) {
    event.preventDefault();

    const cardElement = this.element.closest('.removable-favorite');
    
    if (cardElement) {
      cardElement.addEventListener('animationend', this.handleAnimationEnd.bind(this), { once: true });
      cardElement.classList.add('favorite-removal-animation');
    } else {
      Turbo.navigator.submitForm(this.buttonTarget.form);
    }
  }

  handleAnimationEnd(_event) {
    Turbo.navigator.submitForm(this.buttonTarget.form);
  }
};

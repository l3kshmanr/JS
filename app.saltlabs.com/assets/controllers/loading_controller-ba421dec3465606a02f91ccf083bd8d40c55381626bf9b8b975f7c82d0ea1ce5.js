import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['link'];
  }

  connect() {
    const loader = this.element.querySelector('.is-loading');
    const complete = this.element.querySelector('.is-complete');

    this.linkTarget.addEventListener('click', () => {
      this.linkTarget.classList.add('is-hidden');
      loader.classList.remove('is-hidden');
    });
    document.addEventListener('turbo:before-fetch-response', () => {
      if (!loader.classList.contains('is-hidden')) {
        this.linkTarget.classList.remove('is-hidden');
        loader.classList.add('is-hidden');
        complete.classList.remove('is-fade');
        setTimeout(() => complete.classList.add('is-fade'), 2000);
      }
    });
  }
};

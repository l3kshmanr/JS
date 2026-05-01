import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['form'];
  }

  connect() {
    this.element.addEventListener('animationend', this.handleAnimationEnd.bind(this));
  }

  skip(event) {
    event.preventDefault();
    this.element.classList.add("skipped");

    // Hide the skip and add hours buttons, show the undo button
    this.toggleButtonsVisibility(false);
  }

  handleAnimationEnd(event) {
    if (event.animationName === 'progressSlider') {
      this.element.classList.add("slide-out-up");
    } else if (event.animationName === 'slideOutUp') {
      this.submitSkipForm();
    }
  }

  undo(event) {
    event.preventDefault();

    // Prevent the form from being submitted
    this.element.classList.remove("skipped", "slide-out-up");

    // Show the skip and add hours buttons, hide the undo button
    this.toggleButtonsVisibility(true);
  }

  toggleButtonsVisibility(showOriginalButtons) {
    const skipButton = this.element.querySelector('.skip-button');
    const addHoursButton = this.element.querySelector('.add-hours-button');
    const undoButton = this.element.querySelector('.undo-button');

    if (showOriginalButtons) {
      skipButton.style.display = '';
      addHoursButton.style.display = '';
      undoButton.style.display = 'none';
    } else {
      skipButton.style.display = 'none';
      addHoursButton.style.display = 'none';
      undoButton.style.display = '';
    }
  }

  submitSkipForm() {
    this.formTarget.requestSubmit()
  }
};

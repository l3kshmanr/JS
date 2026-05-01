import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static get targets() {
    return ['pill', 'input', 'hidden']
  }

  highlightActivePill(event) {
    let activePill = event.target;

    this.changeInputAndFilteredText(event.target.innerHTML);

    this.pillTargets.forEach((pill) => {
      if (pill === activePill) {
        pill.classList.add("is-main");
        pill.classList.remove("is-secondary");
      } else {
        pill.classList.remove("is-main");
        pill.classList.add("is-secondary");
      }
    });
  }

  changeInputAndFilteredText(text) {
    this.inputTarget.value = '';
    const textHiddenTarget = this.hiddenTargets.find((target) => target.classList.contains('overlay-text'));
    textHiddenTarget.innerHTML = text;
  }

  displayHiddenTargets() {
    this.inputTarget.disabled = true;
    this.inputTarget.placeholder = '';

    this.hiddenTargets.forEach((target) => {
      target.classList.remove('is-hidden');
    });
  }

  hideTargetsAndRemoveButtonMainClass() {
    this.inputTarget.disabled = false;
    this.inputTarget.placeholder = "Search Transfers by $altTag or Name";

    this.pillTargets.forEach((pill) => {
        pill.classList.remove("is-main");
        pill.classList.add("is-secondary");
    });

    this.hiddenTargets.forEach((target) => {
      target.classList.add('is-hidden')
    });
  }
};

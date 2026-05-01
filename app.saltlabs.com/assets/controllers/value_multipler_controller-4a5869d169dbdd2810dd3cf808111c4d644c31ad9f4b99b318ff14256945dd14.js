import { Controller } from "@hotwired/stimulus"

// simple controller to update UI with a cost value, a multipler target, and display targets
export default class extends Controller {
  static values = {
    cost: Number
  }

  static get targets() {
    return ['multipler', 'display'];
  }

  connect() {
    this.updateDisplay();
  }

  updateDisplay() {
    const multipler = this.hasMultiplerTarget ? this.multiplerTarget.value : 1;
    this.displayTargets.forEach(target => {
      target.innerHTML = this.costValue * multipler;
    });
  }
};

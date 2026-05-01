import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ["inputField", "toggleElement"];
  }

  connect() {
    this.checkValues = this.data.get("values").split(", ").map(value => value.trim().toLowerCase());
    this.checkValue();
  }

  checkValue() {
    const inputValue = this.inputFieldTarget.value.trim().toLowerCase();
    const shouldDisplay = this.checkValues.includes(inputValue);

    if (shouldDisplay) {
      this.toggleElementTarget.style.display = "block";
    } else {
      this.toggleElementTarget.style.display = "none";
    }
  }
};

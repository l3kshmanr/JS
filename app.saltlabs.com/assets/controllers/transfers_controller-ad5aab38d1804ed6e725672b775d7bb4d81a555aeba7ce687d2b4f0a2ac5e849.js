import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['buttonElement', 'amountInput'];
  }

  connect() {
  }

  changeButtonText() {
    const inputValue = this.amountInputTarget.value;
    if (inputValue === '0') {
      this.buttonElementTarget.value = "Send Salt"
    } else {
      this.buttonElementTarget.value = `Send ${inputValue} Salt`
    }
  }
};

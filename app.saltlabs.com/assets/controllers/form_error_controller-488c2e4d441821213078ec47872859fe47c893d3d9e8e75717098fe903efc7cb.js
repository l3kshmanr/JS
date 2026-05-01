import { Controller } from "@hotwired/stimulus"

// this class is for making the red error inputs go away on focus and hitting the clear button
export default class extends Controller {
  
  connect() {
    this.boundRemoveError = this.removeError.bind(this);
    this.field = this.element.firstChild;
    this.field.addEventListener('focus', this.boundRemoveError);

    this.boundClearField = this.clearField.bind(this);
    this.closeIcon = this.element.getElementsByClassName('close')[0];
    if (this.closeIcon)
      this.closeIcon.addEventListener('click', this.boundClearField);
  }

  disconnect() {
    this.field.removeEventListener('focus', this.boundRemoveError);
    if (this.closeIcon)
      this.closeIcon.removeEventListener('click', this.boundClearField);
  }

  removeError() {
    this.element.classList.remove('field_with_errors');
    this.closeIcon?.remove();
  }

  clearField() {
    this.field.value = '';
    this.removeError();
    this.field.focus();
  }
};

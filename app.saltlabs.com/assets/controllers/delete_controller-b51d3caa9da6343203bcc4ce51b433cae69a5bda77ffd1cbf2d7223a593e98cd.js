import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['deleteInput', 'errorMessage'];
  }

  connect() {
  }

  validateForm(event) {
    const deleteText = this.deleteInputTarget.value.toLowerCase().trim();
    if (deleteText !== "delete") {
      this.errorMessageTarget.textContent = "Please type 'delete' to confirm.";
      this.errorMessageTarget.style.display = "block";
      event.preventDefault();
    } else {
      this.removeErrorMessagesAndText();
    }
  }

  removeErrorMessagesAndText() {
    (this.errorMessageTargets || []).forEach((error) => {
      error.style.display = 'none';
    });

    (this.deleteInputTargets || []).forEach((input) => {
      input.value = '';
    });
  }
};

import { Controller } from "@hotwired/stimulus"

// Submits the form whenever the <select> value changes.
export default class extends Controller {
  submit() {
    this.element.form?.requestSubmit()
  }
};

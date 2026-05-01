import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static get targets() {
    return ["input", "display", "submit"]
  }

  connect() {
    this.inputTarget.addEventListener('change', () => {
      this.submitTarget.disabled = this.inputTarget.files.length === 0;
    });
  }

  preview() {
    const file = this.inputTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.displayTarget.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};

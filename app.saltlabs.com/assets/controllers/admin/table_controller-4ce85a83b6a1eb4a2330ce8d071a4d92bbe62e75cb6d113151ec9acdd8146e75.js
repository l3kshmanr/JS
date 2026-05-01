import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  goToRow(event) {
    if (event.target.tagName.toLowerCase() == 'a')
      return;
    window.location.href = this.element.dataset.path;
  }
};

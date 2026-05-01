import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    if (window.smartbanner)
      window.smartbanner.publish();
    else
      document.addEventListener('smartbanner.init', this.initFunction);
  }

  initFunction() {
    setTimeout(function() { smartbanner.publish() }, 0);
  }
};

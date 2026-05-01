import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // reading cookies in rails expects a specific type of encoding
    document.cookie = `time_zone=${encodeURIComponent(timeZone)}; max-age=${60 * 60 * 24 * 30}`;
  }
};

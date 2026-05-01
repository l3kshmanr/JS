import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static get values() {
    return { trackingUrl: String }
  }

  click() {
    fetch(this.trackingUrlValue, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    })
  }
};

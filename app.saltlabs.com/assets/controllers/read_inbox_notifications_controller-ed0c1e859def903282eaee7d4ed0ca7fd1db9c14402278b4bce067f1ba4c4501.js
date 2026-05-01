import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const id = this.data.get("id");
    const url = `/inbox_notifications/${id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        'Content-Type': 'application/json',
        "Accept": "text/vnd.turbo-stream.html",
      }
    })
    .then(response => response.text())
    .then((html) => Turbo.renderStreamMessage(html));
  }
};

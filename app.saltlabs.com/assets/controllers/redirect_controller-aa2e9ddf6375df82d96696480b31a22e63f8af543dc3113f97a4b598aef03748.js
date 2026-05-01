import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const redirectUrl = this.data.get("url");

    if (redirectUrl) {
      Turbo.visit(redirectUrl);
    }
  }
};

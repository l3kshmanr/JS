import { Controller } from "@hotwired/stimulus"

// This has the prefix of zz_ since controllers appear to load alphabetically.
// This controller is included in Rails.env.test to help with timing issues in system tests.
// Can use system test helper `ensure_stimulus_connected` to wait rather than sleep.
export default class extends Controller {
  static values = { ready: Boolean }

  connect() {
    this.readyValue = true;
  }
};

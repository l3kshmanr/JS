import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
  }

  connect() {
  }

  populateAddress() {
    const streetInput = document.querySelector('.street-input');
    const cityInput = document.querySelector('.city-input');
    const stateInput = document.querySelector('.state-select');
    const zipInput = document.querySelector('.zip-input');

    streetInput.value = this.data.get('streetvalue');
    cityInput.value = this.data.get('cityvalue');
    stateInput.firstChild.value = this.data.get('statevalue');
    zipInput.value = this.data.get('zipvalue');
  }
};

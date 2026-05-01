import { Controller } from "@hotwired/stimulus"
import { Bridge } from "bridge";

export default class extends Controller {
  static get values() {
    return {
      iconName: { type: String, default: null },
      path: { type: String, default: null },
      balance: { type: String, default: null },
      balancePath: { type: String, default: null }
    }
  }

  connect() {
    this.addButton();
  }

  addButton() {
    Bridge.addNavButton(this.iconNameValue, this.pathValue, this.balanceValue, this.balancePathValue);
  }
};

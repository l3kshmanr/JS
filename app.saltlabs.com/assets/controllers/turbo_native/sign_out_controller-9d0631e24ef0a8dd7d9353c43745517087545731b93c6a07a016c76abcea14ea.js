import { Controller } from "@hotwired/stimulus"
import { Bridge } from "bridge"

export default class extends Controller {
  connect() {
  }

  signOut(event) {
    if (Bridge.isTurboNativeApp) {
      event.preventDefault()
      event.stopImmediatePropagation()
      window.TurboNativeBridge.postMessage("signOut")
    }
  }
};

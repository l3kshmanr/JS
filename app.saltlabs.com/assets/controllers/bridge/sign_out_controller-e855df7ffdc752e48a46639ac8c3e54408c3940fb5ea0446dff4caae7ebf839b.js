import { BridgeComponent } from "@hotwired/hotwire-native-bridge";
import { Bridge } from "bridge";

export default class extends BridgeComponent {
  static component = "sign-out";

  signOut(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    Bridge.destroySession(this.element.href).finally(() => this.send("signOut"));
  }
};

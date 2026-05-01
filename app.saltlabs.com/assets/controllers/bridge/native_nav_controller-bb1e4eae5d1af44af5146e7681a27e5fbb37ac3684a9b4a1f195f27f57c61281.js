import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class extends BridgeComponent {
  static component = "navButtons";

  static get values() {
    return {
      iconName: String,
      path: String,
      balance: String,
      balancePath: String
    }
  }

  connect() {
    super.connect()
    this.notifyNative()
  }

  notifyNative() {
    const data = {
      iconName: this.hasIconNameValue ? this.iconNameValue : null,
      path: this.hasPathValue ? this.pathValue : null,
      balance: this.hasBalanceValue ? this.balanceValue : null,
      balancePath: this.hasBalancePathValue ? this.balancePathValue : null
    }
    this.send("connect", data, (message) => {
      const path = message.data.path
      if (path) {
        Turbo.visit(path)
      } else {
        console.error("No path provided")
      }
    })
  }
};

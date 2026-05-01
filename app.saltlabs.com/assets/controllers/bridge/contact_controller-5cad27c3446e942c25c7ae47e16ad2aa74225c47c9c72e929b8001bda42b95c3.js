import { BridgeComponent } from "@hotwired/hotwire-native-bridge"
import { Bridge } from "bridge";

export default class extends BridgeComponent {
  static component = "contact";

  connect() {
    super.connect()
  }

  // Convenience method for other controllers to fetch contacts
  static fetchContacts() {
    const el = document.querySelector('#contacts');
    const instance = Stimulus.getControllerForElementAndIdentifier(el, 'bridge--contact');
    // instance will be null if bridge component is not supported
    if (instance) {
      instance.fetchContacts();
    }
  }

  fetchContacts() {
    this.send("fetchContacts", {}, (message) => {
      const data = message.data
      
      if (data.error) {
        Bridge.postContactsErrorMessage(data.error)
      } else {
        Bridge.importingContacts(data.contacts)
      }
    });
  }
};

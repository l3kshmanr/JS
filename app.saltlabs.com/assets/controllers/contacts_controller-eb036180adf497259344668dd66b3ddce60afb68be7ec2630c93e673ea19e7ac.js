import { Controller } from "@hotwired/stimulus"
import { Bridge } from "bridge";

export default class extends Controller {
  static get targets() {
    return ['search', 'contactItem', 'contactName']
  }

  connect() {
  }

  contactsSearch() {
    const query = this.searchTarget.value.toLowerCase();

    if (query.length === 0) {
      this.contactItemTargets.forEach((element) => {
        element.classList.remove('is-hidden');
      });
    } else if (query.length > 2) {
      this.contactNameTargets.forEach((element) => {
        let name = element.innerText.toLowerCase();
        let parentElement = element.parentNode.parentNode.parentNode;
        if (!name.includes(query)){
          parentElement.classList.add('is-hidden');
        } else {
          parentElement.classList.remove('is-hidden');
        }
      });
    }

  }

  import() {
    Bridge.requestContacts()
  }
};

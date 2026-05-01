import { Controller } from "@hotwired/stimulus"
import IMask from 'imask';

export default class extends Controller {
  static get targets() {
    return ['form', 'input'];
  }

  disconnect() {
    this.mask?.destroy();
  }

  format_handle_or_phone() {
    this.mask ??= IMask(this.inputTarget, {mask: String})
    const length = this.inputTarget.value.length;

    if (this.inputTarget.value === '$' || this.inputTarget.value === '(') this.inputTarget.value = '';

    if (length === 1 && /\d+/.test(this.inputTarget.value)) {
      this.mask?.destroy();
      this.mask = IMask(this.inputTarget, {mask: '(000) 000-0000'});
    } else if (length === 1 && /[a-zA-Z]/.test(this.inputTarget.value)) {
      this.mask?.destroy();
      this.mask = IMask(this.inputTarget, {mask: '$handle', blocks: {handle: {mask: String}}});
    }
  }

  balanceEntrySearch() {
    const searchLength = this.inputTarget.value.length
    // either user enters three characters or erases the search to start over
    if (searchLength >= 3 || searchLength === 0) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.formTarget.requestSubmit()
      }, 200)
    }
  }
};

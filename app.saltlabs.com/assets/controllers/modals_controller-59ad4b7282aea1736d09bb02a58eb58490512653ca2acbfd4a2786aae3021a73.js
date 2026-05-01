// this is a pretty simple framework you can use to remove modals.
// all you need to do is to have the modal background and modal button as targets, in the format data-modals-target='modal'
// and have a click action that delegates to closeModals, likeso data-action="click->modals#closeModals"
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['modal'];
  }

  connect() {
  }

  addModal(event) {
    const modalId = event.currentTarget.dataset.modalId
    const modalElement = document.getElementById(modalId);

    event.preventDefault();
    modalElement.classList.add('is-active');
  }

  closeModal() {
    this.element.classList.remove('is-active');
  }

  closeModals() {
    (this.modalTargets || []).forEach(($modal) => {
      this.closeModal($modal);
    });
  }
};

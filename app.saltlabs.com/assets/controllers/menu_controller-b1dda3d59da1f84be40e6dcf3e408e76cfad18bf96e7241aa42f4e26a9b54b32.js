import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['dialog', 'item' ]
  }

  show() {
    this.dialogTarget.style.display = 'block'
  }

  hide() {
    this.dialogTarget.style.display = 'none'
  }

  toggle() {
    const hide = this.dialogTarget.style.display === 'block'

    if (hide) {
      this.hide()
    } else {
      this.show()
    }
  }

  hideOnClickOutside({ target }) {
    if (this.dialogTarget == target) {
      this.hide()
    }
  }

  itemSelected({ target }) {
    this.hide()
  }
};

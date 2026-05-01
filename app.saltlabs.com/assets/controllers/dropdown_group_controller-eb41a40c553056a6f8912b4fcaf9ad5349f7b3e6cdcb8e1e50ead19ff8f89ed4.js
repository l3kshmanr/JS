import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown-group"
export default class extends Controller {
  static targets = ['item', 'pills', 'clearAll']

  toggle(event) {
    const dropdown = event.currentTarget.closest('.dropdown')
    const wasActive = dropdown.classList.contains('is-active')

    this.element.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('is-active')
    })

    if (!wasActive) {
      dropdown.classList.add('is-active')
    }
  }

  hideOnClickOutside(event) {
    if (!this.element.contains(event.target)) {
      this.element.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('is-active')
      })
    }
  }

  removePill(event) {
    const segmentName = event.currentTarget.dataset.segmentName
    const controller = this.segmentControllerFor(segmentName)
    if (controller) controller.removePill(event)
  }

  clearAll() {
    this.element.querySelectorAll('[data-controller*="segment-selection"]').forEach(el => {
      const controller = this.application.getControllerForElementAndIdentifier(el, 'segment-selection')
      if (controller) controller.clearAll()
    })
  }

  segmentControllerFor(segmentName) {
    const el = this.element.querySelector(
      `[data-controller*="segment-selection"][data-segment-selection-segment-name-value="${segmentName}"]`
    )
    if (!el) return null
    return this.application.getControllerForElementAndIdentifier(el, 'segment-selection')
  }
};

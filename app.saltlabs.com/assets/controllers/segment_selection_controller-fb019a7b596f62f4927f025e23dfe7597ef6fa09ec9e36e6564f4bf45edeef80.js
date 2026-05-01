import { Controller } from "@hotwired/stimulus"

const MAX_SELECTIONS = 4

// Handles segment selection for charts
// - Pre-rendered pills are shown/hidden based on checkbox state
// - Only one segment type can be active at a time (selecting one resets siblings)
// - Pills and chart lines share colors assigned server-side
export default class extends Controller {
  static targets = ['checkbox', 'button', 'label', 'limitMessage']
  static values = {
    segmentName: String,
    originalLabel: String
  }

  connect() {
    this.checkboxTargets.forEach(cb => {
      cb.addEventListener('change', () => this.enforceLimit())
    })
  }

  enforceLimit() {
    const count = this.getSelectedValues().length
    const atLimit = count >= MAX_SELECTIONS
    this.checkboxTargets.forEach(cb => {
      cb.disabled = !cb.checked && atLimit
    })
    if (this.hasLimitMessageTarget) {
      this.limitMessageTarget.style.display = atLimit ? '' : 'none'
    }
  }

  apply(event) {
    event.preventDefault()
    if (this.getSelectedValues().length > 0) this.resetSiblingSegments()
    this.syncPills()
    this.updateCharts()
    this.toggleClearAll()
    this.closeDrawer()
  }

  reset(event) {
    event.preventDefault()
    this.checkboxTargets.forEach(cb => { cb.checked = false; cb.disabled = false })
    this.hideLimitMessage()
    this.syncPills()
    this.updateCharts()
    this.toggleClearAll()
    this.closeDrawer()
  }

  clearAll() {
    this.checkboxTargets.forEach(cb => { cb.checked = false; cb.disabled = false })
    this.hideLimitMessage()
    this.syncPills()
    this.updateCharts()
    this.toggleClearAll()
  }

  removePill(event) {
    const pill = event.currentTarget
    const value = pill.dataset.value
    const checkbox = this.checkboxTargets.find(cb => cb.value === value)
    if (checkbox) checkbox.checked = false
    this.enforceLimit()
    this.syncPills()
    this.updateCharts()
    this.toggleClearAll()
  }

  syncPills() {
    const selected = this.getSelectedValues()
    this.ownPills.forEach(pill => {
      const shouldShow = selected.includes(pill.dataset.value)
      if (shouldShow && pill.style.display === 'none') {
        pill.style.display = ''
        pill.classList.remove('pill-visible')
        void pill.offsetWidth
        pill.classList.add('pill-visible')
      } else if (!shouldShow) {
        pill.style.display = 'none'
        pill.classList.remove('pill-visible')
      }
    })
  }

  get ownPills() {
    const container = this.pillsContainer
    if (!container) return []
    return [...container.querySelectorAll(`.segment-pill[data-segment-name="${this.segmentNameValue}"]`)]
  }

  toggleClearAll() {
    const group = this.element.closest('[data-controller*="dropdown-group"]')
    if (!group) return

    const clearBtn = group.querySelector('[data-dropdown-group-target="clearAll"]')
    if (!clearBtn) return

    const hasVisiblePills = group.querySelector('.segment-pill:not([style*="display: none"])') !== null
    clearBtn.style.display = hasVisiblePills ? '' : 'none'
  }

  get pillsContainer() {
    return this.element.closest('[data-controller*="dropdown-group"]')
      ?.querySelector('[data-dropdown-group-target="pills"]')
  }

  updateCharts() {
    const selectedValues = this.getSelectedValues()
    const segmentPatterns = selectedValues.map(val => `${this.segmentNameValue}_${val}`)

    Object.values(Chartkick.charts).forEach(chart => {
      if (!chart || !chart.chart) return

      const chartInstance = chart.chart
      let updated = false

      chartInstance.data.datasets.forEach((dataset, index) => {
        if (!this.datasetBelongsToSegment(dataset)) return

        updated = true
        const matchingPattern = segmentPatterns.find(pattern => dataset.segmentKey.includes(pattern))
        const meta = chartInstance.getDatasetMeta(index)

        if (matchingPattern) {
          meta.hidden = false
          const value = matchingPattern.replace(`${this.segmentNameValue}_`, '')
          const color = this.colorForValue(value)
          dataset.borderColor = color
          dataset.backgroundColor = color
          dataset.pointBackgroundColor = color
        } else {
          meta.hidden = true
        }
      })

      if (updated) chartInstance.update()
    })
    document.dispatchEvent(new CustomEvent('datasets-changed'))
  }

  colorForValue(value) {
    const pill = this.ownPills.find(p => p.dataset.value === value)
    if (pill) return pill.style.background
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
  }

  datasetBelongsToSegment(dataset) {
    const segmentKey = dataset.segmentKey
    if (!segmentKey) return false

    const part = segmentKey.split('|').find(p => p.startsWith(this.segmentNameValue))
    return part && !part.endsWith('_All')
  }

  getSelectedValues() {
    return this.checkboxTargets
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value)
  }

  resetSilently() {
    this.checkboxTargets.forEach(cb => { cb.checked = false; cb.disabled = false })
    this.hideLimitMessage()
    this.syncPills()
    this.updateCharts()
  }

  hideLimitMessage() {
    if (this.hasLimitMessageTarget) this.limitMessageTarget.style.display = 'none'
  }

  resetSiblingSegments() {
    const group = this.element.closest('[data-controller*="dropdown-group"]')
    if (!group) return

    group.querySelectorAll('[data-controller*="segment-selection"]').forEach(el => {
      if (el === this.element) return
      const controller = this.application.getControllerForElementAndIdentifier(el, 'segment-selection')
      if (controller) controller.resetSilently()
    })
  }

  closeDrawer() {
    this.element.closest('.dropdown')?.classList.remove('is-active')
  }
};

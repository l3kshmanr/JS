import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["scopeType", "scopeId"]

  async updateScopeOptions() {
    const scopeType = this.scopeTypeTarget.value
    const scopeId = this.scopeIdTarget

    if (!scopeType) {
      scopeId.innerHTML = '<option value="">Select scope type first</option>'
      scopeId.value = ''
      return
    }

    try {
      scopeId.disabled = true

      // Fetch options from the server
      const response = await fetch(`/admin/enterprises/${this.getEnterpriseId()}/product_eligibilities/scope_options?scopable_type=${scopeType}`, {
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch scope options')
      }

      const data = await response.json()
      this.populateScopeOptions(data.options)
    } catch (error) {
      console.error('Error fetching scope options:', error)
      scopeId.value = ''
      scopeId.innerHTML = '<option>Error loading options</option>'
    } finally {
      scopeId.disabled = false
    }
  }

  populateScopeOptions(options) {
    const scopeIdTarget = this.scopeIdTarget

    // Clear existing options
    scopeIdTarget.innerHTML = ''

    // Add default option, skip if Enterprise since there is only 1 option
    if (this.scopeTypeTarget.value !== "Enterprise") {
      const defaultOption = document.createElement('option')
      defaultOption.value = ''
      defaultOption.textContent = 'Select scope'
      scopeIdTarget.appendChild(defaultOption)
    }

    // Add options from server
    options.forEach(option => {
      const optionElement = document.createElement('option')
      optionElement.value = option.id
      optionElement.textContent = option.name
      scopeIdTarget.appendChild(optionElement)
    })
  }

  getEnterpriseId() {
    // Extract enterprise ID from the current URL
    const urlParts = window.location.pathname.split('/')
    const enterpriseIndex = urlParts.indexOf('enterprises') + 1
    return urlParts[enterpriseIndex]
  }
};

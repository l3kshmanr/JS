import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['selectAll', 'selectRedemption']
  }

  selectAll(event) {
    this.selectRedemptionTargets.forEach((checkbox) => {
      checkbox.checked = event.target.checked && !checkbox.disabled;
    });
  }

  connect() {
    const acceptButton = document.getElementById('accept-button');
    const denyButton = document.getElementById('deny-button');
    const checkboxes = document.querySelectorAll('.select-redemption');

    function handleButtonClick(event, status) {
      event.preventDefault();

      const selectedIds = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

      if (selectedIds.length === 0) {
        alert('Please select at least one redemption.');
        return;
      }

      if (!window.confirm('Are you sure?')) return;

      fetch(`/admin/redemptions/${status}_multiple`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({ redemption_ids: selectedIds })
      }).then(response => {
        if (response.ok) {
          alert("The selected redemptions are being updated in a background job. Please wait a few moments for the updates to complete!");
          location.reload();
        } else {
          alert("Something went wrong! Please try again later.");
        }
      }).catch(error => {
        alert("Network error: " + error.message);
      });
    }

    acceptButton.addEventListener('click', event => handleButtonClick(event, 'accept'));
    denyButton.addEventListener('click', event => handleButtonClick(event, 'deny'));
  }
};

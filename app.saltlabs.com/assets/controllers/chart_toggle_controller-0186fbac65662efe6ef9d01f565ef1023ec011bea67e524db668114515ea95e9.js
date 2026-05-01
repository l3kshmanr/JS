import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ["toggleButton"]
  }

  toggleDataset() {
    const toggleButton = this.toggleButtonTarget;
    const datasetLabel = toggleButton.dataset.datasetLabel;

    Object.values(Chartkick.charts).forEach(chart => {
      const chartInstance = chart.chart
      let matched = false

      chartInstance.data.datasets.forEach((dataset, index) => {
        if (dataset.label === datasetLabel) {
          const meta = chartInstance.getDatasetMeta(index)
          const isHidden = meta.hidden === null ? dataset.hidden : meta.hidden
          meta.hidden = !isHidden
          matched = true
        }
      });

      if (matched) chartInstance.update()
    });
    this.updateButtonState(toggleButton);
    this.updateNoComparisonMessage();
    document.dispatchEvent(new CustomEvent('datasets-changed'))
  }

  updateButtonState(toggleButton) {
    const icon = toggleButton.querySelector('i');

    if (toggleButton.classList.contains('is-selected')) {
      // Dataset is hidden
      toggleButton.classList.remove('is-selected');
      icon.className = 'fas fa-regular fa-circle-plus';
    } else {
      // Dataset is visible
      toggleButton.classList.add('is-selected');
      icon.className = 'fas fa-regular fa-circle-minus';
    }
  }

  updateNoComparisonMessage() {
    const noComparisonMessages = document.querySelectorAll('.no-comparison');
    const hideComparisonMessage = document.querySelectorAll('[data-chart-toggle-target="toggleButton"].is-selected').length === 0

    Object.values(noComparisonMessages).forEach(message => {
      message.hidden = hideComparisonMessage;
    })
  }
};

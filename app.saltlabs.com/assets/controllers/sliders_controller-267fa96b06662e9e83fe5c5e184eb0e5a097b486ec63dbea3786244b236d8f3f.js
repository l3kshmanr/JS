import { Controller } from "@hotwired/stimulus"
import { Bridge } from "bridge";

export default class extends Controller {
  static get targets() {
    return ['slider', 'hourCount', 'saltCount', 'sliderLabels', 'submit', 'cappedHoursNotice'];
  }

  connect() {
    this.highlight();
    this.setState();
  }

  highlight() {
    Array.from(this.sliderLabelsTarget.children).forEach((label) => {
      if (label.dataset.hours === this.sliderTarget.value) label.classList.add('selected');
      else label.classList.remove('selected');
    });

    this.hourCountTarget.innerText = this.sliderTarget.value;
    var conversionRate = 1;
    if (this.data.get('conversion-rate')) {
      conversionRate = this.data.get('conversion-rate');
    }
    this.saltCountTarget.innerText = this.sliderTarget.value * conversionRate;
  }

  adjust() {
    this.highlight();
    this.setState();
    Bridge.triggerHapticFeedback('selection');
  }

  setState() {
    if (this.sliderTarget.value == 0) {
      this.disable();
    } else {
      this.enable();
    }
  }

  disable() {
    this.element.classList.add('disabled');
    this.sliderTarget.style.background = 'var(--salt-grey-400)';
    this.submitTarget.disabled = true;
  }

  enable() {
    this.element.classList.remove('disabled');
    const percent = (this.sliderTarget.value - this.sliderTarget.min) / (this.sliderTarget.max - this.sliderTarget.min) * 100;
    const sliderColor = (this.data.get('conversion-rate') > 1) ? 'var(--salt-gold)' : 'var(--salt-brand-secondary)'
    this.sliderTarget.style.background = `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ${percent}%, var(--salt-purple-100) ${percent}%, var(--salt-purple-100) 100%)`;
    this.submitTarget.disabled = false;
  }
};

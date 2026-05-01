import { Controller } from '@hotwired/stimulus'
import { Bridge } from 'bridge';

export default class extends Controller {
  static get values() {
    return { type: String, default_pattern: 'lightImpact' }
  }

  trigger(event) {
    const pattern = event.currentTarget.dataset.hapticPattern || this.defaultPatternValue;
    Bridge.triggerHapticFeedback(pattern);
  }
};

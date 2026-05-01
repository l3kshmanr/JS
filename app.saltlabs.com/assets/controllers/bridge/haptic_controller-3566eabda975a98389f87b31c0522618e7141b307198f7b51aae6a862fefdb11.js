import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class extends BridgeComponent {
  static component = 'haptic';

  static get values() {
    return {
      feedback: { type: String, default: 'selection' }
    }
  }

  // Convenience method for other controllers to trigger a vibration
  static vibrate(feedback = 'selection') {
    const el = document.querySelector('#haptics');
    const instance = Stimulus.getControllerForElementAndIdentifier(el, 'bridge--haptic');
    // instance will be null if bridge component is not supported
    if (instance) {
      instance.vibrate(feedback);
    }
  }

  // feedback can be lightImpact, mediumImpact, heavyImpact, success, warning, error, selection
  vibrate(feedback = this.feedbackValue) {
    this.send('vibrate', {feedback});
  }
};

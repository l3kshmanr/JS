import { Controller } from "@hotwired/stimulus"
import "lottie-web"
import { Bridge } from "bridge";

export default class extends Controller {
  static get values() {
    return {
      animationData: Object,
      autoRemove: Boolean,
      loop: Boolean,
      redirectUrl: String,
      playDelay: Number,
      url: String,
      vibrate: Boolean,
      stretch: Boolean,
      speed: { type: Number, default: 1 }
    }
  }

  connect() {

    const animationData = this.hasAnimationDataValue ? this.animationDataValue : null

    this.lottiePlayer = lottie.loadAnimation({
      container: this.element,
      renderer: "svg",
      loop: this.loopValue,
      autoplay: false,
      path: this.urlValue,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: this.stretchValue ? 'none' : 'xMidYMid meet',
        runExpressions: false
      }
    });

    setTimeout(() => {
      this.lottiePlayer.setSpeed(this.speedValue);
      this.lottiePlayer.play();
    }, this.playDelayValue);

    if (this.autoRemoveValue) {
      this.lottiePlayer.addEventListener('complete', () => {
        this.element.remove();
      })
    }

    if (this.redirectUrlValue) {
      this.lottiePlayer.addEventListener('complete', () => Turbo.visit(this.redirectUrlValue, {action: 'replace'}));
    }

    if (this.vibrateValue) setTimeout(() => Bridge.triggerHapticFeedback('success'), 500);
  }

  disconnect() {
    this.lottiePlayer.destroy();
  }
};

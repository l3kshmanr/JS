import HapticController from "controllers/bridge/haptic_controller"
import ContactController from "controllers/bridge/contact_controller"

class Bridge {
  // Toggles navbar visibility in browser from Turbo Native
  static toggleNavBar() {
    const event = new CustomEvent("toggle-nav-bar")
    window.dispatchEvent(event)
  }

  // Sends a message to the native app, if active.
  static postMessage(name, data = {}) {
    // iOS
    window.webkit?.messageHandlers?.nativeApp?.postMessage({name, ...data})

    // Android
    window.nativeApp?.postMessage(JSON.stringify({name, ...data}))
  }

  // Triggers haptic feedback via the native app
  // available patterns: lightImpact, mediumImpact, heavyImpact, success, warning, error, selection
  static triggerHapticFeedback(pattern = "lightImpact") {
    HapticController.vibrate(pattern); // newer bridge component style
    this.postMessage("vibrate", { pattern });
  }

  static addNavButton(iconName, path, balance, balancePath) {
    if (this.isTurboNativeApp) {
      this.postMessage("navButtons", { iconName, path, balance, balancePath });
    }
  }

  // Hotwire Native apps have both "Turbo Native" and "Hotwire Native" in the user agent
  static get isTurboNativeApp() {
    return navigator.userAgent.indexOf("Turbo Native") !== -1 && navigator.userAgent.indexOf("Hotwire Native") === -1
  }

  static get isHotwireNativeApp() {
    return navigator.userAgent.indexOf("Hotwire Native") !== -1
  }

  static requestContacts() {
    if (this.isHotwireNativeApp) {
      ContactController.fetchContacts();
    } else if (this.isTurboNativeApp) {
      this.postMessage("contacts");
    }
  }

  static importingContacts(contacts) {
    const csrfToken = document.getElementsByName("csrf-token")[0].content;
    fetch('/my_profile/contacts', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json",
        "Accept": "text/vnd.turbo-stream.html",
      },
      body: JSON.stringify(contacts)
    }).then(response => response.text())
      .then((html) => Turbo.renderStreamMessage(html));
  }

  // Hits the server to run logout_user (clears session, fires tracker events)
  // before the native app takes over to clear cookies and reset state.
  static destroySession(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'text/html'
      }
    });
  }

  static postContactsErrorMessage(errorMessage) {
    const errorMessageSpan = document.querySelector('.phone-access-warning');

    errorMessageSpan.textContent = errorMessage;
    errorMessageSpan.style.display = "block";
  }
}
export { Bridge };

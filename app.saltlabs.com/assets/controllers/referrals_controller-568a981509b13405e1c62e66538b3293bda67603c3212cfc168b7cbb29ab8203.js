import { Controller } from "@hotwired/stimulus"
import { Bridge } from "bridge";

export default class extends Controller {
  static get targets() {
    return ['saltTag'];
  }

  share() {
    const url = this.data.get('referral-link');

    // Android webview doesn't support navigator.share, so we need to use the TurboNativeBridge. This message will just
    // be ignored on iOS
    if (Bridge.isTurboNativeApp) window.TurboNativeBridge.postMessage("share", { url: url })

    if (navigator.share) {
      navigator.share({
        title: 'Refer a friend to Salt',
        text: `I earn rewards while I work and so can you by using the Salt app!`,
        url: url
      }).catch(e => {
        if (!e.toString().includes('AbortError')) throw(e);
      });
    } else if (navigator.clipboard) {
      this.copy_to_clipboard();
    } else {
      console.log('Clipboard not found');
    }
  }

  complete_profile() {
    this.saltTagTarget.focus();
  }

  async copy_to_clipboard() {
    const permissionStatus = await navigator.permissions?.query({name: "clipboard-write"});

    if (permissionStatus?.state === "granted" || permissionStatus?.state === "prompt") {
      await navigator.clipboard.writeText(this.data.get('referral-link'));
    } else {
      console.log('Clipboard write permission denied');
    }
  }
};

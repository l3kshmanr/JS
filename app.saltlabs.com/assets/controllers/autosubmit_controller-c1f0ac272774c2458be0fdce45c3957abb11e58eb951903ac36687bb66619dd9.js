import { Controller } from "@hotwired/stimulus"
import "lottie-web"

export default class extends Controller {
    static get targets() {
        return ['form'];
    }

    connect() {
        // Use `requestSubmit` rather than `submit`, otherwise Turbo will not pick up the submission.
        this.formTarget.requestSubmit();
    }
};

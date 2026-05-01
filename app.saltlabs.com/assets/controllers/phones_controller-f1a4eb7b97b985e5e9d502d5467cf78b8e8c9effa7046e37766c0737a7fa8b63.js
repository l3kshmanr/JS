import { Controller } from "@hotwired/stimulus"
import IMask from 'imask';

export default class extends Controller {
    static get targets() {
        return ['input', 'form', 'submit'];
    }

    connect() {
        this.toggleSubmit();
        this.mask = IMask(this.inputTarget, {mask: '(000) 000-0000'})
    }

    toggleSubmit() {
        if (this.inputTarget.value.replace(/\D/g,'').length >= 10) {
            this.submitTarget.classList.add('is-main')
            this.submitTarget.removeAttribute('disabled')
        } else {
            this.submitTarget.classList.remove('is-main')
            this.submitTarget.setAttribute('disabled', true)
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.inputTarget.value = this.inputTarget.value.replace(/\D/g, "");
        e.target.requestSubmit(); 
    }
};

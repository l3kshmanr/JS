import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const phoneNumberField = this.element.querySelector('[data-behavior="phone-number-field"]');
    phoneNumberField.addEventListener('input', function() {
      var phoneNumber = this.value;
      var formattedPhoneNumber = numberToPhone(phoneNumber);
      this.value = formattedPhoneNumber;
    });

    function numberToPhone(number) {
      if (!number) { return ''; }
  
      var phoneNumber = number.replace(/[^\d]/g, '');
      phoneNumber = phoneNumber.slice(0, 10);
      var formattedPhoneNumber = '';
  
      if (phoneNumber.length > 6) {
        formattedPhoneNumber += '(' + phoneNumber.slice(0, 3) + ') ';
        formattedPhoneNumber += phoneNumber.slice(3, 6) + '-';
        formattedPhoneNumber += phoneNumber.slice(6);
      } else if (phoneNumber.length > 3) {
        formattedPhoneNumber += '(' + phoneNumber.slice(0, 3) + ') ';
        formattedPhoneNumber += phoneNumber.slice(3);
      } else {
        formattedPhoneNumber += phoneNumber;
      }
  
      return formattedPhoneNumber;
    }
  }
};

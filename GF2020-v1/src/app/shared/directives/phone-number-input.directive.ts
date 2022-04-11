import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[inputValue][appPhoneNumberInput],[formControlName][appPhoneNumberInput],[formControl][appPhoneNumberInput],[ngModel][appPhoneNumberInput]',
  host: {
    '(keypress)': 'onInputKeyPressed($event)',
    '(input)': 'onInputKeyPressed($event)',
    '(blur)': 'onInputKeyPressed($event)',
    '(keyup)': 'onInputKeyPressed($event)'
  }
})
export class PhoneNumberInputDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('type') type: string;
  constructor() { }
  private REGEXP: RegExp;
  onInputKeyPressed(event) {
    // console.log('PhoneNumberInputDirective => ',event);
    // [0-9]{3}-[0-9]{2}-[0-9]{3}
    switch (this.type) {
      case 'number':
        this.REGEXP = new RegExp('^[0-9+]+$');
        break;      
      case 'tel':
        this.REGEXP = new RegExp('^[0-9+-]+$');
        break;
      case 'text':        
        this.REGEXP = new RegExp('^[0-9+]+$');
        break;
      case 'alphabet':
        this.REGEXP = new RegExp('^[0-9+]+$');
        break;
      case 'alphabetNumber':
        this.REGEXP = new RegExp('^[0-9+]+$');
        break;
      case 'alphabetNumberSpace':
        this.REGEXP = new RegExp('^[0-9+]+$');
        break;
    }
    if (this.REGEXP !== undefined) {
      const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!this.REGEXP.test(key)) {
        return false;
      }
      return true;
    }
    return true;
  }

}

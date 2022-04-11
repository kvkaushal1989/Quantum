import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[formControlName][appTimeZoneInput],[formControl][appTimeZoneInput],[ngModel][appTimeZoneInput]',
  host: {
    '(keypress)': 'onInputKeyPressed($event)',
    '(input)': 'onInputKeyPressed($event)',
    '(blur)': 'onInputKeyPressed($event)',
    '(keyup)': 'onInputKeyPressed($event)'
  }
})
export class TimeZoneInputDirective {

  @Input() type: string;

  constructor() { }
  private REGEXP: RegExp;
  onInputKeyPressed(event) {
    // console.log('TimeZoneInputDirective => ', event);
    switch (this.type) {
      case 'number':
        this.REGEXP = new RegExp('^[0-9+-:]+$');
        break;
      case 'tel':
        this.REGEXP = new RegExp('^[0-9+-:]+$');
        break;
      case 'text':
        this.REGEXP = new RegExp('^[0-9+-:]+$');
        // this.REGEXP = new RegExp('^[+-][0-9]{2}:[0-9]{2}$');
        break;
      case 'alphabet':
        this.REGEXP = new RegExp('^[0-9+-:]+$');
        break;
      case 'alphabetNumber':
        this.REGEXP = new RegExp('^[0-9+-:]+$');
        break;
      case 'alphabetNumberSpace':
        this.REGEXP = new RegExp('^[0-9+-:]+$');
        break;
    }

    if (this.REGEXP !== undefined) {
      const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      console.log(key, this.REGEXP.test(key));
      if (!this.REGEXP.test(key)) {
        return false;
      }
      return true;
    }
    return true;
  }
}

import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appAlphaNumeric]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(keypress)': 'onInputKeyPressed($event)',
    '(input)': 'onInputKeyPressed($event)',
    '(blur)': 'onInputKeyPressed($event)',
    '(keyup)': 'onInputKeyPressed($event)'
  }
})
export class AlphaNumericDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('type') type: string;
  constructor() { }
  private REGEXP: RegExp;
  onInputKeyPressed(event) {
    // console.log('OnlyAlphabetDirective => ',event);
    switch (this.type) {
      case 'alphabetNumber':
        this.REGEXP = new RegExp('^[a-zA-Z0-9 ]+$');
        break;
      case 'alphabetNumberSpace':
        this.REGEXP = new RegExp('^[a-zA-Z0-9 ]+$');
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

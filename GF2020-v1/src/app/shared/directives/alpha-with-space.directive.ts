import { Directive, Input } from '@angular/core';

@Directive({ 
  selector: '[inputValue][appAlphaWithSpace],[formControlName][appAlphaWithSpace],[formControl][appAlphaWithSpace],[ngModel][appAlphaWithSpace]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(keypress)': 'onInputKeyPressed($event)',
    '(input)': 'onInputKeyPressed($event)',
    '(blur)': 'onInputKeyPressed($event)',
    '(keyup)': 'onInputKeyPressed($event)'
  }
})
export class AlphaWithSpaceDirective {
  @Input('type') type: string;
  constructor() { }
  private REGEXP: RegExp;
  onInputKeyPressed(event) {
    // console.log('OnlyAlphabetDirective => ',event);
    switch (this.type) {
      case 'number':
        this.REGEXP = new RegExp('^[0-9]+$');
        break;
      case 'text':
        this.REGEXP = new RegExp('^[a-zA-Z ]+$');
        break;
      case 'alphabet':
        this.REGEXP = new RegExp('^[a-zA-Z ]+$');
        break;
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

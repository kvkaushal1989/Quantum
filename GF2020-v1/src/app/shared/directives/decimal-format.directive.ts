import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDecimalFormat]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(input)': 'isNumber($event)',
    '(keypress)': 'isNumber($event)',
    // '(blur)': 'formatDecimal($event)',
    '(focusout)': 'formatDecimal($event)'
  }
})
export class DecimalDigitsDirective {
  @Input() appDecimalFormat = 0;

  constructor() { }

  isNumber(evt: any) {
    // tslint:disable-next-line: deprecation
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    console.log(charCode);
     
      if (charCode == 46 || charCode == 45 || charCode == 32) {
        return true;
      } else {
        return false;
      } 
   }
    return true;
  }

  formatDecimal(event: any) {
    console.log('formatDecimal => ', event);
    console.log('formatDecimal => ', event.target.value);
    // event.target.value = Math.round(Number(event.target.value)).toFixed(Number(this.appDecimalFormat));
    event.target.value = Number(event.target.value).toFixed(Number(this.appDecimalFormat));
  }
}

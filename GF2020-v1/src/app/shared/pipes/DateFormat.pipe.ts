import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return ''; }
    // if (!args) { args = 'shortDate'; }
    const _localStorage = localStorage.getItem('userPreference') ? JSON.parse(localStorage.getItem('userPreference')) : null;

    // const locale = _localStorage ? _localStorage['LOCALE'] : 'en-US';
    const df = _localStorage ? _localStorage['DATE_FORMAT'] : 'dd MMM, yy';
    const offset = _localStorage ? _localStorage['UTC_OFFSET'] : '+05:30';
    const format = !args ? df : args;

    // if (Object.keys(environment).indexOf('DATE_FORMAT') >= 0) {
    if (_localStorage) {
      let offsetVal: any = '';
      let currDate: any = new Date();
      console.log(currDate)
      currDate = currDate.toString();
      let checkLang: any = currDate.includes("Paraguay");
      if (checkLang) {
        offsetVal = '-4';
      } else {
        offsetVal = '+05:30';
      }
      // return super.transform(value, format, offset, locale);
      return super.transform(value, format, offsetVal);
    }
    // return super.transform(value, 'dd-MM-yyyy', '+05:30', 'en-US');
    return super.transform(value, 'dd-MM-yyyy', '+05:30');

    // return formatDate(value, format, this.session.locale);
  }
}
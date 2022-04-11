import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { ConfigSetup } from 'src/app/config-setup';
import { LocalStorageService } from '../services/local-storage.service';

const PADDING = '000000';

@Pipe({
  name: 'hexaDecimalNumberFormatter'
})
export class DynamicNumberFormatePipe implements PipeTransform {
  private locale: string = 'en-US';
  private thousandSeperator: string = ',';
  private decimalSeperator: string = '.';
  private minimumFractionDigits: number = 6;
  private maximumFractionDigits: number = 6;

  constructor(
    private decimalPipe: DecimalPipe,
    private _localStorage: LocalStorageService
  ) {
    this.locale = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['LOCALE'] : 'en-US';
    this.thousandSeperator = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['THOUSANDS_SEPARATOR'] : ',';
    this.decimalSeperator = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['DECIMAL_SEPARATOR'] : '.';
    // this.minimumFractionDigits = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['MIN_FRACTIONDIGITS'] : 2;
    // this.maximumFractionDigits = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['MAX_FRACTIONDIGITS'] : 2;
  }

  transform(value: string, format?: string) {
    if (value == null) { return ''; }
    format = format ? format : this.locale;
    // value = this.parseToNumber(value).toFixed(2);

    // return formatNumber(this.parseToNumber(value), format, '1.2-3');
    const x = parseFloat(value); // .toLocaleString(format, { minimumFractionDigits: ConfigSetup.MIN_FRACTIONDIGITS, maximumFractionDigits: ConfigSetup.MAX_FRACTIONDIGITS });
    // return parseFloat(value).toLocaleString(format, { minimumFractionDigits: ConfigSetup.MIN_FRACTIONDIGITS, maximumFractionDigits: ConfigSetup.MAX_FRACTIONDIGITS });
    return parseFloat(value).toLocaleString(format, { minimumFractionDigits: this.minimumFractionDigits, maximumFractionDigits: this.maximumFractionDigits });
  }

  parseToNumber(value: any): number {
    let amount = value ? value : 0;
    if (typeof value !== 'number') {
      amount = amount.toString().replace(/\s/g, '');
      // amount = this.THOUSANDS_SEPARATOR === ',' ?  amount.replace(/,/g, '') : amount.replace(/\./g, '');
      // amount = this.DECIMAL_SEPARATOR === ',' ?  amount.replace(/\,/g, '.') : amount.replace(/\,/g, '.');

      // amount = ConfigSetup.THOUSANDS_SEPARATOR === '.' ? this.decimalNumber(amount.replace(ConfigSetup.THOUSANDS_SEPARATOR, '')) : amount.replace(ConfigSetup.THOUSANDS_SEPARATOR, '');
      amount = amount.replace(this.thousandSeperator, '');
      amount = amount.replace(this.decimalSeperator, '.');
    }
    return Number(amount);
  }

  decimalNumber(amount: string): any {
    return (Number(amount) / 100).toString();
  }

  parseToFloat(value: string, format: string, decimalNumber?: any) {
    if (value == null) { return ''; }
    format = format ? format : this.locale;
    const x = parseFloat(value);
    if (decimalNumber) {
      return parseFloat(value).toLocaleString(format, { minimumFractionDigits: decimalNumber, maximumFractionDigits: decimalNumber });
    } else {
      return parseFloat(value).toLocaleString(format, { minimumFractionDigits: this.minimumFractionDigits, maximumFractionDigits: this.maximumFractionDigits });
    }
  }
}

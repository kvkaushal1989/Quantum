import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { ConfigSetup } from 'src/app/config-setup';
import { LocalStorageService } from '../services/local-storage.service';

const PADDING = '000000';

@Pipe({
  name: 'roeFormat'
})
export class RoeFormatPipe implements PipeTransform {
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
    this.minimumFractionDigits = 6;
    this.maximumFractionDigits = 6;
  }

  transform(value: any, format?: string, minimumFractionDigit?: number, maximumFractionDigit?: number) {
    if (value == null) { return ''; }
    format = format ? format : this.locale;
    minimumFractionDigit = minimumFractionDigit ? minimumFractionDigit : this.minimumFractionDigits;
    maximumFractionDigit = maximumFractionDigit ? maximumFractionDigit : this.maximumFractionDigits;

    // value = this.parseToNumber(value);

    // return formatNumber(this.parseToNumber(value), format, '1.2-3');
    // const x: any = parseFloat(this.parseToNumber(value).toString());
    // .toLocaleString(format, { minimumFractionDigits: ConfigSetup.MIN_FRACTIONDIGITS, maximumFractionDigits: ConfigSetup.MAX_FRACTIONDIGITS });
    // return parseFloat(value).toLocaleString(format, { minimumFractionDigits: ConfigSetup.MIN_FRACTIONDIGITS, maximumFractionDigits: ConfigSetup.MAX_FRACTIONDIGITS });
    return this.parseToNumber(value).toLocaleString(format, { minimumFractionDigits: minimumFractionDigit, maximumFractionDigits: maximumFractionDigit });
  }

  parseToNumber(value: any): number {
    let amount = value ? value : 0;
    if (typeof value !== 'number' && parseFloat(value) != value) {
      amount = amount.toString().replace(/\s/g, '');
      // amount = this.THOUSANDS_SEPARATOR === ',' ?  amount.replace(/,/g, '') : amount.replace(/\./g, '');
      // amount = this.DECIMAL_SEPARATOR === ',' ?  amount.replace(/\,/g, '.') : amount.replace(/\,/g, '.');
      // const ths: any =  amount.split(this.thousandSeperator);
      // amount = ths.length > 1 ? amount.replace(new RegExp(this.thousandSeperator, 'g'), '') : amount;
      amount = amount.split(this.thousandSeperator).join('');
      amount = amount.replace(this.decimalSeperator, '.');
    }
    return Number(amount);
  }

  decimalNumber(amount: string): any {
    return (Number(amount) / 100).toString();
  }

  thousands_separators(num) {
    const num_parts = num.toString().split(this.decimalSeperator);
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeperator);
    return num_parts.join(this.decimalSeperator);
  }

  // console.log(thousands_separators(1000));
  // console.log(thousands_separators(10000.23));
  // console.log(thousands_separators(100000));
}

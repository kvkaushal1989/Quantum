import { Directive, ElementRef, forwardRef, HostListener, LOCALE_ID, Inject, Input  } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DecimalPipe, formatNumber } from '@angular/common';

@Directive({
  selector: '[appNumberFormat]',
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => NumberFormatDirective),
  //     multi: true,
  //   }
  // ]
  host: {
    '(blur)': 'formatValue($event)'
  }
})
export class NumberFormatDirective {
  @Input() appNumberFormat: any;
  // tslint:disable-next-line:variable-name
  private _value: string | null;

  constructor(private _elementRef: ElementRef<HTMLInputElement>, @Inject(LOCALE_ID) private locale: string) {
    // this.locale = 'es-py';
    console.log('created directive');
  }
  get value(): string | null {
    return this._value;
  }

  @Input('value')
  set value(value: string | null) {
    this._value = value;
    this.formatValue(value);
  }

  private numberWithCommas(x: any) {
    const number = Number(x);
    console.log('toLocaleString es-py => ', x.toLocaleString('es-py'));

    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // return x.toLocaleString(this.locale)
    // return x = formatNumber(x, this.locale, '1.2-5');
    return x = new Number(x).toLocaleString("fi-FI");
  }

  private formatValue(value: any | null) {
    if (value !== null) {
      this._elementRef.nativeElement.value = this.numberWithCommas(value);
    } else {
      this._elementRef.nativeElement.value = '';
    }
  }

  private unFormatValue() {
    const value = this._elementRef.nativeElement.value;
    this._value = value.replace(/[^\d.-]/g, '');
    if (value) {
      this._elementRef.nativeElement.value = this._value;
    } else {
      this._elementRef.nativeElement.value = '';
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    console.log('onInput => ', value);
    this._value = value.replace(/[^\d.-]/g, '');
    this._onChange(this._value);
  }

  @HostListener('blur', ['$event.target.value'])
  _onBlur(value) {
    console.log('_onBlur d=> ', value);
    this.formatValue(this._value);
  }

  @HostListener('focus')
  onFocus() {
    //this.unFormatValue();
  }

  _onChange(value: any): void {
  }

  writeValue(value: any) {
    this._value = value;
    this.formatValue(this._value);
    // this._onChange(this._value);
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {
  }

}

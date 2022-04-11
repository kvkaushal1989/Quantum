import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConfigSetup } from 'src/app/config-setup';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Directive({
  selector: 'input[appNumberLocale]',
  // providers: [
  //   { provide: NG_VALUE_ACCESSOR, useExisting: NumberLocaleDirective },
  // ]
})
export class NumberLocaleDirective {
  private _value: string | null;
  private locale: string = 'en-US';

  constructor(private _elementRef: ElementRef<HTMLInputElement>, private _localStorage: LocalStorageService) {

    this.locale = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['LOCALE'] : 'en-US';
  }


  get value(): string | null {
    console.log('get Value');
    return this._value;
  }

  @Input('value')
  set value(value: string | null) {
    console.log('set Value', value);
    this._value = value;
    this._formatValue(value);
  }

  private _formatValue(value: string | null) {
    if (value !== null) {
      this._elementRef.nativeElement.value = Number(value).toLocaleString(this.locale);
    } else {
      this._elementRef.nativeElement.value = '';
    }
  }

  private unFormatValue() {
    const value = this._elementRef.nativeElement.value;
    this._value = value.replace(/[^0-9]/g, '');
    console.log('_formatValue', value);
    if (value) {
      this._elementRef.nativeElement.value = this._value;
    } else {
      this._elementRef.nativeElement.value = '';
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    console.log('onInput', value);
    this._value = value.replace(/[^0-9]/g, '').toLocaleString(this.locale);
  }

  @HostListener('blur')
  _onBlur() {
    console.log('_onBlur', this._value);
    if (this._value) {
      this._formatValue(this._value);
    }
  }

  @HostListener('focus')
  onFocus() {
    this.unFormatValue();
  }

}

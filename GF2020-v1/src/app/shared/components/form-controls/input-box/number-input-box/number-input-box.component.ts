import { Component, Input, forwardRef, LOCALE_ID, Inject, ElementRef, OnInit } from '@angular/core';
import { DecimalPipe, formatNumber } from '@angular/common';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NumberFormatePipe } from 'src/app/shared/pipes/number-formate.pipe';
import { ConfigSetup } from 'src/app/config-setup';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

let identifier = 0;
const noop = () => { };

@Component({
  selector: 'app-number-input-box',
  templateUrl: './number-input-box.component.html',
  styleUrls: ['./number-input-box.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberInputBoxComponent),
    multi: true
  },
    NumberFormatePipe
  ]
})
export class NumberInputBoxComponent implements OnInit, ControlValueAccessor {
  @Input() name: string | 'This';
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'textarea';
  @Input() required: boolean;
  @Input() placeholder: string = '';
  @Input() taborder: number;
  @Input() readonly: boolean;

  @Input() minlength = 0;
  @Input() maxlength = 500;
  @Input() defaultValue = '';
  @Input() isPrefix: boolean;
  @Input() prefixType: string;
  @Input() prefixContent: string;
  @Input() isSuffix: boolean;
  @Input() suffixType: string;
  @Input() suffixContent: string;
  @Input() isHint: boolean;
  @Input() hintText: string;
  @Input() isReadOnly: boolean;
  @Input() isDisabled: boolean;
  @Input() disabled: boolean;
  @Input() isFloatLabel = true;
  @Input() label: string;
  @Input() isNumeric: boolean;
  @Input() dividerColor = '';
  @Input() patternType = 'alpha'; // ['Alpha', 'Alpha-Numeric', 'Numeric', 'Email','SpacialChar']
  @Input() customPattern = ''; // ['^[a-zA-Z_-]$','^[a-zA-Z0-9_-]$',^[0-9_-]$,'','','','','','']
  @Input() fieldValue: any;
  @Input() showErrors: boolean;
  @Input() errorStatus: FormGroup = null;
  @Input() isRate: boolean;
  @Input() decimalDigits: number;

  public identifier = `form-text-${identifier++}`;

  focused: boolean;
  empty: string = null;
  inputId = 0;
  // tslint:disable-next-line: variable-name
  _editor: any;

  regexStr = '^[0-9.-]*$';
  private locale: string = 'en-US';
  private thousandSeperator: string = ',';
  private decimalSeperator: string = '.';
  private minimumFractionDigits: number = 2;
  private maximumFractionDigits: number = 2;

  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  // @Input() _ngModel?: string;
  // TODO: to overide textbox with value
  @Input() _value: string;

  // TODO: provide compatibility with formControl
  @Input() inputValue?: string;

  // TODO: provide compatibility with formControl
  // @Input() formControl?: string;

  // TODO: provide compatibility with formControlName
  // @Input() formControlName?: string;
  // get ngModel() {
  //     return this._ngModel;
  // }

  // set ngModel(val) {
  //     this._ngModel = val;
  //     this._onChange(this._ngModel);
  // }

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private formatPipe: NumberFormatePipe,
    private _localStorage: LocalStorageService
  ) {
    this.locale = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['LOCALE'] : 'en-US';
    this.thousandSeperator = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['THOUSANDS_SEPARATOR'] : ',';
    this.decimalSeperator = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['DECIMAL_SEPARATOR'] : '.';
    this.minimumFractionDigits = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['MIN_FRACTIONDIGITS'] : 2;
    this.maximumFractionDigits = _localStorage.getLocalStorage('userPreference') ? _localStorage.getLocalStorage('userPreference')['MAX_FRACTIONDIGITS'] : 2;
  }

  ngOnInit() {
    this.minimumFractionDigits = this.decimalDigits ? this.decimalDigits : this.maximumFractionDigits;
    this.maximumFractionDigits = this.decimalDigits ? this.decimalDigits : this.maximumFractionDigits;
    // this.formatPipe.transform(this._value, this.locale, this.minimumFractionDigits, this.maximumFractionDigits);
    this.regexStr = `^[0-9${this.decimalSeperator}-]*$`;
  }

  // get accessor
  get value() {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(val: any) {
    //  if (val !== this._value) {
    this._value = val;
    // this._value = formatNumber(val, this.locale, '1.2-5');
    this.onChangeCallback(val);
    // }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value) {
      // this.value = value;
      // this.value = this.formatPipe.transform(value.toString(), ConfigSetup.LOCALE);
      this.formatValue(value.toString());
    } else if (Number(value) === 0) {
      this.formatValue(value);
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: (value: any) => void) {
    if (this.value) {
      this.formatValue(this.value.toString());
    }
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  _focusHandler() {
    let amount = this._elementRef.nativeElement.value ? this._elementRef.nativeElement.value.toString() : this._value;
    if (amount && typeof amount !== 'number') {
      amount = amount.toString().replace(/\s/g, '');
      // amount = this.THOUSANDS_SEPARATOR === ',' ?  amount.replace(/,/g, '') : amount.replace(/\./g, '');
      // amount = this.DECIMAL_SEPARATOR === ',' ?  amount.replace(/\,/g, '.') : amount.replace(/\,/g, '.');

      // amount = amount.replace(this.thousandSeperator, '');
      // amount = amount.replace(this.decimalSeperator, '.');
      this._value = amount;
    }
    this.onChangeCallback(this._value);
  }

  _keyPressHandler(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    const value = event.target.value;

    const ch = String.fromCharCode(charCode);
    const regEx = new RegExp(this.regexStr);

    if (event.ctrlKey) {
      return true;
    }

    if (event.charCode === 0) {
      return;
    }

    if (ch === '-') {
      if (value.indexOf('-') !== -1) {
        event.preventDefault();
      }
    }

    if (ch === this.thousandSeperator) {
      if (value.indexOf(this.thousandSeperator) !== -1) {
        event.preventDefault();
      }
    }

    if (ch === this.decimalSeperator) {
      if (value.indexOf(this.decimalSeperator) !== -1) {
        event.preventDefault();
      }
    }

    if (!regEx.test(ch)) {
      event.preventDefault();
    } else {
      return;
    }
  }

  _maxLenthValidat(event: any): number {
    let max = 0;
    let max1 = 0;
    let max2 = 0;
    const value = this._value;
    if (value) {
      max = value.split(this.decimalSeperator)[0].length;
      max1 = value.split(this.decimalSeperator)[1] ? value.split(this.decimalSeperator)[1].length : 0;
      max2 = value.length;

      console.log('max => ', max2);
      if (max <= this.maxlength) {
        return max2 + (this.maxlength - max);
      } else if (max2 >= this.maxlength) {
        return max2;
      } else {
        return this.maxlength;
      }
    } else {
      return this.maxlength;
    }
  }

  _blurHandler(event: any) {
    // console.log('this._elementRef.nativeElement.value => ', this._elementRef.nativeElement.value);
    // console.log('_blurHandler => ', this.locale, 'val => ', this.value, 'this._value => ', this._value);
    // this._value = formatNumber(this._value, this.locale, '1.2-5');
    this.formatValue(this._value);
  }

  private numberWithCommas(x: string) {
    // const number = Number(x);
    // console.log('toLocaleString es-py => ', number.toLocaleString('es-py'));
    // let x: number = number.toLocaleString('es-py');
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // return x.toLocaleString(this.locale)
    // return x = formatNumber(x, this.locale, '1.2-5');
    // return Number(x).toLocaleString('es-py');
    // return this.formatPipe.transform(x, ConfigSetup.LOCALE);
  }

  private formatValue(value: any) {
    if (value) {
      if (value === '-' || value === ',' || value === '.') {
        console.log(value)
        value = '';
      }
      this._value = this.formatPipe.transform(value, this.locale, this.minimumFractionDigits, this.maximumFractionDigits);
      this._elementRef.nativeElement.value = this.formatPipe.transform(value, this.locale, this.minimumFractionDigits, this.maximumFractionDigits);
    } else {
      if (this.isRate) {
        this._value = this.formatPipe.transform('0', this.locale, this.minimumFractionDigits, this.maximumFractionDigits);
        this._elementRef.nativeElement.value = this.formatPipe.transform('0', this.locale, this.minimumFractionDigits, this.maximumFractionDigits);
      } else {
        this._elementRef.nativeElement.value = '';
        this._value = '';
      }
    }
    this.onChangeCallback(this._value);
  }
}

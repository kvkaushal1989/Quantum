import { Component, OnInit, Input, forwardRef, ElementRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

let identifier = 0;

@Component({
  selector: 'app-mask-input-box',
  templateUrl: './mask-input-box.component.html',
  styleUrls: ['./mask-input-box.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskInputBoxComponent),
    multi: true,
  }],
})
export class MaskInputBoxComponent implements ControlValueAccessor {

    @Input() name: string | 'This';
    @Input() type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'time';
    @Input() required: boolean;
    @Input() placeholder = '';
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
    @Input() maskInput: string = '00:00:00';
    @Input() showErrors: boolean;
    @Input() errorStatus: FormGroup = null;

    public identifier = `form-text-${identifier++}`;

    focused: boolean;
    empty: string = null;
    inputId = 0;
    // tslint:disable-next-line: variable-name
    _editor: any;

    private _lastMaskedValue = '';

    // @Input() _ngModel?: string;
    // tslint:disable-next-line: variable-name
    @Input() _value: any;

    // TODO: provide compatibility with formControl
    @Input() inputValue?: string;

    // TODO: provide compatibility with formControlName
    // @Input() formControlName?: string;
    // get ngModel() {
    //     return this._ngModel;
    // }

    // set ngModel(val) {
    //     this._ngModel = val;
    //     this._onChange(this._ngModel);
    // }
    get value() {
        return this._value;
    }

    set value(val) {
        this._value =  this._maskValue(val) ; // val;
        this._onChange(this._value);
    }

    constructor(
      private _elementRef: ElementRef<HTMLInputElement>
    ) {

    }

    _onChange(value: any) {
        return;
    }
    // writeValue(value: any) {
    //     if (value !== undefined) {
    //         this.ngModel = value;
    //     }
    // }
    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value;
        }
    }
    registerOnChange(fn: (value: any) => void) {
        this._onChange = fn;
    }

    registerOnTouched(fn: any) { }

    private _maskValue(val: string): string {
      if (!val || !this.maskInput || val === this._lastMaskedValue) {
          return val;
      }

      const maskedVal = this._lastMaskedValue =
          valueToFormat1(
              val,
              this.maskInput,
              this._lastMaskedValue.length > val.length,
              this._lastMaskedValue);

     // console.log('this._lastMaskedValue => ', this._lastMaskedValue, ', maskedVal => ', maskedVal);

      this.maxlength = this.maskInput ? this.maskInput.length : 500;
      this._value = maskedVal;
      return maskedVal;
  }
}

const _formatToRegExpin = {
    0: /[0-9]/, a: /[a-z]/, A: /[A-Z]/, B: /[a-zA-Z]/,
};

const _allFormatsStr1 = '(' +
    Object.keys(_formatToRegExpin)
        .map(key => _formatToRegExpin[key].toString())
        .map(regexStr => regexStr.substr(1, regexStr.length - 2))
        .join('|')
    + ')';

const _allFormatsGlobal1 = getAllFormatRegexp1('g');

/**
 * Apply format to a value string
 *
 * Format can be constructed from next symbols:
 *  - '0': /[0-9]/,
 *  - 'a': /[a-z]/,
 *  - 'A': /[A-Z]/,
 *  - 'B': /[a-zA-Z]/
 *
 * Example: 'AAA-00BB-aaaa'
 * will accept 'COD-12Rt-efww'
 *
 * @param value Current value
 * @param format Format
 * @param goingBack Indicates if change was done by BackSpace
 * @param prevValue Pass to precisely detect formatter chars
 */
function valueToFormat1(value: string, format: string, goingBack = false, prevValue?: string): string {

    let maskedValue = '';
    const unmaskedValue = unmaskValue1(value);

    const isLastCharFormatter = !getAllFormatRegexp1().test(value[value.length - 1]);
    const isPrevLastCharFormatter = prevValue && !getAllFormatRegexp1().test(prevValue[prevValue.length - 1]);

    let formatOffset = 0;
    for (let i = 0, maxI = Math.min(unmaskedValue.length, format.length); i < maxI; ++i) {
        const valueChar = unmaskedValue[i];
        let formatChar = format[formatOffset + i];
        let formatRegex = getFormatRegexp1(formatChar);

        if (formatChar && !formatRegex) {
            maskedValue += formatChar;
            formatChar = format[++formatOffset + i];
            formatRegex = getFormatRegexp1(formatChar);
        }

        if (valueChar && formatRegex) {
            if (formatRegex && formatRegex.test(valueChar)) {
                maskedValue += valueChar;
            } else {
                break;
            }
        }

        const nextFormatChar = format[formatOffset + i + 1];
        const nextFormatRegex = getFormatRegexp1(nextFormatChar);
        const isLastIteration = i === maxI - 1;

        if (isLastIteration && nextFormatChar && !nextFormatRegex) {
            if (!isLastCharFormatter && goingBack) {
                if (prevValue && !isPrevLastCharFormatter) {
                    continue;
                }
                maskedValue = maskedValue.substr(0, formatOffset + i);
            } else {
                maskedValue += nextFormatChar;
            }
        }
    }

    return maskedValue;
}

function unmaskValue1(value: string): string {
    const unmaskedMathes = value.replace(' ', '').match(_allFormatsGlobal1);
    return unmaskedMathes ? unmaskedMathes.join('') : '';
}

function getAllFormatRegexp1(flags?: string) {
    return new RegExp(_allFormatsStr1, flags);
}

function getFormatRegexp1(formatChar: string): RegExp | null {
    return formatChar && _formatToRegExpin[formatChar] ? _formatToRegExpin[formatChar] : null;
}

import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

let identifier = 0;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-text-box',
  templateUrl: './input-text-box.component.html',
  styleUrls: ['./input-text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextBoxComponent),
      multi: true
    }
  ]
})
export class InputTextBoxComponent implements ControlValueAccessor {

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
    @Input() isFloatLabel = true;
    @Input() label: string;
    @Input() isNumeric: boolean;
    @Input() dividerColor = '';
    @Input() patternType = 'alpha'; // ['Alpha', 'Alpha-Numeric', 'Numeric', 'Email','SpacialChar']
    @Input() customPattern = ''; // ['^[a-zA-Z_-]$','^[a-zA-Z0-9_-]$',^[0-9_-]$,'','','','','','']
    @Input() fieldValue: any;
    @Input() showErrors: boolean;
    @Input() errorStatus: FormGroup = null;

    public identifier = `form-text-${identifier++}`;

    focused: boolean;
    empty: string = null;
    inputId = 0;
    // tslint:disable-next-line: variable-name
    _editor: any;

    // @Input() _ngModel?: string;
    // TODO: to overide textbox with value
    @Input() _value: any;

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
    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this._onChange(this._value);
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

}

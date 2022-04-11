import { Component, HostBinding, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-basic-volume-input',
  templateUrl: './basic-volume-input.component.html',
  styleUrls: ['./basic-volume-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicVolumeInputComponent),
      multi: true
    }
  ]
})
export class BasicVolumeInputComponent implements ControlValueAccessor {

    @Input() type?: 'text' | 'email' | 'password';
    @Input() required?: boolean;
    @Input() placeholder?: string;
    @Input() taborder?: number;
    @Input() readonly?: boolean;

    // @Input() _ngModel?: string;
    //TODO: to overide textbox with value
    @Input() _value: any;

    // TODO: provide compatibility with formControl
    //@Input() formControl?: string;

    // TODO: provide compatibility with formControlName
    //@Input() formControlName?: string;
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

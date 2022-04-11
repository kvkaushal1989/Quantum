import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-basic-select-prime',
  templateUrl: './basic-select-prime.component.html',
  styleUrls: ['./basic-select-prime.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => BasicSelectPrimeComponent), multi: true }
  ]
})
export class BasicSelectPrimeComponent implements OnInit, ControlValueAccessor {
    selected: void;

    @Input() _ngModel?: string;
    @Input() _selectedValue: any;

    get selectedValue() {
      return this._selectedValue;
    }

    set selectedValue(data) {
      this._selectedValue = data;
      this._onChange(this._selectedValue);
    }

    // TODO: provide compatibility with formControl
    @Input() formControl?: string;

    // TODO: provide compatibility with formControlName
    @Input() formControlName?: string;
    get ngModel() {
        return this._ngModel;
    }

    set ngModel(val) {
        this._ngModel = val;
        this._onChange(this._ngModel);
    }

    @Input() name: any;
    cities1: { label: string; value: any; }[];

    @Input() items: any;

    @Input() label: any;

    @Input() required: boolean;
    @Input() disabled: boolean;
    @Input() showErrors: boolean;

    @Output() currentItem = new EventEmitter();

    constructor() { }

    ngOnInit() {
      // this.cities1 = [
      //   {label:'Select City', value:"123"}, {label:'Select City', value:"abc"}]
    }

    _onChange(value: any) {
        return;
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.selectedValue = value;
            this.ngModel = value;
        }
    }

    registerOnChange(fn: (value: any) => void) {
        this._onChange = fn;
    }

    registerOnTouched(fn: any) { }

    onDropDownChange(event,name) {
      console.log('dropdown change.....', name, event);
      this.currentItem.emit({ name: name, item: event.value });
    }

}

import { Component, OnInit, forwardRef, Input, Output, EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BasicRadioButtonGroupComponent),
  multi: true
};

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'basic-radio-button-group',
  templateUrl: './basic-radio-button-group.component.html',
  styleUrls: ['./basic-radio-button-group.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class BasicRadioButtonGroupComponent implements ControlValueAccessor {
  identifier = 0;
  @Input() radioItems: any = ['radio'];

  @Input() disabled: boolean;

  @Input() required: boolean;

  // @Input() _ngModel?: string; 
  @Input() _value: any;

  // TODO: provide compatibility with formControl
  @Input() inputValue?: string;

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
  

  // @Input() set inputValue(inputValue: any) {
  //   this._inputValue = inputValue;
  // }

  // get inputValue(): any { return this._inputValue; }

  // @Output() inputValueChange: EventEmitter<any> = new EventEmitter(this.inputValue);

  // public identifier = `form-radio-${identifier++}`;

  // public _inputValue: any;

  // constructor(public elementRef: ElementRef) { }

  // ngOnInit() {

  // }

  // ngOnChanges() {

  // }

  // ngDoCheck() {

  // }

  // public get value() {
  //   return this._inputValue;
  // }

  // public set value(v) {
  //   this._inputValue = v;
  //   this.onChange(this._inputValue);
  //   this.onTouched();
  // }

  // writeValue(value: any) {
  //   console.log('writeValue => ', this._inputValue);
  //   this._inputValue = value;
  // }

  // registerOnChange(fn: any) {
  //     this.onChange = this._onChangeHandler();
  // }

  // // From ControlValueAccessor interface
  // registerOnTouched(fn: any) {
  //     this.onTouched = fn;
  // }

  // setDisabledState?(isDisabled: boolean): void {}

  // // Optional
  // onSomeEventOccured(newValue) {
  //   this.value = newValue;
  // }

  // onChange: any = () => {
  //   console.log('onchange => ', this._inputValue);
  // }

  // onTouched: any = () => {
  //   console.log('onTouched => ', this._inputValue);
  // }

  // _onChangeHandler() {
  //   console.log('onchange => ', this._inputValue);
  //   console.log('onchange => ', this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }
}

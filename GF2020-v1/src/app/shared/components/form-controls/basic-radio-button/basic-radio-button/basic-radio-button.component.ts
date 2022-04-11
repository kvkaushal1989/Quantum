import { Component, OnInit, forwardRef, Input, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BasicRadioButtonComponent),
  multi: true
};



// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'basic-radio-button',
  templateUrl: './basic-radio-button.component.html',
  styleUrls: ['./basic-radio-button.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class BasicRadioButtonComponent implements ControlValueAccessor {

  // @Input() placeholder: string;
  @Input() placeholder: string;
  @Input() nameText: string;
  @Input() valueText: string;

  @Input() disabled: boolean;

  @Input() required: boolean;

  // @Input() _ngModel?: string;
  @Input() _value: any;

  // TODO: provide compatibility with formControl
  @Input() inputValue?: string;
  // TODO: provide compatibility with formControlName
  // @Input() formControlName?: string;
  // get ngModel() {
  //     return this._ngModel;
  // }

  identifier: any = new Date().getUTCMilliseconds();
  i: any;

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

  // @Input() set inputValue(inputValue:any){
  //   this._inputValue = inputValue;
  // }

  // get inputValue(): any { return this._inputValue; }

  // @Output() inputValueChange: EventEmitter<any> = new EventEmitter(this.inputValue);

  // public identifier = `input-radio-${identifier++}`;

  // public _inputValue:any;

  // constructor(public elementRef: ElementRef) { }

  // ngOnInit() {

  // }

  // ngOnChanges(){

  // }

  // ngDoCheck() {

  // }

  // public get value(){
  //   return this._inputValue;
  // }

  // public set value(v){
  //   this._inputValue = v;
  //   this.onChange(this._inputValue);
  //   this.onTouched();
  // }

  // writeValue(value: any) {
  //   this._inputValue = value;
  // }

  // registerOnChange(event: any) {
  //     this.onChange = this._handleChange(event);
  // }

  // //From ControlValueAccessor interface
  // registerOnTouched(event: any) {
  //     this.onTouched = event;
  // }

  // setDisabledState?(isDisabled: boolean): void {}

  // // Optional
  // onSomeEventOccured(newValue){
  //   this.value = newValue;
  // }

  // onChange: any = () => {
  //   console.log("onchange => ",this._inputValue)
  // };

  // onTouched: any = () => {
  //   console.log("onTouched => ",this._inputValue)
  // };

  // _handleChange(event:any){
  //   //this.inputValueChange.emit(this.inputValue);
  // }

  // _handleFocus(event:FocusEvent): void{
  //   console.log("onchange => ",this._inputValue);
  //   console.log("onchange => ",this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }

  // _handleKeypress(event:any): void{
  //   console.log("onchange => ",this._inputValue);
  //   console.log("onchange => ",this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }

  // _handleKeyup(event:any): void{
  //   console.log("onchange => ",this._inputValue);
  //   console.log("onchange => ",this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }

  // _handleBlur(event:any): void{
  //   console.log("onchange => ",this._inputValue);
  //   console.log("onchange => ",this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }
}

import { Component, OnInit, forwardRef, Input, Output, EventEmitter, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BasicCheckBoxComponent),
  multi: true
};

let identifier = new Date().getUTCMilliseconds();

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'basic-check-box',
  templateUrl: './basic-check-box.component.html',
  styleUrls: ['./basic-check-box.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class BasicCheckBoxComponent implements ControlValueAccessor {
  focused = false;
  @Input() placeholder: any;

  @Input() disabled: boolean;

  @Input() required: boolean;
  
  @Input() taborder: number;

  @Input() id: any;
  @Input() readonly: boolean;

  // @Input() _ngModel?: string; 
  @Input() _value: any;

  // TODO: provide compatibility with formControl
  @Input() inputValue?: string;

  // @Input() set inputValue(inputValue: any) {
  //   this._inputValue = inputValue;
  // }

  // get inputValue(): any { return this._inputValue; }

  // @Output() inputValueChange: EventEmitter<any> = new EventEmitter(this.inputValue);

  public identifier = `form-radio-${identifier++}`;

  // tslint:disable-next-line: variable-name
  // public _inputValue: any;

  constructor(private renderer: Renderer2, public elementRef: ElementRef) { }

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

  registerOnTouched(fn: any) { 
  }

  // ngOnInit() {

  // }

  // ngOnChanges() {

  // }

  // // tslint:disable-next-line: use-lifecycle-interface
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
  //     this.onChange = this._handleChange(fn);
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

  // _handleChange(event: FocusEvent) {
  //   console.log('onchange => ', this._inputValue);
  //   console.log('onchange => ', this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }

  _handleFocus(event: FocusEvent): void {
    this.focused = true;
    this.renderer.addClass(this.elementRef.nativeElement, 'basic-check-focus');
  }

  removeClass(className: string, element: any) {
    this.renderer.removeClass(this.elementRef.nativeElement, 'basic-check-focus');
  }


  // _handleKeypress(event: any): void {
  //   console.log('onchange => ', this._inputValue);
  //   console.log('onchange => ', this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }

  // _handleKeyup(event: any): void {
  //   console.log('onchange => ', this._inputValue);
  //   console.log('onchange => ', this.inputValue);
  //   this.inputValueChange.emit(this.inputValue);
  // }

  _handleBlur(event: any): void {
    this.focused = false;
    this.renderer.removeClass(this.elementRef.nativeElement, 'basic-check-focus');
  }
}

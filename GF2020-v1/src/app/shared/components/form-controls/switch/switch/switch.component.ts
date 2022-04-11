import { Component, OnInit, HostBinding, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements OnInit, ControlValueAccessor {

  @HostBinding('attr.id')
  externalId = '';

  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  get id() {
    return this._ID;
  }

  private _ID = '';

  // tslint:disable-next-line: no-output-rename
  @Output('change') change = new EventEmitter();

  // tslint:disable-next-line: no-input-rename
  @Input('value') _value = true;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {}
  ngOnInit(): void {}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  _keyupHandler(event: any) {
    this.value = !this.value;
    this.change.emit(event);
  }

  switch(event: any) {
    this.value = !this.value;
    this.change.emit(event);
  }

  _changeHandler(event: any) {
    this.change.emit(event);
  }
}

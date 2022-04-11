import { Component, OnInit, Output, Input, HostBinding, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dd-hh-mm-picker',
  templateUrl: './dd-hh-mm-picker.component.html',
  styleUrls: ['./dd-hh-mm-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdHhMmPickerComponent),
      multi: true
    }
  ]
})
export class DdHhMmPickerComponent implements OnInit, ControlValueAccessor {
  day = 0;
  hour = 0;
  minute = 0;
  second = 0;

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
  ngOnInit(): void {

  }

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

  switch(event: any) {
    this.value = !this.value;
    this.change.emit(event);
  }

  _changeHandler(event: any) {
    this.change.emit(event);
  }
}

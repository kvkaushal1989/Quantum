import { Component,
  Input,
  forwardRef,
  NgModule,
  OnInit} from '@angular/core';

import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    FormsModule,
    FormGroup,
    ValidationErrors
  } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

let identifier = 0;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'simple-text-box',
  templateUrl: './simple-text-box.component.html',
  styleUrls: ['./simple-text-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SimpleTextBoxComponent),
    multi: true,
  }],
})

export class SimpleTextBoxComponent implements OnInit, ControlValueAccessor {
  regExp: RegExp;
  clickStatus: boolean = false;
  @Input() name: string | 'This';
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'time' | 'url';
  @Input() required: boolean;
  @Input() placeholder = '';
  @Input() taborder: number;
  @Input() readonly: boolean;
  @Input() id: number = 0;

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
  @Input() pattern = ''; // ['^[a-zA-Z_-]$','^[a-zA-Z0-9_-]$',^[0-9_-]$,'','','','','','']
  @Input() fieldValue: any;
  @Input() showErrors: boolean;
  @Input() errorStatus: FormGroup = null;

  public identifier = `form-text-${identifier++}`;

  @Input() focused: boolean;
  empty: string = null;
  inputId = 0;
  // tslint:disable-next-line: variable-name
  _editor: any;

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
      this._value = val;
      this._onChange(this._value);
  }

  constructor() { }

  ngOnInit() {
    this.identifier = this.identifier + this.id;
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

  openLink(event: any) {
    this.regExp = new RegExp(this.pattern); //
    const validValue = this.regExp.test(this.value);
    if (this.type === 'email' && this.value && validValue && !this.clickStatus) {
      // window.open('mailto:' + this.value + '?subject=');
      location.href = 'mailto:' + this.value + '?body=yourBody';
      this.clickStatus = true;
    } else if (this.type === 'url' && this.value && validValue && !this.clickStatus) {
      window.open(this.value);
      this.clickStatus = true;
    }
  }

  _keyUpHandler(event: any) {
    // console.log(event);
    this.clickStatus = false;
  }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SimpleTextBoxComponent],
  exports: [SimpleTextBoxComponent]
})
export class SimpleTextBoxCModule { }

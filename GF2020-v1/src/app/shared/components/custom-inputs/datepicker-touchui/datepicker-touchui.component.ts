import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

import * as _moment from 'moment';
import { DatePipe } from '@angular/common';
import { ConfigSetup } from 'src/app/config-setup';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

const moment = _moment;
// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'DD/MM/YYYY',
//     dateA11yLabel: 'DD/MM/YYYY',
//     monthYearA11yLabel: 'DD/MM/YYYY',
//   },
// };
export const userPreference: any = localStorage.getItem('userPreference') ? JSON.parse(localStorage.getItem('userPreference')) : null;

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    dateA11yLabel: 'LL',
    monthYearLabel: 'MMM yy',
    monthYearA11yLabel: 'MMMM yy',
  },
};


@Component({
  selector: 'app-datepicker-touchui',
  templateUrl: './datepicker-touchui.component.html',
  styleUrls: ['./datepicker-touchui.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerTouchuiComponent),
      multi: true,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    // { provide: MAT_DATE_LOCALE, useValue: SharedService.getLocale() },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DatepickerTouchuiComponent implements OnInit, ControlValueAccessor {
  // date = new FormControl(moment(new Date()));
  private REGEXP: RegExp;

  @Input() date;
  @Input() minDate;
  @Input() maxDate;
  @Input() name;
  @Input() placeholder;
  @Input() required: boolean;
  @Input() showErrors: boolean;
  @Input() format: 'YYYY-MM-DDTHH:mm:ss';
  @Input() errorStatus: any;
  @Input() label;
  @Input() disabled = false;
  @Input() is_user_pref: boolean = true;
  public selectedCountry = 'in';


  @Output()
  public selectedDate = new EventEmitter();

  @Output() _changeEvt = new EventEmitter<any>();

  // @Input() _ngModel?: string;
  // TODO: to overide textbox with value
  // tslint:disable-next-line: variable-name
  @Input() _value: any;

  constructor(public datepipe: DatePipe, private dateAdapter: DateAdapter<any>,
              private _localStorage: LocalStorageService) {}

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
    // this._value = val ? moment(val).format('YYYY-MM-DDTHH:mm:ss') : null;
    // this._value = moment(val).format(this.format);
    this._onChange(this._value);
  }

  ngOnInit() {
    // tslint:disable-next-line: no-shadowed-variable
    const userPreference = this._localStorage.getLocalStorage('userPreference');
    this.dateAdapter.setLocale(userPreference.LOCALE || 'en-US');
    // if (this.is_user_pref) {
    //   this.placeholder = userPreference.DATE_PLACEHOLDER;
    // }
  }

  // setDateAdapterLocale(localeString: string): void {
  //   this.dateAdapter.setLocale(localeString);
  // }

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

  registerOnTouched(fn: any) {}

  addEvent(data: any) {
    const datev = moment(this._value).format('YYYY-MM-DDTHH:mm:ss');
    this._value = datev !== 'Invalid date' ? datev : '';
    this.value = this._value;
    this._onChange(this._value);
    this.selectedDate.emit(data);
  }

  _changeHandler(event: any) {
    // this._value = val ? moment(val).format('YYYY-MM-DDTHH:mm:ss') : null;
    // this._onChange(this._value);
    this._changeEvt.emit(event);
  }

  _inputHandler(event: any) {
    // this._value = val ? moment(val).format('YYYY-MM-DDTHH:mm:ss') : null;
    // this._onChange(this._value);
    this._changeEvt.emit(event);
  }

  _keyPressHandle(event: any) {
    this.REGEXP = new RegExp('^[0-9/- ]+$');
    if (this.REGEXP !== undefined) {
      const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!this.REGEXP.test(key)) {
        return false;
      }
      return true;
    }
    return true;
  }

  getErrorMessage(): string {
    const datev = moment(this._value).format('YYYY-MM-DDTHH:mm:ss');
    this._value = datev !== 'Invalid date' ? datev : '';
    if (!datev || datev === '' || datev === 'Invalid date') {
      return 'Invalid date.';
    }
    return this.isMyDateFormat(datev);
  }

  isMyDateFormat(date: string): string {
    if (date.length !== 10) {
      return 'Invalid input: Please input a string in the form of YYYY-MM-DD';
    } else {
      const da = date.split('-');
      if (da.length !== 3 || da[0].length !== 4 || da[1].length !== 2 || da[2].length !== 2) {
        return 'Invalid input: Please input a string in the form of YYYY-MM-DD';
      } else if (moment(date).isValid()) {
        return 'Invalid date: Please input a date no later than today';
      } else if (!moment(date).isValid()) {
        return 'Invalid date: Please input a date with a valid month and date.';
      }
    }
    return 'Unknown error.';
  }
}

import { Component, ViewChild, EventEmitter, Input, AfterViewInit, forwardRef, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'; 
import { FormGroup, ValidationErrors } from '@angular/forms';


let identifier = 0;

@Component({
  selector: 'app-google-place-input',
  templateUrl: './google-place-input.component.html',
  styleUrls: ['./google-place-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GooglePlaceInputComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GooglePlaceInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {

    @Input() errorStatus: any = null;
    @Input() name: string | 'This';
    @Input() type: 'text' | 'email' | 'password' | 'number' | 'textarea';
    @Input() required: boolean;
    @Input() placeholder = '';
    @Input() taborder: number;
    @Input() readonly: boolean;

     
    @Input() readOnly: boolean;
    @Input() disabled: boolean;
    @Input() isFloatLabel = true;
    @Input() label: string;
    @Input() country: string;

    @Input() adressType: string;

    // tslint:disable-next-line: no-output-on-prefix
    // @Output() onSelect = new EventEmitter();
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('addresstext', { static : true }) addresstext: any;

    public identifier = `form-text-${identifier++}`;

    dividerColor: any;
    hintText: any;
    minlength: any;
    maxlength: any;
    isPrefix: any;
    isSuffix: any;
    isDisabled: any;
    isHint: any;

    @Input() focused: boolean;
    empty: string = null;
    inputId = 0;
    // tslint:disable-next-line: variable-name
    _editor: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            {
                componentRestrictions: { country: this.country },
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

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

    onSelectEmit(event: any) {
      this.setAddress.emit(event);
    }
}

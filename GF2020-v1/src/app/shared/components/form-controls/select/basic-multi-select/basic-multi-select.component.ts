import { Component, OnInit, ElementRef, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ListItem } from '../basic-select/multiselect-dropdown/multiselect.model';
import { DropdownSettings } from '../basic-select/multiselect-dropdown/multiselect.interface';

let identifier = 0;
const noop = () => {};

@Component({
  // selector: 'app-basic-select',
  // tslint:disable-next-line: component-selector
  selector: 'basic-select_new',
  templateUrl: './basic-multi-select.component.html',
  styleUrls: ['./basic-multi-select.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicMultiSelectComponent),
      multi: true
  }]
})
export class BasicMultiSelectComponent implements OnInit, ControlValueAccessor {
  @Input() data?: Array<ListItem>;

  @Input() settings: DropdownSettings;
  
  filter: ListItem = new ListItem();
  
  defaultSettings: DropdownSettings = {
    singleSelection: true,
    text: 'Select',
    placeholder: 'Select',
    isCheckBoxVisible: false,
    enableCheckAll: false,
    selectAllText: 'Select All',
    unSelectAllText: 'Clear All',
    enableSearchFilter: false,
    maxHeight: 300,
    badgeShowLimit: 999,
    classes: '',
    disabled: false,
    searchPlaceholderText: 'Search',
    isHintTextDisplay: false,
    isTagDisplay: false,
    taggedColumns: null,
    taggedButtonDisplay: false,
    dropDownIconUp: 'fa-angle-down',
    dropDownIconDown: 'fa-angle-up',
    singleName: false
  };
  
  @Input() disabled: boolean;
  
  @Input() required: boolean;
  
  @Input() isFloatLabel: boolean;
  
  @Input() placeholder: string = 'Select';
  
  @Input() label: string;
  
  @Input() dropDownIconUp: string = 'fa-angle-up';
  @Input() dropDownIconDown: string = 'fa-angle-down';
  
  @Input() isChips: boolean;
  @Input() isPrefix: boolean;
  @Input() prefixType: string;
  @Input() prefixContent: any;
  @Input() isSuffix: boolean;
  @Input() suffixType: string;
  @Input() suffixContent: boolean;
  @Input() isHint: boolean;
  @Input() hintText: string;
  
  @Output() change: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  
  @Output() onSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  
  @Output() onDeSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  
  @Output() onSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
  
  @Output() onDeSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
  
  public identifier = `form-text-${identifier++}`;
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  _ngModel: any;
  
  // @Input() _ngModel?: string;
  @Input() _value: Array<ListItem> = new Array<ListItem>();
  // _ngModel = [3];
  // cars = [
    //     { id: 1, name: 'Volvo', text: 'Volvo' },
    //     { id: 2, name: 'Saab', text: 'Volvo', disabled: true },
    //     { id: 3, name: 'Opel', text: 'Volvo' },
    //     { id: 4, name: 'Audi', text: 'Volvo' },
    // ];
    tmpDataList:any;
    constructor(
      private _elementRef: ElementRef<HTMLInputElement>
      ) { }
      
      ngOnInit() {
        this.tmpDataList = this.data;
    this.settings = Object.assign(this.defaultSettings, this.settings);
    if (this.data) {
      this.data.forEach(v => {
        v.name = v.text;
        v.isChecked = false;
      });
    }
  }

  // get accessor
  get value() {
    return this._value;
  }

  // set accessor including call the onchange callback
  set value(val: any) {
    if (val !== this._value) {
      this._value = val;
      this.onChangeCallback(val);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== undefined) {
        this.value = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: (value: any) => void) {
    console.log('On change => ', this.value);
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onSelectionChange(event: any) {
    console.log(event);
    this.onChangeCallback(event);
    this.change.emit(event);
    // this.onSelect.emit(event);
    // this.onDeSelect.emit(event);
  }

  onRemove(event: any) {
    this.onChangeCallback(event);
    this.onDeSelectAll.emit(event);
  }

  onSelectFn(event: any) {
    if (!event.selected) {
      this.addSelected(event.value);
      this.onSelect.emit(event.value);
    } else {
      this.removeSelected(event.value);
      this.onDeSelect.emit(event.value);
    }
  }

  addSelected(item: any) {
    if (this.settings.singleSelection) {
        this._value = [];
        this._value.push(item);
    } else {
      this._value.push(item);
    }
    this.onChangeCallback(this._value);
  }

  removeSelected(clickedItem: ListItem) {
    if (this._value) {
      this._value.forEach(item => {
          if (clickedItem.id === item.id) {
              this._value.splice(this._value.indexOf(item), 1);
          }
      });
    }
    this.onChangeCallback(this._value);
  }

  isSelected(): boolean {
    let found = false;
    if (this.data) {
      this.data.forEach(item => {
        if (this._value.indexOf(item) !== -1) {
          item.isChecked = true;
          found = true;
        } else {
          item.isChecked = false;
          found = false;
        }
      });
    }
    return found;
  }

  isSelectedDisabled(clickedItem: ListItem) {
      let found = false;
      this._value.forEach(item => {
          if (clickedItem.id === item.id) {
              found = item.status !== undefined ? item.status : false;
          }
      });
      return found;
  }
}

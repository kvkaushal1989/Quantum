import { Component, OnInit, OnChanges, ViewEncapsulation, forwardRef, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ListItem, MyException } from './multiselect.model';
import { DropdownSettings } from './multiselect.interface';
import { KeyCode } from '../../basic-auto-complete/basic-auto-complete.types';
import { Subject } from 'rxjs';
// import { ClickOutsideDirective } from './clickOutside';
// import { ListFilterPipe } from './list-filter';
// import { groupByPipe } from './group-by';


export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GF2020MultiSelect),
    multi: true
};

const noop = () => {};

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
    selector: 'basic-select',
    templateUrl: './multiselect.component.html',
    host: { '[class]': 'defaultSettings.classes' },
    styleUrls: ['./multiselect.component.scss'],
    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR]
})

export class GF2020MultiSelect implements OnInit, ControlValueAccessor {
    isTouched: boolean;

    private readonly _destroy$ = new Subject<void>();
    private readonly _keyPress$ = new Subject<string>();
    selectedItemsInput: any = null;
    public selectedItems: Array<ListItem>;
    public tmpSelectedItems: Array<ListItem>;

    public isActive: boolean = false;
    public isSelectAll: boolean = false;
    public groupedData: Array<ListItem>;

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
    
    @Input('disabled') disabled: boolean;
    
    @Input('required') required: boolean;
    
    @Input('isFloatLabel') isFloatLabel: boolean;
    
    @Input('placeholder') placeholder: string = "Select";
    
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
    @Input() buttonDisplayInChip: boolean = true;
    
    @Output('onSelect')
    onSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();
    
    @Output('onDeSelect')
    onDeSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();
    
    @Output('onSelectAll')
    onSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
    
    @Output('onDeSelectAll')
    onDeSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
    
    @Input() keyDownFn = (_: KeyboardEvent) => true;
    tmpDataList:any;
    
    constructor() {
        this.isTouched = false;
    }
    
    ngOnInit() {
        this.tmpDataList = this.data;
        // //Set Default Place Holder
        // this.placeholder = (!this.placeholder || this.placeholder == undefined || this.placeholder == "")? "Select" : this.placeholder;

        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);
        }
        if (this.label) {
            this.settings.placeholder = this.label;
        }
    }

    ngOnChanges() { 
    }

    ngDoCheck() {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    }

    onItemClick(item: ListItem, index: number, evt: Event) {
        if (this.disabled || this.isSelectedDisabled(item)) {
            return false;
        }

        const found = this.isSelected(item);
        const limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            } else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }

        } else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length === this.selectedItems.length) {
            this.isSelectAll = true;
        }

        if(this.settings.singleSelection) {
            this.isActive = !this.isActive;
        }
    }

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    writeValue(value: any) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {

                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new MyException(404, { 'msg': 'Single Selection Mode, Selected Items cannot have more than one item.' });
                    } else {
                        this.selectedItems = value;
                    }
                } catch (e) {
                }

            } else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.splice(0, this.settings.limitSelection);
                } else {
                    this.selectedItems = value;
                }
                this.filterDisabledItem(value);
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
            }
        } else {
            this.selectedItems = [];
        }
    }

    filterDisabledItem(item: any) {
        this.tmpSelectedItems = item.filter((v)=>{
            return v.status != false && v.status !== undefined;
        });
    }

    filterItems() {}
    // From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    // From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    trackByFn(index: number, item: ListItem) {
        return item.id;
    }

    isSelected(clickedItem: ListItem) {
        let found = false;
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem.id == item.id) {
                found = true;
            }
        });
        return found;
    }

    isSelectedDisabled(clickedItem: ListItem) {
        let found:boolean = false;
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem.id == item.id) {
                found = item.status !== undefined ? item.status: false;
            }
        });
        return found;
    }

    addSelected(item: ListItem) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        } else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
    }

    removeSelected(clickedItem: ListItem) {
        this.selectedItems && this.selectedItems.forEach(item => {
            if (clickedItem.id === item.id) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
    }

    toggleDropdown(evt: any) {
        if (this.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        this.isTouched=true;
        evt.preventDefault();
    }

    closeDropdown() {
        this.filter = new ListItem();
        this.isActive = false;
    }

    toggleSelectAll() {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();

            if(this.tmpSelectedItems&&this.tmpSelectedItems.length > 0) {
                let x:any;
                x = this.itemsToStringID(this.tmpSelectedItems);
                this.selectedItems = this.selectedItems.filter(val =>{
                    return x.indexOf(val.id) == -1;
                }).concat(this.tmpSelectedItems);

                // let itemList: any = [];
                // itemList = this.selectedItems.filter(val =>{
                //     return x.indexOf(val.id) == -1;
                // });
                // this.tmpSelectedItems.concat(itemList);
                // this.selectedItems = [];
                // this.selectedItems =  this.tmpSelectedItems.slice();
            } else {
              let x:any;
                x = this.itemsToStringID(this.data);
                this.selectedItems = this.selectedItems.filter(val =>{
                    return x.indexOf(val.id) == -1;
                }).concat(this.data)
            }

            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        } else {
            this.selectedItems = [];
            this.selectedItems = this.tmpSelectedItems ? this.tmpSelectedItems:[];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
    }

    transformData(arr: Array<ListItem>, field: any): Array<ListItem> {
        const groupedObj:any = arr.reduce((prev:any, cur:any) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            } else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        const tempArr:any = [];
        Object.keys(groupedObj).map(function (x) {
            tempArr.push({ key: x, value: groupedObj[x] });
        });
        return tempArr;
    }

    itemsToStringID(value: Array<any> = []): string {
        return value
            .map((item: any) => {
                return item.id;
            }).join(',');
    }

    @HostListener('keydown', ['$event'])
    handleKeyDown($event: KeyboardEvent) {
        const keyCode = KeyCode[$event.which];
        console.log('keyCode', keyCode, $event);

        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            // this.handleKeyCode($event)
        } else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }

    _handlerFocus(event: any) {

        console.log('_handlerFocus => ', event);
    }
}

// @NgModule({
//     imports: [CommonModule, FormsModule],
//     declarations: [GF2020MultiSelect, ClickOutsideDirective, ListFilterPipe, groupByPipe],
//     exports: [GF2020MultiSelect, ClickOutsideDirective, ListFilterPipe, groupByPipe]
// })
// export class GF2020MultiSelectModule { }

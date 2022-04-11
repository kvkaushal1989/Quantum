import {
    Component,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    forwardRef,
    ChangeDetectorRef,
    Input,
    Output,
    EventEmitter,
    ContentChild,
    TemplateRef,
    ViewEncapsulation,
    HostListener,
    HostBinding,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy,
    Inject,
    SimpleChanges,
    ContentChildren,
    QueryList,
    InjectionToken,
    Attribute
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil, startWith, tap, debounceTime, map, filter } from 'rxjs/operators';
import { Subject, merge } from 'rxjs';
import {  ValidationErrors } from '@angular/forms';

import {
    BasicOptionTemplateDirective,
    BasicLabelTemplateDirective,
    BasicHeaderTemplateDirective,
    BasicFooterTemplateDirective,
    BasicOptgroupTemplateDirective,
    BasicNotFoundTemplateDirective,
    BasicTypeToSearchTemplateDirective,
    BasicLoadingTextTemplateDirective,
    BasicMultiLabelTemplateDirective,
    BasicTagTemplateDirective,
    BasicLoadingSpinnerTemplateDirective
} from './basic-templates.directive';

import { ConsoleService } from './console.service';
import { isDefined, isFunction, isPromise, isObject } from './value-utils';
import { ItemsList } from './items-list';
import { SelectOption, KeyCode } from './basic-auto-complete.types';
import { newId } from './id';
import { BasicDropdownPanelComponent } from './basic-dropdown-panel.component';
import { BasicOptionComponent } from './basic-option.component';
import { SelectionModelFactory } from './selection-model';
import { BasicSelectConfig } from './config.service';
import { BasicDropdownPanelService } from './basic-dropdown-panel.service';


export const SELECTION_MODEL_FACTORY = new InjectionToken<SelectionModelFactory>('basic-auto-complete-selection-model');
export type DropdownPosition = 'bottom' | 'top' | 'auto';
export type AddTagFn = ((term: string) => any | Promise<any>);
export type CompareWithFn = (a: any, b: any) => boolean;
export type GroupValueFn = (key: string | object, children: any[]) => string | object;

@Component({
    selector: 'basic-auto-complete',
    templateUrl: './basic-auto-complete.component.html',
    styleUrls: ['./basic-auto-complete.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BasicAutoCompleteComponent),
        multi: true
    }, BasicDropdownPanelService],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'role': 'listbox',
        '[class.basic-auto-complete]': 'useDefaultClass',
        '[class.basic-auto-complete-single]': '!multiple',
    }
})
export class BasicAutoCompleteComponent implements OnDestroy, OnChanges, AfterViewInit, ControlValueAccessor {

    isTouched: boolean;
    @Input() errorStatus: any = null;
    // @Input() errors: ValidationErrors;
    @Input() class: string;
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() markFirst = true;
    @Input() required = false;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() notFoundText: string;
    @Input() typeToSearchText: string;
    @Input() addTagText: string;
    @Input() loadingText: string;
    @Input() clearAllText: string;
    @Input() appearance: string;
    @Input() dropdownPosition: DropdownPosition = 'auto';
    @Input() appendTo: string;
    @Input() loading = false;
    @Input() closeOnSelect = true;
    @Input() hideSelected = false;
    @Input() selectOnTab = false;
    @Input() openOnEnter: boolean;
    @Input() maxSelectedItems: number;
    @Input() groupBy: string | Function;
    @Input() groupValue: GroupValueFn;
    @Input() bufferAmount = 4;
    @Input() virtualScroll: boolean;
    @Input() selectableGroup = false;
    @Input() selectableGroupAsModel = true;
    @Input() searchFn = null;
    @Input() trackByFn = null;
    @Input() clearOnBackspace = true;
    @Input() labelForId = null;
    @Input() inputAttrs: { [key: string]: string } = {};
    @Input() tabIndex: number;
    @Input() readonly = false;
    @Input() searchWhileComposing = true;
    @Input() minTermLength = 0;
    @Input() editableSearchTerm = false;
    @Input() keyDownFn = (_: KeyboardEvent) => true;
    @Input() showErrors: boolean;
    @Input() taggedButton: string;
    @Input() @HostBinding('class.basic-auto-complete-typeahead') typeahead: Subject<string>;
    @Input() @HostBinding('class.basic-auto-complete-multiple') multiple = false;
    @Input() @HostBinding('class.basic-auto-complete-taggable') addTag: boolean | AddTagFn = false;
    @Input() @HostBinding('class.basic-auto-complete-searchable') searchable = true;
    @Input() @HostBinding('class.basic-auto-complete-clearable') clearable = true;
    @Input() @HostBinding('class.basic-auto-complete-opened') isOpen = false;

    @Input()
    get items() { return this._items };

    set items(value: any[]) {
        this._itemsAreUsed = true;
        this._items = value;
    };

    @Input()
    get compareWith() { return this._compareWith; }

    set compareWith(fn: CompareWithFn) {
        if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }

    @Input()
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; };

    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    };

    // output events
    @Output('blur') blurEvent = new EventEmitter();
    @Output('focus') focusEvent = new EventEmitter();
    @Output('change') changeEvent = new EventEmitter();
    @Output('open') openEvent = new EventEmitter();
    @Output('close') closeEvent = new EventEmitter();
    @Output('search') searchEvent = new EventEmitter<{ term: string, items: any[] }>();
    @Output('clear') clearEvent = new EventEmitter();
    @Output('add') addEvent = new EventEmitter();
    @Output('remove') removeEvent = new EventEmitter();
    @Output('scroll') scroll = new EventEmitter<{ start: number; end: number }>();
    @Output('scrollToEnd') scrollToEnd = new EventEmitter();

    // custom templates
    @ContentChild(BasicOptionTemplateDirective, { static: true, read: TemplateRef }) optionTemplate: TemplateRef<any>;
    @ContentChild(BasicOptgroupTemplateDirective, { static: true, read: TemplateRef }) optgroupTemplate: TemplateRef<any>;
    @ContentChild(BasicLabelTemplateDirective, { static: true, read: TemplateRef }) labelTemplate: TemplateRef<any>;
    @ContentChild(BasicMultiLabelTemplateDirective, { static: true, read: TemplateRef }) multiLabelTemplate: TemplateRef<any>;
    @ContentChild(BasicHeaderTemplateDirective, { static: true, read: TemplateRef }) headerTemplate: TemplateRef<any>;
    @ContentChild(BasicFooterTemplateDirective, { static: true, read: TemplateRef }) footerTemplate: TemplateRef<any>;
    @ContentChild(BasicNotFoundTemplateDirective, { static: true, read: TemplateRef }) notFoundTemplate: TemplateRef<any>;
    @ContentChild(BasicTypeToSearchTemplateDirective, { static: true, read: TemplateRef }) typeToSearchTemplate: TemplateRef<any>;
    @ContentChild(BasicLoadingTextTemplateDirective, { static: true, read: TemplateRef }) loadingTextTemplate: TemplateRef<any>;
    @ContentChild(BasicTagTemplateDirective, { static: true, read: TemplateRef }) tagTemplate: TemplateRef<any>;
    @ContentChild(BasicLoadingSpinnerTemplateDirective, { static: true, read: TemplateRef }) loadingSpinnerTemplate: TemplateRef<any>;

    @ViewChild(forwardRef(() => BasicDropdownPanelComponent), { static: true }) dropdownPanel: BasicDropdownPanelComponent;
    @ViewChild('searchInput', { static: true }) searchInput: ElementRef<HTMLInputElement>;
    @ContentChildren(BasicOptionComponent, { descendants: true }) ngOptions: QueryList<BasicOptionComponent>;

    @HostBinding('class.basic-auto-complete-disabled') get disabled() { return this.readonly || this._disabled };

    @HostBinding('class.basic-auto-complete-filtered') get filtered() { return (!!this.searchTerm && this.searchable || this._isComposing) };

    itemsList: ItemsList;
    viewPortItems: SelectOption[] = [];
    searchTerm: string = null;
    dropdownId = newId();
    element: HTMLElement;
    focused: boolean;
    escapeHTML = true;
    useDefaultClass = true;

    private _items = [];
    private _itemsAreUsed: boolean;
    private _defaultLabel = 'label';
    private _primitive;
    private _manualOpen: boolean;
    private _disabled: boolean;
    private _pressedKeys: string[] = [];
    private _compareWith: CompareWithFn;
    private _clearSearchOnAdd: boolean;
    private _isComposing = false;
    private get _editableSearchTerm(): boolean {
        return this.editableSearchTerm && !this.multiple;
    }

    private readonly _destroy$ = new Subject<void>();
    private readonly _keyPress$ = new Subject<string>();
    private _onChange = (_: any) => { };
    private _onTouched = () => { };

    clearItem = (item: any) => {
        const option = this.selectedItems.find(x => x.value === item);
        this.unselect(option);
    };

    constructor(
        @Attribute('class') public classes: string,
        @Attribute('autofocus') private autoFocus: any,
        config: BasicSelectConfig,
        @Inject(SELECTION_MODEL_FACTORY) newSelectionModel: SelectionModelFactory,
        _elementRef: ElementRef<HTMLElement>,
        private _cd: ChangeDetectorRef,
        private _console: ConsoleService
    ) {
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }

    get selectedItems(): SelectOption[] {
        return this.itemsList.selectedItems;
    }

    get selectedValues() {
        return this.selectedItems.map(x => x.value);
    }

    get hasValue() {
        return this.selectedItems.length > 0;
    }

    get currentPanelPosition(): DropdownPosition {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }

    ngOnInit() {        
        this._handleKeyPresses();
        this._setInputAttributes();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    }

    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }

        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }

    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }

    @HostListener('keydown', ['$event'])
    handleKeyDown($event: KeyboardEvent) {
        const keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event)
        } else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }

    handleKeyCode($event: KeyboardEvent) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break
            case KeyCode.Delete:
                this._handleBackspace();
                break
        }
    }

    handleMousedown($event: MouseEvent) {
        const target = $event.target as HTMLElement;
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }

        if (target.classList.contains('basic-clear-wrapper')) {
            this.handleClearClick();
            return;
        }

        if (target.classList.contains('basic-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }

        if (target.classList.contains('basic-value-icon')) {
            return;
        }

        if (!this.focused) {
            this.focus();
        }

        if (this.searchable) {
            this.open();
        } else {
            this.toggle();
        }
    }

    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();

        this._onSelectionChanged();
    }

    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }

    writeValue(value: any | any[]): void {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    setDisabledState(state: boolean): void {
        this._disabled = state;
        this._cd.markForCheck();
    }

    toggle() {
        if (!this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }

        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }

        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }

    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        } else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();

        if(this.selectedItems.length <= 0){
            this.isTouched = true;
        }
    }

    toggleItem(item: SelectOption) {
        if (!item || item.disabled || this.disabled) {
            return;
        }

        if (this.multiple && item.selected) {
            this.unselect(item);
        } else {
            this.select(item);
        }

        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }

        this._onSelectionChanged();
    }

    select(item: SelectOption) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }

            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }

        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }

    focus() {
        this.searchInput.nativeElement.focus();
    }

    blur() {
        this.searchInput.nativeElement.blur();
    }

    unselect(item: SelectOption) {
        if (!item) {
            return;
        }

        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }

    selectTag() {
        let tag;
        if (isFunction(this.addTag)) {
            tag = (<AddTagFn>this.addTag)(this.searchTerm);
        } else {
            tag = this._primitive ? this.searchTerm : { [this.bindLabel]: this.searchTerm };
        }

        const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
        if (isPromise(tag)) {
            tag.then(item => this.select(handleTag(item))).catch(() => { });
        } else if (tag) {
            this.select(handleTag(tag));
        }
    }

    showClear() {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled  && !this.multiple;
    }

    trackByOption = (_: number, item: SelectOption) => {
        if (this.trackByFn) {
            return this.trackByFn(item.value);
        }

        return item;
    };

    get showAddTag() {
        if (!this._validTerm) {
            return false;
        }

        const term = this.searchTerm.toLowerCase().trim();
        return this.addTag &&
            (!this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term))) &&
            !this.loading;
    }

    showNoItemsFound() {
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    }

    showTypeToSearch() {
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }

    onCompositionStart() {
        this._isComposing = true;
    }

    onCompositionEnd(term: string) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }

        this.filter(term);
    }

    filter(term: string) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }

        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }

        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }

        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map(x => x.value) });
        this.open();
    }

    onInputFocus($event) {
        if (this.focused) {
            return;
        }

        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        } 

        this.element.classList.add('basic-auto-complete-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }

    onInputBlur($event) {
        this.element.classList.remove('basic-auto-complete-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
        this.isTouched = true;
    }

    onItemHover(item: SelectOption) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }

    detectChanges() {
        if (!(<any>this._cd).destroyed) {
            this._cd.detectChanges();
        }
    }

    private _setSearchTermFromItems() {
        const selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    }

    private _setItems(items: any[]) {
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }

    private _setItemsFromNgOptions() {
        const mapNgOptions = (options: QueryList<BasicOptionComponent>) => {
            this.items = options.map(option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        };

        const handleOptionChange = () => {
            const changedOrDestroyed = merge(this.ngOptions.changes, this._destroy$);
            merge(...this.ngOptions.map(option => option.stateChange$))
                .pipe(takeUntil(changedOrDestroyed))
                .subscribe(option => {
                    const item = this.itemsList.findItem(option.value);
                    item.disabled = option.disabled;
                    item.label = option.label || item.label;
                    this._cd.detectChanges();
                });
        };

        this.ngOptions.changes
            .pipe(startWith(this.ngOptions), takeUntil(this._destroy$))
            .subscribe(options => {
                this.bindLabel = this._defaultLabel;
                mapNgOptions(options);
                handleOptionChange();
            });
    }

    private _isValidWriteValue(value: any): boolean {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }

        const validateBinding = (item: any): boolean => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Binding object(${JSON.stringify(item)}) with bindValue is not allowed.`);
                return false;
            }
            return true;
        };

        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(item => validateBinding(item));
        } else {
            return validateBinding(value);
        }
    }

    private _handleWriteValue(ngModel: any | any[]) {
        if (!this._isValidWriteValue(ngModel)) {
            return
        }

        const select = (val: any) => {
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            } else {
                const isValObject = isObject(val);
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                } else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        };

        if (this.multiple) {
            (<any[]>ngModel).forEach(item => select(item));
        } else {
            select(ngModel);
        }
    }

    private _handleKeyPresses() {
        if (this.searchable) {
            return;
        }

        this._keyPress$
            .pipe(takeUntil(this._destroy$),
                tap(letter => this._pressedKeys.push(letter)),
                debounceTime(200),
                filter(() => this._pressedKeys.length > 0),
                map(() => this._pressedKeys.join('')))
            .subscribe(term => {
                const item = this.itemsList.findByLabel(term);
                if (item) {
                    if (this.isOpen) {
                        this.itemsList.markItem(item);
                        this._cd.markForCheck();
                    } else {
                        this.select(item);
                    }
                }
                this._pressedKeys = [];
            });
    }

    private _setInputAttributes() {
        const input = this.searchInput.nativeElement;
        const attributes = {
            type: 'text',
            autocorrect: 'off',
            autocapitalize: 'off',
            autocomplete: this.labelForId ? 'off' : this.dropdownId,
            ...this.inputAttrs
        };

        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }

    private _updateNgModel() {
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                let value = null;
                if (item.children) {
                    const groupKey = this.groupValue ? this.bindValue : <string>this.groupBy;
                    value = item.value[groupKey || <string>this.groupBy];
                } else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            } else {
                model.push(item.value);
            }
        }

        const selected = this.selectedItems.map(x => x.value);
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        } else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }

        this._cd.markForCheck();
    }

    private _clearSearch() {
        if (!this.searchTerm) {
            return;
        }

        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }

    private _changeSearch(searchTerm: string) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }

    private _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }

    private _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }

    private _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    }

    private _handleTab($event: KeyboardEvent) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }

        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            } else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            } else {
                this.close();
            }
        } else {
            this.close();
        }
    }

    private _handleEnter($event: KeyboardEvent) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            } else if (this.showAddTag) {
                this.selectTag();
            }
        } else if (this.openOnEnter) {
            this.open();
        } else {
            return;
        }

        $event.preventDefault();
    }

    private _handleSpace($event: KeyboardEvent) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }

    private _handleArrowDown($event: KeyboardEvent) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        } else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }

    private _handleArrowUp($event: KeyboardEvent) {
        if (!this.isOpen) {
            return;
        }

        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        } else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }

    private _nextItemIsTag(nextStep: number): boolean {
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length)
    }

    private _handleBackspace() {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }

        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        } else {
            this.clearModel();
        }
    }

    private get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }

    private get _validTerm() {
        const term = this.searchTerm && this.searchTerm.trim();
        return term && term.length >= this.minTermLength;
    }

    private _mergeGlobalConfig(config: BasicSelectConfig) {
        this.required = this.required || config.required;
        this.label = this.label || config.label;
        this.placeholder = this.placeholder || config.placeholder;
        this.showErrors = this.showErrors || config.showErrors;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.appearance = this.appearance || config.appearance;
    }
}

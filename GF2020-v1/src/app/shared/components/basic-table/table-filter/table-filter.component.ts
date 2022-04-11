import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
  filterModel: any = {
    value: '',
    isActive: true,
    contains: 'contains'
  };
  @Input() query: any;
  @Input() filterInput: string;
  isActive: boolean;
  isSettingPopupVisible = false;
  isAddPopupVisible = false;
  @Input() isSearchFlag: boolean; 
  @Input() pageSize = 0;
  @Input() totalRecord = 0;
  @Input() isSwichVisiable: boolean;
  @Input() isSettingIconVisiable: boolean;
  @Input() isAddIconVisible: boolean;
  @Input() isFilterOn: boolean;
  @Input() isListingVisible = true;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSwitchCgange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() settingPopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addPopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() filterPopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  filterCountriesOnInput() {
    this.filterModel = {
      value: this.query,
      contains: 'contains'
    };
    this.onFilter.emit(this.filterModel);
  }

  switchChangeHandler(event: any) {
    this.onSwitchCgange.emit(this.isActive);
  }

  settingsHandler() {
    this.settingPopup.emit(!this.isSettingPopupVisible);
  }
  addHandler() {
    this.addPopup.emit(!this.isAddPopupVisible);
  }
  filterOnClick() {
    this.filterPopup.emit(this.isFilterOn);
  }
}

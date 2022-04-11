import { Component, OnInit } from '@angular/core';
import { TestCountryList } from './countryList.ts';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  selectedCars = [3];
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab', disabled: true },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  countryList: any = [];
  countryDefaults: any;

  countryList1: any;
  countryDefaults1: any;


  selectedCars1 = null;
  cars1 = [
    { id: 1, name: 'Volvo', text: 'Volvo', disabled: false, taggedLabel: 'Example Text', taggedButton: 'Example Button' },
    { id: 2, name: 'Saab', text: 'Saab', disabled: false, taggedLabel: 'Example Text', taggedButton: 'Example Button' },
    { id: 3, name: 'Opel', text: 'Opel', disabled: false, taggedLabel: 'Example Text', taggedButton: 'Example Button' },
    { id: 4, name: 'Audi', text: 'Audi', disabled: false, taggedLabel: 'Example Text', taggedButton: 'Example Button' },
  ];

  sdropdownSettings = {
    singleSelection: false,
    label: 'Select',
    placeholder: 'Select',
    enableCheckAll: true,
    selectAllText: 'Select All',
    unSelectAllText: 'Clear All',
    enableSearchFilter: true,
    classes: 'myclass custom-class',
    badgeShowLimit: 3,
    disabled: false,
    required: true,
    isCheckBoxVisible: true,
    isHintTextDisplay: true,
    isTagDisplay: true,
    taggedColumns: '',
    taggedButtonDisplay: true
  };

  dropdownSettings = {
    singleSelection: false,
    label: 'Select',
    placeholder: 'Select',
    enableCheckAll: true,
    selectAllText: 'Select All',
    unSelectAllText: 'Clear All',
    enableSearchFilter: true,
    classes: 'myclass custom-class',
    badgeShowLimit: 3,
    disabled: false,
    required: true,
    isCheckBoxVisible: true,
    isHintTextDisplay: true,
    isTagDisplay: true,
    taggedColumns: '',
    taggedButtonDisplay: true
  };

  constructor() { }

  ngOnInit() {
    TestCountryList.forEach(element => {
      element.id = element.countryPk;
      element.name = element.countryName;
      element.text = element.countryName;
      element.taggedLabel = element.areaName;
      element.taggedButton = element.regionName;
    });
    // this.countryList1 = TestCountryList;
    this.countryList = this.cars1;
  }

  toggleDisabled() {
      const car: any = this.cars[1];
      car.disabled = !car.disabled;
  }

  onChangeCountry(event: any) {
    console.log('Coontry change', this.countryDefaults);
    this.countryList1 = this.cars1;
  }
}

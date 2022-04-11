import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-picker-hm',
  templateUrl: './time-picker-hm.component.html',
  styleUrls: ['./time-picker-hm.component.scss']
})
export class TimePickerHmComponent implements OnInit {

  @Input() label;
  @Input() prefix;
  @Input('defaultValue') defaultValue;
  @Input() disabled = false;
  @Input() name;
  @Input() required;
  @Input() placeholder;

  @Output() fieldValue = new  EventEmitter<any>();
  @Output() errors = new  EventEmitter<any>();
  @ViewChild('textInput', {static: true})textInput;

  constructor() { }

  ngOnInit() {
  }

  
  onUserInput(name, value) {
    console.log('name',this.textInput);
    this.errors.emit({[name]: this.textInput.errors ? this.textInput.errors : ''});
    this.fieldValue.emit({[name]: value});
  }
}

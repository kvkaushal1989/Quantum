import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-picker-hrs',
  templateUrl: './time-picker-hrs.component.html',
  styleUrls: ['./time-picker-hrs.component.scss']
})
export class TimePickerHrsComponent implements OnInit {
  @Input() label;
  @Input() prefix;
  @Input('defaultValue') defaultValue;
  @Input() disabled = false;
  @Input() name;

  @Output() fieldValue = new EventEmitter<any>();
  @Output() errors = new EventEmitter<any>();
  @ViewChild('textInput', { static: true }) textInput;

  constructor() { }

  ngOnInit() {
  }


  onUserInput(name, value) {

    this.errors.emit({ [name]: this.textInput.errors ? this.textInput.errors : '' });
    this.fieldValue.emit({ [name]: value });
  }
}

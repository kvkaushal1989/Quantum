import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-picker-hms',
  templateUrl: './time-picker-hms.component.html',
  styleUrls: ['./time-picker-hms.component.scss']
})
export class TimePickerHmsComponent implements OnInit {
  
  @Input('defaultValue') defaultValue;
  constructor() { }

  ngOnInit() {
  }

}

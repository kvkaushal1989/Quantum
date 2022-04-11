import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale-test',
  templateUrl: './locale-test.component.html',
  styleUrls: ['./locale-test.component.scss']
})
export class LocaleTestComponent implements OnInit {
  fromDate: Date = new Date();
  toDate: Date = new Date();
  fromStrDate: string = null;

  // Number
  number1: string;
  number2: string;

  constructor() { }

  ngOnInit() {
  }

}

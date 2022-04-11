import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-loader',
  templateUrl: './print-loader.component.html',
  styleUrls: ['./print-loader.component.scss']
})
export class PrintLoaderComponent implements OnInit {

  constructor() { }
  extraTime: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.extraTime = true;
    }, 10000);
  }

}

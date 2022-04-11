import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-expansion-table',
  templateUrl: './expansion-table.component.html',
  styleUrls: ['./expansion-table.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class ExpansionTableComponent implements OnInit {
  @Input() data;
  @Input() columnsConfig;
  @Input() isResizeable;
  @Input() tableScrollHeight;
  @Input() numberOfRecordsPerPage;
  @Input() isSortable;
  @Input() isPaginator;

  selected;

  @Input() innerTableConfig;
  @Input() innerTableData;
  // cars : any [];
  // cols: any[];
  constructor() { }

  ngOnInit() {

  //   this.cars = [{
  //     vin: 'hello',
  //     year: 2020,
  //     brand: 'abc',
  //     color: 'red'
  //   },
  //   {
  //     vin: 'abc',
  //     year: 2020,
  //     brand: 'hello',
  //     color: 'blue'
  //   }]

  //   this.cols = [
  //     { field: 'vin', header: 'Vin' },
  //     { field: 'year', header: 'Year' },
  //     { field: 'brand', header: 'Brand' },
  //     { field: 'color', header: 'Color' }
  // ];
  }

  public onRowSelect(data) {
    console.log('event..., ', data);
    alert("double clicked...")
  }

}

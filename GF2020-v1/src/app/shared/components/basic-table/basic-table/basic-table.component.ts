import { Component, OnInit, Directive, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

export type SortColumn = keyof any | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class BasicTableSortableHeader {

  @Input() isSortable: boolean = false;
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    // if(this.isSortable)
    //   return;

    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  @Input() gridData: any;
  
  @Output() onRowSelection : EventEmitter<any> = new EventEmitter<any>();
  @Output() onOptionChange : EventEmitter<number> = new EventEmitter<number>();

  columnList: any[] = [];  

  dataList: any[];

  constructor() { 
  }

  ngOnInit(): void {    
    this.columnList = this.gridData.columnList;
    this.dataList = this.gridData.dataList;
  }

  @ViewChildren(BasicTableSortableHeader) headers: QueryList<BasicTableSortableHeader>;
  
  onSort({column, direction}: SortEvent, isSort:boolean) {
    // if(!isSort)
    //   return ;

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting       this.dataList = this.dataList;

    if (direction === '' || column === '') {
      this.dataList = this.dataList;
    } else {
      this.dataList = [...this.dataList].sort((a, b) => {
        const res = compare(`${a[column]}`, `${b[column]}`);
        return direction === 'asc' ? res : -res;
      });
    }
  }  

  onRowSelectionEmit(row:any, coll:any){
    if(coll.router == ''){
      return;
    }
    
    let routerData: any = {
      router: coll.router,
      row: row
    };

    this.onRowSelection.emit(routerData);
  }

  optionChange: number;
  onOptionChangeEmit(){    
    this.onOptionChange.emit(this.optionChange);
  }
}

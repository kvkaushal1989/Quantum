import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})
export class EditableTableComponent implements OnInit {
  public _config : any = [];
  public _items : any [];


  @Input() items : any;
  @Input() config : any;
  // public set config(data) {
  //   if (data.length > 0) {
  //     this._config = data;
  //   }
  // }
  // public get config() {
  //   return this._config;
  // }

  //@Input()
  // public set items(data) {
  //   if (data.length > 0) {
  //     this._items = data;
  //   }
  // }
  // public get items() {
  //   return this._items;
  // }

  @Output()
  public updatedTable = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
     //this.setConfiguration();
  }

  public setConfiguration(){
    debugger;
   var data : any
   var columns = [];
    for(let data of this.items){
       let table_data = data;
       for(let column of this.config){
       let col_data = column;
       let col_value = {
         "header" : data[column.header],
         "upperHeader" : column.upperHeader,
         "lowerHeader" : data[column.lowerHeader]
       }
       columns.push(col_value);
     }
    }
    console.log("table config " +columns)
  }
 
  /**
   * name
   */
  public updateInput(fieldValue: any, index ?: any) {
    this.items[index][Object.keys(fieldValue)[0]] =
    fieldValue[Object.keys(fieldValue)[0]];
    this.updatedTable.emit(this.items)
  }

}

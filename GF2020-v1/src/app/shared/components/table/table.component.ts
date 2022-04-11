import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
 
  @Input() columnsConfig;
  @Input() isResizeable;
  @Input() isReorderable;
  @Input() tableScrollHeight;
  @Input() numberOfRecordsPerPage;
  @Input() isSortable;
  @Input() isPaginator;
  @Input() isCheckboxSelection;
  @Input() isSummary;

  @Output()
  public rowData = new EventEmitter<any>();

  @Output()
  public checkBoxSelections = new EventEmitter<any>();

  @Input()
  public set data (dt) {
    if(dt)
    this.checboxSelections = [...dt];
  }

  public get data () {
    return this.checboxSelections;
  }

  @Input()
  public set defaultRowSelections(data) {
    this.selected = data;
   
  }

  public checboxSelections;
  public get defaultRowSelections() {
    return this.selected;
  }

  public selected;

  constructor() {}

  ngOnInit() {
    // this.cars =
    // this.cols = ;
  }

  public onRowSelect(event, data) {
    // console.log('event..., ', data);
    // alert("double clicked...")
    console.log("selected", this.selected);
    this.rowData.emit(data);
  }

  public onCheckBoxSelect(event) {

    console.log('checboxsel..', this.checboxSelections)
   let tempIndex = this.checboxSelections.findIndex((chkSel)=>{
     return chkSel.columnName === event.data.columnName;
    })

    if(tempIndex < 0) {
      this.checboxSelections.push({...event.data});
    } else {
      this.checboxSelections[tempIndex].isVisible = !this.checboxSelections[tempIndex].isVisible;
    }
    console.log('se;ec', event, this.checboxSelections);
    this.checkBoxSelections.emit(this.checboxSelections);
  }
}

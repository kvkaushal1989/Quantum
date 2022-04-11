import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
  selector: "app-checkbox-input",
  templateUrl: "./checkbox-input.component.html",
  styleUrls: ["./checkbox-input.component.scss"]
})
export class CheckboxInputComponent implements OnInit {
  @Input("items") checkBoxItems;
  public selectedItem;
  @Input() isDisabled;
  @Input() labelPosition;
  @Input() isVerticalAlign;
  @Input() name;
  public items = ([] = []);
  @ViewChild('checkBox' ,{ static: false }) checkBox;

  @Output()
  selectedItems = new EventEmitter<any>();

  @Input()
  public set defaultValue(data) {
    if (data) {
      this.selectedItem = data;
      this.items = [];
      // this.selectedItem.forEach((item, i) => {
      //   if (item) {     
      //     this.items.push(this.checkBoxItems[i]);
      //     // console.log("items..", this.items);
      //   }
      // });
    }
  }
  // public get defaultValue() {
  //   return this.selectedItem;
  // }

  constructor() {}

  ngOnInit() {}

  public onCheckBoxSelection(itemTemp,name) {
    // let tempIndex = this.items.findIndex(item => {
    //   return item.label === itemTemp.label;
    // });
    // this.items[tempIndex].isVisible = !this.items[tempIndex].isVisible;
    //  if(tempIndex < 0) {
    //   //  this.items.push(itemTemp)

    //  } else {
    //   //  this.items.splice(tempIndex, 1);
    //   this.items[tempIndex].isEnabled =  false;
    //  }
    let new_name = this.name == undefined ? this.checkBoxItems.label : this.name;
    let isChecked = this.selectedItem == undefined ? !this.checkBox._checked : this.selectedItem;

    console.log("selected items", this.selectedItem);
    this.selectedItems.emit({[new_name]: isChecked});
  }
}

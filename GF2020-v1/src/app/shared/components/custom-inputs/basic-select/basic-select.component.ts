import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-select_old',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss']
})
export class BasicSelectComponent implements OnInit {
  
  @Input('items') items;

  @Input() isPrefix;
  @Input() prefixType;
  @Input() prefixContent;
  @Input() isSuffix;
  @Input() suffixType;
  @Input() suffixContent;
  @Input() isHint;
  @Input() hintText;
  @Input() isDisabled;
  @Input() isRequired;
  @Input() isFloatLabel;
  @Input() placeholder;
  @Input() defaultValue;
  @Input() labelPosition;
  @Input() maxLength;
  @Input() type;
  @Input() name;

 
  @Input()
  public selectedItem;

  @Output()
  currentItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  public onSelectOption(name) {
    console.log('name.....', name);
    console.log('current option......', this.selectedItem);
    this.currentItem.emit({name:name,item:this.selectedItem});
  }
  
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {


  @Input('items') radioItems;
  @Input() isDisabled;
  @Input() labelPosition;
  @Input() name;
  @Input() default;

  @Output()
  radioChecked = new EventEmitter();
  // @Input()
  // public set defaultValue(data) {
  //   if (data) {
  //     this.selectedItem = data;
  //   }
  // };
  // selectedItem;
  // public get defaultValue() {
  //   return this.selectedItem;
  // };

  @Input()
  public selectedItem;

  constructor() { }

  ngOnInit() {
  }

  onRadioChange(item, name) {
    console.log('changed.......', item, name);
    setTimeout(() => {
      this.radioChecked.emit({ [this.selectedItem]: true });
    }, 0)
  }

  changeEventInRadioButton($event) {
    console.log($event);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

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
  @Input()placeholder;
  @Input() defaultValue;
  @Input() labelPosition;
  @Input() maxLength;
  @Input() type;
  public selectedItem;
  constructor() { }

  ngOnInit() {
  }

}

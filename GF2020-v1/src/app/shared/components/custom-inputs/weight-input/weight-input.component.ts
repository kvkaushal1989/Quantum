import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.scss']
})
export class WeightInputComponent implements OnInit {
  @Input() label;
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

  @Input() name;

  @Input()
  public set defaultValue(val: any) {
    if (val) {
      this.weightVal = val;
      this.weightVal = this.weightVal ? (+this.weightVal).toFixed(3) : 0;
    }
  }

  public get defaultValue() {
    return this.weightVal;
  }

  @Input() labelPosition;
  @Input() maxLength;

  public weightVal: any;
  @ViewChild('textInput', { static: true }) textInput;
  @Output() fieldValue = new EventEmitter<any>();
  @Output() errors = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public validateWeight(name) {
    this.weightVal = this.weightVal ? (+this.weightVal).toFixed(3) : '';
    this.fieldValue.emit({[name]: Number(this.weightVal)});
  }

}

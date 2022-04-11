import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-volume-input',
  templateUrl: './volume-input.component.html',
  styleUrls: ['./volume-input.component.scss']
})
export class VolumeInputComponent implements OnInit {
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
  public volumeVal : any;
  @ViewChild('textInput', { static: true }) textInput;
  @Input()
  public set defaultValue(val: any) {
    if (val) {
      this.volumeVal = val;
      this.volumeVal = this.volumeVal ? (+this.volumeVal).toFixed(3) : 0;
    }
  }

  public get defaultValue() {
    return this.volumeVal;
  }

  @Input() labelPosition;
  @Input() maxLength;
  @Input() name;
 
  @Output() fieldValue = new  EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public validateVolume(name) {
    this.volumeVal = this.volumeVal ? (+this.volumeVal).toFixed(3) : '';
    this.fieldValue.emit({[name]: Number(this.volumeVal)});
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
export class TextAreaInputComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}

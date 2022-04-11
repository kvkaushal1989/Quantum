import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple-textbox',
  templateUrl: './simple-textbox.component.html',
  styleUrls: ['./simple-textbox.component.scss']
})
export class SimpleTextboxComponent implements OnInit {

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
  @Input() name;
  @Input() label;
  hide;

  @Output() fieldValue = new  EventEmitter<any>();
  @Output() errors = new  EventEmitter<any>();
  @Output() postInputValue = new EventEmitter<any>();
  @ViewChild('textInput',{static:true})textInput;
  
  constructor() { }

  ngOnInit() {
  }

  onUserInput(name: string, value:string) {
    console.log('name',this.textInput);
    this.errors.emit({[name]: this.textInput.errors? this.textInput.errors:""})
    this.fieldValue.emit({[name]:value})
  }
  public postInputData(name: any, value: any) {
    if (this.textInput.errors) {
      this.errors.emit({[name]: this.textInput.errors? this.textInput.errors:""})
    }
    this.postInputValue.emit({[name]:value});
  }
}

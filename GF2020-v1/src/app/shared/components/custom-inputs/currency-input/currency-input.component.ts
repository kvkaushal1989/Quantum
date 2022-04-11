import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit {
 
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
  
  @Input() 
  public set defaultValue(val: any) {
    if(val) {
      this.currencyVal = val;
      this.validateCurrency();
    }
  }

  public get defaultValue() {
    return this.currencyVal;
  }

  @Input() labelPosition;
  @Input() maxLength;

  public currencyVal;
  
  constructor() { }

  ngOnInit() {
  }


  public validateCurrency() {
    this.currencyVal = this.currencyVal ? (+this.currencyVal).toFixed(2) : 0
  } 


}

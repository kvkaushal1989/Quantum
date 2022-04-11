import { Component, OnInit, Input, EventEmitter, Output, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-whole-number-input',
  templateUrl: './whole-number-input.component.html',
  styleUrls: ['./whole-number-input.component.scss']
})
export class WholeNumberInputComponent implements OnInit, OnDestroy {
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
  @Input() defaultValue;
  @Input() labelPosition;
  @Input() maxLength;
  @Input() minLength;


  @Input() name;

  @Output() fieldValue = new  EventEmitter<any>();
  @Output() errors = new  EventEmitter<any>();
  @Output() postInputValue = new EventEmitter<any>();
  @ViewChild('textInput', {static: true})textInput;
  mySubscription: any;

  constructor(private router: Router,) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }


  onUserInput(name, value) {
    // console.log('name',this.textInput);
    this.errors.emit({[name]: this.textInput.errors ? this.textInput.errors : ''});
    this.fieldValue.emit({[name]: value});
  }
  public postInputData(name: any, value: any) {
    if (this.textInput.errors) {
      this.errors.emit({[name]: this.textInput.errors ? this.textInput.errors : ''});
    }
    this.postInputValue.emit({[name]: value});
  }

  public checkValidation(event, value) {
    let retVal = true;
    if (event.charCode >= 48 && event.charCode <= 57) {
      retVal = true;
     } else {
       retVal = false;
     }
    if (this.maxLength && value && value.toString().length > this.maxLength - 1 ) {
      retVal = false;
    }
    return retVal;
  }
}

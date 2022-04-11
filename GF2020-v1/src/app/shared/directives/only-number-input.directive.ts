import { Directive } from "@angular/core";

@Directive({
  selector: "[OnlyNumberInput]",
  host: {
    "(input)": "isNumber($event)",
    "(keypress)": "isNumber($event)",
  },
})
export class OnlyNumberInputDirective {
  constructor() { }

  isNumber(evt: any) {
    // tslint:disable-next-line: deprecation
    evt = evt ? evt : window.event;
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (evt.target.id === "contact1-extension-input") {
        if (charCode === 44 || charCode === 32) {
          return true;
        } else {
          return false;
        }
        // tslint:disable-next-line: max-line-length
      } else if (
        evt.target.id === "salesOffice_phone1-input" ||
        evt.target.id === "salesOffice_phone2-input" ||
        evt.target.id === "salesOffice_mobile-input"
      ) {
        if (charCode === 45 || charCode === 32) {
          return true;
        } else {
          return false;
        }
      } else {
        // if (charCode === 45 || charCode === 32) {

        //   return true;
        // } else {
        return false;
        //}
      }
    }

    return true;
  }
}

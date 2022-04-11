import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomInputMaskService {
  @Input() regex = new RegExp(/^\d{0,6}$/g);

  constructor() { }

  mask(val: any): string {
    let output: any[] = [];
    return val;
  }

  unMask(val: any): string {

    return val;
  }

}

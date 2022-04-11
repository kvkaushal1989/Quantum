import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTabIndex]'
})
export class TabIndexDirective {
  @Input() appTabIndex = 0;
  constructor() { }

  @HostListener('focus', ['$event']) onKeyDown(e) {
    console.log('shift and tab');
    if (e.shiftKey && e.keyCode === 9) {
    }
  }
}

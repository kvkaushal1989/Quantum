import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDivFocus]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(focus)': 'addfocus($event)'
  }
})
export class DivFocusDirective {
  focused: boolean;
  constructor(private renderer: Renderer2, public elementRef: ElementRef) { }

  addfocus(event: any) {
    console.log('DivFocusDirective => ', event);

    this.focused = false;
    this.renderer.removeClass(this.elementRef.nativeElement, 'basic-check-focus');
  }
}

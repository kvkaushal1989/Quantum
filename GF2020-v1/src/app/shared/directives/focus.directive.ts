import { Directive, ElementRef, Renderer2 , AfterViewInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective  implements AfterViewInit {
  protected _elementClass: string[] = [];

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
      return this._elementClass.join(' ');
  }

  set(val: string) {
      this._elementClass = val.split(' ');
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    this._elementClass.push('custom-theme');
    this._elementClass.push('another-class');
    renderer.addClass(hostElement.nativeElement, '');
  }


  ngAfterViewInit() {
    console.log('appFocus =>', this.hostElement.nativeElement);
    // const invalidControl = this.host.nativeElement.querySelector('.ng-invalid');

    // if (invalidControl) {
    //   invalidControl.focus();
    // }
    // (document.querySelector(elem) as HTMLElement).focus();
    this.hostElement.nativeElement.focus();
    // this.host.nativeElement.querySelector('.ng-invalid').addClass('mat-focused');
  }

}

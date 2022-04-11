import { Directive, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { escapeHTML } from './value-utils';

@Directive({ selector: '[ngItemLabel]' })
export class BasicItemLabelDirective implements OnChanges {
    @Input() ngItemLabel: string;
    @Input() escape = true;

    constructor(private element: ElementRef<HTMLElement>) { }

    ngOnChanges(changes: SimpleChanges) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    }
}

@Directive({ selector: '[basic-option-tmp]' })
export class BasicOptionTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-optgroup-tmp]' })
export class BasicOptgroupTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-label-tmp]' })
export class BasicLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-multi-label-tmp]' })
export class BasicMultiLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-header-tmp]' })
export class BasicHeaderTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-footer-tmp]' })
export class BasicFooterTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-notfound-tmp]' })
export class BasicNotFoundTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-typetosearch-tmp]' })
export class BasicTypeToSearchTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-loadingtext-tmp]' })
export class BasicLoadingTextTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-tag-tmp]' })
export class BasicTagTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[basic-loadingspinner-tmp]' })
export class BasicLoadingSpinnerTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicDropdownPanelComponent } from './basic-dropdown-panel.component';
import { BasicOptionComponent } from './basic-option.component';
import { BasicAutoCompleteComponent, SELECTION_MODEL_FACTORY } from './basic-auto-complete.component';
import {
    BasicFooterTemplateDirective,
    BasicHeaderTemplateDirective,
    BasicLabelTemplateDirective,
    BasicLoadingSpinnerTemplateDirective,
    BasicLoadingTextTemplateDirective,
    BasicMultiLabelTemplateDirective,
    BasicNotFoundTemplateDirective,
    BasicOptgroupTemplateDirective,
    BasicOptionTemplateDirective,
    BasicTagTemplateDirective,
    BasicItemLabelDirective,
    BasicTypeToSearchTemplateDirective
} from './basic-templates.directive';
import { DefaultSelectionModelFactory } from './selection-model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        BasicDropdownPanelComponent,
        BasicOptionComponent,
        BasicAutoCompleteComponent,
        BasicOptgroupTemplateDirective,
        BasicOptionTemplateDirective,
        BasicLabelTemplateDirective,
        BasicMultiLabelTemplateDirective,
        BasicHeaderTemplateDirective,
        BasicFooterTemplateDirective,
        BasicNotFoundTemplateDirective,
        BasicItemLabelDirective,
        BasicTypeToSearchTemplateDirective,
        BasicLoadingTextTemplateDirective,
        BasicTagTemplateDirective,
        BasicLoadingSpinnerTemplateDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        BasicAutoCompleteComponent,
        BasicOptionComponent,
        BasicOptgroupTemplateDirective,
        BasicOptionTemplateDirective,
        BasicLabelTemplateDirective,
        BasicMultiLabelTemplateDirective,
        BasicHeaderTemplateDirective,
        BasicFooterTemplateDirective,
        BasicNotFoundTemplateDirective,
        BasicItemLabelDirective,
        BasicTypeToSearchTemplateDirective,
        BasicLoadingTextTemplateDirective,
        BasicTagTemplateDirective,
        BasicLoadingSpinnerTemplateDirective
    ],
    providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: DefaultSelectionModelFactory }
    ]
})
export class BasicAutoCompletModule {}

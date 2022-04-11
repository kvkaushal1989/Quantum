import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GF2020MultiSelect } from './multiselect-dropdown/multiselect.component';
import { ClickOutsideDirective } from './multiselect-dropdown/clickOutside';
import { ListFilterPipe } from './multiselect-dropdown/list-filter';
import { groupByPipe } from './multiselect-dropdown/group-by';
// import { BasicAutoCompleteComponent } from './basic-auto-complete/basic-auto-complete.component';
import { OptionHighlightDirective } from './multiselect-dropdown/option-highlight.directive';
// import { BasicSelectPrimeComponent } from './basic-select-prime/basic-select-prime.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [
    GF2020MultiSelect,
    // BasicSelectPrimeComponent,
    ClickOutsideDirective,
    ListFilterPipe,
    groupByPipe,
    OptionHighlightDirective
  ],
  exports: [
    GF2020MultiSelect,
    // BasicSelectPrimeComponent,
    ClickOutsideDirective,
    ListFilterPipe,
    groupByPipe
  ]
})
export class BasicSelectModule { }

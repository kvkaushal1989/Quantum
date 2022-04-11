import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMultiSelectComponent } from './basic-multi-select.component';
import { FormsModule } from '@angular/forms';
import { BasicAutoCompletModule } from '../basic-auto-complete/public-api';
import { BasicCheckBoxModule } from '../../basic-check-box/basic-check-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BasicAutoCompletModule,
    BasicCheckBoxModule
  ],
  declarations: [BasicMultiSelectComponent],
  exports: [BasicMultiSelectComponent]
})
export class BasicMultiSelectModule { }

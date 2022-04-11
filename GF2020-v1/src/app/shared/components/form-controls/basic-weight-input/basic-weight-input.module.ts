import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicWeightInputComponent } from './basic-weight-input/basic-weight-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BasicWeightInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BasicWeightInputModule { }

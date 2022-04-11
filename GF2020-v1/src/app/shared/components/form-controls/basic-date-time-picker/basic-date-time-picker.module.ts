import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DdHhMmPickerComponent } from './dd-hh-mm-picker/dd-hh-mm-picker.component';



@NgModule({
  declarations: [DdHhMmPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[DdHhMmPickerComponent]
})
export class BasicDateTimePickerModule { }

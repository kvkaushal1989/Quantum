import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicVolumeInputComponent } from './basic-volume-input/basic-volume-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BasicVolumeInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BasicVolumeInputComponent]
})
export class BasicVolumeInputModule { }

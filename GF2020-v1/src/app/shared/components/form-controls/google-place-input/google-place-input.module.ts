import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlaceInputComponent } from './google-place-input/google-place-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GooglePlaceInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GooglePlaceInputComponent]
})
export class GooglePlaceInputModule { }

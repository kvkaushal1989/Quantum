import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCheckBoxComponent } from './basic-check-box/basic-check-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BasicCheckBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[BasicCheckBoxComponent]
})
export class BasicCheckBoxModule { }

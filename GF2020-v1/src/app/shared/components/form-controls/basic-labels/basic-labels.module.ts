import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLabelsComponent } from './basic-labels/basic-labels.component';



@NgModule({
  declarations: [BasicLabelsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BasicLabelsComponent
  ]
})
export class BasicLabelsModule { }

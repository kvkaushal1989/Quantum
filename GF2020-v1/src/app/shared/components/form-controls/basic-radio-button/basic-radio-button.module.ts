import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRadioButtonComponent } from './basic-radio-button/basic-radio-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicRadioButtonGroupComponent } from './basic-radio-button-group/basic-radio-button-group.component';



@NgModule({
  declarations: [BasicRadioButtonComponent, BasicRadioButtonGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    BasicRadioButtonComponent,
    BasicRadioButtonGroupComponent
  ]
})
export class BasicRadioButtonModule { }

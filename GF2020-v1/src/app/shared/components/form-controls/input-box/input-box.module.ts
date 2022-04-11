import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextBoxComponent } from './input-text-box/input-text-box.component';
import { NumberInputBoxComponent } from './number-input-box/number-input-box.component';
import { NumberLocaleDirective } from './number-input-box/number-locale.directive';
import { MaskInputBoxComponent } from './mask-input-box/mask-input-box.component';

@NgModule({
  declarations: [InputTextBoxComponent, NumberInputBoxComponent, MaskInputBoxComponent, NumberLocaleDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InputTextBoxComponent, NumberInputBoxComponent, MaskInputBoxComponent, NumberLocaleDirective]
})
export class InputBoxModule { }

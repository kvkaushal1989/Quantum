import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { TablesComponent } from './tables/tables.component';
import { SelectListsComponent } from './select-lists/select-lists.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SwiperTestComponent } from './swiper-test/swiper-test.component';
import { SliderTestComponent } from './slider-test/slider-test.component';
import { LocaleTestComponent } from './locale-test/locale-test.component';
import { PrintTestComponent } from './print-test/print-test.component';

export const formControlsRoutes: Routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'formcontrols'
      }, {
        path: 'auto-complete',
        component: AutoCompleteComponent,
        data: {
          breadcrumb: 'Auto Complete'
        }
      }, {
        path: 'formcontrols',
        component: FormControlsComponent,
        data: {
          breadcrumb: 'Form Controls'
        }
      }, {
        path: 'tables',
        component: TablesComponent,
        data: {
          breadcrumb: 'Tables'
        }
      }, {
        path: 'text-input',
        component: TextInputComponent,
        data: {
          breadcrumb: 'Text'
        }
      }, {
        path: 'select-lists',
        component: SelectListsComponent,
        data: {
          breadcrumb: 'Select'
        }
      }, {
        path: 'template-forms',
        component: TemplateFormsComponent,
        data: {
          breadcrumb: 'Template Forms'
        }
      }, {
        path: 'reactive-forms',
        component: ReactiveFormsComponent,
        data: {
          breadcrumb: 'Reactive Forms'
        }
      }, {
        path: 'Swiper',
        component: SwiperTestComponent,
        data: {
          breadcrumb: 'Swiper'
        }
      }, {
        path: 'Slider',
        component: SliderTestComponent,
        data: {
          breadcrumb: 'Slider'
        }
      }, {
        path: 'Locale',
        component: LocaleTestComponent,
        data: {
          breadcrumb: 'Locale'
        }
      }, {
        path: 'print',
        component: PrintTestComponent,
        data: {
          breadcrumb: 'print'
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'formcontrols'
      }
  ];

@NgModule({
  declarations: [
    FormControlsComponent,
    AutoCompleteComponent,
    TablesComponent,
    SelectListsComponent,
    TextInputComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    SwiperTestComponent,
    SliderTestComponent,
    PrintTestComponent,
    LocaleTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(formControlsRoutes),
    SharedModule
  ]
})
export class FormControlsModule { }

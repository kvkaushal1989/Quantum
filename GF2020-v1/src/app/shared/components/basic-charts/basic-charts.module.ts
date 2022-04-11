import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { ChartsModule  } from 'ng2-charts';


@NgModule({
  declarations: [LineChartsComponent],
  // build error
  // BaseChartDirective
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [LineChartsComponent]
  // build error
  // BaseChartDirective
})
export class BasicChartsModule { }

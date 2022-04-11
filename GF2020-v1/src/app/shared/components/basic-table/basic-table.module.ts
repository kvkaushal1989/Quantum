import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent, BasicTableSortableHeader } from './basic-table/basic-table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { FormsModule } from '@angular/forms';
import { BasicSwitchModule } from '../form-controls/switch/basic-switch.module';



@NgModule({
  declarations: [BasicTableComponent, BasicTableSortableHeader, TableFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    BasicSwitchModule
  ],
  exports:[BasicTableComponent, BasicTableSortableHeader, TableFilterComponent]
})
export class BasicTableModule { }

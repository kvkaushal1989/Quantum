import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDailogComponent } from './basic-dailog/basic-dailog.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog/notification-dialog.component';

@NgModule({
  declarations: [BasicDailogComponent, NotificationDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicDailogComponent, NotificationDialogComponent]
})
export class BasicDailogModule { }

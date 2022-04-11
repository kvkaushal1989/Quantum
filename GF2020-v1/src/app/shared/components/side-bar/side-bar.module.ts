import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';



@NgModule({
  declarations: [SideBarComponent, SideBarContentComponent, SideNavContentComponent],
  imports: [
    CommonModule
  ],
  exports: [SideBarComponent, SideBarContentComponent]
})
export class SideBarModule { }

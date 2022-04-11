import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit {
  @Input() menuItems: any;
  
  constructor() { }

  ngOnInit() {
  }

  public isPopup: boolean; 

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'side-bar-content',
  templateUrl: './side-bar-content.component.html',
  styleUrls: ['./side-bar-content.component.scss']
})
export class SideBarContentComponent implements OnInit {
  @Input() menuItems: any;

  sideMenuContent: any;

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sideMenuContent = this.menuItems != null ? this.menuItems : this.sharedService.sideMenuContent;
  }

  public navigatePage(menuObj: any) {
    this.sharedService.sideMenuContent = menuObj;
    // console.log(this.sideMenuContent.Url)
    // console.log(menuObj.Url)
    this.router.navigate([this.sideMenuContent.Url + '/' + menuObj.Url]);
    // this.router.navigate([menuObj.Url]);
  }

}

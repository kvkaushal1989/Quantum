import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MENU } from 'src/app/shared/constant/menu';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {
  sideMenuContent: any;
  constructor(
    private router: Router,
    private sharedService: SharedService
  ) {

  }

  ngOnInit() {
      // this.sideMenuContent = this.sharedService.sideMenuContent; 
      this.sideMenuContent = MENU[1]; // this.sharedService.sideMenuContent == null ? MENU[1] : this.sharedService.sideMenuContent; 
  }

  public navigatePage(menuObj: any) {
    // this.sharedService.sideMenuContent = menuObj;

    this.router.navigate([this.sideMenuContent.Url + '/' + menuObj.Url]);
  }
}

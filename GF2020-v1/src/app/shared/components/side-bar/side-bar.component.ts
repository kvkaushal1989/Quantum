import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { MENU } from '../../constant/menu';

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  @Input() sideMenuDetails;
  public isSideMenu: boolean = true;
  public subMenuItems: Array<{}>;

  public sideNavContentview = false;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private sharedService:SharedService
  ) {
    
    this.sharedService.sideMenuContent = MENU[0];
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (
          event.url === "/login" ||
          event.url === "/" ||
          event.url === "/otp" ||
          event.url === "/forgotPwd"
        ) {
        } else {
          this.isSideMenu = true;
        }
      }
    });
  }

  ngOnInit() {}

  public navigatePage(menuObj:any):void{
    this.sharedService.sideMenuContent = menuObj;
    this.router.navigate([menuObj.Url]);
  }

  public filterByModuleMenuFk(modMenuFK: number) {
    if (this.sideMenuDetails.lstForm) {
      this.subMenuItems = this.sideMenuDetails.lstForm.filter(
        subMenuDetails => {
          return subMenuDetails.modMenuFK === modMenuFK;
        }
      );
    }
  }

  navigateMenu(menuObj: any, event: any) {
    if (this.sideMenuDetails !== undefined) {
      this.sideMenuDetails.forEach(v => {
        if (v.Id === menuObj.Id) {
          menuObj.IsExpand = !menuObj.IsExpand;
        } else {
          v.IsExpand = false;
        }
      });
    }
  }
}

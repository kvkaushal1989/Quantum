import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { CustomResponse } from '../../models/response';
import { SideMenuService } from './service/side-menu.service';
import { AssetListService } from 'src/app/services/vessel-operations/asset-list/asset-list.service';
import { OrganisationService } from 'src/app/services/settings/organisation/organisation.service';
import { CargoListService } from 'src/app/services/terminal-operations/cargo-list.service';
// import { FavoritesService } from 'src/app/pages/settings/favorites/favorites.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menuList: any;
  isSideMenu: boolean;
  @ViewChild('target', {static:false}) private myScrollContainer: ElementRef;
  @ViewChild('scroll_container', {static:false}) private myScrollContainer1: ElementRef;

  constructor(private router: Router,
    private sharedService: SharedService,
    private organisationService: OrganisationService,
    private cargoService: CargoListService,
    public sideMenuService: SideMenuService,
    public assetService: AssetListService,
    // public favoritesService: any,
    public localStorageService: LocalStorageService,
    public alertifyService: AlertifyService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/' || event.url === '/otp' || event.url === '/forgotPwd') {
        } else {
          this.isSideMenu = true;
        }
      }
    });
  }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/' || event.url === '/otp' || event.url === '/forgotPwd') {
        } else {
          this.isSideMenu = true;
        }
      }
    });
    if (!this.sideMenuService.menuList) {
      this.getmenuList();
    }
  }

  disableScrollDown = false;
  scrollToElement(el: any, value): void {
    console.log(this.myScrollContainer.nativeElement.scrollHeight)
    if (value === 'bottom') {
      this.myScrollContainer.nativeElement.scroll({
        top: this.myScrollContainer.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      this.myScrollContainer.nativeElement.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }


  topIconVisible: boolean = false;
  bottomIconVisible: boolean = false;
  onScroll() {
    let nativeElememt = this.myScrollContainer.nativeElement;
    this.topIconVisible = false;
    this.bottomIconVisible = true;
    if (nativeElememt.scrollTop > 0) {
      this.topIconVisible = true;
    }
    let atBottom = nativeElememt.scrollHeight - nativeElememt.scrollTop === nativeElememt.clientHeight
    if (this.disableScrollDown && atBottom) {
      this.disableScrollDown = false
    } else {
      this.disableScrollDown = true
    }
  }

  getmenuList() {
    const tempIco: any = ['fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg',
      'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg'];
    let userPk: any = '';
    if (localStorage.getItem('userDetails')) {
      userPk = JSON.parse(localStorage.getItem('userDetails'));
    }
    const dataFilter: any = {
      userpk: userPk.usermaster_pk ? userPk.usermaster_pk : 0,
    };
    this.sharedService.getMenuDetails(dataFilter).subscribe((resp: CustomResponse) => {
      const tempList: any = resp.Data;
      for (let i = 0; i < tempList.length; i++) {
        tempList[i].module_image = tempIco[i];
      }
      this.sideMenuService.menuList = tempList;
      this.bottomIconVisible = true;
      this.disableScrollDown = true;
    });
  }

  navigateUrl(index: number, url: any, value: any) {
    if (url) {
      this.sideMenuService.menuList[index].isExpanded = false;
      if (value.module_name === 'Vessel Operations') {
        this.assetService.selectedVesselOperator = value.menuform_name;
      }
      console.log(value.module_name);
      if (value.module_name === 'Terminal Operations') {
        this.cargoService.selectedTab = value.menuform_name;
      }
      if (value.module_name === 'Settings') {
        this.organisationService.selectedOrgType = value.menuform_name;
      }
      this.load(url)
      // this.router.navigate([url]);
      let param = url.split('?')
      let tmpValue: any;
      if (param[1]) {
        tmpValue = JSON.parse('{"' + decodeURI(param[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
      }
      this.router.navigate([param[0]], { queryParams: tmpValue });
      document.getElementById('modalNew').style.display = 'none';
    }

    // if(){}
    else {
      this.router.navigate(['/under-construction']);
      document.getElementById('modalNew').style.display = 'none';
      this.hideMenuItems();
    }
  }

  load(val) {
    console.log(this.router.url)
    const paramnew1 = this.router.url.split('?');
    const paramnew2 = val.split('?');
    if (paramnew1[0] === paramnew2[0]) {
      // this.spinnerService.show();
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    }
  }

  hideMenuItems() {
    for (const m of this.sideMenuService.menuList) {
      m.isExpanded = false;
    }
  }

  hasHorizontalScrollbar: boolean = false;
  atLeftReached: boolean = false;
  atRightReached: boolean = false;
  showLeftIcon: boolean = false;

  expandMenu(index: number, module?: string) {
    this.atLeftReached = false;
    this.showLeftIcon = false;
    this.atRightReached = false;
    if (module === 'Favorites') {
      this.router.navigate(['/Settings/Favorites']);
      document.getElementById('modalNew').style.display = 'none';
      this.hideMenuItems();
    }
    else {
      var selectedMenu = document.getElementById('menu_lists' + index);
      let menuBound = selectedMenu.getBoundingClientRect();
      this.hideMenuItems();
      document.getElementById('modalNew').style.display = 'block';
      this.sideMenuService.menuList[index].isExpanded = true;
      setTimeout(() => {
        let modal = document.getElementById('modal_div');
        let topValue = menuBound.top + 50;
        modal.style.top = topValue + "px";
      }, 10);
      setTimeout(() => {
        this.scrollFunction();
        var content = document.getElementById('scroll_container');
        this.hasHorizontalScrollbar = content.scrollWidth > content.clientWidth;
      }, 100);
    }
  }

  scrollLeft() {
    let nativeElememt = this.myScrollContainer1.nativeElement;
    let val: number = nativeElememt.scrollLeft;
    let left = val += 250;
    this.myScrollContainer1.nativeElement.scroll({
      top: this.myScrollContainer1.nativeElement.scrollHeight,
      behavior: 'smooth',
      left: left,
    });

    this.atLeftReached = nativeElememt.scrollWidth - nativeElememt.scrollLeft === nativeElememt.clientWidth;
    this.atRightReached = nativeElememt.scrollWidth + nativeElememt.scrollRight === nativeElememt.clientWidth;
    this.hasHorizontalScrollbar = nativeElememt.scrollWidth > nativeElememt.clientWidth;
    this.showLeftIcon = true;
  }

  scrollRight() {
    let nativeElememt = this.myScrollContainer1.nativeElement;
    let val: number = nativeElememt.scrollLeft;
    let right = val -= 250;
    this.myScrollContainer1.nativeElement.scroll({
      top: this.myScrollContainer1.nativeElement.scrollHeight,
      behavior: 'smooth',
      left: right,
    });
    if (nativeElememt.scrollLeft < 300) {
      this.atRightReached = true
    }
    this.hasHorizontalScrollbar = nativeElememt.scrollWidth > nativeElememt.clientWidth;
    this.atLeftReached = nativeElememt.scrollWidth - nativeElememt.scrollLeft === nativeElememt.clientWidth;
  }

  expandOnlyForFavorites($event, index: number, module?: string) {
    if (module === 'Favorites') {
      var selectedMenu = document.getElementById('menu_lists' + index);
      let menuBound = selectedMenu.getBoundingClientRect();
      this.hideMenuItems();
      document.getElementById('modalNew').style.display = 'block';
      this.sideMenuService.menuList[index].isExpanded = true;
      setTimeout(() => {
        let modal = document.getElementById('modal_div');
        let topValue = menuBound.top + 50;
        modal.style.top = topValue + "px";
      }, 10);
      setTimeout(() => {
        this.scrollFunction();
      }, 100);
      $event.preventDefault();
      $event.stopPropagation();
    } else {
      return
    }
  }

  closeMenuItem() {
    this.hideMenuItems();
    document.getElementById('modalNew').style.display = 'none';
  }

  showChildList(i: number, j: number) {
    if (this.sideMenuService.menuList[i].childData[j].module_name === 'Favorites' && (this.sideMenuService.menuList[i].childData[j].menuform_name === 'Activate' || this.sideMenuService.menuList[i].childData[j].menuform_name === 'Deactivate')) {
      this.activateFavoriteMenu(i, this.sideMenuService.menuList[i].childData[j].menuform_name);
    } else {
      for (const x of this.sideMenuService.menuList[i].childData) {
        x.active = false;
      }
      this.sideMenuService.menuList[i].childData[j].active = true;
      if (!this.sideMenuService.menuList[i].childData[j].childData1.length) {
        if (!this.sideMenuService.menuList[i].childData[j].menuform_url) {
          this.router.navigate(['/under-construction']);
        } else {
          let param = this.sideMenuService.menuList[i].childData[j].menuform_url.split('?')
          let tmpValue: any;
          if (param[1]) {
            tmpValue = JSON.parse('{"' + decodeURI(param[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
          }
          this.router.navigate([param[0]], { queryParams: tmpValue });
          this.load(this.sideMenuService.menuList[i].childData[j].menuform_url);
          // this.router.navigate([this.sideMenuService.menuList[i].childData[j].menuform_url]);
        }
        this.sideMenuService.menuList[i].isExpanded = false;
        document.getElementById('modalNew').style.display = 'none';
        this.hideMenuItems();
      }
    }

  }

  activateFavoriteMenu(i: number, value: any) {
    let requestObj = {
      "favoritesetup_pk": 0,
      "user_fk": this.localStorageService.getUserPk(),
      "is_active": value === 'Activate' ? 1 : 0,
      "created_by_fk": this.localStorageService.getUserPk(),
      "created_on": new Date(),
      "last_updated_by_fk": this.localStorageService.getUserPk(),
      "last_updated_on": new Date(),
      "version_no": 0
    }
    // this.favoritesService.activateFavorites(requestObj).subscribe((resp: any) => {
    //   if (resp) {
    //     if (value === 'Activate') {
    //       this.alertifyService.success('Favorites Menu Activated')
    //     } else {
    //       this.alertifyService.success('Favorites Menu Deactivated')
    //     }
    //     this.getmenuList();
    //     this.sideMenuService.menuList[i].isExpanded = false;
    //     document.getElementById('modalNew').style.display = 'none';
    //     this.hideMenuItems();
    //   }
    // }, error => {
    // });
  }

  allowCloseOnClickOut() {
    for (const x of this.sideMenuService.menuList) {
      for (const y of x.childData) {
        y.active = false;
      }
    }
  }

  scrollFunction() {
    const ele = document.getElementById('scroll_container');
    ele.style.cursor = 'grab';

    let pos = {
      top: 0,
      left: 0,
      x: 0,
      y: 0
    };

    // tslint:disable-next-line: only-arrow-functions
    const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      // console.log('called3');
    };

    // tslint:disable-next-line: only-arrow-functions
    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
      // console.log('called2');
    };

    // tslint:disable-next-line: only-arrow-functions
    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      // console.log('called1');
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
    // console.log('called');
  }
  redirect() {
    this.router.navigateByUrl('/dashboard');
  }
}

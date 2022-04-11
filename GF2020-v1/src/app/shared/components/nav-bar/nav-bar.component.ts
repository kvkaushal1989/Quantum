import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { NavBarService } from './service/nav-bar.service';
import { CustomResponse } from '../../models/response';
import { AlertifyService } from '../../_services/alertify.service';
import { SideMenuService } from '../side-menu/service/side-menu.service';
import { LocalStorageService } from '../../services/local-storage.service';
// import { EmailManagementService } from 'src/app/pages/email-management/email-management.service';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() navItems;
  @Input() navSubItems;
  menuList: any = [];
  filteredMenuItems: any = [];
  userPk: any = this.localStorageServive.getLocalStorageDetails('userDetails');
  searchFilter: string = '';
  currentUrl: any = '';
  glossaryUrl: any;
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (this.notificationDetail) {
      this.hideNotificationDetail();
    }
    this.hideClearPopup();
    this.hideClearAllPopup();
  }

  constructor(private router: Router,
    private sharedService: SharedService,
    public _navService: NavBarService,
    public alertify: AlertifyService,
    public sideMenuService: SideMenuService,
    public localStorageServive: LocalStorageService
    // public emailManagementService: EmailManagementService
    ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentUrl = event['url'];
      })
  }

  ngOnInit() {
    console.log(this.navItems)
    if (!this.sideMenuService.unreadCount) {
      this.getNotificationCount();
    }
    this.getmenuList();
    console.log(this.router.url);
    this.glossaryUrl = environment.helpPath + '/glossary.html'


  }

  getmenuList() {
    let userPk = this.localStorageServive.getUserPk();
    const dataFilter: any = {
      userpk: userPk ? userPk : 0,
    };
    this.sharedService.getMenuDetails(dataFilter).subscribe((resp: CustomResponse) => {
      const tempList: any = resp.Data;
      this.menuList = [];
      for (let m of tempList) {
        for (let n of m.childData) {
          if (!n.childData1.length) {
            this.menuList.push({
              name: n.menuform_name,
              url: n.menuform_url
            })
          }
          for (let o of n.childData1) {
            this.menuList.push({
              name: o.menuform_name,
              url: o.menuform_url
            })
          }
        }
      }
      this.validateUrl(this.menuList)
    }, (error) => {
      // this.alertify.error('Internal server error');
      this.router.navigate(['/login'])
    },
      // () => {
      //   this.router.navigate(['/login'])
      // }
      );
  }

  validateUrl(menuList: any) {
    let tmpCurrurl = this.currentUrl;
    tmpCurrurl = tmpCurrurl.split('?');
    const urlValue = tmpCurrurl[0];
    let tempValue = false;
    for (let m in menuList) {
      if (menuList[m].url === urlValue) {
        tempValue = true;
      }
    }


    // if (urlValue !== '/dashboard') {
    //   if (!tempValue) {
    //     this.router.navigate(['/login'])
    //   }
    // }

  }

  clearFilter() {
    this.searchFilter = '';
  }

  navigateUrl(value: any) {
    if (value.url === '/under-construction') {
      this.alertify.error("The page doesn't exist")
      return;
    } else {
      this.router.navigate([value.url])
      this.searchFilter = '';
    }
  }

  public routeTo(navItem, key, isLast: boolean) {
    if (navItem.val == 'filemanager') {
      if (key === 0) {
        this.sharedService.setNavItems(this.navItems.slice(0, key));
        this.router.navigateByUrl(navItem.routeTo);
      }
      return;
    }
    if (!isLast) {
      this.sharedService.setNavItems(this.navItems.slice(0, key));
      this.router.navigateByUrl(navItem.routeTo);
    }
  }

  filterMenuNames(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.menuList.length; i++) {
      const menuName = this.menuList[i];
      if (menuName.name) {
        if (menuName.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
          filtered.push(menuName);
        }
      }
    }
    this.filteredMenuItems = filtered;
  }


  logout() {
    const dataFilter: any = {
      userpk: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0
    };
    // this.authService.logOut(dataFilter).subscribe(
    //   (res: any) => {
    //     this.router.navigate(['/login']);
    //     localStorage.clear();
    //   });
  }

  getNotificationCount() {
    const dataFilter: any = {
      "userpk": this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
    };
    this._navService.getNotificationCount(dataFilter).subscribe((res: CustomResponse) => {
      if (res) {
        this.sideMenuService.userDetails = this.localStorageServive.getLocalStorageDetails('userDetails');
        if (res.Data.length) {
          this.sideMenuService.unreadCount = res.Data[0].unreadcount;
        } else {
          this.sideMenuService.unreadCount = 0
        }
      }

    }, (error: any) => {
    }, () => { });
  }

  hideShowAll: boolean = true;
  notificationList: any = [];
  isNotificationLoading: boolean = false;
  getNotifications(status?: any) {
    this.openNav();
    this.isNotificationLoading = true;
    if (this.sideMenuService.unreadCount == 0) {
      status = '';
    }
    const dataFilter: any = {
      userpk: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
      status: status
    };
    this._navService.getNotifications(dataFilter).subscribe((res: CustomResponse) => {
      if (res) {
        let tepmResponse = res.Data;
        this.notificationList = tepmResponse.sort(function (a, b) {
          if (a.read_status < b.read_status) { return 1; }
          if (a.read_status > b.read_status) { return -1; }
          return 0;
        })
        if (!status) {
          this.hideShowAll = false;
        } else {
          this.hideShowAll = true;
        }
        this.isNotificationLoading = false;
      }

    }, (error: any) => {
      this.isNotificationLoading = false;
    }, () => { });
  }


  notificationDetail: any = {};
  showNotificationDetail(data) {
    const dataFilter: any = {
      userId: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
      id: data.messagelogpk
    };
    this._navService.getNotificationDetail(dataFilter).subscribe((res: CustomResponse) => {
      if (res) {
        this.notificationDetail = res;
        let modal = document.getElementById("notificationModal");
        modal.style.display = "block";
        this.getNotificationCount();
        this.getNotifications();
      } else {
      }
    }, (error: any) => {
    }, () => { });
  }

  hideNotificationDetail() {
    let modal = document.getElementById("notificationModal");
    modal.style.display = "none";
  }

  clearNotification() {
    const dataFilter: any = [{
      userpk: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
      messagelogpk: this.clearData.messagelogpk
    }];
    this._navService.clearNotification(dataFilter).subscribe((res: CustomResponse) => {
      if (res && res.Status == 'Success') {
        this.alertify.success('Deleted Successfully');
        this.getNotificationCount();
        this.getNotifications()
        this.hideClearPopup();
        this.selctedArray = []
        console.log(res)
      } else {
        this.alertify.error('Error');
      }
    }, (error: any) => {
      this.alertify.error('Error');
    }, () => {
      // this.alertify.error('Error');
    });
  }

  clearAllNotification() {
    const dataFilter: any = []
    console.log(this.notificationList)
    for (let x of this.selctedArray) {
      dataFilter.push({
        userpk: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
        messagelogpk: x.messagelogpk
      })
    }
    this._navService.clearNotification(dataFilter).subscribe((res: CustomResponse) => {
      if (res && res.Status == 'Success') {
        this.alertify.success('Deleted Successfully');
        this.getNotificationCount();
        this.getNotifications()
        this.hideClearAllPopup();
        this.selctedArray = []
      } else {
        this.alertify.error('Error');
      }
    }, (error: any) => {
      this.alertify.error('Error');
    }, () => {
    });
  }

  clearData: any;
  showClearPopup(data: any) {
    this.clearData = data
    let modal = document.getElementById("confirmCancelModal");
    modal.style.display = "block";
  }

  hideClearPopup() {
    let modal = document.getElementById("confirmCancelModal");
    modal.style.display = "none";
  }

  showClearAllPopup() {
    let modal = document.getElementById("clearAllModal");
    modal.style.display = "block";
  }

  hideClearAllPopup() {
    let modal = document.getElementById("clearAllModal");
    modal.style.display = "none";
  }

  selctedArray: any = []
  selectMessages(index: number) {
    this.selctedArray = [];
    this.notificationList[index].selected = !this.notificationList[index].selected;
    console.log(this.notificationList)

    for (let x of this.notificationList) {
      if (x.selected) {
        this.selctedArray.push({
          userpk: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
          messagelogpk: x.messagelogpk
        })
      }
    }
  }
  selectallflag: boolean = false;
  selectallcheck(flag: any) {
    this.selctedArray = [];
    if (flag.target.checked) {
      this.selectallflag = true;
      for (let x of this.notificationList) {
        this.selctedArray.push({
          userpk: this.localStorageServive.getUserPk() ? this.localStorageServive.getUserPk() : 0,
          messagelogpk: x.messagelogpk
        })
      }
    } else {
      this.selectallflag = false;
    }

    console.log(this.notificationList.selected)
  }


  openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    document.getElementById("sidenavModal").style.display = "block";
  }

  closeNav() {
    this.selctedArray = [];
    this.selectallflag = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenavModal").style.display = "none";;
  }

  navigateToMail(index: number) {
    // this.emailManagementService.selectedMailIndex = index;
    // this.router.navigate(['/email-management']);
  }

  showHelpFile() {
    if (this.sharedService.helpObj) {
      if (this.sharedService.helpObj.menuhelp_url) {
        let url = environment.helpPath + '/' + this.sharedService.helpObj.menuhelp_url;
        window.open(url, '_blank');
      } else {
        this.alertify.error('Sorry!, Help file missing');
      }
    } else {
      this.alertify.error('Sorry!, Help file missing');
    }
  }

}

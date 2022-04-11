import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './shared/services/api.service';
import { MENU } from './shared/constant/menu';
import { MessagingServiceService } from './shared/services/messaging-service.service';

import { JwtHelperService } from '@auth0/angular-jwt';
// import { AuthService } from './authentication/services/auth.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { LocalStorageService } from './shared/services/local-storage.service';
import { DashboardServiceService } from './pages/dashboard/dashboard-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jwtHelper = new JwtHelperService();

  public title = 'GF-2020';
  public notification: any;
  public isNotification: boolean = false;
  public sideMenuDetails: any;
  public simpleNotifications: any;
  public isSimpleNotification: boolean = false;
  public statusNotifications: any = {};
  navItems: any;
  navSubItems: any;

  message:any;

  constructor(
    private sharedService: SharedService,
    private spinner: NgxSpinnerService,
    private apiService: ApiService,
    public messaginServive: MessagingServiceService,
    // public authService: AuthService,
    private route: ActivatedRoute,
    private _localStorage: LocalStorageService,
    public _router: Router,
    public dashboardService: DashboardServiceService
  ) {
    this.sharedService.getNotifications().subscribe(notification => {
      // this.notification = {};
      let tempNtf = { ...notification };
      if (notification.message) {
        this.isNotification = true;
      }
      if (tempNtf.notificationType) {
        this.notification.unshift(tempNtf);
      }
      // tempNotifications.push(tempNtf);
    });

    this.sharedService.statusNotifications.subscribe(notif => {
      this.statusNotifications = {};
      if (notif && notif.notificationMessage) {
        this.statusNotifications = { ...notif, isNotification: true };
      }
    });

    this.sideMenuDetails = MENU;

    // this.sharedService.sideMenuElements.subscribe(menuDetails => {
    //   this.sideMenuDetails = menuDetails;
    // });

    this.sharedService.simpleNotifications.subscribe(simpleNotification => {
      if (simpleNotification && simpleNotification.body) {
        this.isSimpleNotification = true;
        this.simpleNotifications = [{ ...simpleNotification }];
      }
    });
  }

  ngOnInit() {
    this.sharedService.getNavItems().subscribe(navItems => {
      this.navItems = navItems;
    });
    this.sharedService.getNavSubItems().subscribe(navSubItems => {
      this.navSubItems = navSubItems;
    });
    const userId = 'user001';
    this.messaginServive.requestPermission(userId);
    this.messaginServive.receiveMessage();
    this.message = this.messaginServive.currentMessage;
    console.log(this.message);
    this.messaginServive.currentMessage.subscribe(message => this.message = message);
    // this.sharedService.getPermission();
    // this.sharedService.receiveMessages();
    const token = localStorage.getItem('token');
    // if (token) {
    //   this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    //   console.log(this.authService.decodedToken);
    // }
  }

  changeNotificationStatus(event: any) {
    if (event !== null) {
      this.isNotification = event;
    }
  }

  changeOfRoutes() {
    let tempValue = this._localStorage.getLocalStorage('resultAccessGranded');
    console.log(tempValue)
    this._router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) {
        this._localStorage.setLocalStorage('voyageAccessPopup', false);
      }
    });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  userList: any = [];
  getActiveUsers() {
    this.flagValue = false;
    this.dashboardService.getActiveUsers({}).subscribe(data => {
      let tmpRes: any = data;
      let finalUserList = [];
      for (let i = 0; i < tmpRes.length; i++) {
        if (tmpRes[i].pk != this._localStorage.getUserPk()) {
        finalUserList.push(tmpRes[i]);
        }
      }
      for (let m of tmpRes) {
        if (!m.imgae) {
          m.image = 'assets/images/default-user-image.png';
          m.sel_flag = false;
        }
      }
      this.userList = finalUserList;
    });
  }

  videoLoading: boolean = false;
  redirectToVideo() {
    let uvidValue = this.uuidv4();
    let tempUser: any = [];
    let userList: any = this.userList;
    for (let m of userList) {
      if (m.sel_flag) {
        tempUser.push(m.pk)
      }
    }
    this.videoLoading = true;
    this.dashboardService.chatCall({ UserPK: tempUser.toString(), ChatURL: uvidValue, ChatType: 'webcall' }).subscribe(data => {
      let tmpRes: any = data;
      this.videoLoading = false;
      if (tmpRes.Status === 'Success') {
        let url = 'https://webcalling.azurewebsites.net/webcall/?groupId=' + uvidValue + '&uname=' + this._localStorage.getUserName()
        window.open(url, '_blank');
        this.videoLoading = false;
      }
    });
  }

  isLoading: boolean = false;
  getThread() {
    this.isLoading = true;
    this.dashboardService.getThread().subscribe(data => {
      console.log(data)
      if (data) {
        this.redirectToChat(data)
      } else {
        this.isLoading = false;
      }
    }, (err) => {
      this.isLoading = false;
    });
  }

  redirectToChat(threadData: string) {
    let tempUser: any = [];
    let userList: any = this.userList;
    for (let m of userList) {
      if (m.sel_flag) {
        tempUser.push(m.pk)
      }
    }
    this.dashboardService.chatCall({ UserPK: tempUser.toString(), ChatURL: threadData, ChatType: 'webchat' }).subscribe(data => {
      let tmpRes: any = data;
      if (tmpRes.Status === 'Success') {
        // https://webcalling.azurewebsites.net
        this.isLoading = false;
        let url = 'https://webcalling.azurewebsites.net/?threadId=' + threadData + '&uname=' + this._localStorage.getUserName();
        window.open(url, '_blank');
      } else {
        this.isLoading = false;
      }
    });
  }

  selectedMailList: any = [];
  flagValue: boolean = false;
  checkAllSelected() {
    const list: any = this.userList;
    console.log(list)
    this.selectedMailList = [];
    for (const x of list) {
      if (x.sel_flag) {
        this.selectedMailList.push(x);
      }
    }
    if (this.selectedMailList.length) {
      this.flagValue = true;
    } else {
      this.flagValue = false;
    }
  }
}

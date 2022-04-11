import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CustomResponse } from 'src/app/shared/models/response';
import { Subject, Observable } from 'rxjs';
import { NavBarService } from '../../nav-bar/service/nav-bar.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { BasicDailogService } from '../../basic-dailog/basic-dailog/basic-dailog.service';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  private subject = new Subject<any>();

  private notifySubject = new Subject<any>();

  private webCallSubject = new Subject<any>();

  menuList: any;
  unreadCount: any = 0;
  selectedVesselOperator = '';
  userDetails: any = {
    image: '',
    username: ''
  }

  constructor(public sharedService: SharedService,
    public _navService: NavBarService,
    public localStorageServive: LocalStorageService,
    public basicDialogService: BasicDailogService) { }

  getmenuList(): any {
    let tempList: any = null;
    const tempIco: any = ['fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg',
      'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg', 'fa fa-dashboard', 'fa fa-wpexplorer', 'fa fa-gg'];
    let userPk: any = JSON.parse(localStorage.getItem('userDetails'));

    const dataFilter: any = {
      "userpk": userPk.usermaster_pk,
    }
    this.sharedService.getMenuDetails(dataFilter).subscribe((resp: CustomResponse) => {
      this.userDetails = this.localStorageServive.getLocalStorageDetails('userDetails');
      tempList = resp.Data;
      for (let i = 0; i < tempList.length; i++) {
        tempList[i].module_image = tempIco[i]
      }
      this.menuList = tempList
    });
  }


  getNotificationCount() {
    let userPk: any = JSON.parse(localStorage.getItem('userDetails'));
    const dataFilter: any = {
      "userpk": userPk.usermaster_pk,
    };
    this._navService.getNotificationCount(dataFilter).subscribe((res: CustomResponse) => {
      if (res.Data.length) {
        this.unreadCount = res.Data[0].unreadcount;
      } else {
        this.unreadCount = 0
      }
    }, (error: any) => {

    }, () => { });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getNotification(): Observable<any> {
    return this.notifySubject.asObservable();
  }

  setMenuItem() {
    this.subject.next({
      key: this.getmenuList()
    })
  }

  setNotificationItem() {
    this.notifySubject.next({
      key: this.getNotificationCount()
    })
  }
}

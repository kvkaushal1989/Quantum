import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { APIENDPOINT } from '../../constant/api-end-points';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictedAccessPopupService {
  private subject = new Subject<any>();
  public isAccessRestricted: boolean;
  public isAuthoriseduser: boolean;
  
  constructor(
    private apiService: AppService,
    public _localStorage: LocalStorageService
  ) { }

  authenticateAccess(data: any, siFn?: () => void, noFn?: () => void) {
      this.setConfirmation(data, 'AccessRestricted', siFn, noFn);
  }

  setConfirmation(data: any, t: string, siFn: () => void, noFn: () => void, h?: string) {
      const that = this;
      this.subject.next({
          type: t,
          header: h,
          accessInfo: data,
          text: data,
          siFn() {
              that.subject.next(null); // this will close the modal
              siFn();
          },
          noFn() {
              that.subject.next(null);
              noFn();
          }
      });
      console.log(this.subject);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  closePopup() {
    this.subject.next(null);
  }

  confirmUser(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.USERACCESSFORFRIEGHT, param);
  }

  getIsAccessRestricted(): boolean {
    this.isAuthoriseduser = this._localStorage.getLocalStorage('isAuthoriseduser') !== null ? this._localStorage.getLocalStorage('isAuthoriseduser') : false;
    return this.isAuthoriseduser;
  }
}

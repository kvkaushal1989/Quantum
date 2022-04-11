import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpParams } from '@angular/common/http';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(public _appService: AppService) { }

  getNotificationCount(reqInput: any) {
    return this._appService.get(APIENDPOINT.ALERTNOTIFICATION.GETALERTCOUNT, reqInput);
  }

  getNotifications(reqInput: any) {
    return this._appService.get(APIENDPOINT.ALERTNOTIFICATION.GETUSERMESSAGEDT, reqInput);
  }

  getNotificationDetail(reqInput: any) {
    return this._appService.get(APIENDPOINT.ALERTNOTIFICATION.NOTIFICATIODETAIL, reqInput);
  }

  clearNotification(reqInput: any) {
    return this._appService.post(APIENDPOINT.ALERTNOTIFICATION.CLEARNOTIFICATION, reqInput);
  }
}

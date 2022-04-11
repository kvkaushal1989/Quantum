import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(public appService: AppService) { }

  getDashboardAccessRight(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHACCESSRIGHT, dataFilter);
  }

  getBookingDetail(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHBOOKINGDETAIL, dataFilter);
  }
  getChsList(userParams?: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('UserFK', userParams.UserFK);
    return this.appService.getMethod(APIENDPOINT.DASHBOARD.FETCHCHSLIST, params, page);
    // return this.appService.get(APIENDPOINT.DASHBOARD.FETCHCHSLIST, params,page);
  }
  getAlerList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHALERTLIST, dataFilter);
  }
  // getAllocationList(dataFilter?: any) {
  //   return this.appService.get(APIENDPOINT.DASHBOARD.FETCHALLOCATIONLIST, dataFilter);
  // }
  getAllocationList(userParams?: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('UserFK', userParams.UserFK);
    return this.appService.getMethod(APIENDPOINT.DASHBOARD.FETCHALLOCATIONLIST, params, page);
    // return this.appService.get(APIENDPOINT.DASHBOARD.FETCHCHSLIST, params,page);
  }
  getBiilingList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHBILLINGLIST, dataFilter);
  }
  getDocList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHDOCLIST, dataFilter);
  }
  getNBVolList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHNBVOLLIST, dataFilter);
  }
  getsbVolList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHSBVOLIST, dataFilter);
  }
  getBillHisList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.FETCHBILLHISTLIST, dataFilter);
  }
  chatCall(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.CHATCALL, dataFilter);
  }
  getActiveUsers(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.DASHBOARD.GETUSERS, dataFilter);
  }
  getThread(dataFilter?: any) {
    return this.appService.PostMethodForThread(dataFilter);
  }

}


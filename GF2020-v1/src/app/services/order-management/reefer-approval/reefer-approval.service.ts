import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReeferApprovalService {
  public reeferApprovalStatus;
  public reeferApprovalDetails;
  public reeferIndex;
  public vesselIndex;
  public customerIndex;
  public bookingIndex;
  constructor(private appService: AppService) {
    this.reeferApprovalStatus = new BehaviorSubject<any>(null);
    this.reeferApprovalDetails = new BehaviorSubject<any>(null);
    this.vesselIndex = new BehaviorSubject<any>(null);
    this.customerIndex = new BehaviorSubject<any>(null);
    this.bookingIndex = new BehaviorSubject<any>(null);
    this.reeferIndex = new BehaviorSubject<any>(null);
   }

  public getReeferList(params?: any) {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.FETCH, params);
  }
  public getReeferColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=58');
  }
  public downloadFile(body: any) {
    return this.appService.print(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.PRINT , {} , body);
  }
  public getRefferDropdown() {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.DROPDOWN);
  }
  public getReeferSetting() {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.SETTING);
  }
  public saveReeferSetting(body: any) {
    return this.appService.postMethod(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.SAVESETTING, body);
  }
  public confirmApproval(body: any) {
    return this.appService.postMethod(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.CONFIRMAPPROVAL, body);
  }
  public checkIsApprover(body: any) {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.REFEERAPPROVAL.ISAPPROVER, body);
  }
  
  public defoutSettings() {
    const object = {
     reefersettingpk: 0,
     approval_category: '',
     update_load_list: true,
     active_messaging: true,
     track_govt_designated_cargo: true,
     is_active: 1,
     created_by_fk: 1,
     created_on: new Date().toISOString(),
     last_updated_by_fk: 1,
     last_updated_on: new Date().toISOString(),
     version_no: 0,
      preApprove: [
        {
          reeferpreapprovecustpk: 0,
          reefersettingfk: 0,
          customermasterfk: 0,
          is_active: 1,
          created_by_fk: 1,
          created_on: new Date().toISOString(),
          last_updated_by_fk: 1,
          last_updated_on: new Date().toISOString(),
          version_no: 0
        }
      ],
    };
    return object;
  }
}

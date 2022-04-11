import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HazmatApprovalService {

  public hazmatApprovalDetails;
  public hazmatApprovalStatus;
  public hazmatSetting;
  public vesselIndex;
  public customerIndex;
  public bookingIndex;
  public hazmatIndex;
  constructor(
    private appService: AppService,
    ) {
      this.hazmatApprovalDetails = new BehaviorSubject<any>(null);
      this.hazmatApprovalStatus = new BehaviorSubject<any>(null);
      this.hazmatSetting = new BehaviorSubject<any>(null);
      this.hazmatIndex = new BehaviorSubject<any>(null);
      this.vesselIndex = new BehaviorSubject<any>(null);
      this.customerIndex = new BehaviorSubject<any>(null);
      this.bookingIndex = new BehaviorSubject<any>(null);
     }

  public getHazmatList(input?: any) {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.FETCH, input);
  }
  public getHazmatColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=57');
  }
  public getHazmatDropdown() {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.DROPDOWN);
  }
  public downloadFile(body: any) {
    return this.appService.print(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.PRINT,{},body);
  }
  public getHazMatSetting() {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.SETTING);
  }
  public saveHazmatSetting(body: any) {
    return this.appService.postMethod(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.SAVESETTING, body);
  }

  public confirmApproval(body: any) {
    return this.appService.postMethod(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.CONFIRMAPPROVAL, body);
  }
  public viewDocument(input: any) {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.VIEWDOC, input);
  }

  public checkIsApprover(input: any) {
    return this.appService.get(APIENDPOINT.ORDERMANAGEMNT.HAZMATAPPROVAL.ISAPPROVER, input);
  }

  public defoutSettings() {
    const object = {
      hazmatsettingpk: 0,
      approval_category: '',
      update_load_list: true,
      active_messaging: true,
      track_govt_designated_cargo: true,
      non_haz_certificate: true,
      un_code: '',
      imdg_code: '',
      is_active: 1,
      created_by_fk: 1,
      created_on: new Date().toISOString(),
      last_updated_by_fk: null,
      last_updated_on: new Date().toISOString(),
      version_no: 0,
      preApprove: [
        {
          hazmatpreapprovecustpk: 0,
          hazmatsettingfk: 0,
          customermasterfk: 0,
          is_active: 1,
          created_by_fk: 1,
          created_on: new Date().toISOString(),
          last_updated_by_fk: 0,
          last_updated_on: new Date().toISOString(),
          version_no: 0
        }
      ],
    };
    return object;
  }
}

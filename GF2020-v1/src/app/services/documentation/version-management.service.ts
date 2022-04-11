import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class VersionManagementService {

  constructor(private appService: AppService, private apiService: ApiService) { }

  public getVoyageDropdown() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.DD_VOYAGE);
  }
  public getPortDropdown() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.DD_PORT);
  }
  public getTerminalDropdown() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.DD_TERMINAL);
  }
  public getDocDropdown() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.DD_DOC_TYPE);
  }
  public fetchRBLList(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.FETCH_RBL_LIST, dataFilter);
  }
  public fetchRBLEntry(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.FETCH_RBL_ENTRY, dataFilter);
  }
  public checkUserAccess(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.USERACCESS, dataFilter);
  }

  validateBooking(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.VALIDATEBOOKING, dataFilter);
  }

  public approveRBL(dataFilter: any) {
    return this.appService.post(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.APPROVE_RBL, dataFilter);
  }
  public saveRBL(dataFilter: any) {
    return this.appService.post(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.SAVE_RBL, dataFilter);
  }
  getCommodityGroup() {
    const reqInput = {
      searchflag: 'commgrp'
    };
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GET_DROPDOWN, reqInput);
  }
  getCommodity() {
    const reqInput = {
      searchflag: 'commodity'
    };
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GET_DROPDOWN, reqInput);
  }
  getCountry() {
    const reqInput = {
      searchflag: 'country'
    };
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GET_DROPDOWN, reqInput);
  }

  public checkIsApprover(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.CHECK_APPROVER, dataFilter);
  }

  public approveRbl(dataFilter: any) {
    return this.appService.post(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.APPROVE_RBL, dataFilter);
  }
  getpoddropdown(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.FETCHPODDROPDOWN, dataFilter);
  }
  getpodterdropdown(dataFilter: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.VERSION_MGMT.FETCHPODTERDROPDOWN, dataFilter);
  }
  fetchDestinationDropdown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHDESTDROPDOWN, reqInput);
  }
  fetchValidateBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHVALIDATEBOOKING, reqInput);
  }
}

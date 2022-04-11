import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RBLService {
  decimalSeperator: any;
  thousandSeperator: any;
  userPK: any = this.localStorageService.getUserPk();
  constructor(
    private apiService: AppService,
    private mockJsonService: MockJsonService,
    private localStorageService: LocalStorageService
  ) {
    // this.decimalSeperator = localStorageService.getLocalStorage('userPreference')['DECIMAL_SEPARATOR'];
    // this.thousandSeperator = localStorageService.getLocalStorage('userPreference')['THOUSANDS_SEPARATOR'];
    let storageValue = localStorageService.getLocalStorage('userPreference');
    this.decimalSeperator = storageValue ? storageValue['DECIMAL_SEPARATOR'] : '';
    this.thousandSeperator = storageValue ? storageValue['THOUSANDS_SEPARATOR'] : '';
  }


  fetchCustomerDropdown() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.CUST_DROPDOWN);
  }
  getColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=16');
  }
  downloadFile(body: any) {
    const body1: any = {
      UserPK: this.userPK,
      ImpExpflag: 0,
      PortPK: 0,
      TerminalPK: 0,
      CSH_PK: 0,
      BLPKs: body.BLPKs,
      No_Of_Copies: 1,
      customermasterfks: '',
      Thou_Sep: this.thousandSeperator,
      Dec_Sep: this.decimalSeperator
    }
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.MANIFEST, {}, body);
  }
  printForRBL(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.BOOK_RBL, {}, body);
  }
  public printTerminalRBL(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.TERMINALRBL, {}, body);
  }
  public printTerminalMicDta(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.TERMINALWISEMICDTA, {}, body);
  }
  public printTerminalManifest(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.TERMINALWISEMANIFEST, {}, body);
  }
  public printForServiceBL(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.SERVICEBL, {}, body);
  }
  printBookingManifest(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.BOOKINGMANIFEST, {}, body);
  }
  printBookingMicDta(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.BOOKINGMICDATA, {}, body);
  }
  printBookingRBL(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.BOOKING_RBL, {}, body);
  }
  printRBLPort(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.PORT_RBL, {}, body);
  }
  printRBLMICDTA(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.PORT_MICDTA, {}, body);
  }
  printRBLManifest(body: AnimationPlayState) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.PORT_MANIFEST, {}, body);
  }
  fetchRouteDropdown() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.ROUTE_DROPDOWN);
  }

  fetchSettings() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_SETTINGS);
  }

  fetchServiceBL(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_SERVICE_BL, reqInput);
  }
  saveSettings(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.RBL.SAVE_SETTINGS, reqInput);
  }
  fetchRiverBL(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_RIVER_BL, reqInput);
  }
  saveRBL(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.RBL.SAVE_RBL, reqInput);
  }
  generateRBL(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GEN_RIVER_BL, reqInput);
  }
  fetchRBLEntry(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_RBL_ENTRY, reqInput);
  }
  fetchDespacho(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_DESPACHO, reqInput);
  }
  saveDespacho(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.RBL.SAVE_DESPACHO, reqInput);
  }
  cancelBL(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.RBL.CANCEL_BL, reqInput);
  }
  getContainerType() {
    const reqInput = {
      searchflag: 'DDVALUE',
      Param3: 67,
      Param4: 'cntrstatus'
    };
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GET_DROPDOWN, reqInput);
  }
  getContainerSize() {
    const reqInput = {
      searchflag: 'container'
    };
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GET_DROPDOWN, reqInput);
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
  getLocation() {
    const reqInput = {
      searchflag: 'location'
    };
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.GET_DROPDOWN, reqInput);
  }
  // Rules Management
  fetchBand0(reqInput: any, page: any = 1) {
    let params = new HttpParams();
    if (!isNullOrUndefined(reqInput.PortPK)) {
      params = params.append('PortPK', reqInput.PortPK);
    }
    if (!isNullOrUndefined(reqInput.TerPK)) {
      params = params.append('TerPK', reqInput.TerPK);
    }
    if (!isNullOrUndefined(reqInput.CSHPK)) {
      params = params.append('CSHPK', reqInput.CSHPK);
    }
    if (!isNullOrUndefined(reqInput.CustPks)) {
      params = params.append('CustPks', reqInput.CustPks);
    }
    if (!isNullOrUndefined(reqInput.BkgId)) {
      params = params.append('BkgId', reqInput.BkgId);
    }
    if (!isNullOrUndefined(reqInput.status)) {
      params = params.append('status', reqInput.status);
    }
    if (!isNullOrUndefined(reqInput.FrmDt)) {
      params = params.append('FrmDt', reqInput.FrmDt);
    }
    if (!isNullOrUndefined(reqInput.ToDt)) {
      params = params.append('ToDt', reqInput.ToDt);
    }
    if (!isNullOrUndefined(reqInput.LoggedInUser)) {
      params = params.append('LoggedInUser', reqInput.LoggedInUser);
    }
    if(!isNullOrUndefined(reqInput.DashBoardStatus)){
      params = params.append('DashBoardStatus',reqInput.DashBoardStatus)
    }

    return this.apiService.getMethod(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_BAND0, params, page);
    //return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_BAND0, reqInput);
  }
  fetchBand1Hdr(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_BAND1HDR, reqInput);
  }
  fetchBand1Dtl(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_BAND1DTL, reqInput);
  }
  fetchBand2Hdr(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_BAND2HDR, reqInput);
  }
  fetchBand2Dtl(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_BAND2DTL, reqInput);
  }
  fetchRBLCustomerDropdown() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_RBL_CUST_DROPDOWN);
  }

  fetchPortDropdown() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_PORT_DROPDOWN);
  }
  fetchTerDropdown() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_TER_DROPDOWN);
  }

  fetchVoyDropdown() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCH_VOY_DROPDOWN);
  }
  //Print
  printMicDta(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.MIC_DTA, {}, reqInput);
  }
  printRBL(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.RBL, {}, reqInput);
  }
  printBookMicDta(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.BOOK_MIC_DTA, {}, reqInput);
  }
  printBookRBL(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.BOOK_RBL, {}, reqInput);
  }
  printTerMicDta(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.TER_MIC_DTA, {}, reqInput);
  }
  printTerRBL(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.TER_RBL, {}, reqInput);
  }
  // printPortMicDta(reqInput: any) {
  //   return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.PORT_MIC_DTA, {}, reqInput);
  // }
  printPortRBL(reqInput: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.PRINT.PORT_RBL, {}, reqInput);
  }
  //Till Here
  //Till Here

  // public upload(file: FileList, params: any): Observable<any> {
  //   const formData: FormData = new FormData();
  //   // tslint:disable-next-line: no-shadowed-variable
  //   Array.from(file).forEach(file => formData.append('fileUpload', file));
  //   return this.apiService.getExcelCopy(APIENDPOINT.ORDERMANAGEMNT.RBL.DESPACHOFILUPLOAD, formData, params);
  // }
 
  public upload(file: FileList, params: any): Observable<any> {
    const formData: FormData = new FormData();
    // tslint:disable-next-line: no-shadowed-variable
    Array.from(file).forEach(file => formData.append('fileUpload', file))
    return this.apiService.getExcelCopy(APIENDPOINT.ORDERMANAGEMNT.RBL.DESPACHOFILUPLOAD, formData, params);
  }
  fetchreadExcel(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RBL.FETCHREADEXCEL, reqInput);
  }
  downloadmanualFile(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.MANUALPRINT,{},body);
  }
}


import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CargoListService {
  public terminalDetails: any;
  public selectedTab: any = '';
  constructor(private apiService: AppService, private localStoageService: LocalStorageService) {
    this.terminalDetails = new BehaviorSubject<any>(null);
  }
  userPK: any = this.localStoageService.getUserPk();
  public getDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.DROPDOWN, dataFilter);
  }
  public getSettingsDropdown() {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.SETTINGS_DROPDOWN);
  }
  public getCargoSettings() {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.FETCH_CARGO_SETTINGS);
  }
  public getDisTermDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.DIS_TER_DROPDOWN, dataFilter);
  }
  public getVoyageInfo(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.GET_VOYAGE_INFO, dataFilter);
  }
  public getDischargeList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.DISCHARGE_LIST, dataFilter);
  }
  public getDischargeTermList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.DIS_TER_LIST, dataFilter);
  }
  public getDischargeSelTermList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.DIS_SEL_TER_LIST, dataFilter);
  }
  public getDischargeContList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.DIS_CON_LIST, dataFilter);
  }
  public getTermDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.TER_DROPDOWN, dataFilter);
  }
  public getgridOptions(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.GRID_OPTIONS, dataFilter);
  }

  public saveCargoSettings(data: any) {
    return this.apiService.post(APIENDPOINT.TERMINAL_OPERATIONS.SAVE_CARGO_SETTINGS, data);
  }
  public saveContainerList(data: any) {
    return this.apiService.post(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.SAVE_CONTAINER, data);
  }
  public savePrintDate(data: any) {
    return this.apiService.post(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.SAVE_PRINT_DATE, data);
  }
  public getColumnConfig(formFK: any) {
    const userpk = this.userPK;
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + this.localStoageService.getUserPk() + '&FormFK=' + formFK);
    // return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF,datafilter);
  }
  public getColumnnewConfig(datafilter: any) {
    // const userpk = this.userPK;
    // return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=' + formFK);
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF, datafilter);
  }
  confiDataList(colList: any, dataList: any): any {
    return dataList;
  }
  public downloadFile(body: any) {
    return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.PRINTREPORT, {}, body);
  }
  public downloadFilForLoadList(body: any) {
    return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.PRINTFORLOADLIST, {}, body);
  }
  public downloadFilForLoadConfirmList(body: any) {
    return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.PRINTFORLOADCONFIRMLIST, {}, body);
  }
  public downloadFilForDischargeConfirmList(body: any) {
    return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.DISCHARGE.PRINTFORDISCHARGECONFIRMLIST, {}, body);
  }

}

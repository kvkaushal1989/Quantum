import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { Setting, Tug_Intercjange_List } from '../../../mock/vessel-operations/tug-interchange.json';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TugInterchangeService {
  public tugInterchangeDetails;
  public fetchInput;
  // userPK: any = this.localStorageService.getUserPk();
  constructor(
    private apiService: AppService, private localStorageService: LocalStorageService
  ) {
    this.tugInterchangeDetails = new BehaviorSubject<any>(null);
    this.fetchInput = new BehaviorSubject<any>(null);
  }
  public getColumnConfig(userpk: any) {
    //  const userpk =  this.userPK;
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=73');
  }
  public getIncludePopupList(params?: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.GETINCLUDEPOPUP, params);
  }
  public printTIR(body: any) {
    return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.PRINTTIR, {}, body);
  }
  public printSOF(body: any) {
    return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.PRINTSOF, {}, body);
  }
  public getTugSetting() {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.FETCHSETTING);
  }

  public getTugPlanningList() {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.FETCHTugList);
  }

  public fetchTugInterchangeDetails(params: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.FETCHTUGDETAILS, params);
  }
  public saveTugInterchange(params: any) {
    return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.SAVETUBINTERCHANGE, params);
  }

  public fetchSOFreport(params: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.FETCHSOF, params);
  }
  public fetchTIRreport(params: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.FETCHTIR, params);
  }

  public saveSettings(params: any) {
    return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.SAVESETTINGS, params);
  }

  public getReportDropdowns() {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.FETCHREPOTDDL);
  }

  public getReportSummary(params?: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.REPORTSUMMARY, params);
  }

  public saveTimeSheet(params: any) {
    return this.apiService.postMethod(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.SAVETIMESHEET, params);
  }
  public getVoyageInfo(params: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.REPORT.GETVOYAGE, params);
  }
  public fetchTIRFromReport(params: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.TUGINTERCHANGE.TIRFROMREPORT, params);
  }

}

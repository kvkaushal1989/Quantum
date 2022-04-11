import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class SchedularReportService {

  constructor(
    private apiService: AppService
  ) { }
  public getColumnConfig(userfk: any, formFK: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userfk + '&FormFK=' + formFK);
  }
  public getReportNameList() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.FETCHREPORT);
  }
  public getModuleList() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.FETCHMODULE);
  }
  public getfeatureList() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.FETCHFEATURE);
  }
  public getBaseReportList() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.FETCHBASEREPORT);
  }
  public getCreatedByList() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.FETCHCREATEDBY);
  }
  public getReportList(param: any) {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.FETCHSCHREPORTLIST, param);
  }

  public getReportDetails(params?: any) {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.DETAILS, params);
  }
  public deactivateReport(params: any) {
    return this.apiService.put(APIENDPOINT.REPORT.SCHEDULARREPORT.DEACTIVATE, params);
  }

  public deleteReport(params: any) {
    return this.apiService.delete(APIENDPOINT.REPORT.SCHEDULARREPORT.DELETE, params);
  }
  public getInternalMailIds() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.INITIALS);
  }
  public fetchDDDateFilter() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.DATEFILTER);
  }
  public fetchDDSchedulePattern() {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.PATTERN);
  }
  public saveSchedularReport(params: any) {
    return this.apiService.postMethod(APIENDPOINT.REPORT.SCHEDULARREPORT.SAVE, params);
  }
  public fetchReportLog(params: any) {
    return this.apiService.get(APIENDPOINT.REPORT.SCHEDULARREPORT.VIEWLOG, params);
  }


}

import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class FlexiReportService {

constructor(private apiService: AppService) { }

public getColumnConfig(userfk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userfk + '&FormFK=79');
}
public getModuleList() {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FETCHMODULE);
}

public getUserGroupList(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FETCHUSER, params);
}

public getCreatedByList(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FETCHCREATEDBY, params);
}

public getReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FETCHREPORTLIST, params);
}

public getReportListExcel(params ?: any) {
  return this.apiService.postMethodReport(APIENDPOINT.REPORT.FLEXIBLE.GENERATEFLEXIREPORT, params);
}

public getFlexyReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FETCHFLEXIREPORT, params);
}

public FetchFlexiModules(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FetchFlexiModules, params);
}
public fetchFlexiFields(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.fetchFlexiFields, params);
}

public fetchFlexiFieldsDetails(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.fetchFlexiFieldsDetails, params);
}

public getSortOrderList() {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.SORTORDER);
}

public getfilterCriteriaList() {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.FILTERCRITERIA);
}

public getPwdProtectedList() {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.PPLIST);
}

public getaccessRightList() {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.ACCESSRIGHT);
}

public getrptUserList() {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.RPTUSER);
}

public saveReport(params: any) {
  return this.apiService.postMethod(APIENDPOINT.REPORT.FLEXIBLE.SAVE, params);
}

public getReportDetails(params ?: any) {
  return this.apiService.get(APIENDPOINT.REPORT.FLEXIBLE.DETAILS, params);
}
public deactivateReport(params: any) {
  return this.apiService.put(APIENDPOINT.REPORT.FLEXIBLE.DEACTIVATE, params);
}

public deleteReport(params: any) {
  return this.apiService.delete(APIENDPOINT.REPORT.FLEXIBLE.DELETE, params);
}

}

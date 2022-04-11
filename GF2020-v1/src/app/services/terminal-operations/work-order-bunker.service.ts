import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderBunkerService {

constructor(public appService: AppService) { }

getProceessDropdown(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.PROCESSDROPDOWNLIST, dataFilter);
}
getPortDropdown(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.PORTDROPDOWNLIST, dataFilter);
}
getVoyageDropdown(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.VOYAGEDROPDOWNLIST, dataFilter);
}
getStatusDropdown(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.STATUSDROPDOWNLIST, dataFilter);
}
getWorkGridReportList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.WORKORDERGRIDLIST, dataFilter);
}
getVoyageInfo(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.FETCHVOYAGEINFO, dataFilter);
}
getWoDetail(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.FETCHWOEDETAIL, dataFilter);
}
getSettingsData(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_PORTCOST.FETCHSETTINGS, dataFilter);
}
saveSettingsData(dataFilter?: any) {
  return this.appService.post(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_PORTCOST.SAVESETTINGS, dataFilter);
}
getApproverList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_PORTCOST.FETCHAPPROVER, dataFilter);
}
saveWoApproval(dataFilter?: any) {
  return this.appService.post(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.SAVEWOAPPROVAL, dataFilter);
}
getUploadFile(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.FETCHUPLOADFILE, dataFilter);
}
checkIsApprover(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.FETCHISAPPROVER, dataFilter);
}
saveBunkerData(dataFilter?: any) {
  return this.appService.post(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.SAVEWODETAILS, dataFilter);
}
public upload(file: FileList, params: any): Observable<any> {
  const formData: FormData = new FormData();
  // tslint:disable-next-line: no-shadowed-variable
  Array.from(file).forEach(file => formData.append('formFiles', file))
  return this.appService.getExcelCopy(APIENDPOINT.CONTRACTMANAGEMENT.EXPENSE.SAVEATTACHMENT, formData, params);
}
public downloadFile(attachmentpk: any) {
  return this.appService.download(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DOWNLOAD + '?attachmentpk=' + attachmentpk)
}
// public deleteFile(datafilter: any) {
//   return this.appService.delete(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DELETE,datafilter)
// }
public deleteFile(model: any) {
  return this.appService.delete(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DELETE
     + '?attachmentpk=' + model.attachmentpk
     + '&userpk=' + model.userpk );
}
// get table header mehtod
public getColumnConfig(userFK: any) {
  return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=137');
}
public printPDFSummary(body: any) {
  return this.appService.print(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_BUNKER.PRINTUMMARY, {}, body);
}
}

import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisbursementaccountBunkerService {

constructor(private apiService: AppService) { }

fetchGridPreference(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_STEVEDORINGCOST.FETCHGRIDPREF, dataFilter);
}

getDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHDROPDOWN, dataFilter);
}

getPortList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHPORT, dataFilter);
}

getVoyageList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHVOYAGE, dataFilter);
}
getPendingList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHPENDINGLIST, dataFilter);
}
getActiveList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHACTIVELIST, dataFilter);
}
getArchList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHARCHLIST, dataFilter);
}
getSettingsData(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_STEVEDORINGCOST.FETCHSETTINGS, dataFilter);
}
getApproverList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHAPPROVER, dataFilter);
}
getVoyageInfo(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_STEVEDORINGCOST.FETCHVOYAGEINFO, dataFilter);
}
getDaEntry(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHDAENTRY, dataFilter);
}
getOpenList(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_STEVEDORINGCOST.FETCHOPENLIST, dataFilter);
}
saveSettingsData(dataFilter?: any) {
  return this.apiService.post(APIENDPOINT.TERMINAL_OPERATIONS.WORKORDER_STEVEDORINGCOST.SAVESETTINGS, dataFilter);
}
checkIsApprover(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.FETCHISAPPROVER, dataFilter);
}
public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.PRINTUMMARY, {}, body);
}
checkInvoiceDuplicate(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.INVOICEDUPLICATE, dataFilter);
}
saveWoDetail(dataFilter?: any) {
  return this.apiService.post(APIENDPOINT.ACCOUNT_PAYABLE.DABUNKER.SAVEWODETAIL, dataFilter);
}
public downloadFile(attachmentpk: any) {
  return this.apiService.download(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DOWNLOAD + '?attachmentpk=' + attachmentpk)
}
public deleteFile(model: any) {
  return this.apiService.delete(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DELETE
     + '?attachmentpk=' + model.attachmentpk
     + '&userpk=' + model.userpk );
}
public upload(file: FileList, params: any): Observable<any> {
  const formData: FormData = new FormData();
  // tslint:disable-next-line: no-shadowed-variable
  Array.from(file).forEach(file => formData.append('formFiles', file))
  return this.apiService.getExcelCopy(APIENDPOINT.CONTRACTMANAGEMENT.EXPENSE.SAVEATTACHMENT, formData, params);
}

}

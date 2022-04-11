import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class RequisitionPaymentService {

constructor(private apiService: AppService) { }

getDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.PROCESSLIST, dataFilter);
}
getVoyageDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHVOYAGEDROPDOWN, dataFilter);
}
getportDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHPORTDROPDOWN, dataFilter);
}
getTerminalDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHTERMINALDROPDOWN, dataFilter);
}
getSearchDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHSEARCHDROPDOWN, dataFilter);
}
getSupplierDropdown(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHSUPPLIERDROPDOWN, dataFilter);
}
getRptlist(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHRPTLIST, dataFilter);
}
getArchivelist(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHARCHIVELIST, dataFilter);
}
getReportlist(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHREPORTLIST, dataFilter);
}
fetchGridPreference(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.FETCHGRIDPREF, dataFilter);
}

public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_PAYMENT.PRINTUMMARY, {}, body);
}
}

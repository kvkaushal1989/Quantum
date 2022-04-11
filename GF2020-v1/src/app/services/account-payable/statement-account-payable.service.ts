import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class StatementAccountPayableService {

constructor(private apiService: AppService) { }
public getColumnConfig(userfk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userfk + '&FormFK=132');
}
public getSupplierDropdownsList() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.SUPPLIERDROPDOWN);
}
public getMonthDropdownsList() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.MONTHLIST);
}

public getProcessDropdownsList() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.PROCESSLIST + '?searchflag=ddvalue' + '&Param3=132' + '&Param4=process');
}
public getYearDropdownsList() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.YEARLIST);
}
public getFetchReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.SUPPLIERDETAILS, params);
}
public getHeaderSummary(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.SUPPLIERHEADER, params);
}
public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_PAYABLE.PAYABLE_SOA.PRINTUMMARY, {}, body);
}

// Requisition To Payment
public getProcessDropdown() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.REQUISITION_TO_PAYMENT.FETCH_PROCESS);
}
}

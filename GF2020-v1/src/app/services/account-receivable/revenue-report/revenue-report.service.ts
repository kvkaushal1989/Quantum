import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class RevenueReportService {

constructor(
  private apiService: AppService
) { }
public getColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=100');
}
public getvesselvoyageList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETVESSEL, params);
}
public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.PRINTUMMARY, {}, body);
}
public getCustomerList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETCUSTOMER, params);
}
public getTypeList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETTYPE, params);
}
public getTransactionList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETTRANSACTION, params);
}
public getRefNoList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETREFNOLIST, params);
}
public getDailySalesReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETREPORTLIST, params);
}
public getIncludePopupList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.REVENUE_REPORT.GETINCLUDEPOPUP, params);
}


}

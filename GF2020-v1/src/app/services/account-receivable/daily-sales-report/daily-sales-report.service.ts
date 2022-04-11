import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class DailySalesReportService {

constructor(
  private apiService: AppService
) { }
public getColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=89');
}
public getvesselvoyageList(userParams ?: any) {
  let params = new HttpParams();
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.GETVESSEL, params);
}
public getCustomerList(userParams ?: any) {
  let params = new HttpParams();
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.GETCUSTOMER, params);
}
public getTransactionList(userParams ?: any) {
  let params = new HttpParams();
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.GETTRANSACTION, params);
}

getRefNoList(userParams ?: any) {
  let params = new HttpParams();
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  params = params.append('cshfks', userParams.cshfks);
  params = params.append('customer_mst_fks', userParams.customer_mst_fks);
  params = params.append('trantype', userParams.trantype);
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.GETREFNOLIST, params);
}

public getDailySalesReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.GETREPORTLIST, params);
}
public getIncludePopupList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.GETINCLUDEPOPUP, params);
}
public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.DAILY_SALES_REPORT.PRINTUMMARY, {}, body);
}

}

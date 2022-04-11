import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AgeingReportService {

constructor(
  private apiService: AppService
) { }
public getColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=101');
}
public getvesselvoyageList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.GETVESSEL, params);
}
public getCustomerList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.GETCUSTOMER, params);
}

public getTransactionList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.GETTRANSACTION, params);
}
public getRefNoList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.GETREFNOLIST, params);
}


public getDailySalesReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.GETREPORTLIST, params);
}
public getIncludePopupList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.GETINCLUDEPOPUP, params);
}

public downloadFile(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.AGEING_REPORT.PRINT, {}, body);
}

}

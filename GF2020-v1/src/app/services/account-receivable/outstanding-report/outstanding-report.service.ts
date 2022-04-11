import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class OutstandingReportService {

  constructor(private appService: AppService) { }

  public getVesselVoyageDropdown(params? : any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETVESSELVOYAGE, params);
  }
  public getColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=99');
  }
  public printPDFSummary(body: any) {
    return this.appService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.PRINTUMMARY, {}, body);
  }

  public printPDFSummaryAP(body: any) {
    return this.appService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.PRINTUMMARY1, {}, body);
  }
  // public printPDFDetail(body: any) {
  //   return this.appService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.PRINTDETAIL, {}, body);
  // }
  public getCustomerDropdown(params? : any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETCUSTOMER, params);
  }
  public getTypeDropdown(params? : any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETTYPES, params);
  }

  public getTransactionList(params ?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETTRANSACTION, params);
  }
  public getRefNoList(params ?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETREFNOLIST, params);
  }

  public getReportList(body: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETREPORTLIST, body);
  }
  public getIncludePopupList(params ?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.OUTSTANDING_REPORT.GETINCLUDEPOPUP, params);
  }
}

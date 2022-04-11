import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AgeingReportPayableService {

constructor(private apiService: AppService) { }

public getColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=131');
}
public getvesselvoyageList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.AGEING_REPORT.GETVESSEL, params);
}

public getSupplierList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.AGEING_REPORT.GETSUPLLIER, params);
}
public getAgeingReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.AGEING_REPORT.REPORTLIST, params);
}
public getIncludePopupList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.AGEING_REPORT.GETINCLUDEPOPUP, params);
}
public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_PAYABLE.AGEING_REPORT.PRINTUMMARY, {}, body);
}
}

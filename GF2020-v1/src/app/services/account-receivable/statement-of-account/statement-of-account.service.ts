import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class StatementOfAccountService {

constructor(
  private apiService: AppService
) { }

public getColumnConfig(userfk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userfk + '&FormFK=107');
}
public getSOADropdownsList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.SOA.DROPDOWN);
}
public getFetchReportList(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.SOA.DETAILS, params);
}
public getHeaderSummary(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.SOA.HEADER, params);
}
public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.SOA.PRINTUMMARY, {}, body);
}

}

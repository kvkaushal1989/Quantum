import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(
    private apiService: AppService,
    private mockJsonService: MockJsonService) { }
  quoteData: any;
  fromPage: any;
  public getDropdown() {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.GET_DROPDOWN);
  }
  public fetchQuoteSettings(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_QUOTE_SETTINGS, dataFilter);
  }
  public getContractMgmtColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=9');
  }
  public getContractSettingsColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=10');
  }
  public getQuotationColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=7');
  }
  public fetchSettingsForCustomer(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_SETTINGS_CUSTOMER, dataFilter);
  }
  public saveQuoteSettings(data: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.QUOTATION.SAVE_QUOTE_SETTINGS, data);
  }
  public saveCustomerSettings(data: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.QUOTATION.SAVE_CUST_SETTINGS, data);
  }
  public fetchQuoteTariff(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_QUOTE_TARIFF, dataFilter);
  }
  public fetchQuoteTos(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_FOR_TOS, dataFilter);
  }
  public saveQuotation(data: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.QUOTATION.SAVE_QUOTATION, data);
  }
  // public fetchQuotationList(dataFilter: any) {
  //   return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_QUOTATION, dataFilter);
  // }

  public fetchQuotationList(userParams?: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    console.log(userParams)
    params = params.append('status', userParams.status);
    return this.apiService.getMethod(APIENDPOINT.SETTINGS.QUOTATION.FETCH_QUOTATION, params, page);
  }

  public getCustomerDropdown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_CUSTOMER, reqInput);
  }
  public fetchQuotationDetails(reqInput: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_DETAILS, reqInput);
  }
  public fetchQuotationDetailsRenew(reqInput: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_DETAILS_RENEW, reqInput);
  }
  public fetchQuoteCommonSettings() {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_COMMON_SETTINGS);
  }
  public saveQuoteCommonSettings(data: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.QUOTATION.SAVE_COMMON_SETTINGS, data);
  }

  public fetchDetailsforPrint(reqInput: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_DETAILS_FORPRINT, reqInput);
  }
  public fetchQuoteClause(reqInput: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.QUOTATION.FETCH_CLAUSE, reqInput);
  }
  public saveQuoteClause(data: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.QUOTATION.SAVE_CLAUSE, data);
  }
  public saveQuoteSalutation(data: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.QUOTATION.SAVE_SALUTATION, data);
  }
  public downloadFile(body: any) {
    // const body: any = {
    //   QuotationPk: quotmasterPK,
    //   UserPK: usermasterPK
    // }
    return this.apiService.print(APIENDPOINT.SETTINGS.QUOTATION.FETCH_PRINT_DOC, {}, body);
  }
  isApprover(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.IS_APPROVER, reqInput);
  }
  getWFmail(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.WF_MAIL, reqInput);
  }
}

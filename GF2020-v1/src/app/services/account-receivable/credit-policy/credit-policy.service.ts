import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpParams } from '@angular/common/http';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class CreditPolicyService {

  constructor(
    private apiService: AppService,
  ) { }

  pagination(reqInput: any) {
    let params = new HttpParams();

    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);

    return this.apiService.getMethod(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETSETTINGSDROPDOWN, params, reqInput.PageNumber);
  }

  getSettingsDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETSETTINGSDROPDOWN, dataFilter);
  }

  saveCreditPolciySettings(dataFilter: any) {
    return this.apiService.post(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.SAVECREDITPOLCIYSETTINGS, dataFilter);
  }

  getSettingsForCustomer(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETSETTINGSFORCUSTOMER, dataFilter);
  }

  getSearchDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETSEARCHDROPDOWN, dataFilter);
  }

  getKeyUserForCustomer(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETKEYUSERFORCUSTOMER, dataFilter);
  }

  getCreditPolicyDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETCREDITPOLICYDROPDOWN, dataFilter);
  }

  saveCreditPolciy(dataFilter: any) {
    return this.apiService.post(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.SAVECREDITPOLCIY, dataFilter);
  }

  getCreditPolicyForCustomer(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETCREDITPOLICYFORCUSTOMER, dataFilter);
  }

  getBusinessOverviewDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETBUSINESSOVERVIEWDROPDOWN, dataFilter);
  }

  getCustomerBusinessOverview(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETCUSTOMERBUSINESSOVERVIEW, dataFilter);
  }

  getCustomerBusinessOverviewAgeing(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETCUSTOMERBUSINESSOVERVIEWAGEING, dataFilter);
  }
  getCreditPolicyList(dataFilter?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.FETCHCREDITPOLICYLIST, dataFilter);
  }
  getCreditPolicyListfilterpage(dataFilter?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.FETCHFILTERPOLICYLIST, dataFilter);
  }
  getCreditFilteredPolicyList(dataFilter?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.FETCHFILTERPOLICYLIST, dataFilter);
  }
  
}

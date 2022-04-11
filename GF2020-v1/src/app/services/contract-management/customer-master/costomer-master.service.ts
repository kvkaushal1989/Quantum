import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { CustomerMasterAdd, DocumentList, BankList, KeyUserList, PortList, TerminalList,CountryList } from 'src/app/models/customer-master/customer-master-add';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CostomerMasterService {

constructor(
  private appService: AppService,
  private http: HttpClient
) { }

confiDataList(colList: any, dataList: any): any {
  return dataList;
}

public getCustomerListConfig(userpk: any) {
  return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=42');
}
public getCustomersList(userParams?: any, page: number = 1): Observable<any> {
  let params = new HttpParams();
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  params = params.append('is_active', userParams.is_active);
  params = params.append('SearchValue', userParams.SearchValue);
  return this.appService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.FETCH, params, page);
}

public getCustomerDetails(customerId: any) {
  return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETCUSTOMERDETAILS + customerId);
}

public activeDeactiveCustomer(body: any) {
  return this.appService.put(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.DEACTIVATE, body);
}

public deleteCustomer(body: any) {
  return this.appService.delete(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.DELETE, body);
}
public getDropdownList() {
  return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETDROPDOWN);
}

public getDocumentypeList() {
   return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETDOCTYPE);
}

public getCurrencies() {
  // return this.http.get(`${environment.baseUrl}Currency/FetchCurrency`);
   return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETCURRENCY);
}

public getDepartmentList(companyId: number = 0) {
  return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETDEPTLIST + companyId);
}

public GetOperationsDropDown() {
  return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETOPERATIONDROPDOWN);
}

public getDesignations(companyPk: any , deptIds: any) {
  return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETDESIGNATION + 'Param3=' + companyPk + '&Param4=' + deptIds);
}

public getCompanyList(key: any) {
  return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETCOMPANY + key);
}

public saveCustomer(body: any): Observable<any> {
  return this.appService.postMethod(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.SAVE, body);
}

// saveCustomer

initFormCustomer(): CustomerMasterAdd {
  let x: CustomerMasterAdd;
  x = {
    customermasterpk: 0,
    customername: '',
  customercode: '',
  sequencenumber: '',
  categoryifk: '',
  typeofoffice: '',
  companyname: '',
  agencycode: '',
  business_reg_nr: '',
  controllingoffice: '',
  agrementparty: '',
  invoiceparty: '',
  customerimage: '',
  hq_companyname: '',
  hq_addressline1: '',
  hq_addressline2: '',
  hq_city: '',
  hq_country: '',
  hq_state: '',
  hq_postalcode: '',
  hq_email: '',
  hq_phone: '',
  hq_fax: '',
  hq_website: '',
  ro_address_same_hq: false,
  ro_companyname: '',
  ro_addressline1: '',
  ro_addressline2: '',
  ro_city: '',
  ro_country: '',
  ro_state: '',
  ro_postalcode: '',
  ro_email: '',
  ro_phone: '',
  ro_fax: '',
  ro_website: '',
  co_address_same_ro: false,
  co_companyname: '',
  co_addressline1: '',
  co_addressline2: '',
  co_city: '',
  co_country: '',
  co_state: '',
  co_postalcode: '',
  co_email: '',
  co_phone: '',
  co_fax: '',
  co_website: '',
  ba_address_same_ip: false,
  ba_companyname: '',
  ba_addressline1: '',
  ba_addressline2: '',
  ba_city: '',
  ba_country: '',
  ba_state: '',
  ba_postalcode: '',
  ba_email: '',
  ba_phone: '',
  ba_fax: '',
  ba_website: '',
  is_active: 1,
  created_by_fk: 1,
  created_on: new Date().toISOString(),
  last_updated_by_fk: null,
  last_updated_on: null,
  version_no: 0,
  documentList: this.defaultDoc(),
  bankList: this.defaultBank(),
  selectedOperationCountries: [],
  operationCountryList: this.defaultCountryList(),
  operationPortList: this.defaultPortList(),
  operationTerminalList: this.defaultTerminalList(),
  keyUserList: this.defaultKeyContact(),
  agentDetails: []
  };
  return x;
}

defaultDoc() {
  const initDocList: DocumentList[] = [{
    document_pk: 0,
  documenttype_ifk: '',
  filename: '',
  data: '',
  formmaster_fk: 0,
  filetype_ifk: '',
  is_active: 1,
  created_by_fk: 1,
  created_on: new Date().toISOString(),
  last_updated_by_fk: null,
  last_updated_on: null,
  version_no: 0,
  document_number: '',
  date_of_issue: '',
  date_of_expiry: '',
  place_of_issue: '',
  companyfk: null,
  userfk: null,
  customermasterfk: null,
  selectedType: [],
  panelOpenState: false,
  fileType: null
  }];
  return initDocList;
}
defaultBank() {
  const initDocList: BankList[] = [{
    customerbankpk: 0,
     customermasterfk: 0,
     bankname: '',
     bankid: '',
     accountnumber: '',
     currency_mst_fk: 0,
     accounttype: '',
     bankaddress: '',
     swiftnumber: '',
     gironumber: '',
     inbannumber: '',
     is_active: 1,
     created_by_fk: 1,
     created_on: new Date().toISOString(),
     last_updated_by_fk: null,
     last_updated_on: null,
     version_no: 0,
     banktype: 0,
     selectedAccountType:   [],
     selectedCurrency: '',

  }];
  return initDocList;
}

defaultKeyContact() {
  const initDocList: KeyUserList[] = [{
    customerkeyuserpk: 0,
    customermasterfk: 0,
    username: '',
    aliasname: '',
    departmentifk: '',
    designationifk: '',
    email: '',
    mobilenumber: '',
    officenumber: '',
    ecommerceaccess:  true,
    notificationflag:  true,
    alertflag:  true,
    is_active: 1,
    created_by_fk: 1,
    created_on: new Date().toISOString(),
    last_updated_by_fk: null,
    last_updated_on: null,
    version_no: 0,
    favorite_user: false,
    selectedDept:  [],
    selectedDesignation:  []

  }];
  return initDocList;
}

defaultPortList() {
  const initPortList: PortList[] = [{
    customeroperation_port_pk: 0,
    customermasterfk: 0,
    port_mst_fk: 0,
    port_id: '',
    port_name: '',
    is_active: 1,
    created_by_fk: 1,
    created_on: new Date().toISOString(),
    last_updated_by_fk: null,
    last_updated_on: null,
    version_no: 0,
    country_mst_fk: 0


  }];
  return initPortList;
}

defaultTerminalList() {
  const initTerminalList: TerminalList[] = [{
    customeroperation_terminal_pk: 0,
    customermasterfk: 0,
    terminal_mst_fk: 0,
    terminal_id: '',
    terminal_name: '',
    is_active: 1,
    created_by_fk: 1,
    created_on: new Date().toISOString(),
    last_updated_by_fk: null,
    last_updated_on: null,
    version_no: 0,
    port_mst_fk: 0
  }];
  return initTerminalList;
}

defaultCountryList() {
 const initCountryList: CountryList[] = [{
    customeroperation_country_pk: 0,
      customermasterfk: 0,
      country_mst_fk: null,
      is_active: 1,
      created_by_fk: 1,
      created_on: new Date().toISOString(),
      last_updated_by_fk: null,
      last_updated_on: null,
      version_no: 0
  }];
 return initCountryList;
}

}

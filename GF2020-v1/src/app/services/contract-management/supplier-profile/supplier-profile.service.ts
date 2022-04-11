import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentList, BankList, KeyUserList, PortList, TerminalList, SupplierMasterAdd } from 'src/app/models/supplier-profile/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierProfileService {

  constructor(
    private appService: AppService,
    private http: HttpClient
  ) { }
  
  confiDataList(colList: any, dataList: any): any {
    return dataList;
  }
  
  public getSupplierConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=53');
  }
  public getSupplierList(userParams?: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('LoggedInUser', userParams.LoggedInUser);
    params = params.append('is_active', userParams.is_active);
    params = params.append('SearchValue', userParams.SearchValue);
    params = params.append('suppliermasterpk', userParams.suppliermasterpk);
    return this.appService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.FETCH, params, page);
  }
  public getSupplierDetails(suppliermasterpk: any) {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.SUPPLIERBYPK + '?suppliermasterpk=' + suppliermasterpk);
  }

  public getDocumentypeList() {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.GETDOCTYPE);
 }

 public getCurrencies() {
   return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.GETCURRENCY);
}
  public activeDeactiveSupplier(body: any) {
    return this.appService.put(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.DEACTIVATE, body);
  }

  public deleteSupplier(body: any) {
    return this.appService.delete(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.DELETE ,body);
  }
  public getDepartmentList(companyId: number = 0) {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.GETDEPTLIST + companyId);
  }
  public getSupplierDropdown() {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.SUPPLIERDROPDOWN);
  }

  public getOperationDropdown() {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.OPERATIONDROPDOWN);
  }
  // public getDesignations(departmentPk: any) {
  //   return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.DESIGNATION + '?departmentmaster_pk=' + departmentPk);
  // }
  public getDesignations(deptIds: any) {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.DESIGNATION + '?departmentmaster_pk=' + deptIds);
  }
  public getTerminalList(portmaster_pk: any) {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.TERMINAL + '?portmaster_pk=' + portmaster_pk);
  }
  public getCompanyList(key: any) {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.GETCOMPANY + key);
  }
  public saveSupplier(body: any): Observable<any> {
    return this.appService.postMethod(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.SAVE, body);
  }
  initFormSupplier(): SupplierMasterAdd {
    let x: SupplierMasterAdd;
    x = {
     suppliermasterpk: 0,
     suppliername: '',
    suppliercode: '',
    sequencenumber: '',
    categoryifk: '',
    typeofoffice: '',
    companyname: '',
    agencycode: '',
    business_reg_nr: '',
    supplierimage: '',
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
    hiddenField: '',
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
    last_updated_on: '',
    version_no: 0,
    documentList: this.defaultDoc(),
    bankList: this.defaultBank(),
    selectedOperationPorts: [],
    operationCountryList: [],
    operationPortList: this.defaultPortList(),
    operationTerminalList: this.defaultTerminalList(),
    keyUserList: this.defaultKeyContact()
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
    last_updated_by_fk: null,
    version_no: 0,
    document_number: '',
    date_of_issue: '',
    date_of_expiry: '',
    place_of_issue: '',
    supplierfk: null,
    selectedType: [],
    fileType: null
    }];
    return initDocList;
  }
  defaultBank() {
    const initDocList: BankList[] = [{
     supplierbankpk: 0,
      suppliermasterfk: 0,
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
       last_updated_by_fk: null,
       version_no: 0,
       banktype: 0,
       selectedAccountType:   [],
       selectedCurrency: ''
    }];
    return initDocList;
  }
  
  defaultKeyContact() {
    const initDocList: KeyUserList[] = [{
     supplierkeyuserpk: 0,
     suppliermasterfk: 0,
      username: '',
      aliasname: '',
      departmentifk: '',
      departmentfk: 0,
      designationifk: '',
      email: '',
      mobilenumber: '',
      officenumber: '',
      ecommerceaccess:  true,
      notificationflag:  true,
      alertflag:  true,
      is_active: 1,
      created_by_fk: 1,
      last_updated_by_fk: null,
      version_no: 0,
      favorite_user: false,
      selectedDept:  [],
      selectedDesignation:  []
  
    }];
    return initDocList;
  }
  
  defaultPortList() {
    const initPortList: PortList[] = [{
      supopr_port_pk: 0,
      suppliermasterfk: 0,
      country_pk: 0,
      port_mst_fk: 0,
      is_active: 1,
      port_id: '',
      port_name: '',
      created_by_fk: 1,
      last_updated_by_fk: null,
      version_no: 0,
  
    }];
    return initPortList;
  }
  
  defaultTerminalList() {
    const initTerminalList: TerminalList[] = [{
     supopr_terminal_pk: 0,
     suppliermasterfk: 0,
      terminal_mst_fk: 0,
      is_active: 1,
      terminal_id: '',
      terminal_name: '',
      portmaster_pk: 0,
      created_by_fk: 1,
      last_updated_by_fk: null,
      version_no: 0,
    }];
    return initTerminalList;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  public selectedOrgType: any = '';
  constructor(
    private http: HttpClient,
    private aapService: AppService
  ) {
  }

  // public getOrganisationsList() {
  //   return this.http.get(`${environment.baseUrl}Company/FetchCompany`);
  // }
  public getOrganisationsList(
    userParams?: any,
    page: number = 1
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('LoggedInUser', userParams.LoggedInUser);
    params = params.append('Status', userParams.Status);
    params = params.append('SearchValue', userParams.SearchValue);
    return this.aapService.getMethod(
      APIENDPOINT.SETTINGS.ORGANISATION.FETCH,
      params,
      page
    );
  }

  // public getOrganisationsConfig(userParams?: any): Observable<any> {
  //   return this.aapService.getMethod(APIENDPOINT.SETTINGS.ORGANISATION.FETCHCONFIG);
  // }


  // public getOrganisationsConfig() {
  //   return this.http.get(
  //     `${environment.baseUrl}FormPref/FetchGridPref?UserFK=1&FormFK=31`
  //   );
  // }
  public getOrganisationsConfig(userpk: any) {
    return this.aapService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=31');
  }

  public getOrganisationdDropdownDetails() {
    return this.http.get(`${environment.baseEndPoint}Company/GetCompanyDropdown`);
  }

  public getCurrencies() {
    return this.http.get(`${environment.baseEndPoint}Currency/FetchCurrency`);
  }
  public getAccountTypeList() {
    return this.http.get(`${environment.baseEndPoint}DropDown/FetchAccType`);
  }
  public getAllCountriesList() {
    return this.http.get(`${environment.baseEndPoint}Country/FetchCountryList`);
  }
  public getDocumentypeList() {
    return this.http.get(
      `${environment.baseEndPoint}DocumentUpload/FetchDocumentType?FormPK=1`
    );
  }

  // public saveOrganisation(organisationDetails : any) {
  //   return this.http.post(`${environment.tmpBaseUrl}Company/SaveCompany`, organisationDetails);
  // }

  public saveOrganisation(organisationDetails: any): Observable<any> {
    // let params = new HttpParams();
    // params = params.append('CountryPk', userParams.CountryPk);
    // params = params.append('SearchValue', userParams.SearchValue);

    return this.aapService.postMethod(
      APIENDPOINT.SETTINGS.ORGANISATION.SAVE,
      organisationDetails
    );
  }

  public saveOrganisationDocument(organisationDetails: any) {
    return this.http.post(
      `${environment.baseEndPoint}DocumentUpload/SaveDocument`,
      organisationDetails
    );
  }
  public getDepartment(company_pk: any = 0) {
    return this.http.get(
      `${environment.baseEndPoint}Department/FetchDepartment?CompanyPK=` + company_pk
    );
  }
  public getLocation() {
    return this.http.get(
      `${environment.baseEndPoint}DropDown/FetchDropdown?searchflag=location`
    );
  }
  public getDesignations(country_pk: any, deptIds: any) {
    return this.http.get(
      `${environment.baseEndPoint}Designation/FetchDesignation?CompanyPK=` +
        country_pk +
        `&Departments=` +
        deptIds
    );
  }

  public saveOrganisationDepartment(organisationDetails: any) {
    return this.http.post(
      `${environment.baseEndPoint}Department/SaveDepartment`,
      organisationDetails
    );
  }

  public getRolesForSelectedDesignation(country_pk: any, degnIds: any) {
    return this.http.get(
      `${environment.baseEndPoint}Role/FetchRole?CompanyPK=` +
        country_pk +
        `&Designations=` +
        degnIds
    );
  }
  public saveOrganisationDesignation(organisationDetails: any) {
    return this.http.post(
      `${environment.baseEndPoint}Designation/SaveDesignation`,
      organisationDetails
    );
  }

  public saveOrganisationRole(organisationDetails: any) {
    return this.http.post(
      `${environment.baseEndPoint}Role/SaveRole`,
      organisationDetails
    );
  }

  public getOrganisationsDocuments(company_pk: any) {
    return this.http.get(
      `${environment.baseEndPoint}DropDown/FetchDocumentsUploaded?CompanyPK=` +
        company_pk
    );
  }

  public deactivateOrganisation(params: any) {
    return this.http.put(
      `${environment.baseEndPoint}Company/DeactivateCompany?CompanyPK=${params.companyPk}&isActive=${params.Status}`,
      {}
    );
  }

  public deleteOrganisation(company_pk) {
    return this.http.delete(
      `${environment.baseEndPoint}Company/DeleteCompany?CompanyPK=${company_pk}`
    );
  }

  confiDataList(colList: any, dataList: any): any {
    return dataList;
  }
}

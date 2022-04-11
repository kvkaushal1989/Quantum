import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserListingService {
  userPK: any = this.localStorageService.getUserPk();

  sendOtpByEmail(dataFilter: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.SEND_OTP, dataFilter);
  }

  validatePassword(dataFilter: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.VALIDATE_PASS, dataFilter);
  }

  constructor(private appService: AppService, private localStorageService: LocalStorageService) { }

  public getUserDropdown() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.ACTIVITYLOG.GETUSERDROPDOWN);
  }

  public getOrgDropdown() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.ACTIVITYLOG.GETORGDROPDOWN);
  }

  public getModuleDropdown() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.ACTIVITYLOG.GETMODULEDROPDOWN);
  }

  public getFormDropdown() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.ACTIVITYLOG.GETFORMDROPDOWN);
  }

  public getFetchActivityLog(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.ACTIVITYLOG.FETCHACTIVITYLOG, dataFilter);
  }

  public getFetchStatistics() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.ACTIVITYLOG.FETCHSTATISTICS);
  }

  public getUserActivityColumn(userFK: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=118' + '&ControlType=Grid');
  }


  public getAllUserList1(dataFilter: any) {
    // return this.apiService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCH  + '?Status=' + reqInput.Status);
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCH, dataFilter);
  }

  public getSettingsConfig(dataFilter: any) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCHCONFIG, dataFilter);
  }
  public getAllUserList(reqInput?: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('LoggedInUser', reqInput.LoggedInUser);
    params = params.append('Status', reqInput.Status);
    params = params.append('SearchValue', reqInput.SearchValue);

    return this.appService.getMethod(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCH, params, reqInput.PageNumber);
  }

  public getUsersListColumnConfig() {
    const dataFilter = {
      UserFK: this.userPK,
      FormFK: 5
    };
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF, dataFilter);
  }

  public getOrganizationTypes() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST);
  }

  public getOrganizations(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST, dataFilter);
  }

  public getCountryList() {
    return this.appService.get(APIENDPOINT.COMMON.FETCHDROPDOWN + '?searchflag=country');
  }

  public getLanguages() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST);
  }
  public getDateFormats() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST);
  }
  public getDepartments(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST, dataFilter);
  }

  public getDesignations(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST, dataFilter);
  }

  public getRelationships() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST);
  }

  public saveUser(body: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.SAVE, body);
  }

  public getGenders() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST);
  }

  public getMaritials() {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DROPDOWN_LIST);
  }

  public getUserDetails(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCHUSERDETAILS, dataFilter);
  }

  public getUserListNew(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCHUSERDETAILSNEW, dataFilter);
  }

  public getUserAccess(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.FETCHUSERACCESS, dataFilter);
  }

  public saveUserAccess(dataFilter: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.SAVEUSERACCESS, dataFilter);
  }

  public getUserPreferences(dataFilter) {
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERMGMT.FETCH, dataFilter);
  }

  public saveUserPreferences(body: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERMGMT.SAVE, body);
  }

  public deActivateUser(body: any): Observable<any> {
    return this.appService.put(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DEACTIVATE, body);
  }

  public deleteUser(userParams?: any): Observable<any> {
    return this.appService.delete(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERPROFILE.DELETE + '?UserPK=' + userParams);
  }

  public changePwd(dataFilter: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.USERMGMT.CHANGEPWD, dataFilter);
  }

  public getDocuments(userFK: number) {
    const dataFilter = {
      UserPK: userFK
    };
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.DOCUMENTUPLOAD.FETCH, dataFilter);
  }

  public saveDocuments(docDetails) {
    return this.appService.post(APIENDPOINT.SETTINGS.SYSTEMUSERS.DOCUMENTUPLOAD.SAVE, docDetails);
  }

  public getDocumentTypes() {
    const dataFilter = {
      FormPK: 1
    };
    return this.appService.get(APIENDPOINT.SETTINGS.SYSTEMUSERS.DOCUMENTUPLOAD.FETCHDOCUMENTTYPE, dataFilter);
  }

  //#region Form Validation
  userProfileValidation(user: any): boolean {
    // Validate Profile
    if (user.first_name === ''
      || user.last_name === ''
      || user.alias === ''
      || user.gender_ifk === ''
      || user.date_of_birth === null
      || user.email_id === ''
      || user.mobile_number === ''
      || user.office_number === ''
    ) {
      return false;
    }
    return true;
  }

  organisationValidation(user: any): boolean {
    // Validate Organisation
    if (user.organization_typeifk === ''
      || user.company_fk === 0
      || user.department_fk === 0
      || user.designation_fk === 0
    ) {
      return false;
    }

    return true;
  }

  nextOfKinValidation(user: any): boolean {
    // Validate Next Of Kin
    if (user.relationship_ifk === ''
      || user.rel_first_name === ''
      || user.rel_last_name === ''
      || user.rel_email_id === ''
      || user.rel_mobile_number === ''
      || user.address_line1 === ''
      || user.country_name === ''
      || user.city === ''
      || user.postal_code === ''
    ) {
      return false;
    }
    return true;
  }

  documentsValidation(numberOfDocs: any): boolean {
    let rCount = 0;
    if (numberOfDocs.length <= 0) {
      return false;
    }
    // Validate Documents
    numberOfDocs.forEach(v => {
      if (v.documenttype_ifk === 0
        || v.document_number === ''
        || v.date_of_issue === null
        || v.date_of_issue === 'Invalid date'
        || v.date_of_expiry === null
        || v.date_of_expiry === 'Invalid date'
      ) {
        rCount = 1;
      }
    });
    if (rCount === 1) {
      return false;
    } else {
      return true;
    }
  }

  accessRightsValidation(reqInput: any): boolean {
    if (reqInput.length <= 0) {
      return false;
    } else {
      return true;
    }
  }

  preferencesValidation(reqInput: any): boolean {
    return true;
  }

  passwordValidation(pwdMgmt: any): boolean {
    if (pwdMgmt.password === ''
      || pwdMgmt.newPassword === ''
      || pwdMgmt.reNewPassword === ''
      || pwdMgmt.otp === ''
    ) {
      return false;
    }
    return true;
  }

  confiDataList(colList: any, dataList: any): any {
    return dataList;
  }

}

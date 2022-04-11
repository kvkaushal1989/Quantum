import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  constructor(
    private apiService: AppService,
    private mockJsonService: MockJsonService
  ) { }


  fetchDocListing(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DOC_LIST, dataFilter);
  }

  fetchDocEntry(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DOC_ENTRY, dataFilter);
  }

  fetchDocParameter(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DOC_PARAM, dataFilter);
  }

  fetchDocGroupDD() {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DOC_GROUP);
  }
  fetchDocTypeDD() {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DOC_TYPE);
  }
  saveDocument(reqInput: any) {
    return this.apiService.post(APIENDPOINT.WORKFLOW.SAVE_DOC, reqInput);
  }
  fetchWFList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_WF_LIST, reqInput);
  }
  fetchWFEntry(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_WF_ENTRY, reqInput);
  }
  fetchWFLog(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_WF_LOG, reqInput);
  }
  saveWF(reqInput: any) {
    return this.apiService.post(APIENDPOINT.WORKFLOW.SAVE_WF, reqInput);
  }
  deleteWF(reqInput: any) {
    return this.apiService.post(APIENDPOINT.WORKFLOW.DELETE_WF, reqInput);
  }
  deactivateWF(reqInput: any) {
    return this.apiService.post(APIENDPOINT.WORKFLOW.DEACTIVATE_WF, reqInput);
  }
  isApprover(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.IS_APPROVER, reqInput);
  }
  getWFmail(reqInput: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.WF_MAIL, reqInput);
  }
  public getColumnConfig(formFK: any, userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=' + formFK);
  }
  public getDepartment(userPk: any, locPk: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DEP + '?UserFK=' + userPk + '&LocationFK=' + locPk);
  }
  public getLocation() {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_LOC);
  }
  public getDesignations(userPk: any, depPk: any, locPk: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_DES + '?UserFK=' + userPk + '&DeptFK=' + depPk + '&LocationFK=' + locPk);
  }
  public getUser(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_USER, dataFilter);
  }
  public getAppUser(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FETCH_APP_USER, dataFilter);
  }
  public getDocDD() {
    return this.apiService.get(APIENDPOINT.WORKFLOW.FECTH_WF_DOC);
  }
}


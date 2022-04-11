import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdiEngineService {
  constructor(
    private apiService: AppService,
    private apiService1: MockJsonService
  ) { }

  //#region  File Registration
  fetchEDIRegistrationCollList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_COL_LIST, reqInput);
  }

  fetchEDIRegistrationDataList(reqInput: any) {
    let params = new HttpParams();

    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);
    // params = params.append('ServicePK', reqInput.ServicePK);

    return this.apiService.getMethod(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_EDI_REGISTRATION, params, reqInput.PageNumber);
  }

  ediRegistration(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.EDI_REGISTRATION, reqInput);
  }
  //#endregion

  //#region  File Definition
  fetchFileDefCollList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_FILE_DEF_COL_LIST, dataFilter);
  }

  fetchFileDefDataList(reqInput: any) {
    let params = new HttpParams();

    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);
    // params = params.append('ServicePK', reqInput.ServicePK);

    return this.apiService.getMethod(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_FILE_DEF_LIST, params, reqInput.PageNumber);
    // return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_FILE_DEF_LIST, dataFilter);
  }

  saveFileDefDataList(dataFilter: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FILE_DEFINITION, dataFilter);
  }

  fetchFieldDefinitionEntry(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FILEDEFINITIONENTRY, dataFilter);
  }

  getdetailbasedonfilename(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETDETAILBASEDONFILENAME, dataFilter);
  }

  filedefinationtransection(dataFilter: any) {
    return this.apiService.delete(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FILEDEFINATIONTRANSECTION, dataFilter);
  }
  //#endregion

  //#region  Feild Definition
  fetchFieldDefCollList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_FIELD_COL_LIST, dataFilter);
  }

  fetchFeildMapingCollList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_FEILD_MAPING_COL_LIST, dataFilter);
  }

  fetchFeildMapingDataList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_FEILD_MAPING_LIST, dataFilter);
  }
  //#endregion

  //#region File Upload
  fetchfiledropDown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHFILEDROPDOWN, dataFilter);
  }

  fetchfileName(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHFILE, dataFilter);
  }

  structuremappingfiledropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.STRUCTUREMAPPINGFILEDROPDOWN, dataFilter);
  }
  //#endregion

  //#region Structure Mapping
  fetchEDIStrucMapCollList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.STRUCTUREMAPPING_COLLIST, dataFilter);
  }

  fetchEDIStrucMapDataList(reqInput: any) {
    let params = new HttpParams();

    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);
    if (reqInput.file_struct_mst_fk) {
      params = params.append('file_struct_mst_fk', reqInput.file_struct_mst_fk);
    }

    if (reqInput.member_fk) {
      params = params.append('member_fk', reqInput.member_fk);
    }

    if (reqInput.port_mst_fk) {
      params = params.append('port_mst_fk', reqInput.port_mst_fk);
    }

    if (reqInput.category_fk) {
      params = params.append('category_fk', reqInput.category_fk);
    }

    // params = params.append('ServicePK', reqInput.ServicePK);

    return this.apiService.getMethod(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.STRUCTUREMAPPING_DATALIST, params, reqInput.PageNumber);
    // return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.STRUCTUREMAPPING_DATALIST, reqInput);
  }

  getstructuremappingentry(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETSTRUCTUREMAPPINGENTRY, reqInput);
  }

  addstructuremappingentry(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.ADDSTRUCTUREMAPPINGENTRY, reqInput);
  }

  getstructuremappingheader(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETSTRUCTUREMAPPINGHEADER, reqInput);
  }

  getagentfield(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETAGENTFIELD, reqInput);
  }

  getmappingfiledropdown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETMAPPINGFILEDROPDOWN, reqInput);
  }

  fetchmappingreferencedropdown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHMAPPINGREFERENCEDROPDOWN, reqInput);
  }
  //#endregion

  //#region Scheduler
  fetchEDISchedulerCollList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_SCHEDULER_COL_LIST, dataFilter);
  }

  fetchEDISchedulerDataList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_SCHEDULER_LIST, dataFilter);
  }
  //#endregion

  //#region  EDI Generator
  getedifile(dataFilter: any) {
    return this.apiService.generateFile(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETEDIFILE, dataFilter);
  }

  fetchedigenerationlist(reqInput: any) {
    let params = new HttpParams();

    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);
    params = params.append('vessel_pk', reqInput.vessel_pk);
    params = params.append('pol_pk', reqInput.pol_pk);
    params = params.append('pod_pk', reqInput.pod_pk);

    return this.apiService.getMethod(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHEDIGENERATIONLIST, params, reqInput.PageNumber);
    // return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHEDIGENERATIONLIST, dataFilter);
  }

  fetchvessel(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHVESSEL, dataFilter);
  }

  fetchpod(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHPOD, dataFilter);
  }

  fetchpol(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHPOL, dataFilter);
  }
  //#endregion

  //#region Log Viewer
  fetchLogViewerCollList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_LOG_VIEWER_COL_LIST, dataFilter);
  }

  public fetchLogViewerCols(userFK: any, formFk) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=' + formFk+ '&ControlType=Grid');
  }
  public fetchSchedulerCols(userFK: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=93' + '&ControlType=Grid');
  }
  public fetchGenerationCols(userFK: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=83' + '&ControlType=Grid');
  }

  fetchLogViewerDataList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_LOG_VIEWER_LIST, dataFilter);
  }
  //#endregion

  //#region Drop Downs
  fetchDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  fetchfileDefdropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHFILEDEFDROPDOWN, reqInput);
  }

  fetchCatagory(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_CATAGORY, reqInput);
  }

  fetchDocType(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_DOCK_TYPE, reqInput);
  }

  fetchPort(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHPORTDROPDOWN, reqInput);
  }

  fetchDocFormat(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_DOCK_FORMAT, reqInput);
  }

  fetchDownloadType(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_DOWNLOAD_TYPE, reqInput);
  }

  uploadCoarri(body: any, param: any) {
    console.log('param', param)
    const formData = new FormData();
    formData.append('fileUpload', body);
    formData.append('usermstfk', param);
    // let params = new HttpParams();
    // params = params.append('usermstfk', param);
    return this.apiService.upload(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GET_DATASET, formData, param);
  }

  processData(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.PROCESS_DATASET, reqInput);
  }

  getFiles(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETFILES, reqInput);
  }

  getBookingReference(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.GETOCRBOOKING, reqInput);
  }

  public fetchFileUploadCols(userFK: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=92' + '&ControlType=Grid');
  }

  public upload(file: FileList, params: any): Observable<any> {
    const formData: FormData = new FormData();
    // tslint:disable-next-line: no-shadowed-variable
    Array.from(file).forEach(file => formData.append('fileUpload', file))
    return this.apiService.getExcelCopy(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FILEUPLOAD, formData, params);
  }


  saveHapagLoyardDetails(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.HAPAGLOYARDSAVE, reqInput);
  }

  saveCmaCgmNorth(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.CMACGMNORTH, reqInput);
  }

  saveCmaCgmSouth(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.CMACGMSOUTH, reqInput);
  }

  saveMearskDetails(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.MEARSK, reqInput);
  }

  saveMearskSouthDetails(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.MEARSKSOUTH, reqInput);
  }

  saveMscDetails(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.MSC, reqInput);
  }

  saveMscSouthDetails(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.MSCSOUTH, reqInput);
  }

  getControlList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHCONTROLLIST, reqInput);
  }

  getMearskSouthControlList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHMEARSKCONTROLLIST, reqInput);
  }

  getMscSouthControlList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHCONTROLLISTMSCSOUTH, reqInput);
  }

  getErrorLog(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHERRORLOG, reqInput);
  }

  getMearskSouthErrorLog(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHMEARSKERRORLOG, reqInput);
  }

  getErrorLogMscSouth(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHERRORLOGMSCSOUTH, reqInput);
  }

  getColumnHeader(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHHEADER, reqInput);
  }

  processOCR(reqInput: any) {
    return this.apiService.put(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.PROCESSOCR, reqInput);
  }

  fetchMemberList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHMEMBER, reqInput);
  }

  fetchLog(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHLOGS, reqInput);
  }

  fetchOcrMemberList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHOCRMEMBERFILE, reqInput);
  }

  removeOcrFile(reqInput: any) {
    return this.apiService.delete(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.DELETEMEMBERFILE, reqInput);
  }
  getschedulersetupdropdown() {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHSCHEDULERDROPDOWN);
  }
  getschedulersetupSettingList() {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHSCHEDULERSETTINGLIST);
  }
  getActivityLog(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHACTIVITYLOG, reqInput);
  }
  getFileActivityLog(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCHFILEACTIVITYLOG, reqInput);
  }
  saveException(dataFilter?: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.SAVESCHEDULESETUP, dataFilter);
  }

  //#endregion
}

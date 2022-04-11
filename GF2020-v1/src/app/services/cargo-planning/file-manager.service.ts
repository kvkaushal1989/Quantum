import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  constructor(private apiService: AppService) { }
  uploadfile(file: FileList, param: any) {
    console.log('param', file)
    const formData = new FormData();
    // tslint:disable-next-line: no-shadowed-variable
    Array.from(file).forEach(file => formData.append('fileUpload', file))
    // formData.append('fileUpload', file);
    formData.append('userPk', param.userPk);
    formData.append('bound', param.bound);
    formData.append('customerfk',param.customerfk)
    return this.apiService.upload(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.FILEUPLOAD, formData, param);
  }
  getDownloadfile(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.FETCHDOWNLOADLIST, reqInput);
  }
  removeFile(reqInput: any) {
    return this.apiService.delete(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.DELETEFILE, reqInput);
  }
  editDownloadFile(dataFilter?: any) {
    return this.apiService.post(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.EDITFILE, dataFilter);
  }
  getProcessList(dataFilter?: any) {
    return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.DISBURSEMENT_ACCOUNT.FETCHDROPDOWN, dataFilter);
  }
  fetchDropdown(dataFilter?: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.RESTRICTIONS.FETCHDROPDOWN, dataFilter);
  }
  getfileList(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.FETCHLIST, reqInput);
  }
  redirectProcess(dataFilter?: any) {
    return this.apiService.post(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.REDIRECTPROCESS, dataFilter);
  }
  getProcessedfile(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.SCHEDULAR.PROCESSEDFIELLIST, reqInput);
  }
  getSchedulefile(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.SCHEDULAR.SCHEDULEFIELLIST, reqInput);
  }
  getselectedFile(reqInput: any){
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.SCHEDULAR.SELECTEDFILE +reqInput );
  }
  saveMoveData(dataFilter?: any) {
    return this.apiService.post(APIENDPOINT.CARGO_PLANNING.SCHEDULAR.SAVEMOVEFILE, dataFilter);
  }
  getBLWithErrorList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.GETBLWITHERRORLIST, reqInput);
  }
  getBLWiseInfo(reqInput: any) {

    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.GETBLWISEINFO, reqInput);
  }
  updateBLErrorDetails(reqInput: any) {

    return this.apiService.put(APIENDPOINT.CARGO_PLANNING.ERRORLOG.UPDATEBLERRORDETAILS, reqInput);
  }
  fetchLogViewerDataList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_LOG_VIEWER_FETCHLIST, dataFilter);
  }
  fetchLogViewerFilterDataList(page: number=1) {
    let params = new HttpParams();
    return this.apiService.getMethod(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_LOG_VIEWER_LISTS, params,page);
  }
  fetchDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }
  fetchProcessLog(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.EDI_ENGINE.FETCH_ALERT_PROCESS_LOG_LIST,reqInput);
  }
  getCustomerDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.CUSTOMERDROPDOWN, reqInput);
  }
  getBoundDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.FILE_MANAGER.BOUNDDROPDOWN,reqInput);
  }
  getpolDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.POLDROPDOWN, reqInput);
  }
  getpodDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.POLDROPDOWN, reqInput);
  }
  getvesselDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.VESSELDROPDOWN, reqInput);
  }
  getvoyageDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.VOYAGEDROPDOWN, reqInput);
  }
  getcargoDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.CARGODROPDOWN, reqInput);
  }
  getcontainTypeDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.CONTAINERTYPEDROPDOWN, reqInput);
  }
  getpodterminalDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.POLTERDROPDOWN, reqInput);
  }
  getpolterminalDropdown(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.POLTERDROPDOWN, reqInput);
  }
  getSettingList(reqInput?: any) {
    return this.apiService.get(APIENDPOINT.CARGO_PLANNING.ERRORLOG.FETCHSETTINGLIST, reqInput);
  }
  saveSetting(dataFilter?: any) {
    return this.apiService.post(APIENDPOINT.CARGO_PLANNING.ERRORLOG.SAVESETTING, dataFilter);
  }
}

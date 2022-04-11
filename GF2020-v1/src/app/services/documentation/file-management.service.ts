import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {

  constructor(private appService: AppService,
              private apiService: ApiService) { }

  public getFileDetails(userParams: any) {
    let params = new HttpParams();
    params = params.append('process', userParams.process);
    params = params.append('uploadedby', userParams.uploadedby);
    params = params.append('fromdate', userParams.fromdate);
    params = params.append('todate', userParams.todate);
    params = params.append('remarks', userParams.remarks);
    params = params.append('userpk', userParams.userpk);
    return this.appService.get(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.FETCH, params);
  }
  public deleteFile(model: any) {
    return this.appService.delete(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DELETE
       + '?attachmentpk=' + model.attachmentpk
       + '&userpk=' + model.userpk );
  }
  public getFileColumnConfig() {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=68');
  }
  // public saveDocument(body: any, param: any): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('formFiles', body);
  //   return this.appService.getExcel(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.SAVE, formData, param);
  // }

  public downloadFile(attachmentpk: any) {
    return this.appService.download(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DOWNLOAD + '?attachmentpk=' + attachmentpk)
  }
  
  public upload(file: FileList, params: any): Observable<any> {
    const formData: FormData = new FormData();
    // tslint:disable-next-line: no-shadowed-variable
    Array.from(file).forEach(file => formData.append('formFiles', file))
    return this.appService.getExcel(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.SAVE, formData, params);
  }

  public getFiles(attachmentpk: any) {
    return this.appService.download(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DOWNLOAD + '?attachmentpk=' + attachmentpk)
  }
  public getDropdown() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.FILEMANAGEMENT.DROPDOWN);
  }
}

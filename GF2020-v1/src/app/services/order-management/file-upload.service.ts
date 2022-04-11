import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private apiService: AppService) { }

  public Upload(body: any, param: any): Observable<any> {
    const formData = new FormData();
    formData.append('formFile', body);
    return this.apiService.getExcel(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.UPLOAD, formData, param);
  }
  public getError(dataFilter: any): Observable<any> {
    return this.apiService.get(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.FETCH_ERROR, dataFilter);
  }
  public getDropdown(userParams: any): Observable<any> {
    // let params = new HttpParams();
    // params = params.append('LoggedInUser', userParams.LoggedInUser);
    return this.apiService.get(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.GET_DROPDOWN, userParams);
  }
  public processData(dataFilter: any): Observable<any> {
    return this.apiService.put(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.PROCESS_DATA, dataFilter);
  }
  public getVesselDropdown(userParams?: any): Observable<any> {
    return this.apiService.get(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.VESSEL_DROPDOWN, userParams);
  }
  public getCustDropdown(userParams?: any): Observable<any> {
    return this.apiService.get(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.CUSTOMER_DROPDOWN, userParams);
  }
  public getbookingDropdown(userParams?: any): Observable<any> {
    return this.apiService.get(APIENDPOINT.ORDER_MANAGEMENT.FILE_UPLOAD.BOOKING_DROPDOWN, userParams);
  }
  downloadmanualFile(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.MANUALPRINT,{},body);
  }

}

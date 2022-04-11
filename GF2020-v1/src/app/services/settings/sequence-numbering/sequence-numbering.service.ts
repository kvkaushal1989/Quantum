import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SequenceNumberingService {

  constructor(private apiService: AppService) {
  }

  public getSequenceList(userParams?: any, pageNumber: number= 1): Observable<any> {
   let params = new HttpParams();
   params = params.append('sequencemasterpk', userParams.sequencemasterpk);
   params = params.append('SearchValue', userParams.SearchValue);
   params = params.append('Status', userParams.Status);

   return this.apiService.getMethod(APIENDPOINT.SETTINGS.SEQUENCENUMBERING.FETCH, params, pageNumber);
 }
 public saveSequence(body: any): Observable<any> {
   return this.apiService.postMethod(APIENDPOINT.SETTINGS.SEQUENCENUMBERING.SAVE, body);
 }
 public deleteSequence(body: any): Observable<any> {
   return this.apiService.delete(APIENDPOINT.SETTINGS.SEQUENCENUMBERING.DELETE, body);
 }

 public deActivateSequence(body: any): Observable<any> {
   return this.apiService.put(APIENDPOINT.SETTINGS.SEQUENCENUMBERING.DEACTIVATE, body);
 }
 public getSequenceColumnConfig(userpk: any) {
   return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=38');
 }

 public getCategory() {
   return this.apiService.get(APIENDPOINT.SETTINGS.SEQUENCENUMBERING.SEQUENCEDROPDOWN);
 }

}


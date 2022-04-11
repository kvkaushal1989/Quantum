import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
@Injectable({
  providedIn: 'root'
})
export class ContainerTypeService {
  constructor(private apiService: AppService, private http: HttpClient) {
   }

   public getContainerList(userParams?: any, pageNumber: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('ContainerTypePk', userParams.ContainerTypePk);
    params = params.append('SearchValue', userParams.SearchValue);
    params = params.append('Active', userParams.Active);

    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.CONTAINERTYPE.FETCH, params, pageNumber);
  }
  public saveContainer(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.CONTAINERTYPE.SAVE, body);
  }
  public deleteContainer(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.CONTAINERTYPE.DELETE , body);
  }
  public deActivateContainer(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.CONTAINERTYPE.DEACTIVATE , body);
  }
  public getConatinerColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk +'&FormFK=35');
  }

  public getTus() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.CONTAINERTYPE.FETCHDROPDOWN + '?searchflag=TEU');
  }
}

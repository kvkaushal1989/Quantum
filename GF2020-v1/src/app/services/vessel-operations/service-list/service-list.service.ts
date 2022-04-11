import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {
public serviceDetails;
  constructor(private appService: AppService,private apiService: ApiService) { 
    this.serviceDetails = new BehaviorSubject<any>(null);
  }

  public getServiceList(serviceParams?: any, page: number=1): Observable<any> {
    let params = new HttpParams();
    params = params.append('servicemaster_pk', serviceParams.servicemaster_pk)
    params = params.append('is_active', serviceParams.is_active)
    params = params.append('status', serviceParams.status)
    return this.appService.getMethod(APIENDPOINT.VESSELOPERATIONS.SERVICELIST.FETCH, params, page);
  }
  // tslint:disable-next-line: variable-name
  public deleteServiceList(body: any): Observable<any> {
    return this.appService.delete(APIENDPOINT.VESSELOPERATIONS.SERVICELIST.DELETE,body);
  }
  public deactivateServiceList(body : any): Observable<any> {
    return this.appService.put(APIENDPOINT.VESSELOPERATIONS.SERVICELIST.DEACTIVATE, body);
  }
  updateService(body: any): Observable<any> {
    return this.appService.put(APIENDPOINT.VESSELOPERATIONS.SERVICELIST.UPDATE,  body)
  }
  // NewService/SaveCommSchedule?servicePK=28&UserFk=1
   // tslint:disable-next-line: variable-name
   saveService(body: any): Observable<any> {
    //  const body1 = {
    //   servicePK: servicemaster_pk,
    //   UserFk: 1
    //  };
     return this.appService.post(APIENDPOINT.VESSELOPERATIONS.SERVICELIST.SAVE, body);
  }
  getServiceListColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=39');
  }
}

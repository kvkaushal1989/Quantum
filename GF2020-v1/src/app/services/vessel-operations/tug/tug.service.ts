import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class TugService {
  public locationDetails;

  constructor(private apiService: AppService) {
    this.locationDetails = new BehaviorSubject<any>(null);
  }
  public getTugList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('VesselMasterPK', userParams.VesselMasterPK);
    params = params.append('SearchValue', userParams.SearchValue);
    params = params.append('Active', userParams.Active);
    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.TUG.FETCH, params, page);
  } 
  public getTugListByPk(vesselpk: any) {
    const params: any = {
     VesselMasterPk: vesselpk
    }
   return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.TUG.FETCH, params);
  }
  public saveTug(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.TUG.SAVE, body);
  }
  public deleteTug(body: any): Observable<any> { 
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.TUG.DELETE, body);
  }
  public deActivateTug(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.TUG.DEACTIVATE, body);
  }
  public getTugColumnConfig() {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=32');
  }
  public getTugPortList(flagFk) {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.TUG.FETCHDROPDOWN + '?searchflag=PORT&Param3=' + flagFk);
  }
  public getTugFlagList() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=Country');
  }
  public getTugOperators() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.TUG.FETCHDROPDOWN + '?searchflag=Operator');
  }
  public getTugFuelTypes() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.TUG.FETCHDROPDOWN + '?searchflag=FUELTYPE');
  }
  public getTugOptions() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.TUG.FETCHDROPDOWN + '?searchflag=BOWTHRUSTER');
  }
  public getAssetStatus() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=ASSETSTATUS');
  }
}

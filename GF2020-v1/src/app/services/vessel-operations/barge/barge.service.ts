import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class BargeService {

  constructor(private apiService: AppService) { }
  public getBargeList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('VesselMasterPK', userParams.VesselMasterPK);
    params = params.append('SearchValue', userParams.SearchValue);
    params = params.append('Active', userParams.Active);

    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCH, params, page);
  }
  
  public getBargeListByPk(vesselpk: any) {
    const params: any = {
     VesselMasterPk: vesselpk
    }
   return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCH, params);
  }
  public saveBarge(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.BARGE.SAVE, body);
  }
  public deleteBarge(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.BARGE.DELETE , body);
  }
  public deActivateBarge(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.BARGE.DEACTIVATE, body);
  }
  public getBargeColumnConfig() {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=43');
  }
  public getIntakeColumnConfig() {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=37');
  }
  public getBargePortList(flagFk) {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=PORT&Param3=' + flagFk);
  }
  public getBargeFlagList() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=Country');
  }
  public getBargeOperators() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=Operator');
  }
  public getBargeFuelTypes() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=FUELTYPE');
  }
  public getBargeOptions() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=BOWTHRUSTER');
  }
  public getAssetStatus() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=ASSETSTATUS');
  }
  public getVesIntakeList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('VesselMasterPk', userParams.VesselMasterPK);
    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCHINTAKE, params, page);
  }
  public saveVesselIntake(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.SAVEINTAKE, body);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
@Injectable({
  providedIn: 'root'
})
export class VesselService {
  public vesselDetails: any;

  constructor(private apiService: AppService) {
    this.vesselDetails = new BehaviorSubject<any>(null);
   }

   public getVesselList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('VesselMasterPk', userParams.VesselMasterPK);
    params = params.append('SearchValue', userParams.SearchValue);
    params = params.append('Active', userParams.Active);
    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCH, params, page);
  }
   public getVesselListByPk(vesselpk: any) {
     const params: any = {
      VesselMasterPk: vesselpk
     }
    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCH, params);
   }
  public getVesIntakeList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('VesselMasterPk', userParams.VesselMasterPK);
    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCHINTAKE, params, page);
  }
  public getIntakeColumnConfig() {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=37');
  }
  public saveVessel(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.SAVE, body);
  }
  public saveVesselIntake(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.SAVEINTAKE, body);
  }
  public deleteVessel(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.DELETE , body);
  }
  public deActivateVessel(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.VESSEL.DEACTIVATE , body);
  }
  public getVesselColumnConfig(userpk) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=43');
  }
  public getVesselPortList(flagFk) {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCHDROPDOWN + '?searchflag=PORT&Param3=' + flagFk);
  }
  public getVesselFlagList() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=Country');
  }
  public getVesselOperators() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCHDROPDOWN + '?searchflag=Operator');
  }
  public getVesselFuelTypes() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCHDROPDOWN + '?searchflag=FUELTYPE');
  }
  public getVesselOptions() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.VESSEL.FETCHDROPDOWN + '?searchflag=BOWTHRUSTER');
  }
  public getAssetStatus() {
    return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.BARGE.FETCHDROPDOWN + '?searchflag=ASSETSTATUS');
  }
}

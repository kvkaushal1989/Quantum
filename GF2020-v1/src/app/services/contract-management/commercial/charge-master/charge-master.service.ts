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
export class ChargeService {
  constructor(
    private apiService: ApiService,
    private appService:AppService,
    private http: HttpClient
    ) {

  }
  // public getChargeList(userParams?: any, page: number= 1): Observable<any> {
  //   let params = new HttpParams();
  //   // params = params.append('ChargeMasterPk', userParams.ChargeMasterPk);
  //   // params = params.append('SearchValue', userParams.SearchValue);

  //   return this.apiService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCH, params, page);
  // }
  public getChargeList(chargeId: any, chargeParams?: any, page: number=1): Observable<any> {
    let params = new HttpParams();
    params = params.append('ChargeMasterPk', chargeParams.chargemasterPk)
    params = params.append('Status', chargeParams.is_active);

    return this.appService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCH + chargeId, params, page);
  }

  public getChargeMasterTableConfig(userFK: any): Observable<any> {
    return this.apiService.get(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCHCONFIG + '?UserFK=' + userFK + '&FormFK=33');
  }


  public getChargeTypes() {
    return this.apiService.get(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCHDROPDOWN)
  }
  public getApplicableTypes() {
    return this.apiService.get(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCHDROPDOWN)
  }
  public addNewCharge(chargeDetails) {
    return this.apiService.post(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.SAVE, chargeDetails);
  }
  public deleteCharge(body: any) {
    return this.appService.delete(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.DELETE , body);
  }
  // ChargeMaster/DeactivateCharge
  public deActivateCharge(body: any) {
    return this.apiService.put(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.DEACTIVATE +
      body.chargemasterPk + '&Status=' + body.is_active +'&UserFK='+body.UserFK, {});
  }
  public getCurrencies() {
    return this.apiService.get(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCHCURRENCY)
  }
}

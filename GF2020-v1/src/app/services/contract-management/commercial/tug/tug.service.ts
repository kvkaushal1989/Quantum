import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {
  constructor(private apiService: ApiService) {
   
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
    params = params.append('SearchValue', chargeParams.SearchValue);

    return this.apiService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.CHARGEMMASTER.FETCH + chargeId, params, page);
  }
}

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class CostMasterService {

  constructor( private appService: AppService,
               private http: HttpClient) { }
  public getCostList(costgroupId: any, chargeParams?: any, page: number=1): Observable<any> {
    let params = new HttpParams();
    params = params.append('costgroup', costgroupId);
    params = params.append('is_active', chargeParams.is_active);
    return this.appService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.COSTMASTER.FETCH, params, page);
  }
  // tslint:disable-next-line: variable-name
  public getCostByPk(body: any) {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.COSTMASTER.FETCHBYPK
      + '?costmasterpk=' + body.costmasterpk + '&is_active=' + body.is_active);
  }
  public getDropdownList() {
    return this.appService.get(APIENDPOINT.CONTRACTMANAGEMENT.COSTMASTER.FETCHDROPDOWN);
  }
  public addNewCost(chargeDetails): Observable<any> {
    return this.appService.postMethod(APIENDPOINT.CONTRACTMANAGEMENT.COSTMASTER.SAVE, chargeDetails);
  }
  public deleteCost(body: any) {
    return this.appService.delete(APIENDPOINT.CONTRACTMANAGEMENT.COSTMASTER.DELETE ,body);
  }
  public deActivateCost(body: any) {
    return this.appService.post(APIENDPOINT.CONTRACTMANAGEMENT.COSTMASTER.DEACTIVATE, body);
  }
  public getCostTableConfig(UserFK: any): Observable<any> {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + UserFK + '&FormFK=55');
  }
}

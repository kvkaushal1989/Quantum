import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AssetListService {

  selectedVesselOperator: any = '';

  constructor(private apiService: AppService, private http: HttpClient) { }
  public getAssetList(userParams?: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('VesselMasterPk', userParams.VesselMasterPK);
    params = params.append('SearchValue', userParams.SearchValue);
    params = params.append('Active', userParams.Active);
    return this.apiService.getMethod(APIENDPOINT.VESSELOPERATIONS.ASSETLIST.FETCH, params, page);
  }

  // public saveAssetList(body: any): Observable<any> { 
  //   return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.ASSETLIST.SAVE, body);
  // }
  // public deleteAsset(assetPK) {
  //   return this.apiService.post(APIENDPOINT.VESSELOPERATIONS.ASSETLIST.DELETE, assetPK);
  // }
  // public deleteAsset(body: any): Observable<any> {
  //   return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.ASSETLIST.DELETE, body);
  // }
  // public deActivateAsset(body: any): Observable<any> {
  //   return this.apiService.postMethod(APIENDPOINT.VESSELOPERATIONS.ASSETLIST.DEACTIVATE , body);
  // }
  // public getAssetListColumnCOnfig() {
  //   return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=33');
  // }
  // public getAssetTypes(assetType) {
  //   return this.apiService.get(APIENDPOINT.VESSELOPERATIONS.ASSETLIST.FETCHDROPDOWN + '?searchflag=' + assetType);
  // }
}

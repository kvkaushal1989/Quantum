import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiverDraftMatrixService {

  constructor(private apiService: AppService) { }

  public fetchList(reqInput: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    // servicemaster_pk=1&portmaster_pk=1&FromDt=2020-03-01&ToDt=2020-09-01&Status=1&PageNumber=1
    // &PageSize=10&SkipRecords=0&TotalRecords=0&EndRecord=0

    params = params.append('servicemaster_pk', reqInput.servicemaster_pk);
    params = params.append('portmaster_pk', reqInput.portmaster_pk);
    params = params.append('FromDt', reqInput.FromDt);
    params = params.append('ToDt', reqInput.ToDt);
    params = params.append('Status', reqInput.Status);
    // params = params.append('SearchValue', reqInput.SearchValue);

    return this.apiService.getMethod(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.FETCH, params, page);
  }

  public getRiverDraftColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=48');
  }
  public fetchSettings() {
    return this.apiService.get(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.FETCHSETTINGS);
  }

  public getServiceDropdown() {
    return this.apiService.get(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.SERVICEDROPDOWN);
  }

  public getPortDropdown(req: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.PORTDROPDOWN, req);
  }

  public getBargeDropdown(req: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.FETCHDRAFT, req);
  }

  public getApplyToDropdown(req: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, req);
  }

  public saveSettings(body: any) {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.SAVESETTINGS, body);
  }

  public saveRoutes(body: any) {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.RIVER_DRAFT_MATRIX.SAVEROUTES, body);
  }

  public getDataList(url: string) {
    return this.apiService.get(url);
  }
}

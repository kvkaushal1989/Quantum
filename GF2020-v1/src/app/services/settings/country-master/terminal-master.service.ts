import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerminalMasterService {

  public locationDetails;

  constructor(private apiService: AppService) {
  this.locationDetails = new BehaviorSubject<any>(null);
  }

  public getAllTerminalListByLocation(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('PortmasterFk', userParams.PortmasterFk);
    params = params.append('TerminalmasterPk', userParams.TerminalmasterPk);
    params = params.append('TerminalId', userParams.TerminalId);
    params = params.append('IsActive', userParams.IsActive);
    return this.apiService.getMethod(APIENDPOINT.SETTINGS.TERMINAL.FETCH, params, page);
  }

  // public getTerminalsTableConfig(UserFK = 1) {
  //   // return this.http.get(`${environment.baseEndPoint}FormPref/FetchGridPref?UserFK=${UserFK}&FormFK=30`);
  // }
  public saveTerminalsSettings(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.TERMINAL.SAVE, body);
  }

  public getTerminalColConfig(userpk) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=30');
  }

  public getLocationPorts(locationPK: number): Observable<any> {
    return this.apiService.get(`${APIENDPOINT.SETTINGS.TERMINAL.DROPDOWN_LIST}?searchflag=lport&param3=${locationPK}`);
  }

  public getAllCountriesList(): Observable<any> {
    return this.apiService.get(APIENDPOINT.SETTINGS.COUNTRY.FETCH);
  }

  public getDropdownList(): Observable<any> {
    return this.apiService.get(APIENDPOINT.SETTINGS.TERMINAL.DROPDOWN_LIST);
  }

  public saveNewTerminal(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.TERMINAL.SAVE, body);
  }
  public deleteTerminal(userParams?: any): Observable<any> {
    return this.apiService.delete(APIENDPOINT.SETTINGS.TERMINAL.DELETE ,userParams);
  }
  public deactivateTerminal(userParams?: any): Observable<any> {
    return this.apiService.put(APIENDPOINT.SETTINGS.TERMINAL.DEACTIVATE, userParams);
  }

  confiDataList(colList: any, dataList: any): any {
    const formatList: any[] = [];
    const datalsit1: any = JSON.parse(JSON.stringify(dataList));
    return dataList;
  }
}

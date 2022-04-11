import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
@Injectable({
  providedIn: 'root'
})
export class TerminalConfigurationService {

  constructor(
              private http: HttpClient,
              private aapService: AppService
              ) { }


  public getTerminalConfigs() {
    return this.http.get(`${environment.baseEndPoint}TerminalConfig/TerminalConfigDropdown`);
  }

  public getPorts() {
    return this.http.get(`${environment.baseEndPoint}TerminalConfig/FetchPort`);
  }

  public getPortsList() {
    return this.http.get(`${environment.baseEndPoint}TerminalConfig/FetchPortList`);
  }

  public getTerminals(portPk) {
    return this.http.get(`${environment.baseEndPoint}Terminal/FetchTerminal?PortmasterFk=${portPk}&IsActive=1`);
  }

  public getTerminalConfigByPk(portPk, terminalPk) {
    return this.http.get(`${environment.baseEndPoint}TerminalConfig/FetchTerminalConfig?PortPK=${portPk}&TerminalPK=${terminalPk}`);
  }

  public saveTerminalConfigration(config) {
    return this.http.post(`${environment.baseEndPoint}TerminalConfig/SaveTerminalConfig`, config);
  }

  public saveTerminalConfigrationList(config?: any) {
    return this.http.post(`${environment.baseEndPoint}TerminalConfig/SaveTerConfigList`, config);
  }

  // public getOrganisationsList(userParams?: any, page: number=1): Observable<any> {
  //   let params = new HttpParams();
  //   params = params.append('Status', userParams.Status);
  //   params = params.append('SearchValue', userParams.SearchValue);
  //   return this.aapService.getMethod(APIENDPOINT.SETTINGS.ORGANISATION.FETCH, params, page);
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  public locationDetails;

  constructor(private http: HttpClient) {
    this.locationDetails = new BehaviorSubject<any>(null);
  }

  public getAllTerminalListByLocation(portPK) {
    // latercountrypk comes dynamically
    return this.http.get(`${environment.baseEndPoint}Terminal/FetchTerminal?portPk=${portPK}`);
  }


  // public getAllTerminalList() {
  //   //
  //   return this.http.get(`${environment.baseEndPoint}Terminal/FetchTerminal`);
  // }

  public getTerminalsTableConfig(UserFK = 1) {
    return this.http.get(`${environment.baseEndPoint}FormPref/FetchGridPref?UserFK=${UserFK}&FormFK=30`);
  }

  public saveTerminalsSettings(settings) {
    return this.http.post(`${environment.baseEndPoint}FormPref/SaveGridPref`, settings);
  }

  public getAllPortsName() {
    return this.http.get(`${environment.baseEndPoint}Port/FetchPort`);
  }

  public getAllCountriesList() {
    return this.http.get(`${environment.baseEndPoint}Country/FetchCountry`);
  }
  public getAllDepartmentList() {
    return this.http.get(`${environment.baseEndPoint}Department/FetchDepartmentMaster`);
  }
  public getAllDesignationList(dep) {
    return this.http.get(`${environment.baseEndPoint}Designation/FetchDesignationMaster?Departments=`+dep);
  }

  public saveNewTerminal(termianlDetails) {

    return this.http.post(`${environment.baseEndPoint}Terminal/SaveTerminal`, termianlDetails);
  }
  public deleteTerminal(terminalPK) {

    return this.http.delete(`${environment.baseEndPoint}Terminal/DeleteTerminal?TerminalPK=${terminalPK}`);
  }
  public deactivateTerminal(terminalPK) {

    return this.http.put(`${environment.baseEndPoint}Terminal/DeactivateTerminal?TerminalPK=${terminalPK}`,{});
  }
}

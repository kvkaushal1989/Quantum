import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationMasterService {
  public countryDetails;
  
  constructor(private http:  HttpClient) {
   this.countryDetails = new BehaviorSubject<any>(null)
   }

  
  public getAllLocationsListByCountry(countryPk) {
    // latercountrypk comes dynamically
    return this.http.get(`${environment.baseEndPoint}Location/FetchLocation?CountryPK=${countryPk}`);
  }
  
  public getLocationsColConfig() {
    return this.http.get(`${environment.baseEndPoint}FormPref/FetchGridPref?UserFK=1&FormFK=2`);
  }

  public saveLocation(locationDetails) {
    return this.http.post(`${environment.baseEndPoint}Location/SaveLocation`,locationDetails);
  }

  public deleteLocation(locationPk) {
    return this.http.post(`${environment.baseEndPoint}Location/DelLocation?LocationPk=${locationPk}`,{});
  }

  public deActivateLocation(locationPk) {
    return this.http.post(`${environment.baseEndPoint}Location/DeactivateLoc?LocationPk=${locationPk}`,{});
  }

  public getPortsList() {
    return this.http.get(`${environment.baseEndPoint}DropDown/FetchDropdown?seachflag=PortType`);
  }

}
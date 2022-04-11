import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: "root",
})
export class LocationMasterService {
  public countryDetails: any;

  constructor(private apiServices: AppService) {
    this.countryDetails = new BehaviorSubject<any>(null);
  }

  public getLocationsListByCountry(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    // params = params.append('CountryPk', userParams.CountryPk);
    params = params.append('CountryMasterFk', userParams.CountryMasterFk);
    params = params.append('Status', userParams.Status);
    params = params.append('SearchValue', userParams.SearchValue);

    return this.apiServices.getMethod(APIENDPOINT.SETTINGS.LOCATION.FETCH, params, page);

    // return this.apiServices.get(`${APIENDPOINT.SETTINGS.LOCATION.FETCH}?CountryMasterFk=${countryPk}`);
  }

  public getLocationsColConfig(userpk) {
    return this.apiServices.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=2');
  }

  public saveLocation(body: any): Observable<any> {
    return this.apiServices.postMethod(APIENDPOINT.SETTINGS.LOCATION.SAVE, body);
  }

  public getCountryList(body: any): Observable<any> {
    return this.apiServices.get(APIENDPOINT.SETTINGS.LOCATION.GETCOUNTRY, body);
  }

  public deleteLocation(body: any): Observable<any> {
    // return this.apiServices.postMethod(`${APIENDPOINT.SETTINGS.LOCATION.DELETE}?LocationmasterPk=${body.LocationmasterPk}`, {});
    return this.apiServices.postMethod(APIENDPOINT.SETTINGS.LOCATION.DELETE, body);
  }

  public deActivateLocation(body: any): Observable<any> {
    //return this.apiServices.postMethod(`${APIENDPOINT.SETTINGS.LOCATION.DEACTIVATE}?LocationmasterPk=${locationPk}`, {});
    return this.apiServices.postMethod(APIENDPOINT.SETTINGS.LOCATION.DEACTIVATE, body);
  }

  public getPortsList() {
    return this.apiServices.get(`${APIENDPOINT.SETTINGS.LOCATION.PORT_LIST}?searchflag=PortType`);
  }
}

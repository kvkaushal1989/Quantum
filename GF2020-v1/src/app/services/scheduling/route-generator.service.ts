import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGeneratorService {

  constructor(private apiService: AppService) { }
  public getRoutePortList() {
    return this.apiService.get(`${APIENDPOINT.SCHEDULING.ROUTE.GET_PORT}?searchflag=Port`);
  }

  public getRouteColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=34');
  }

  public fetchRoutes(dataFilter: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.ROUTE.FETCH_ROUTE, dataFilter);
  }
  public saveRoutes(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.ROUTE.SAVE_ROUTE, data);
  }
  public generateRoutes(dataFilter: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.ROUTE.GENERATE_ROUTE, dataFilter);
  }
  public deleteRoute(dataFilter: any) {
    return this.apiService.delete(APIENDPOINT.SCHEDULING.ROUTE.DELETE_ROUTE + '?RoutePK=' + dataFilter);
  }
  public deactivateRoute(dataFilter: any) {
    return this.apiService.put(APIENDPOINT.SCHEDULING.ROUTE.DEACTIVATE_ROUTE + '?Active=0&RoutePK=' + dataFilter, {});
  }
  public activateRoute(dataFilter: any) {
    return this.apiService.put(APIENDPOINT.SCHEDULING.ROUTE.DEACTIVATE_ROUTE + '?Active=1&RoutePK=' + dataFilter, {});
  }
}

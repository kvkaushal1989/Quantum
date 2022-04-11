import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class PlanVsActualService {

  constructor(private appService: AppService) { }

  public getColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=120');
  }
  public fetchServiceDropdown() {
    return this.appService.get(APIENDPOINT.SCHEDULING.PLAN_VS_ACTUAL.GET_SERVICE_DROPDOWN);
  }
  public fetchVoyageDropdown(dataFilter: any) {
    return this.appService.get(APIENDPOINT.SCHEDULING.PLAN_VS_ACTUAL.GET_VOYAGE_DROPDOWN, dataFilter);
  }
  public fetchPortCallDropdown(dataFilter: any) {
    return this.appService.get(APIENDPOINT.SCHEDULING.PLAN_VS_ACTUAL.GET_PORTCALL_DROPDOWN, dataFilter);
  }
  public fetchTerminalCallDropdown(dataFilter: any) {
    return this.appService.get(APIENDPOINT.SCHEDULING.PLAN_VS_ACTUAL.GET_TERMINALCALL_DROPDOWN, dataFilter);
  }
  public fetchDataList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.SCHEDULING.PLAN_VS_ACTUAL.FETCH, dataFilter);
  }
}

import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodicResultService {
  constructor(public appService: AppService) { }

  getYearDropdown() {
    return this.appService.get(APIENDPOINT.RESULT.FETCHYEARDROPDOWN);
  }
  getQuarterDropdown() {
    return this.appService.get(APIENDPOINT.RESULT.FETCHQUARTERDROPDOWN);
  }
  getSerivceDropdown() {
    return this.appService.get(APIENDPOINT.RESULT.FETCHSERVICEDROPDOWN);
  }
  getMonthDropdown(datafilter?: any) {
    return this.appService.get(APIENDPOINT.RESULT.FETCHMONTHDROPDOWN, datafilter);
  }
  getVoyageDropdown(datafilter?: any) {
    return this.appService.get(APIENDPOINT.RESULT.FETCHVOYAGEDROPDOWN, datafilter);
  }
  getPeriodicResultList(datafilter?: any) {
    return this.appService.get(APIENDPOINT.RESULT.FETCHPERIODICRESULTLIST, datafilter);
  }
  getPeriodicSummay(datafilter?: any) {
    return this.appService.get(APIENDPOINT.RESULT.FETCHPERIODICRESULTSUMMARY, datafilter);
  }
  getVoyageResultList(datafilter?: any) {
    return this.appService.get(APIENDPOINT.RESULT.FETCHVOYAGERESULTLIST, datafilter);
  }
  public getIncludePopupList(params ?: any) {
    return this.appService.get(APIENDPOINT.RESULT.GETINCLUDEPOPUP, params);
  }
  public getColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=140');
  }

}

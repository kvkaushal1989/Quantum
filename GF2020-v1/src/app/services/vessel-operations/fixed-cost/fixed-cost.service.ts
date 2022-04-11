import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { SharedService } from 'src/app/shared/services/shared.service';
@Injectable({
  providedIn: 'root'
})
export class FixedCostService {

  constructor(private appService: AppService,
              private http: HttpClient,
              private sharedService: SharedService,
              private mockJsonService: MockJsonService) { }
  public getFixedCostColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=69');
  }
  public getVoyageColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=71');
  }
  public printServiceSummaryPDF(body: any) {
    return this.appService.print(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.PRINTSERVICESUMMARY, {}, body);
  }
  public printVoyageSummaryPDF(body: any) {
    return this.appService.print(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.PRINTVOYAGESUMMARY, {}, body);
  }
  public printLegSummaryPDF(body: any) {
    return this.appService.print(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.PRINTLEGSUMMARY, {}, body);
  }
  public fetchDropodown() {
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHSERVICEDROPDOWN);
  }
  public fetchVoyageDropdown(service_pk: any) {
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHVOYAGEDROPDOWN + '?servicemaster_pk=' + service_pk);
  }
  public fetchLegDropdown(voyage_pk: any) {
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHLEGDROPDOWN + '?voyagepks=' + voyage_pk);
  }
  public getFixedCostList(userParams: any) {
    const body: any = {
      servicedefition_pk: userParams.servicedefition_pk,
      voyage: userParams.voyage,
      leg: userParams.leg,
      tab_id: userParams.tab_id,
      start_date: this.sharedService.formatSQLDate(userParams.start_date),
      end_date: this.sharedService.formatSQLDate(userParams.end_date)
    }
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCH, body);
  }
  public getFilteredCostList(userParams: any) {
    const body: any = {
      barge: userParams.barge_pk,
      tug: userParams.tug_pk,
      port: userParams.port_pk,
      tab_id: userParams.tab_id
    }
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHFILTEREDLIST, body);
  }
 public fetchServiceSummary(dataFilter: any) {
   return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHSERVICESUMMARY, dataFilter);
 }
 public fetchVoyageSummary(dataFilter: any) {
  return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHVOYAGESUMMARY, dataFilter);
}
public fetchFilterDropodown() {
  return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHFILTERDROPDOWN);
}
}

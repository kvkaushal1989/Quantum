import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import {Setting, Tug_Intercjange_List } from '../../../mock/vessel-operations/tug-interchange.json';

@Injectable({
  providedIn: 'root'
})
export class BunkerReportService {

constructor(private apiService: AppService) { }

public getColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=76');
}
public getServiceList() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.SERVICELIST);
}
public getVoyageList(params ?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.VOYAGELIST, params);
}
public printPDF(body: any) {
  return this.apiService.print(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.PRINT, {}, body);
}
public getTugList(params ?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.TUGLIST, params);
}

public getYearsList() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.YEARLIST);
}

public getPortList(params ?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.PORTLIST, params);
}

public getBondList(params ?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.BONDLIST, params);
}
public getColIncludeListList() {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.INCLUDECOLLIST);
}

public getBunkerReport(params?: any) {
  return this.apiService.get(APIENDPOINT.TERMINAL_OPERATIONS.BUNKERREPORT.FETCHBUNKER, params);
}

}

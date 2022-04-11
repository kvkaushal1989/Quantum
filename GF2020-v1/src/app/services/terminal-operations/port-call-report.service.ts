import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';


@Injectable({
  providedIn: 'root'
})
export class PortCallReportService {

constructor(public appService: AppService) { }

// Service dropdown method
getServiceList() {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.SERVICELIST);
}

// voyage dropdown method
getVoyageList(params ?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.VOYAGELIST, params);
}

// portcallList dropdown mehtod
getportcallList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.PORTCALLLIST, dataFilter);
}

// TerminalcallList dropdown mehtod
getterminalList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.TERMINALLIST, dataFilter);
}

// TerminalcallList dropdown mehtod
getportDataList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.PORTDATALIST, dataFilter);
}

// get table header mehtod
public getColumnConfig(userFK: any) {
  return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=122');
}

getIncludePopupList(params ?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.GETPORTINCLUDEPOPUP, params);
}
public printPDFSummary(body: any) {
  return this.appService.print(APIENDPOINT.TERMINAL_OPERATIONS.PORTCALLREPORT.PRINTUMMARY, {}, body);
}
}

import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class VoyageLedgerService {

constructor(
  private appService: AppService,
) { }

public getColumnConfig(userFK: any) {
  return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=113');
}

public getVoyageList(input?: any) {
  return this.appService.get(APIENDPOINT.MIS.VOYAGE, input);
}

public getServiceList(input?: any) {
  return this.appService.get(APIENDPOINT.MIS.SERVICE, input);
}
public getVoyageServiceList() {
  return this.appService.get(APIENDPOINT.MIS.VOYAGESERVICE);
}

public getVoyageLedgerList(input?: any) {
  return this.appService.get(APIENDPOINT.MIS.VOYAGELedger, input);
}

public getPortList(input?: any) {
  return this.appService.get(APIENDPOINT.MIS.PORT, input);
}

public getChargesList(input?: any) {
  return this.appService.get(APIENDPOINT.MIS.CHARGES, input);
}

public getSettings(input?: any) {
  return this.appService.get(APIENDPOINT.MIS.GETSETTING, input);
}
public saveSettings(input?: any) {
  return this.appService.postMethod(APIENDPOINT.MIS.SAVESETTING, input);
}

public getVoyageLadgerReport(input: any) {
  return this.appService.get(APIENDPOINT.MIS.VIEWREPORT, input);
}

public getReportSummary(input: any) {
  return this.appService.get(APIENDPOINT.MIS.REPORTSUMMARY, input);
}

public getReportDetails(input: any) {
  return this.appService.get(APIENDPOINT.MIS.REPORTDETAILS, input);
}
public printPDF(body: any) {
  return this.appService.print(APIENDPOINT.MIS.PRINT, {}, body);
}
public printPDFSummary(body: any) {
  return this.appService.print(APIENDPOINT.MIS.PRINTLEGDER, {}, body);
}

}

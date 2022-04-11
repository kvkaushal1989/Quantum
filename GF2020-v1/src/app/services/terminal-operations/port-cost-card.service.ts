import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class PortCostCardService {

constructor(public appService: AppService) { }

// Port dropdown method
getPortList() {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.PORTLIST);
}
getBasisList() {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.BASISLIST);
}

// get table header mehtod
public getColumnConfig(userFK: any) {
  return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=123');
}

// Terminal dropdown method
getTerminalList(params ?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.TERMINALLIST, params);
}

// TerminalcallList dropdown mehtod
getportDataList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.PORTREPORTLIST, dataFilter);
}

// get table data list
getTableDatalist(dataFilter: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.PORTTABLELIST, dataFilter);
}
// save table modified data
savePortData(dataFilter?: any) {
  return this.appService.post(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.SAVEPORTDATA, dataFilter);
}

public printPDF(body: any) {
  return this.appService.print(APIENDPOINT.TERMINAL_OPERATIONS.PORTCOSTCARD.PRINT, {}, body);
}

}

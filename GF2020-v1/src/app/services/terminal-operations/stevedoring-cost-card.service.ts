import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class StevedoringCostCardService {

constructor(public appService: AppService) { }

// Port dropdown method
getPortdropdownList() {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.STEVEDORINGCOSTCARD.PORTDROPDOWNLIST);
}

// Terminal dropdown method
getTerminalDropdownList(params ?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.STEVEDORINGCOSTCARD.TERMINALDROPDOWNLIST, params);
}

// grid datalist dropdown mehtod
getportDataList(dataFilter?: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.STEVEDORINGCOSTCARD.PORTREPORTLIST, dataFilter);
}

// get table data list
getTableDatalist(dataFilter: any) {
  return this.appService.get(APIENDPOINT.TERMINAL_OPERATIONS.STEVEDORINGCOSTCARD.PORTTABLELIST, dataFilter);
}
// get table header mehtod
public getColumnConfig(userFK: any) {
  return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=129');
}

// save table modified data
savePortData(dataFilter?: any) {
  return this.appService.post(APIENDPOINT.TERMINAL_OPERATIONS.STEVEDORINGCOSTCARD.SAVEPORTDATA, dataFilter);
}
}

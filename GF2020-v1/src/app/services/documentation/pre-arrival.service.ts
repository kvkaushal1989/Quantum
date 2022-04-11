import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreArrivalService {

  constructor(
    private apiService: AppService,
    private apiService1: MockJsonService
  ) { }

  //#region Grid
  fetchGridDataList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHPREARRIVALLIST, reqInput);
  }
  getPrearrivalColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=108');
  }
  //#endregion
  printPDF(body: any) {
    return this.apiService.print(APIENDPOINT.DOCUMENTATION.PREARRIVAL.PRINT, body, {});
  }
  //#region Fetch Arrival Booking List
  fetchArrivalBookingList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHARRIVALBOOKINGLIST, reqInput);
  }
  //#endregion

  //#region Drop Downs
  fetchCommonDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  fetchServiceDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHDDSERVICE, reqInput);
  }

  fetchPortDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHDDPORT, reqInput);
  }

  fetchTerminalDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHDDTERMINAL, reqInput);
  }

  fetchVoyageDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHDDVOYAGE, reqInput);
  }

  fetchCustomerDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHDDCUSTOMER, reqInput);
  }
  //#endregion

  //#region Settings
  saveSettings(reqInput: any) {
    return this.apiService.post(APIENDPOINT.DOCUMENTATION.PREARRIVAL.SAVEPREARRIVALSETTING, reqInput);
  }

  fetchSettings(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.PREARRIVAL.FETCHPREARRIVALSETTING, reqInput);
  }
  //#endregion

  //#region Save Send Data
  saveSenddata(reqInput: any) {
    return this.apiService.post(APIENDPOINT.DOCUMENTATION.PREARRIVAL.SAVESENDDATA, reqInput);
  }
  //#endregion

  //#region preview
  filePath(reqInput: any): string {
    return environment.reportUrl.replace('/api/', '/MergePDF/') + reqInput.filename;
  }
  //#endregion
}

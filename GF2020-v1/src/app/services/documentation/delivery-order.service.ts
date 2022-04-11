import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryOrderService {

  constructor(
    private apiService: AppService,
    private apiService1: MockJsonService
  ) { }

  //#region Grid
  fetchGridDataList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHPREARRIVALLIST, reqInput);
  }
  getDeliveryColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=11');
  }
  //#endregion
  printPDF(body: any) {
    return this.apiService.print(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.PRINT, body, {});
  }
  //#region Fetch Arrival Booking List
  fetchArrivalBookingList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHARRIVALBOOKINGLIST, reqInput);
  }

  fetchCargoSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHCARGOSUMMARY, reqInput);
  }
  //#endregion

  //#region Drop Downs
  fetchCommonDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  fetchServiceDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHDDSERVICE, reqInput);
  }

  fetchPortDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHDDPORT, reqInput);
  }

  fetchTerminalDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHDDTERMINAL, reqInput);
  }

  fetchVoyageDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHDDVOYAGE, reqInput);
  }

  fetchCustomerDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHDDCUSTOMER, reqInput);
  }
  //#endregion

  //#region Settings
  saveSettings(reqInput: any) {
    return this.apiService.post(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.SAVEPREARRIVALSETTING, reqInput);
  }

  fetchSettings(reqInput: any) {
    return this.apiService.get(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.FETCHPREARRIVALSETTING, reqInput);
  }
  //#endregion

  //#region Save Send Data
  saveSenddata(reqInput: any) {
    return this.apiService.post(APIENDPOINT.DOCUMENTATION.DELIVERYORDER.SAVESENDDATA, reqInput);
  }
  //#endregion

  //#region preview
  filePath(reqInput: any): string {
    return environment.reportUrl.replace('/api/', '/MergePDF/') + reqInput.filename;
  }

  // downloadPDF(url): any {
  //   const options = { responseType: ResponseContentType.Blob  };
  //   return this.http.get(url, options).map(
  //   (res) => {
  //       return new Blob([res.blob()], { type: 'application/pdf' });
  //   });
  // }
  //#endregion
}

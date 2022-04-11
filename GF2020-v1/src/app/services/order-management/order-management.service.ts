import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {
  constructor(
    private apiService: AppService,
    private mockJsonService: MockJsonService
  ) { }

  // fetchList(reqInput: any) {
  //   let params = new HttpParams();

  //   params = params.append('Status', reqInput.Status || 1);
  //   params = params.append('SearchValue', reqInput.SearchValue);

  //   return this.apiService.getMethod(APIENDPOINT.SCHEDULING.VCS.FETCHVOYAGECONTROLSCHEDULELIST, params, reqInput.PageNumber);
  // }

  fetchVesselBooking(reqInput: any) {
    let params = new HttpParams();
    params = params.append('LoggedInUser', reqInput.LoggedInUser);
    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);
    params = params.append('CSHPK', reqInput.CSHPK);
    if(reqInput.ServiceDefintionFK){
      params = params.append('ServiceDefintionFK', reqInput.ServiceDefintionFK);
    }
    if(reqInput.CSHFKs){
      params = params.append('CSHFKs', reqInput.CSHFKs);
    }
    if(reqInput.POLTerFKs){
      params = params.append('POLTerFKs', reqInput.POLTerFKs);
    }
    if(reqInput.PODTerFKs){
      params = params.append('PODTerFKs', reqInput.PODTerFKs);
    }
    if(reqInput.CustomerFKs){
      params = params.append('CustomerFKs', reqInput.CustomerFKs);
    }
    if(reqInput.BookingPK){
      params = params.append('BookingPK', reqInput.BookingPK);
    }
    
    return this.apiService.getMethod(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_OM_VESSEL_DTLS, params, reqInput.PageNumber);
  }

  fetchPortBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_OM_PORT_DTLS, reqInput);
  }

  fetchVslVoyList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_VSL_VOY_LIST, reqInput);
    // return this.mockJsonService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_VSL_VOY_LIST, reqInput);
  }

  fetchBookingList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_BOOKINGLIST, reqInput);
    // return this.mockJsonService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_BOOKINGLIST, reqInput);
  }

  fetchBillingList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_BLLIST, reqInput);
    // return this.mockJsonService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_BLLIST, reqInput);
  }

  getSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.GETSUMMARY, reqInput);
  }

  getIncomeSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.GETINCOMESUMMARY, reqInput);
  }

  getVSLIncomeSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.GETVSLINCOMESUMMARY, reqInput);
  }

  getPortIncomeSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.GETPORTINCOMESUMMARY, reqInput);
  }

  getTerIncomeSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.GETTERINCOMESUMMARY, reqInput);
  }

  uploadFile(reqInput: any) {
    // return this.mockJsonService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_VSL_VOY_LIST, reqInput);
    return this.mockJsonService.post(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCH_BLLIST, reqInput);
  }

  fetchGridPreference(userFK: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.ESCALATION.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=66' + '&ControlType=Grid');
  }
  getServiceDropdown(reqInput?: any){
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCHSERVICEDROPDOWN, reqInput);
  }
  getVoyageDropdown(reqInput?: any){
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCHVOYAGEDROPDOWN, reqInput);
  }
  getpolDropdown(reqInput?: any){
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCHPOLDROPDOWN, reqInput);
  }
  getpodDropdown(reqInput?: any){
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCHPODDROPDOWN, reqInput);
  }
  getCustomerDropdown(reqInput?: any){
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCHCUTOMERDROPDOWN, reqInput);
  }
  getbookingNODropdown(reqInput?: any){
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_LIST.FETCHBOOKINGNODRODOWN, reqInput);
  }
}
